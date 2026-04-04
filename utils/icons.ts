import { 
  TbBrandNodejs, TbBrandTypescript, TbBrandJavascript, TbBrandTailwind, 
  TbBrandReact, TbDatabase, TbBrandNextjs, TbApi, TbBrandFramer, 
  TbBrandMysql, TbBrandVercel, TbPlugConnected, TbBrandAws, 
  TbBrandMongodb, TbPalette, TbCode
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
  if (s.includes('vercel')) return 'text-white';
  if (s.includes('sql')) return 'text-[#4479A1]';
  if (s.includes('postgres')) return 'text-[#4169E1]';
  if (s.includes('redux')) return 'text-[#764ABC]';
  if (s.includes('jwt')) return 'text-pink-400';
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
  if (s.includes('express')) return TbApi;
  if (s.includes('motion')) return TbBrandFramer;
  if (s.includes('mysql')) return TbBrandMysql;
  if (s.includes('postgres') || s.includes('sql') || s.includes('redis') || s.includes('database')) return TbDatabase;
  if (s.includes('vercel')) return TbBrandVercel;
  if (s.includes('websocket')) return TbPlugConnected;
  if (s.includes('aws')) return TbBrandAws;
  if (s.includes('mongo')) return TbBrandMongodb;
  if (s.includes('design')) return TbPalette;
  return TbCode;
};
