import type { Project } from "../types";
import { projects, bonusExperience } from "../data/projects";
import { projectTranslations, skillLabelsDe, bonusExperienceDe } from "../data/projects.de";

export type Lang = "en" | "de";

export const defaultLang: Lang = "en";

/** Returns `projects` with all translatable fields swapped in for the given locale. */
export function localizeProjects(lang: Lang): Project[] {
  if (lang === "en") return projects;
  return projects.map((p) => {
    const t = projectTranslations[p.slug];
    return {
      ...p,
      title: t.title,
      summary: t.summary,
      challenge: t.challenge,
      approach: t.approach,
      achievements: t.achievements,
      bioRole: t.bioRole,
      bioDescription: t.bioDescription,
      skills: p.skills.map((s) => ({ ...s, label: skillLabelsDe[s.label] ?? s.label })),
    };
  });
}

export function localizeProject(slug: string, lang: Lang): Project | undefined {
  return localizeProjects(lang).find((p) => p.slug === slug);
}

export function localizeBonusExperience(lang: Lang) {
  return lang === "en" ? bonusExperience : { ...bonusExperience, ...bonusExperienceDe };
}

/** Given the current pathname, returns the equivalent path in the other locale. */
export function altLocalePath(pathname: string): { lang: Lang; path: string } {
  const isGerman = pathname === "/de" || pathname.startsWith("/de/");
  if (isGerman) {
    const stripped = pathname.replace(/^\/de/, "");
    return { lang: "en", path: stripped === "" ? "/" : stripped };
  }
  return { lang: "de", path: pathname === "/" ? "/de" : `/de${pathname}` };
}
