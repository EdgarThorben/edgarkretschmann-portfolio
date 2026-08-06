# Handover — Portfolio Site Repositioning

_Written from a Cowork session on 2026-07-13. Pick this up in Claude Code (VS Code) or any fresh session._

## Why this exists

Edgar wasn't happy with edgarkretschmann.com and asked for portfolio-site inspiration plus a repositioning pass, informed by his own past chats about his "FreedomFighter" freelance strategy. This doc hands off what was found and what was changed so nothing gets re-derived from scratch.

## Context pulled from 4 prior chat sessions ("FreedomFighter")

Read via session transcripts (`FreedomFighter- Munich freelance opportunities`, `FreedomFighter- Tech stack positioning Munich`, `FreedomFigher - Domains and UC and USPs`, `Freedom Figher - ICS Wayback and Domains`). Key takeaways that should inform any future copy/content work:

- Edgar is a Munich-based digital nomad freelancer. Real positioning: **AI-augmented marketing/funnel systems for SMBs** — not "digital marketing enthusiast" (the old, generic line).
- Strongest proof point: **pflegeplace.com** — a concept for a German-language acquisition/learning hub for internationally trained nurses (the "already in Germany" segment is underserved). Backed by real market research: EU AI Act Art. 4 training mandates, KMU digitalization gaps, Learnship's Dec-2025 insolvency opening a gap, real teaching curricula + AI production speed as the moat.
- Domain portfolio clusters into three groups (see the table Edgar shared): **Language/EdTech** (pflegeplace, deutschacademy, icanspeak — pflegeplace is the flagship, the other two are funnel/credibility plays), **Embodiment/community** (ironandzen, colevitate, nomavillage, narangyoga, thesurfandflow, dr-andrea.de — ironandzen is furthest along, already built in Astro and deployed on Vercel), and **Creative/no clear USP** (thebetterphoto, vlogato, tuttiguitars, erbenbewerben — flagged as sell/drop candidates, not worth building).
- Recommended sequencing from that research: pflegeplace first (main product), deutschacademy as content/SEO funnel feeding it, icanspeak as a teacher-training credibility layer once pflegeplace has traction.

## Current state of the codebase (this repo)

- **Not the live broken site.** This is a from-scratch Astro rebuild (`git log`: `d90daaf Migrate to Astro, unify all 4 subdomains under one router`), built via a `/clone-website` multi-agent pipeline that pixel-cloned the old site first, then already fixed the worst issues:
  - Old live site had a "Have Sex" CTA button and a "© Untitled" footer (leftover template placeholders) — **already fixed** in this codebase, just not deployed yet.
- All 4 old subdomains (`/`, `/bio`, `/portfolio`, `/projects`) are unified into one Astro app with routes under `src/pages/`.
- `src/data/projects.ts` is the single source of truth for all 6 case studies (Innate, Pflegeplace, IcanSpeak, DeutschAcademy, Nomavillage, Narangyoga) — already has achievements, tools, skill scores per project. Solid structure, just needs framing sharpened to match the FreedomFighter positioning above (currently generic, e.g. Pflegeplace summary doesn't mention the AI-production-speed moat or the underserved-segment insight at all).
- `docs/research/GAP_REPORT.md` documents the clone-fidelity work done so far (dated 2026-04-19) — useful background but now partially stale (e.g. it flags "Mac Fan" body as `x` placeholder; that's since been filled with real copy).

## What was actually changed this session

- `src/pages/index.astro`: rewrote the hero paragraph. Old: "I'm a digital marketing enthusiast with a knack for community management..." New: leads with AI-augmented funnel/systems work, name-checks Munich, references pflegeplace's nurse-recruitment pipeline. **Nothing else was touched.**

## Known issue — fix before your next git operation

There's a stale git worktree at `.claude/worktrees/xenodochial-gould-e4b2ca`, left over from a previous multi-agent Claude Code build session. Its internal git files reference an absolute Windows path that breaks `git status`/`git worktree` commands when accessed from a Linux sandbox context (threw `fatal: not a git repository` + an unremovable `.git/index.lock`). On your actual machine this is likely fine, but worth running `git worktree prune` and deleting that folder before relying on git tooling further.

## Environment note

`node_modules` in this repo were installed on Windows (Windows-native esbuild binaries, no Linux build present). `package.json` requires Node >=24. A Linux sandbox session can edit files here but **cannot run `pnpm dev`** against this install — run it on your actual machine to preview.

## Suggested next steps (not yet done)

1. Rewrite the remaining generic copy blocks in `index.astro`: "Explore my Portfolio" section and "Done. Remotely" section — both still read as filler.
2. Sharpen `src/data/projects.ts` entries (especially Pflegeplace) to reflect the real narrative: real curricula + AI production speed = moat, not just "built a lead funnel."
3. Consider adding a short case-study callout specifically for the pflegeplace concept work (market sizing, the Learnship-insolvency opening, the underserved "already in Germany" nurse segment) — this is the single strongest differentiator found in the research and isn't represented on the site at all yet.
4. Visual direction: current build is clean but plain (see `src/styles/global.css`, `Base.astro`). For reference points on Awwwards-style polish appropriate to a marketing/AI consultant (not a pure visual portfolio), see: harryjatkins.com, stabondar.com, evanfasquelle.com — motion/typography inspiration only, not content structure. For content structure, "outcome-first, case-study-driven" one-pagers (e.g. the style referenced in Marketer Milk's portfolio roundup) are the better model than a pure Awwwards visual-portfolio format.
5. Run `pnpm dev` locally, review the hero change, then decide whether to continue with steps 1–3 in this same session or a fresh one — this doc has everything needed to pick back up.
