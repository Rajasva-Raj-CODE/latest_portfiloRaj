"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, BookOpen } from 'lucide-react';
import { BiLogoGithub } from 'react-icons/bi';
import { getSkillIcon, getSkillColor } from '../utils/icons';
import Image from 'next/image';
import { projects, type Project } from '@/data';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideDir, setSlideDir] = useState(1);

  useEffect(() => {
    if (!activeProject) return;
    setSlideIndex(0);
    const interval = setInterval(() => {
      setSlideDir(1);
      setSlideIndex(prev => (prev + 1) % activeProject.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeProject]);

  return (
    <section id="projects" className="space-y-4 py-8">
      <div className="mb-6 sm:pl-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50"
        >
          My <span className="font-dancing-script font-bold text-emerald-500">Projects</span> Featured.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-1.5 text-slate-500 dark:text-slate-400 font-mono text-[10px] uppercase tracking-widest"
        >
          Some of my latest works
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5] shadow-md hover:shadow-2xl hover:shadow-black/30 dark:hover:shadow-black/60 transition-shadow duration-500"
          >
            {/* Full-bleed image */}
            <Image
              alt={project.title}
              src={project.image}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Permanent dark gradient at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Project number — decorative top-left */}
            <span className="absolute top-4 left-4 font-mono text-[11px] font-bold text-white/40 tracking-widest">
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Top-right action icons */}
            <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.githubLink && (
                <a target="_blank" href={project.githubLink} onClick={e => e.stopPropagation()}
                  className="p-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors">
                  <BiLogoGithub className="w-3.5 h-3.5" />
                </a>
              )}
              <a target="_blank" href={project.link} onClick={e => e.stopPropagation()}
                className="p-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Slide-up content panel */}
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-[calc(100%-88px)] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">

              {/* Always visible: title */}
              <h3 className="text-white font-semibold text-base leading-snug mb-1 line-clamp-1">
                {project.title}
              </h3>

              {/* Tags row — always visible */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.slice(0, 3).map((tag, i) => {
                  const Icon = getSkillIcon(tag);
                  const color = getSkillColor(tag);
                  return (
                    <span key={i} className="flex items-center gap-1 px-2 py-0.5 text-[9px] font-mono rounded-full bg-white/10 backdrop-blur-sm text-white/80 border border-white/20">
                      <Icon className={`w-3 h-3 shrink-0 ${color}`} strokeWidth={1.5} />
                      {tag}
                    </span>
                  );
                })}
              </div>

              {/* Hidden until hover: description + case study */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 space-y-3">
                <p className="text-white/70 text-[11px] leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-slate-900 text-[11px] font-semibold font-mono hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3 h-3" />
                  Case Study
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Dialog */}
      <AnimatePresence>
        {activeProject && (
          <>
            {/* Full-screen backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xl z-50"
            />

            {/* Full-screen dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="fixed inset-3 md:inset-6 z-50 flex flex-col md:flex-row bg-white dark:bg-slate-950 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              {/* LEFT — Slideshow panel */}
              <div className="relative md:w-[42%] h-56 md:h-auto shrink-0 bg-slate-900 overflow-hidden">

                {/* Sliding images */}
                <AnimatePresence initial={false} custom={slideDir}>
                  <motion.div
                    key={slideIndex}
                    custom={slideDir}
                    variants={{
                      enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
                      center: { x: 0, opacity: 1 },
                      exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      alt={`${activeProject.title} screenshot ${slideIndex + 1}`}
                      src={activeProject.images[slideIndex]}
                      fill
                      unoptimized
                      className="object-cover opacity-80"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none z-10" />

                {/* Dot indicators */}
                <div className="absolute top-4 left-0 right-0 flex justify-center gap-1.5 z-20">
                  {activeProject.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setSlideDir(i > slideIndex ? 1 : -1); setSlideIndex(i); }}
                      className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${i === slideIndex ? 'bg-white w-5' : 'bg-white/40 w-1.5'}`}
                    />
                  ))}
                </div>

                {/* Tech Stack overlaid at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-white/50 mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.caseStudy.techStack.map((tech, i) => {
                      const Icon = getSkillIcon(tech);
                      const color = getSkillColor(tech);
                      return (
                        <span key={i} className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded-full bg-white/10 border border-white/20 text-white/90 backdrop-blur-sm">
                          <Icon className={`w-3 h-3 shrink-0 ${color}`} strokeWidth={1.2} />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* RIGHT — Content panel */}
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 shrink-0">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-blue-500 mb-1">Case Study</p>
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">{activeProject.title}</h2>
                  </div>
                  <button
                    onClick={() => setActiveProject(null)}
                    className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors shrink-0 cursor-pointer"
                    aria-label="Close dialog"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Body — no scroll, distributed with flex */}
                <div className="flex-1 flex flex-col justify-between px-6 pb-6 gap-4 min-h-0">

                  {/* Overview */}
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1.5">Overview</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {activeProject.caseStudy.overview}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Key Features</p>
                    <ul className="space-y-1.5">
                      {activeProject.caseStudy.keyFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="shrink-0 w-4 h-4 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-[8px] font-bold font-mono text-blue-600 dark:text-blue-400 mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Challenges */}
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">Technical Challenges</p>
                    <ul className="space-y-1.5">
                      {activeProject.caseStudy.technicalChallenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5" />
                          <span className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer buttons */}
                  <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                    {activeProject.caseStudy.liveDemo && (
                      <a
                        href={activeProject.caseStudy.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    {activeProject.caseStudy.sourceCode && (
                      <a
                        href={activeProject.caseStudy.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                      >
                        <BiLogoGithub className="w-3.5 h-3.5" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
