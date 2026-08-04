export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { id: "projects", label: "WORK", href: "#projects" },
  { id: "experience", label: "EXPERIENCE", href: "#experience" },
  { id: "skills", label: "SKILLS", href: "#skills" },
  { id: "contact", label: "CONTACT", href: "#contact" },
];

// Sections whose scroll position drives the sticky-nav active-link highlight.
export const navObservedSectionIds = navItems.map((n) => n.id);

export type Project = {
  name: string;
  tags: string;
  year: string;
  link: string;
};

export const projects: Project[] = [
  {
    name: "LIVER DISEASE PREDICTION MODEL",
    tags: "LOGISTIC REGRESSION / SHAP / LIME",
    year: "2024",
    link: "https://github.com/dedwiks/Liver-disease-prediction",
  },
  {
    name: "REAL-TIME CHAT APPLICATION",
    tags: "REACT / SOCKET.IO / SUPABASE",
    year: "2025",
    link: "https://github.com/dedwiks/websocket_chat",
  },
  {
    name: "MOLECULAR TOXICITY PREDICTION",
    tags: "TRANSFORMER / STREAMLIT / TOX21",
    year: "2025",
    link: "https://github.com/dedwiks/toxicity-prediction-app",
  },
];

export type ExperienceEntry = {
  dates: string;
  role: string;
  company: string;
  desc: string;
};

export const experience: ExperienceEntry[] = [
  {
    dates: "JUL 2026 — PRESENT",
    role: "Full-Stack Software Engineer",
    company: "ICICI Bank, Mumbai",
    desc: "Building Java-based full-stack banking applications, including backend services and frontend features.",
  },
  {
    dates: "MAY – JUL 2025",
    role: "ML Intern",
    company: "Bajaj Finserv, Pune",
    desc: "Built a Logistic Regression model for credit risk (Probability of Default), achieving an ROC-AUC of 0.86.",
  },
  {
    dates: "MAY – JUN 2024",
    role: "IT Intern",
    company: "Crimson Energy, Delhi",
    desc: "Data analysis and visualization using SQL and QGIS.",
  },
];

export const education = {
  dates: "2022–2026",
  role: "B.TECH, INFORMATION TECHNOLOGY",
  institution: "Manipal Institute of Technology",
};

export type SkillGroup = {
  title: string;
  items: string;
};

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: "Python, JavaScript, Java, C, C++" },
  {
    title: "Machine Learning",
    items: "Pandas, NumPy, Scikit-learn, Statistical Modeling & Data Analysis",
  },
  { title: "Databases & Tools", items: "SQL, MongoDB, Git" },
  { title: "Web", items: "HTML, CSS, JavaScript, ReactJS" },
  { title: "Data Viz & GIS", items: "Tableau, QGIS" },
  { title: "Infrastructure", items: "Kubernetes, Docker, Redis, Kafka" },
];

export type ContactLink = {
  label: string;
  href: string;
  variant: "filled" | "outline";
  external?: boolean;
};

export const contactLinks: ContactLink[] = [
  { label: "E-MAIL", href: "mailto:daiviksg9@gmail.com", variant: "filled" },
  { label: "GITHUB", href: "https://github.com/dedwiks", variant: "outline", external: true },
  {
    label: "LINKEDIN",
    href: "https://linkedin.com/in/daivik-s-gokhale-986516162/",
    variant: "outline",
    external: true,
  },
  { label: "X / TWITTER", href: "https://x.com/daiviksg", variant: "outline", external: true },
];

export const blogPlaceholders: { tag: string }[] = [
  { tag: "ML NOTES" },
  { tag: "ENGINEERING" },
  { tag: "PROJECT LOGS" },
  { tag: "DATA" },
  { tag: "CAREER" },
  { tag: "MISC" },
];

export const bio =
  "Full-Stack Software Engineer at ICICI Bank, building Java-based banking applications end to end. B.Tech Information Technology student at Manipal Institute of Technology (2022–2026), with a growing focus on machine learning and data-driven systems.";

export const heroLog = [
  "ROLE: FULL-STACK ENGINEER @ ICICI BANK",
  "STATUS: OPEN_FOR_COLLAB",
  "EDUCATION: B.TECH IT, MIT MANIPAL (2022–2026)",
];

export const heroChips = ["FULL-STACK ENGINEERING", "MACHINE LEARNING", "DATA ANALYSIS"];
