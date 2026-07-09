export interface SkillPoint {
  label: string;
  value: number; // 0–100
}

export interface Project {
  slug: string;
  company: string;
  url: string;
  title: string; // canonical project headline, e.g. "Redefining Co-living"
  summary: string; // short description used on /portfolio cards
  detail: string[]; // longer paragraphs used on /projects and /projects/[slug]
  achievements: string[];
  tech: string[];
  skills: SkillPoint[];
  portfolioImage: string;
  projectsHeroImage: string;
  galleryImages: string[];
  bioPeriod: string;
  bioRole: string;
  bioDescription: string;
  bioImage: string;
}
