import type { Project } from "../types";

export function parsePeriod(period: string) {
  const nums = (period.match(/\d{2,4}/g) || []).map((n) => (n.length === 2 ? 2000 + Number(n) : Number(n)));
  const start = nums[0] ?? 0;
  const end = nums[1] ?? start;
  return { start, end };
}

/** Newest first: sorts by end year, then start year, both descending. */
export function sortProjectsDesc(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    const pa = parsePeriod(a.bioPeriod);
    const pb = parsePeriod(b.bioPeriod);
    return pb.end - pa.end || pb.start - pa.start;
  });
}
