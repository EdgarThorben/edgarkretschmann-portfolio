# edgarkretschmann-new

## Tech Stack

- **Next.js 16** (App Router, React 19, TypeScript strict)
- **Tailwind CSS v4** with oklch design tokens
- **shadcn/ui** (Radix primitives via `@base-ui/react`)
- **Lucide React** for icons
- **Google Fonts** — Source Sans 3, Inter, Lexend Deca (loaded via `next/font`)

## Prerequisites

- [Node.js](https://nodejs.org/) >= 24

## Environment Variables

Create a `.env` file in the project root:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key
GEMINI_MODEL=gemini-3-flash-preview
```

`GOOGLE_GENERATIVE_AI_API_KEY` — required if any route or build step uses the Gemini API. Get a key from [Google AI Studio](https://aistudio.google.com/app/apikey).

`GEMINI_MODEL` — the Gemini model identifier to use. Defaults to `gemini-3-flash-preview` if omitted.

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

The dev server starts at [http://localhost:3000](http://localhost:3000).

## Other Commands

```bash
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint
npm run typecheck  # TypeScript check (no emit)
npm run check      # lint + typecheck + build
```

## Docker (optional)

```bash
# Production
docker compose up app --build

# Development (port 3001)
docker compose up dev --build
```
