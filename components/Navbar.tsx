"use client";

import { motion, AnimatePresence } from 'motion/react';
import { BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi';
import { Moon, Sun, Download, X, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { personal, navTitles } from '@/data';

export default function Navbar() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return true;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % navTitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Lock body scroll when resume dialog is open
  useEffect(() => {
    document.body.style.overflow = isResumeOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isResumeOpen]);

  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full md:max-w-5xl px-4 sm:px-4 rounded-2xl py-3 mx-auto sticky top-2 flex items-center justify-between z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md sm:mt-8"
      >
        <div className="flex items-center gap-2.5">
          <Image
            alt="Profile"
            priority
            className="w-10 h-10 aspect-square rounded-full cursor-pointer hover:grayscale transition-all object-cover"
            src={personal.profileImage}
            width={40}
            height={40}
            unoptimized
          />
          <div className="flex flex-col">
            <h5 className="leading-tight font-medium font-dancing-script text-lg">{personal.shortName} <span className="text-sm">👋🏼</span></h5>
            <div className="text-slate-500 dark:text-slate-400 text-[10px] font-medium h-3.5 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="block"
                >
                  {navTitles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="items-center gap-2 sm:gap-6 flex">
          <nav className="items-center gap-4 sm:flex hidden">
            {['Experience', 'Projects'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="capitalize text-[11px] font-semibold tracking-wide text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a target="_blank" aria-label="LinkedIn Profile" className="cursor-pointer p-1.5 rounded-md hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors" href={personal.social.linkedin}>
              <BiLogoLinkedin className="w-4 h-4" />
            </a>
            <a target="_blank" aria-label="GitHub Profile" className="cursor-pointer p-1.5 rounded-md hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors" href={personal.social.github}>
              <BiLogoGithub className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setIsResumeOpen(true)}
              aria-label="View Resume"
              className="group relative hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full text-[11px] font-mono font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-md cursor-pointer"
            >
              <span>Resume</span>
              <FileText className="w-3 h-3 transition-transform duration-300 group-hover:scale-110" />
            </button>
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle Dark Mode"
              className="flex items-center justify-center cursor-pointer p-1.5 rounded-md hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors"
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Resume Dialog */}
      <AnimatePresence>
        {isResumeOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-xl z-[60]"
            />

            {/* Dialog — A4 document viewer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[61] flex flex-col w-[min(680px,calc(100vw-2rem))] h-[90vh] bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-700 shrink-0 bg-slate-50 dark:bg-[#2a2a2a]">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-500 shrink-0" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 truncate">
                    {personal.name} — Resume
                  </span>
                  <span className="hidden sm:inline text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    A4
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={personal.resumePdf}
                    download="Rajasva_Raj_Shrivastav.pdf"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold transition-colors shadow-sm"
                  >
                    <Download className="w-3 h-3" />
                    Download
                  </a>
                  <button
                    onClick={() => setIsResumeOpen(false)}
                    className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* PDF viewer area — dark background like a real PDF reader */}
              <div className="flex-1 overflow-auto bg-[#404040] flex justify-center py-6 px-4">
                {/* A4 page — 210:297 ratio */}
                <div
                  className="w-full shadow-2xl shadow-black/60 rounded-sm overflow-hidden bg-white"
                  style={{ maxWidth: '595px', aspectRatio: '210 / 297' }}
                >
                  <iframe
                    src={`${personal.resumePdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    className="w-full h-full border-0"
                    title="Rajasva Raj Resume"
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
