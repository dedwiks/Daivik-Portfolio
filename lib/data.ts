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
  stack: string[];
  year: string;
  link: string;
  liveUrl?: string;
  owner: string;
  repo: string;
  blurb: string;
};

export const projects: Project[] = [
  {
    name: "DEVCOMPASS AI",
    tags: "REACT / NODE.JS / GEMINI API",
    stack: ["React (Vite)", "Node.js/Express", "MongoDB Atlas", "Google Gemini API", "GitHub REST API"],
    year: "2026",
    link: "https://github.com/dedwiks/DevCompass",
    liveUrl: "https://dev-compass-kzed.vercel.app/",
    owner: "dedwiks",
    repo: "DevCompass",
    blurb:
      "AI-generated engineering standups from real GitHub activity — point it at a repo and it pulls commits, pull requests, and issues over a chosen time window, then has an LLM synthesize what shipped, what's in flight, and what's stuck, instead of reconstructing the week from memory. Built as a full MERN app with production-minded details: a fail-fast database guard, strict-schema parsing of the LLM's output with a graceful fallback when it misbehaves, locked-down CORS, and rate limiting on the AI-calling endpoint. The model is explicitly instructed never to invent activity beyond what's actually fetched from GitHub.",
  },
  {
    name: "BLOGSITE",
    tags: "MICROSERVICES / KUBERNETES / RABBITMQ",
    stack: [
      "Node.js/TypeScript",
      "Python/FastAPI",
      "Go",
      "PostgreSQL",
      "RabbitMQ",
      "Redis",
      "Docker",
      "Kubernetes",
      "Prometheus/Grafana",
      "OpenTelemetry/Jaeger",
      "GitHub Actions",
    ],
    year: "2026",
    link: "https://github.com/dedwiks/blogsite",
    owner: "dedwiks",
    repo: "blogsite",
    blurb:
      "A distributed blogging platform built to exercise production backend patterns rather than another CRUD app — four independently deployable services (Node/Express, two Python/FastAPI services, Go) behind an Nginx gateway, each owning its own database. Services communicate synchronously over HTTP and asynchronously through RabbitMQ via a transactional outbox with idempotent consumers, with full observability — OpenTelemetry/Jaeger tracing, Prometheus/Grafana metrics — and Redis caching, all deployed to Kubernetes (kind) with RBAC-scoped service discovery and Ingress routing.",
  },
  {
    name: "LIVER DISEASE PREDICTION MODEL",
    tags: "LOGISTIC REGRESSION / SHAP / LIME",
    stack: ["Logistic Regression", "SHAP", "LIME"],
    year: "2024",
    link: "https://github.com/dedwiks/Liver-disease-prediction",
    owner: "dedwiks",
    repo: "Liver-disease-prediction",
    blurb:
      "A logistic regression classifier for predicting liver disease from patient lab data, with SHAP and LIME layered on top to explain individual predictions rather than treat the model as a black box. Built to see how far interpretability tooling can go on top of a simple, auditable baseline.",
  },
  {
    name: "REAL-TIME CHAT APPLICATION",
    tags: "REACT / SOCKET.IO / SUPABASE",
    stack: ["React", "Socket.IO", "Supabase"],
    year: "2025",
    link: "https://github.com/dedwiks/websocket_chat",
    owner: "dedwiks",
    repo: "websocket_chat",
    blurb:
      "A real-time messaging app built on React and Socket.IO for low-latency bidirectional communication, with Supabase handling auth, persistence, and presence. Focused on getting message delivery, typing indicators, and reconnection handling right under real network conditions.",
  },
  {
    name: "MOLECULAR TOXICITY PREDICTION",
    tags: "TRANSFORMER / STREAMLIT / TOX21",
    stack: ["Transformer", "Streamlit", "Tox21"],
    year: "2025",
    link: "https://github.com/dedwiks/toxicity-prediction-app",
    owner: "dedwiks",
    repo: "toxicity-prediction-app",
    blurb:
      "A transformer-based model for predicting molecular toxicity on the Tox21 benchmark, wrapped in a Streamlit interface so predictions can be inspected interactively instead of only from a notebook. Explores mechanistic interpretability — attributing predictions back to molecular substructure rather than treating the model as opaque.",
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
