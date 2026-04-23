import Link from "next/link";
import { PolygonBackground } from "./PolygonBackground";
import { RadarChart } from "./RadarChart";

export interface ProjectDetailProps {
  name: string;
  url: string;
  headerImage: string;
  headerImagePosition?: string;
  contentTitle: string;
  contentBody: string[];
  contentImage: string;
  contentImagePosition?: string;
  prevHref?: string;
  nextHref?: string;
  achievements: string[];
  tech: string[];
  skills: Array<{ label: string; value: number }>;
}

const DARK: React.CSSProperties = { backgroundColor: "#637060" };
const PILL: React.CSSProperties = {
  backgroundColor: "rgba(222,241,255,0.95)",
  color: "#000",
  borderRadius: "50px",
  padding: "0 18px",
  lineHeight: "42px",
  fontSize: "13px",
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};
const CIRCLE: React.CSSProperties = {
  ...PILL,
  width: "42px",
  padding: "0",
  justifyContent: "center",
  borderRadius: "50%",
  flexShrink: 0,
};

export function ProjectDetail({
  name,
  url,
  contentTitle,
  contentBody,
  contentImage,
  contentImagePosition = "right top",
  prevHref,
  nextHref,
  achievements,
  tech,
  skills,
}: ProjectDetailProps) {
  return (
    <div className="min-h-screen relative" style={{ fontFamily: "var(--font-inter)" }}>
      <PolygonBackground />

      <div
        className="relative z-10 flex flex-col items-center py-10 px-4 gap-4"
        style={{ maxWidth: "720px", margin: "0 auto" }}
      >
        {/* Card 1 — Header: dark Details box at top, wordmark in middle, nav at bottom */}
        <div
          className="bg-white rounded-3xl overflow-hidden w-full flex flex-col"
          style={{ minHeight: "420px", boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}
        >
          {/* Top dark box: "Details" heading + URL */}
          <div style={{ ...DARK, padding: "28px 28px 24px" }}>
            <h1
              className="text-white font-bold leading-none"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
            >
              Details
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginTop: "8px" }}>
              {url}
            </p>
          </div>

          {/* Middle: brand wordmark with generous breathing room */}
          <div className="flex-1 flex items-center px-8 py-10">
            <h2
              className="font-bold italic leading-none"
              style={{ fontSize: "clamp(2.8rem, 10vw, 5rem)", color: "#1a1a1a" }}
            >
              {name}
            </h2>
          </div>

          {/* Bottom: nav buttons */}
          <div className="flex items-center gap-2 px-7 pb-7">
            {prevHref ? (
              <Link href={prevHref} style={CIRCLE}>←</Link>
            ) : (
              <span style={{ ...CIRCLE, opacity: 0.35, cursor: "default" }}>←</span>
            )}
            <Link href="/portfolio" style={PILL}>← Back to Portfolio</Link>
            {nextHref && (
              <Link href={nextHref} style={{ ...CIRCLE, marginLeft: "auto" }}>→</Link>
            )}
          </div>
        </div>

        {/* Card 2 — Content: heading + small top-right image, text with left border */}
        <div className="bg-white rounded-3xl overflow-hidden w-full" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}>
          <div className="p-7">
            {/* Heading + image row */}
            <div className="flex items-start gap-5 mb-6">
              <h2
                className="flex-1 font-bold"
                style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", color: "#1a1a1a", lineHeight: "1.2" }}
              >
                {contentTitle}
              </h2>
              <div
                className="flex-shrink-0 overflow-hidden rounded-xl"
                style={{ width: "140px", height: "110px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={contentImage}
                  alt={contentTitle}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: contentImagePosition }}
                />
              </div>
            </div>

            {/* Paragraphs with sage-green left border */}
            <div className="flex flex-col gap-5">
              {contentBody.map((para, i) => (
                <div key={i} style={{ borderLeft: "3px solid #637060", paddingLeft: "14px" }}>
                  <p style={{ color: "#4a5568", fontSize: "14px", lineHeight: "1.65" }}>{para}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3 — Achievements / Tech / Skill Set */}
        <div className="bg-white rounded-3xl overflow-hidden w-full" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.13)" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Achievements */}
            <div className="p-6">
              <h3 className="font-semibold mb-3 text-center" style={{ color: "#1a1a1a", fontSize: "15px" }}>
                Achievements
              </h3>
              <ul className="space-y-2" style={{ color: "#4a5568", fontSize: "13px" }}>
                {achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>

            {/* Tech */}
            <div className="p-6">
              <h3 className="font-semibold mb-3 text-center" style={{ color: "#1a1a1a", fontSize: "15px" }}>
                Tech
              </h3>
              <ul className="space-y-2" style={{ color: "#4a5568", fontSize: "13px" }}>
                {tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            {/* Skill Set */}
            <div className="p-6 flex flex-col items-center">
              <h3 className="font-semibold mb-2 w-full text-center" style={{ color: "#1a1a1a", fontSize: "15px" }}>
                Skill Set
              </h3>
              <RadarChart points={skills} size={180} />
            </div>
          </div>

          {/* Bottom nav */}
          <div className="px-6 py-4 flex items-center gap-3" style={DARK}>
            {prevHref ? (
              <Link href={prevHref} style={CIRCLE}>←</Link>
            ) : (
              <span style={{ ...CIRCLE, opacity: 0.35, cursor: "default" }}>←</span>
            )}
            <Link href="/portfolio" style={PILL}>← Back</Link>
            {nextHref && (
              <Link href={nextHref} style={{ ...CIRCLE, marginLeft: "auto" }}>→</Link>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
