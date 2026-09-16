import type { Project } from "../types";

/** A period is "ongoing" when it trails off rather than closing, e.g. "2026–" or "2021 · 2025–". */
const ONGOING = /[–—-]\s*$/;

/** Sorts ongoing engagements above every closed one, matching the profile's Werdegang. */
const ONGOING_OFFSET = 10000;

export function parsePeriod(period: string) {
  const nums = (period.match(/\d{2,4}/g) || []).map((n) => (n.length === 2 ? 2000 + Number(n) : Number(n)));
  const start = nums[0] ?? 0;
  const end = nums[1] ?? start;
  return { start, end, ongoing: ONGOING.test(period) };
}

/** Sort key: ongoing work first (most recent start), then closed work by end year. */
export function periodRank(period: string): { primary: number; secondary: number } {
  const { start, end, ongoing } = parsePeriod(period);
  return { primary: end + (ongoing ? ONGOING_OFFSET : 0), secondary: start };
}

/** Newest first: ongoing engagements, then closed ones by end year, both descending. */
export function sortProjectsDesc(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    const ra = periodRank(a.bioPeriod);
    const rb = periodRank(b.bioPeriod);
    return rb.primary - ra.primary || rb.secondary - ra.secondary;
  });
}
