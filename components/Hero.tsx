"use client";

import { motion } from "motion/react";
import { heroBio, techStack } from "@/data";

const KEYWORDS = [
  "Full Stack Developer",
  "2+ years of experience",
  "React.js",
  "Next.js",
  "JavaScript",
  "Node.js",
  "SQL",
  "NoSQL",
  "PostgreSQL",
];

function HeroBio({ text }: { text: string }) {
  const escapeRegExp = (str: string) =>
    str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`(${KEYWORDS.map(escapeRegExp).join("|")})`, "g");
  const parts = text.split(pattern);

  let keywordIndex = 0;
  return (
    <p className="text-sm sm:text-base  text-slate-600 dark:text-slate-400 max-w-2xl">
      {parts.map((part, i) => {
        const isKeyword = KEYWORDS.includes(part);
        if (isKeyword) {
          const idx = keywordIndex;
          keywordIndex++;
          return (
            <span
              key={i}
              className=" kw-underline"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </p>
  );
}

export default function Hero() {
  return (
    <div className="space-y-4 pt-6 pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-medium leading-tight tracking-tight text-slate-900 dark:text-slate-50">
          Building{" "}
          <span className="font-dancing-script font-bold text-blue-600 dark:text-blue-400">
            clean
          </span>{" "}
          interfaces <br className="hidden md:block" />
          <span className="font-dancing-script font-bold text-emerald-600 dark:text-emerald-400">
            Scalable
          </span>{" "}
          full-stack systems <br className="hidden md:block" />
          and web apps that{" "}
          <span className="font-dancing-script font-bold text-amber-600 dark:text-amber-400">
            work
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <HeroBio text={heroBio} />
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
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 shadow-sm hover:scale-105 transition-transform cursor-default"
              >
                <tech.icon
                  className={`w-3.5 h-3.5 ${tech.color}`}
                  strokeWidth={1.2}
                />
                <span className="font-medium text-[11px] font-mono">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
