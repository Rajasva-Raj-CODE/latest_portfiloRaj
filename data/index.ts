/**
 * ─────────────────────────────────────────────
 *  PORTFOLIO DATA — single source of truth
 *  Edit anything here and it reflects everywhere
 * ─────────────────────────────────────────────
 */

import {
  TbBrandNodejs, TbBrandTypescript, TbBrandJavascript, TbBrandTailwind,
  TbBrandReact, TbBrandNextjs, TbApi, TbBrandFramer, TbBrandVercel,
  TbBrandMongodb, TbBrandAws,
} from 'react-icons/tb';
import type { IconType } from 'react-icons';

// ─── SEO ─────────────────────────────────────────────────────────────────────

export const seo = {
  title: "Rajasva Raj | Frontend & Full Stack Developer",
  description:
    "Frontend-focused Full Stack Developer with 1.5+ years of experience building responsive, production-ready web applications. Specialized in React.js, Next.js, and modern JavaScript with backend exposure in Node.js and MongoDB.",
};

// ─── Personal ─────────────────────────────────────────────────────────────────

export const personal = {
  name:         "Rajasva Raj Shrivastava",
  shortName:    "Rajasva Raj",
  email:        "7rajasvaraj@gmail.com",
  phone:        "8076522975",
  location:     "Noida, Uttar Pradesh, India",
  title:        "Associate Software Engineer",
  profileImage: "https://media.licdn.com/dms/image/v2/D5603AQE2bTSAqkkwFQ/profile-displayphoto-scale_400_400/B56ZpkjIVbI8Ag-/0/1762623525809?e=1776902400&v=beta&t=j-6SHB6JRVV-_mF4kE0cpwwLxeQkWuD--1xGrKyTHKc",
  resumePdf:    "/Rajasva_Raj_Shrivastav.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/rajasvaraj/",
    github:   "https://github.com/Rajasva-Raj-CODE",
  },
};

// ─── Navbar rotating titles ───────────────────────────────────────────────────

export const navTitles = [
  "Frontend Developer",
  "Full Stack Developer",
  "React.js Developer",
  "Next.js Developer",
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const heroBio =
  "I'm a Full Stack Developer with 2+ years of experience, mainly working on frontend development using React.js, Next.js, and modern JavaScript. I build responsive, production-ready interfaces with a focus on clarity and usability. I also work with Node.js on the backend and have experience handling both SQL and NoSQL databases, including PostgreSQL. I aim to keep systems simple, maintainable, and practical for real-world use.";
export const techStack: { name: string; icon: IconType; color: string }[] = [
  { name: "React.js",      icon: TbBrandReact,      color: "text-[#61DAFB]" },
  { name: "Next.js",       icon: TbBrandNextjs,     color: "text-slate-900 dark:text-white" },
  { name: "TypeScript",    icon: TbBrandTypescript, color: "text-[#3178C6]" },
  { name: "JavaScript",    icon: TbBrandJavascript, color: "text-[#F7DF1E]" },
  { name: "Tailwind CSS",  icon: TbBrandTailwind,   color: "text-[#06B6D4]" },
  { name: "Node.js",       icon: TbBrandNodejs,     color: "text-[#339933]" },
  { name: "MongoDB",       icon: TbBrandMongodb,    color: "text-[#47A248]" },
  { name: "Redux Toolkit", icon: TbApi,             color: "text-[#764ABC]" },
  { name: "Framer Motion", icon: TbBrandFramer,     color: "text-purple-500" },
  { name: "Vercel",        icon: TbBrandVercel,     color: "text-slate-900 dark:text-white" },
  { name: "AWS",           icon: TbBrandAws,        color: "text-[#FF9900]" },
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experiences = [
  {
    id: 1,
    role:     "Associate Software Engineer / Full-Stack Developer",
    company:  "NSMX",
    date:     "Jan 2026 – Present",
    location: "Noida, Uttar Pradesh, India",
    current:  true,
    logo:     "https://www.nsmatrix.com/assets/img/demo-img/nsmx_logo_131x51.png",
    description: [
      "Architected and shipped an internal XML Analyzer Tool using Next.js, Node.js, and SQL Server to remove a major QA bottleneck. The tool automated manual XML verification workflows, reduced validation time by more than 60%, and helped the team scale testing throughput without requiring additional headcount.",
      "Built a Business Management Dashboard with granular role-based access control, centralizing employee records, project tracking, approval flows, and reporting into one secure internal platform for company-wide operations.",
      "Owned the full-stack architecture for both internal tools, including database schema design, REST API development, business logic implementation, frontend UI development, and integration between the application layer and SQL Server.",
      "Delivered production-ready internal systems used daily across the organization, with a focus on maintainable code structure, secure permissions, reliable data handling, and practical workflows for real business users.",
    ],
    skills: ["Next.js", "React.js", "Node.js", "TypeScript", "SQL Server", "REST APIs", "RBAC"],
  },
  {
    id: 2,
    role:     "Associate Software Engineer",
    company:  "Guidona Softpedia Private Limited",
    date:     "Mar 2025 – Dec 2025",
    location: "Noida, Uttar Pradesh, India",
    current:  false,
    logo:     "https://guidona.in/logo/logo.svg",
    description: [
      "Owned end-to-end frontend development for production React applications, translating Figma designs into performant, responsive, and accessible user interfaces with complete REST API integration.",
      "Designed and maintained a reusable component library that improved development speed, reduced repeated UI work, and enforced consistent interaction patterns across multiple product surfaces.",
      "Architected global state management with Redux Toolkit for complex forms, dashboards, and cross-page data flows, resolving data-consistency issues and improving long-term maintainability.",
      "Led AWS CI/CD pipeline setup and improved frontend performance through route-level code splitting, lazy loading, and optimized bundle delivery, enabling smoother deployments and better Core Web Vitals.",
    ],
    skills: ["React.js", "Redux Toolkit", "Tailwind CSS", "AWS", "CI/CD", "REST APIs", "Component Library"],
  },
  {
    id: 3,
    role:     "Full-Stack Developer",
    company:  "OwnTechnologies",
    date:     "Jun 2024 – Mar 2025",
    location: "Noida, Uttar Pradesh, India",
    current:  false,
    logo:     "https://owntechnologies.in/logo.png",
    description: [
      "Built and maintained full-stack product features across React, TypeScript, and Next.js frontends with Node.js and Express.js backends, owning the complete request lifecycle from UI interactions to API responses and database operations.",
      "Designed RESTful APIs and optimized MongoDB schemas to support high-throughput data operations, improve query performance on key endpoints, and keep backend services easier to extend as requirements grew.",
      "Drove TypeScript adoption across the codebase, improving type safety, reducing runtime errors, and making the project easier for new developers to understand and contribute to.",
      "Collaborated on code reviews and technical decisions across the stack, improving component structure, API contracts, database usage, and delivery consistency for production features.",
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type CaseStudy = {
  overview: string;
  keyFeatures: string[];
  technicalChallenges: string[];
  techStack: string[];
  liveDemo?: string;
  sourceCode?: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  link: string;
  githubLink?: string;
  tags: string[];
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    id: 1,
    title:       "JobAlert - AI-Powered Job Alert Agent",
    description: "A full-stack SaaS platform that delivers daily personalized job digests to developers. It uses OpenAI to rank and filter RemoteOK jobs against each subscriber profile, with Supabase authentication, scheduled delivery, alert history, and unsubscribe management.",
    image:  "/projects_images/job-alert/Screenshot 2026-05-03 at 2.22.07 PM.png",
    images: [
      "/projects_images/job-alert/Screenshot 2026-05-03 at 2.22.07 PM.png",
    ],
    link:       "https://jobalert.tejasviraj.in/",
    githubLink: "https://github.com/Rajasva-Raj-CODE/Job-Alert_AI_Agent",
    tags: ["Next.js", "Supabase", "OpenAI", "Resend", "Vercel"],
    caseStudy: {
      overview:
        "JobAlert is a full-stack AI-powered job alert platform built to help developers receive relevant job opportunities without manually searching multiple boards every day. The platform collects subscriber preferences, fetches job data from RemoteOK, uses OpenAI to rank and filter listings against each profile, and sends personalized daily digests through Resend. It also includes authentication, alert history, unsubscribe handling, and a protected scheduled delivery workflow.",
      keyFeatures: [
        "Personalized daily job digests generated from each developer's preferred role, skills, location, and remote-work preferences",
        "OpenAI-powered ranking and filtering that evaluates RemoteOK jobs against subscriber profiles before sending alerts",
        "Supabase authentication with Google OAuth and email OTP for secure account access",
        "Protected Vercel Cron endpoint for scheduled job fetching, matching, and email delivery",
        "Alert history and unsubscribe flow so users can review previous digests and control their subscription cleanly",
        "Responsive marketing and application experience built for desktop and mobile users",
      ],
      technicalChallenges: [
        "Designing a reliable AI matching flow that can convert user preferences into useful job rankings instead of generic keyword matches",
        "Securing the scheduled delivery endpoint so automated cron execution works without exposing the job-processing workflow publicly",
        "Managing authentication, subscriber preferences, alert history, and unsubscribe state consistently across the product",
        "Building an email delivery pipeline that can generate personalized digests and send them reliably through Resend",
      ],
      techStack: ["Next.js 16", "Supabase", "OpenAI", "Resend", "Vercel Cron", "Tailwind CSS"],
      liveDemo:   "https://jobalert.tejasviraj.in/",
      sourceCode: "https://github.com/Rajasva-Raj-CODE/Job-Alert_AI_Agent",
    },
  },
];
