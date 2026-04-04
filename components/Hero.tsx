"use client";

import { motion } from 'motion/react';
import { heroBio, techStack } from '@/data';

export default function Hero() {
  return (
    <div className="space-y-4 pt-6 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50">
          <span className="font-dancing-script font-bold text-blue-600 dark:text-blue-400">Pixel-perfect</span> frontend <br className="hidden md:block" />
          <span className="font-dancing-script font-bold text-emerald-600 dark:text-emerald-400">Scalable</span> full-stack systems <br className="hidden md:block" />
          and Web Solutions that <span className="font-dancing-script font-bold text-amber-600 dark:text-amber-400">Perform</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl">
          {heroBio}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full overflow-hidden relative pt-4"
      >
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent dark:from-slate-950 z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent dark:from-slate-950 z-10 pointer-events-none"></div>

        <style>{`
          @keyframes slide-marquee {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); }
          }
          .animate-slide-marquee {
            animation: slide-marquee 20s linear infinite;
          }
          .group:hover .animate-slide-marquee {
            animation-play-state: paused !important;
          }
        `}</style>
        <div className="flex overflow-hidden group">
          <div className="flex gap-3 items-center py-2 whitespace-nowrap animate-slide-marquee">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 shadow-sm hover:scale-105 transition-transform cursor-default">
                <tech.icon className={`w-3.5 h-3.5 ${tech.color}`} strokeWidth={1.2} />
                <span className="font-medium text-[11px] font-mono">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
