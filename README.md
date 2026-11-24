# Mamoon Ayoob — Personal Portfolio

Premium personal portfolio for **Mamoon Ayoob**, Associate Software Engineer at Tranzo Pvt. Ltd. and part-time Full Stack Developer at Virtual Dive Studios (Ordinify).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Framer Motion + Lucide React
- next-themes (dark/light)
- Vercel Analytics + Speed Insights
- Formspree-ready contact API

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_SITE_URL` — production URL for sitemap/metadata
- `FORMSPREE_FORM_ID` — optional Formspree form id for contact
- `CONTACT_TO_EMAIL` — mailto fallback recipient

## Content editing

All copy lives in centralized data files under `src/data/`.

| File | Purpose |
|------|---------|
| `profile.ts` | Name, role, summary, portrait, resume path |
| `experience.ts` | Work history |
| `skills.ts` | Skill categories |
| `projects.ts` | Featured + professional projects |
| `ordinify.ts` / `tranzo.ts` | Product spotlight + case studies |
| `socials.ts` | LinkedIn / GitHub |
| `navigation.ts` | Nav anchors |

## Deploy

```bash
npx vercel login
npx vercel
```

Then attach a custom domain in the Vercel project settings.

## Folder structure

```
src/
  app/                 # routes, SEO, OG, sitemap, API
  components/          # layout, sections, ui, work
  data/                # editable content
  lib/                 # utilities + motion
public/
  images/              # portrait + project covers
  Mamoon-Ayoob-CV.pdf  # downloadable resume
```
# Portfolio
# Portfolio
