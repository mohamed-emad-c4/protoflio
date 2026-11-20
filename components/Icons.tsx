import {
  siReact,
  siNodedotjs,
  siLaravel,
  siPostgresql,
  siFlutter,
  siSocketdotio,
  siGithub,
  siGoogleplay,
  siAppstore,
} from "simple-icons";

type P = { className?: string; size?: number };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ArrowRight = ({ className, size = 18 }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = ({ className, size = 16 }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Download = ({ className, size = 18 }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </svg>
);

export const Mail = ({ className, size = 18 }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const Phone = ({ className, size = 18 }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const Pin = ({ className, size = 16 }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const LinkedIn = ({ className, size = 18 }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4V9.75Z" />
  </svg>
);

const Brand = ({ path, className, size = 18 }: P & { path: string }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d={path} />
  </svg>
);

export const GitHub = (p: P) => <Brand path={siGithub.path} {...p} />;
export const GooglePlay = (p: P) => <Brand path={siGoogleplay.path} {...p} />;
export const GooglePlayColor = ({ className, size = 16 }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.6 2.3 13 12 3.6 21.7c-.3-.2-.5-.6-.5-1.1V3.4c0-.5.2-.9.5-1.1Z" fill="#00A0FF" />
    <path d="M16.2 8.8 13 12 3.6 2.3c.4-.2.9-.2 1.4.1l11.2 6.4Z" fill="#00E375" />
    <path d="M16.2 15.2 5 21.6c-.5.3-1 .3-1.4.1L13 12l3.2 3.2Z" fill="#FF3A44" />
    <path d="m16.2 8.8 3.9 2.2c.8.5.8 1.5 0 2l-3.9 2.2L13 12l3.2-3.2Z" fill="#FFD400" />
  </svg>
);
export const AppStore = (p: P) => <Brand path={siAppstore.path} {...p} />;
export const Globe = ({ className, size = 16 }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3Z" />
  </svg>
);

export const techIcons = [
  { name: "JavaScript", path: "js-outline" },
  { name: "React", path: siReact.path },
  { name: "Node.js", path: siNodedotjs.path },
  { name: "Laravel", path: siLaravel.path },
  { name: "PostgreSQL", path: siPostgresql.path },
  { name: "Flutter", path: siFlutter.path },
  { name: "Socket.IO", path: siSocketdotio.path },
];

/* Outlined JS mark so the row keeps one stroke style (the brand glyph is a filled square). */
const JsOutline = ({ className, size = 26 }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
    <text x="12.6" y="17.6" textAnchor="middle" fontSize="9.6" fontWeight="800" fill="currentColor" fontFamily="var(--font-sans), sans-serif">JS</text>
  </svg>
);

export const TechIcon = ({ path, className, size = 26 }: P & { path: string }) =>
  path === "js-outline" ? <JsOutline className={className} size={size} /> : <Brand path={path} className={className} size={size} />;

/* Project glyphs: drawn in the same outline language as the UI icons. */
export const ProjectGlyph = ({ kind, size = 30 }: { kind: "taxi" | "globe" | "cap" | "car"; size?: number }) => {
  const s = { ...stroke, strokeWidth: 1.7 };
  switch (kind) {
    case "taxi":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" {...s}>
          <path d="M12 7h8l1 3" />
          <path d="M6 18l2.5-6.5A2 2 0 0 1 10.4 10h11.2a2 2 0 0 1 1.9 1.5L26 18" />
          <rect x="4" y="18" width="24" height="6" rx="2" />
          <path d="M7 24v2.5M25 24v2.5" />
          <circle cx="9" cy="21" r="1" fill="currentColor" />
          <circle cx="23" cy="21" r="1" fill="currentColor" />
        </svg>
      );
    case "globe":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" {...s}>
          <circle cx="16" cy="16" r="11" />
          <path d="M5 16h22M16 5c3.2 3.2 4.6 7 4.6 11S19.2 23.8 16 27c-3.2-3.2-4.6-7-4.6-11S12.8 8.2 16 5Z" />
        </svg>
      );
    case "cap":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" {...s}>
          <path d="M3 12 16 6l13 6-13 6L3 12Z" />
          <path d="M8 14.5V21c2.4 2 5 3 8 3s5.6-1 8-3v-6.5" />
          <path d="M29 12v7" />
        </svg>
      );
    case "car":
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" {...s}>
          <path d="M4 20v-3l3-1 3-5h10l4 5 4 1v3" />
          <path d="M4 20h3M12 20h8M25 20h3" />
          <circle cx="9.5" cy="20.5" r="2.5" />
          <circle cx="22.5" cy="20.5" r="2.5" />
        </svg>
      );
  }
};
