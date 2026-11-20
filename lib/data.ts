export const profile = {
  name: "Mohamed Emad",
  role: "Software Engineer",
  location: "Minya, Egypt",
  email: "mohamed.emad.c4@gmail.com",
  phone: "+20 109 400 2768",
  phoneHref: "tel:+201094002768",
  github: "https://github.com/mohamed-emad-c4",
  linkedin: "https://www.linkedin.com/in/mohamed-emad-c4/",
  cv: "/cv/Mohamed_Emad_Software_Engineer_CV.pdf",
};

export type LayerKey = "db" | "api" | "web" | "mobile";

export const layerNames: Record<LayerKey, string> = {
  db: "Database",
  api: "Backend",
  web: "Web / Dashboard",
  mobile: "Mobile",
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  icon: "taxi" | "globe" | "cap" | "car";
  links?: { kind: "web" | "ios" | "android"; href: string; label: string }[];
  logo?: { src: string; alt: string };
  image?: { src: string; width: number; height: number; alt: string; thumbPos?: string };
  built: string[];
  stack: string[];
  /** Layers Mohamed built on this product, with the tech used on each. */
  layers: Partial<Record<LayerKey, string>>;
};

export const projects: Project[] = [
  {
    id: "taximatch",
    name: "TaxiMatch",
    tagline: "Taxi dispatch and driver matching system",
    icon: "taxi",
    links: [
      { kind: "android", href: "https://play.google.com/store/apps/details?id=com.app.taximatch.taxi_match_uk", label: "Google Play" },
      { kind: "ios", href: "http://apps.apple.com/us/app/taxi-match/id6790924810", label: "App Store" },
      { kind: "web", href: "https://taximatch.co.uk/", label: "Website" },
    ],
    logo: { src: "/projects/logos/taximatch.svg", alt: "TaxiMatch logo" },
    image: {
      src: "/projects/taximatch.jpg",
      width: 1280,
      height: 725,
      alt: "TaxiMatch web dashboard on a desktop monitor and the driver app on three phones, showing bookings matched to drivers on a UK map",
    },
    built: [
      "Flutter app for drivers and operators to create, receive, match, track and manage bookings",
      "React admin dashboard for users, bookings, documents, subscriptions, payments, disputes and reports",
      "Node.js + TypeScript backend on Express, PostgreSQL, PostGIS and Prisma",
      "Geospatial driver matching, live location tracking over Socket.IO, scheduled background jobs",
      "JWT authentication and role-based permissions",
      "Firebase push, Mapbox maps, GoCardless payments and document verification",
    ],
    stack: ["Flutter", "React.js", "Node.js", "TypeScript", "Express", "PostgreSQL", "PostGIS", "Prisma", "Socket.IO", "Firebase", "Mapbox", "GoCardless"],
    layers: {
      db: "PostgreSQL + PostGIS",
      api: "Node.js / TypeScript",
      web: "React",
      mobile: "Flutter",
    },
  },
  {
    id: "web-creator",
    name: "Web Creator",
    tagline: "Multi-tenant website and e-commerce SaaS",
    icon: "globe",
    built: [
      "Website creation workflow: pick a template, manage products and content in an interactive editor",
      "Domain purchasing and custom-domain connection inside the platform",
      "SEO-oriented website generation and rebuild workflows",
      "E-commerce: payment gateway integration and sales management",
      "Drag-and-drop editing, template customization and version rollback",
    ],
    stack: ["Laravel", "PHP", "Multi-tenant architecture", "Payment gateways", "SEO"],
    layers: {
      api: "Laravel / PHP",
      web: "Site builder & editor",
    },
  },
  {
    id: "ajlcom",
    name: "Ajlcom",
    tagline: "Automotive marketplace mobile app",
    icon: "car",
    links: [
      { kind: "android", href: "https://play.google.com/store/apps/details?id=com.jlcom.app", label: "Google Play" },
      { kind: "ios", href: "https://apps.apple.com/us/app/3jlcom-%D8%B9%D8%AC%D9%84%D9%83%D9%85/id1635932721", label: "App Store" },
      { kind: "web", href: "https://3jlcom.com/", label: "Website" },
    ],
    logo: { src: "/projects/logos/ajlcom.png", alt: "3jlcom logo" },
    image: {
      src: "/projects/ajlcom.jpg",
      thumbPos: "52% 92%",
      width: 1280,
      height: 876,
      alt: "3jlcom (Ajlcom) car marketplace app on the App Store with screenshots of listings, profile stats and in-app chat",
    },
    built: [
      "Cross-platform Flutter app, built end to end",
      "Database and REST API powering listings, accounts and chat",
      "Admin dashboard to manage users, listings and content",
      "Authentication, vehicle listings, search, filtering and user interactions",
      "Responsive UI and performance optimization",
    ],
    stack: ["Flutter", "Dart", "REST API", "Database design", "Admin dashboard"],
    layers: {
      db: "Schema & data",
      api: "REST API",
      web: "Admin dashboard",
      mobile: "Flutter / Dart",
    },
  },
  {
    id: "naa",
    name: "NAA",
    tagline: "Education management system for tutoring academies",
    icon: "cap",
    links: [
      { kind: "android", href: "https://play.google.com/store/apps/details?id=com.digiwaytec.naa.production", label: "Google Play" },
      { kind: "web", href: "https://nouralhudaacademy.com/", label: "Website" },
    ],
    logo: { src: "/projects/logos/naa.png", alt: "Nour Alhuda Academy logo" },
    image: {
      src: "/projects/naa.jpg",
      thumbPos: "18% 92%",
      width: 1280,
      height: 710,
      alt: "Noor Al-Huda Academy (NAA) listing on Google Play with app screenshots of groups, subscriptions, chat and sessions",
    },
    built: [
      "Multi-role platform with Admin, Teacher and Student roles",
      "Curriculum management, live session tracking and auto-graded exams",
      "Subscription and trial system",
      "Dynamic teacher payroll and financial reporting",
      "Real-time Firebase chat and push notifications",
    ],
    stack: ["Firebase", "Cloud Messaging", "Real-time chat"],
    layers: {
      db: "Firebase",
      api: "Firebase · FCM",
      web: "Admin panel",
      mobile: "Android app",
    },
  },
];

export const moreWork = [
  {
    name: "Fido Dido",
    tagline: "Financial management system",
    built: [
      "Secure transaction handling, customer and employee management",
      "Work-hour tracking, financial and activity reports, real-time notifications",
    ],
    stack: [] as string[],
  },
  {
    name: "LHN Studios",
    tagline: "Website for a Saudi audio-production studio",
    built: ["Public website with an integrated admin dashboard for complete content management"],
    stack: ["Laravel", "PHP"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "Go", "Dart", "PHP", "SQL"] },
  { group: "Backend", items: ["Node.js", "Express.js", "Laravel", "Go (Gin)", "FastAPI", "REST API", "JWT Auth", "Socket.IO", "Prisma ORM", "Background jobs"] },
  { group: "Frontend & Mobile", items: ["React.js", "Admin dashboards", "Flutter", "Dart", "BLoC / Cubit", "Responsive UI", "Google Play publishing"] },
  { group: "Databases", items: ["PostgreSQL", "SQL", "Redis", "PostGIS", "Firebase"] },
  { group: "Integrations", items: ["Firebase Cloud Messaging", "Mapbox", "GoCardless", "Payment gateways", "Domain providers", "Real-time chat"] },
  { group: "DevOps & Tools", items: ["Docker", "Linux", "Git", "GitHub"] },
  { group: "Concepts", items: ["System Design", "Multi-Tenant Architecture", "OOP", "Data Structures & Algorithms", "RBAC"] },
];

export const experience = {
  title: "Co-Founder and Software Engineer",
  company: "DigiWay",
  place: "Minya, Egypt",
  period: "May 2024 – Present",
  points: [
    "Co-founded a software company delivering web, mobile and SaaS products for clients in Egypt, Saudi Arabia and the UK.",
    "Design and build full-stack applications end to end: database schema, REST APIs, admin dashboards and Flutter mobile apps.",
    "Shipped production apps to Google Play, including a real-time taxi dispatch platform and an education management system.",
    "Integrate third-party services: payment gateways, Firebase push notifications, maps and domain providers.",
    "Work with clients and teammates to scope requirements and deliver maintainable features.",
  ],
};

export const education = {
  degree: "B.Sc. in Computer Science",
  school: "Minia University",
  place: "Minya, Egypt",
  period: "Sep 2023 – Present",
};
