# Ascenda — Scale execution, not headcount.

Marketing and lead-generation website for [ascenda.ai](https://ascenda.ai). Built with React, Vite, TypeScript, and Tailwind CSS v4.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build tool | Vite 6 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Routing | React Router v7 |
| Animations | Motion (Framer Motion) |
| UI primitives | Radix UI |
| Contact form | Formspree (`@formspree/react`) |
| Deployment | GitHub Pages (CNAME → ascenda.ai) |

---

## Getting Started

### Prerequisites

- **Node.js** v20+ (see `.nvmrc`)
- **npm** v10+ (comes with Node)

If you use nvm:
```bash
nvm use
```

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173)

### Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build:

```bash
npm run preview
```

---

## Project Structure

```
ascenda.ai/
├── index.html               # Vite entry point
├── vite.config.ts           # Vite + Tailwind + React config
├── tsconfig.json            # TypeScript config
├── package.json             # Dependencies and scripts
├── .nvmrc                   # Node version pin
├── .gitignore
│
├── src/
│   ├── main.tsx             # React root mount
│   ├── app/
│   │   ├── App.tsx          # RouterProvider wrapper
│   │   ├── routes.tsx       # Route definitions
│   │   ├── context/
│   │   │   └── ThemeContext.tsx   # Dark/light mode state
│   │   ├── pages/
│   │   │   ├── Root.tsx     # Layout shell (Nav + Footer + ThemeToggle)
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Solutions.tsx
│   │   │   ├── UseCases.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Contact.tsx
│   │   └── components/
│   │       ├── Nav.tsx
│   │       ├── Footer.tsx
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Logo.tsx
│   │       ├── SectionLabel.tsx
│   │       └── ThemeToggle.tsx
│   └── styles/
│       ├── index.css        # Imports all stylesheets
│       ├── fonts.css        # Sora font import
│       ├── tailwind.css     # Tailwind v4 source config
│       └── theme.css        # CSS custom properties (dark + light)
│
├── public/                  # Static assets served as-is
└── dist/                    # Production build output (gitignored)
```

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, mission, ICP, pricing math, process |
| `/about` | About — team bios (Mike & Tony), values, differentiators |
| `/solutions` | Solutions — service tiers, use case tabs |
| `/use-cases` | Use Cases — industry-specific automation examples |
| `/faq` | FAQ — accordion Q&A |
| `/contact` | Contact — discovery session booking form |

---

## Contact Form

The discovery session form on `/contact` submits to **Formspree**.

- Form ID: `mnjokrke`
- Endpoint: `https://formspree.io/f/mnjokrke`
- Notifications go to the email configured in the Formspree dashboard

To change the destination email, log in to [formspree.io](https://formspree.io), open the form, and update Settings → Email Notifications.

---

## Dark / Light Mode

A toggle button sits in the **bottom-right corner** of every page. It switches between dark (default) and light mode by toggling a `data-theme="light"` attribute on `<html>`. The preference is persisted in `localStorage` under the key `ascenda-theme`.

Theme colors are defined as CSS custom properties in `src/styles/theme.css` under `:root` (dark) and `[data-theme="light"]` (light).

---

## Deployment

The site is deployed to GitHub Pages with a custom domain via the `CNAME` file (value: `ascenda.ai`).

To deploy, push to the `main` branch. If using GitHub Actions, add a workflow that runs `npm run build` and publishes `dist/` to the `gh-pages` branch.

---

## Environment Variables

This project has no required environment variables. The Formspree form ID is hardcoded in `src/app/pages/Contact.tsx`.

If you ever need to add secrets (API keys, etc.), create a `.env.local` file — it is gitignored by default:

```
VITE_SOME_KEY=your_value_here
```

Access in code via `import.meta.env.VITE_SOME_KEY`.

---

## Authors

- **Antonio "Tony" Zarate** — AI & Automation Lead — [linkedin.com/in/antoniojzaratel](https://linkedin.com/in/antoniojzaratel)
- **Miguel "Mike" Godinez** — Operations & Strategy — [linkedin.com/in/miguelgdelarosa](https://linkedin.com/in/miguelgdelarosa)
