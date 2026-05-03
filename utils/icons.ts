import { 
  TbBrandNodejs, TbBrandTypescript, TbBrandJavascript, TbBrandTailwind, 
  TbBrandReact, TbDatabase, TbBrandNextjs, TbApi, TbBrandFramer, 
  TbBrandMysql, TbBrandVercel, TbPlugConnected, TbBrandAws, 
  TbBrandMongodb, TbPalette, TbCode, TbShieldLock, TbGitBranch,
  TbComponents, TbBrandSupabase, TbBrandOpenai, TbMailAi, TbClockCode
} from 'react-icons/tb';

export const getSkillColor = (skill: string): string => {
  const s = skill.toLowerCase();
  if (s.includes('react')) return 'text-[#61DAFB]';
  if (s.includes('next')) return 'text-white';
  if (s.includes('typescript')) return 'text-[#3178C6]';
  if (s.includes('javascript')) return 'text-[#F7DF1E]';
  if (s.includes('tailwind')) return 'text-[#06B6D4]';
  if (s.includes('node')) return 'text-[#339933]';
  if (s.includes('mongo')) return 'text-[#47A248]';
  if (s.includes('express')) return 'text-slate-300';
  if (s.includes('motion') || s.includes('framer')) return 'text-purple-400';
  if (s.includes('aws')) return 'text-[#FF9900]';
  if (s.includes('supabase')) return 'text-[#3ECF8E]';
  if (s.includes('openai')) return 'text-[#10A37F]';
  if (s.includes('resend')) return 'text-[#7C3AED]';
  if (s.includes('cron')) return 'text-[#F59E0B]';
  if (s.includes('vercel')) return 'text-slate-900 dark:text-white';
  if (s.includes('sql')) return 'text-[#4479A1]';
  if (s.includes('postgres')) return 'text-[#4169E1]';
  if (s.includes('redux')) return 'text-[#764ABC]';
  if (s.includes('jwt')) return 'text-pink-400';
  if (s.includes('rbac') || s.includes('auth')) return 'text-emerald-400';
  if (s.includes('ci/cd') || s.includes('pipeline')) return 'text-orange-400';
  if (s.includes('component')) return 'text-cyan-400';
  if (s.includes('api')) return 'text-blue-400';
  return 'text-slate-300';
};

export const getSkillIcon = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes('node')) return TbBrandNodejs;
  if (s.includes('typescript')) return TbBrandTypescript;
  if (s.includes('javascript')) return TbBrandJavascript;
  if (s.includes('tailwind')) return TbBrandTailwind;
  if (s.includes('react')) return TbBrandReact;
  if (s.includes('next')) return TbBrandNextjs;
  if (s.includes('express') || s.includes('api')) return TbApi;
  if (s.includes('motion')) return TbBrandFramer;
  if (s.includes('mysql')) return TbBrandMysql;
  if (s.includes('postgres') || s.includes('sql') || s.includes('redis') || s.includes('database')) return TbDatabase;
  if (s.includes('supabase')) return TbBrandSupabase;
  if (s.includes('openai')) return TbBrandOpenai;
  if (s.includes('resend')) return TbMailAi;
  if (s.includes('cron')) return TbClockCode;
  if (s.includes('vercel')) return TbBrandVercel;
  if (s.includes('websocket')) return TbPlugConnected;
  if (s.includes('aws')) return TbBrandAws;
  if (s.includes('mongo')) return TbBrandMongodb;
  if (s.includes('rbac') || s.includes('auth')) return TbShieldLock;
  if (s.includes('ci/cd') || s.includes('pipeline')) return TbGitBranch;
  if (s.includes('component')) return TbComponents;
  if (s.includes('design')) return TbPalette;
  return TbCode;
};
