import { Mail } from 'lucide-react';
import { BiLogoLinkedin, BiLogoGithub } from 'react-icons/bi';
import { personal } from '@/data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="max-w-5xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-6 pb-4">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6">
        <div className="flex flex-col items-start gap-y-4 md:w-1/3">
          <div>
            <h2 className="text-2xl font-medium mb-1 tracking-tight">
              <span className="font-dancing-script font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-emerald-500">
                {personal.name}
              </span>
            </h2>
            <div className="flex flex-col gap-y-1 mt-3">
              <p className="text-xs font-medium text-slate-800 dark:text-slate-200">{personal.title}</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">{personal.location}</p>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">Pages</h3>
            <div className="flex flex-col gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#">Home</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#experience">Experience</a>
              <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#projects">Projects</a>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[11px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">Resources</h3>
            <div className="flex flex-col gap-2 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <a target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href={personal.social.github}>Github</a>
              <a target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href={personal.social.linkedin}>LinkedIn</a>
            </div>
          </div>
          <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
            <h3 className="text-[11px] font-bold text-slate-900 dark:text-slate-100 uppercase tracking-widest">Connect</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium max-w-xs text-left leading-relaxed">
              Wanna chat? Contact anywhere below.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <a target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors" href={personal.social.github}>
                <BiLogoGithub className="w-4 h-4" />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors" href={personal.social.linkedin}>
                <BiLogoLinkedin className="w-4 h-4" />
              </a>
              <a target="_blank" rel="noopener noreferrer" aria-label="Mail" className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors" href={`mailto:${personal.email}`}>
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
        <span>© {year} {personal.name}. All rights reserved.</span>
        <p>Built with ❤️ by <a target="_blank" rel="noopener noreferrer" className="text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href={personal.social.linkedin}>{personal.shortName}</a></p>
      </div>
    </footer>
  );
}
