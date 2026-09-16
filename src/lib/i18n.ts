import type { CareerEntry, Project } from "../types";
import { projects, bonusExperience, careerEntries } from "../data/projects";
import { projectTranslations, skillLabelsDe, bonusExperienceDe, careerEntriesDe } from "../data/projects.de";
import { TOOL_BINS, type ToolBin } from "../data/toolkit";
import { binLabelsDe, itemNotesDe } from "../data/toolkit.de";
import { AT_A_GLANCE, CAPABILITIES, CONTACT, RESULTS, TAGLINE } from "../data/profile";
import { AT_A_GLANCE_DE, CAPABILITIES_DE, CONTACT_DE, RESULTS_DE, TAGLINE_DE } from "../data/profile.de";

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

export function localizeCareerEntries(lang: Lang): CareerEntry[] {
  return lang === "en" ? careerEntries : careerEntriesDe;
}

/** The /profile page's content, assembled for the given locale. */
export function localizeProfile(lang: Lang) {
  if (lang === "en") {
    return { tagline: TAGLINE, contact: CONTACT, atAGlance: AT_A_GLANCE, results: RESULTS, capabilities: CAPABILITIES };
  }
  return {
    tagline: TAGLINE_DE,
    contact: { ...CONTACT, ...CONTACT_DE },
    atAGlance: AT_A_GLANCE_DE,
    results: RESULTS_DE,
    capabilities: CAPABILITIES_DE,
  };
}

/** Returns `TOOL_BINS` with bin labels/blurbs and usage notes swapped in for the given locale. */
export function localizeToolBins(lang: Lang): ToolBin[] {
  if (lang === "en") return TOOL_BINS;
  return TOOL_BINS.map((bin) => {
    const binDe = binLabelsDe[bin.id];
    return {
      ...bin,
      label: binDe?.label ?? bin.label,
      blurb: binDe?.blurb ?? bin.blurb,
      items: bin.items.map((item) => {
        const notesDe = itemNotesDe[item.name];
        if (!notesDe) return item;
        return {
          ...item,
          usedIn: item.usedIn.map((usage, i) => {
            const t = notesDe[i];
            if (!t) return usage;
            const note = t.notes[0] ?? usage.note;
            return usage.type === "context" ? { ...usage, label: t.contextLabel ?? usage.label, note } : { ...usage, note };
          }),
        };
      }),
    };
  });
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
