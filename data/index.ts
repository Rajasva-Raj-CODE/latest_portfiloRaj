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
  "React.js Specialist",
  "Next.js Developer",
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const heroBio =
  "I'm a Frontend-focused Full Stack Developer with 1.5+ years of experience building responsive, production-ready web applications. Specialized in React.js, Next.js, and modern JavaScript, with backend exposure in Node.js and MongoDB. Passionate about pixel-perfect UIs and delivering clean, scalable solutions.";

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
      "Built enterprise applications with ASP.NET Core and integrated RESTful APIs with React frontends.",
      "Optimized SQL Server queries for improved application performance and reliability.",
      "Delivered end-to-end full-stack features within an agile development environment.",
    ],
    skills: ["React.js", "Node.js", "TypeScript", "RESTful APIs", "SQL Server"],
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
      "Developed responsive React applications from Figma designs with pixel-perfect implementation.",
      "Managed global state using Redux Toolkit and built reusable component libraries for scalability.",
      "Deployed on AWS using CI/CD pipelines, optimized performance with lazy loading and code-splitting.",
    ],
    skills: ["React.js", "Redux Toolkit", "AWS", "Tailwind CSS", "MongoDB"],
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
      "Developed responsive applications using React, TypeScript, and Next.js with pixel-perfect UI implementations.",
      "Built RESTful APIs with Node.js and Express.js, optimized MongoDB schemas for performance.",
      "Collaborated on code reviews and contributed to architectural decisions across the stack.",
    ],
    skills: ["React.js", "Next.js", "Node.js", "MongoDB", "TypeScript"],
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
    title:       "AI Car Marketplace",
    description: "A full-stack AI-powered automotive marketplace with intelligent image-based search using Google's Gemini API. Includes an admin dashboard, AI car detail extraction, and a test drive scheduling system.",
    image:  "https://picsum.photos/seed/aicar1/800/500",
    images: [
      "https://picsum.photos/seed/aicar1/800/500",
      "https://picsum.photos/seed/aicar2/800/500",
      "https://picsum.photos/seed/aicar3/800/500",
    ],
    link:       "https://github.com/Rajasva-Raj-CODE",
    githubLink: "https://github.com/Rajasva-Raj-CODE",
    tags: ["Next.js", "Supabase", "TailwindCSS", "Node.js"],
    caseStudy: {
      overview:
        "A full-stack AI-powered automotive marketplace that revolutionizes how people buy and sell cars. Features intelligent image-based search powered by Google's Gemini API, allowing users to upload a car photo and find similar listings instantly. Includes an admin dashboard with inventory management, AI-powered car detail extraction, and a comprehensive test drive scheduling system.",
      keyFeatures: [
        "AI-powered image search using Gemini API for finding similar cars",
        "Advanced filtering system with brand, model, price range, and fuel type",
        "Paginated listings optimized for large datasets",
        "Admin dashboard with inventory analytics and AI-powered detail extraction",
        "Test drive scheduling and management system",
      ],
      technicalChallenges: [
        "Implementing efficient image-to-text extraction for car details",
        "Building a performant search system across thousands of listings",
        "Optimizing Supabase queries for complex multi-filter scenarios",
      ],
      techStack: ["Next.js 15", "Supabase", "Prisma", "Gemini API", "Tailwind CSS"],
      liveDemo:   "https://github.com/Rajasva-Raj-CODE",
      sourceCode: "https://github.com/Rajasva-Raj-CODE",
    },
  },
  {
    id: 2,
    title:       "Car Rental System",
    description: "Full-stack MERN car rental platform with JWT authentication and role-based access control. Features a real-time booking system with calendar integration, owner dashboard, and ImageKit for image optimization.",
    image:  "https://picsum.photos/seed/rental1/800/500",
    images: [
      "https://picsum.photos/seed/rental1/800/500",
      "https://picsum.photos/seed/rental2/800/500",
      "https://picsum.photos/seed/rental3/800/500",
    ],
    link:       "https://github.com/Rajasva-Raj-CODE",
    githubLink: "https://github.com/Rajasva-Raj-CODE",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "TailwindCSS"],
    caseStudy: {
      overview:
        "Full-stack MERN car rental platform with JWT authentication and role-based access control. Features a real-time booking system with calendar integration, an owner dashboard showing inventory, bookings, and revenue analytics, plus ImageKit for image optimization with advanced search and filtering.",
      keyFeatures: [
        "JWT authentication with role-based access control for owners and renters",
        "Real-time booking system with calendar integration and status management",
        "Owner dashboard displaying inventory, bookings, and revenue analytics",
        "ImageKit integration for optimized image storage and delivery",
        "Advanced search and filtering by location, price, and vehicle type",
      ],
      technicalChallenges: [
        "Implementing real-time booking conflict detection and resolution",
        "Building a secure role-based permission system for owners vs. renters",
        "Optimizing MongoDB schemas for complex booking queries",
      ],
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "ImageKit"],
      liveDemo:   "",
      sourceCode: "https://github.com/Rajasva-Raj-CODE",
    },
  },
  {
    id: 3,
    title:       "Cocktail Explorer",
    description: "Animated cocktail discovery website built with React.js, GSAP, and Tailwind CSS. Implements advanced animations including ScrollTrigger effects, parallax scrolling, and a custom carousel with masking transitions.",
    image:  "https://picsum.photos/seed/cocktail1/800/500",
    images: [
      "https://picsum.photos/seed/cocktail1/800/500",
      "https://picsum.photos/seed/cocktail2/800/500",
      "https://picsum.photos/seed/cocktail3/800/500",
    ],
    link:       "https://github.com/Rajasva-Raj-CODE",
    githubLink: "https://github.com/Rajasva-Raj-CODE",
    tags: ["React.js", "TailwindCSS", "Motion", "JavaScript"],
    caseStudy: {
      overview:
        "Animated cocktail discovery website built with React.js, GSAP, and Tailwind CSS. Implements advanced animations including ScrollTrigger effects, parallax scrolling, pinned sections, and video interactions. Features a custom carousel with masking transitions and timeline-based animations, fully optimized for performance.",
      keyFeatures: [
        "ScrollTrigger-based animations for an immersive scrolling experience",
        "Parallax scrolling with pinned sections and video interactions",
        "Custom carousel with masking transitions and timeline animations",
        "Cocktail discovery with search and category filtering",
        "Fully responsive and performance-optimized across all devices",
      ],
      technicalChallenges: [
        "Coordinating complex GSAP timelines with React component lifecycle",
        "Achieving smooth 60fps animations across all device types",
        "Implementing custom masking transitions without layout jank",
      ],
      techStack: ["React.js", "GSAP", "Tailwind CSS", "JavaScript"],
      liveDemo:   "",
      sourceCode: "https://github.com/Rajasva-Raj-CODE",
    },
  },
];
