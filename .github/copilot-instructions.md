# Copilot instructions for this repository

Purpose: concise, actionable notes so future Copilot sessions understand how to build, run, and navigate this project.

---

## Build, run, test, and lint commands
- Install dependencies: `npm install`
- Dev server (hot-reload): `npm run dev` (runs `vite`)
- Build production bundle: `npm run build` (runs `vite build`)
- Preview production build: `npm run preview` (runs `vite preview`)

Notes: There are no test or lint scripts configured in package.json. If tests are added (recommended tool: Vitest/Jest):
- Run full test suite: `npm test` (or `npx vitest`)
- Run a single test by name/pattern (example for Vitest): `npx vitest -t "<test name>"`

---

## High-level architecture
- Vite + Vue 3 single-page app. Entry: `src/main.js` mounts `App.vue`.
- UI structure:
  - `src/App.vue` composes top-level layout (Header, main area, Footer).
  - `src/components/` holds reusable components (each in its own folder with .vue and .scss).
  - `src/pages/` contains page/section Vue files (home, about, contact, license). These are currently used as anchored sections rather than routed pages (no router file present).
- Styling: global SCSS at `src/assets/styles/main.scss`; components use scoped styles.
- Build config: `vite.config.js` with `@` alias -> `src/` and `@vitejs/plugin-vue` enabled.
- Dev tooling: `vite-plugin-vue-devtools` is included for local debugging.
- Node engines: package.json declares Node >= 20.19.0 or >=22.12.0.

---

## Key conventions & repository-specific patterns
- Path alias: `@/` maps to `src/` (see `vite.config.js` and `jsconfig.json`). Use `@/` for internal imports.
- Component layout: component folders use PascalCase (e.g., `src/components/Header/Header.vue`), with the component and its styles colocated.
- Styling: prefer SCSS; global variables/mixins live in `src/assets/styles/*` and components use scoped styles where appropriate.
- Pages vs components: `src/pages/*` are top-level sections; navigation currently uses anchor links (e.g., `#home`, `#about`) inside the Header, so ensure IDs/anchors match.
- Accessibility: header uses semantic roles (banner, navigation) — follow existing patterns when adding navigation.

---

## Files and docs checked
- Incorporated README.md basics (install/dev/build instructions).
- No CONTRIBUTING.md, CLAUDE.md, AGENTS.md, CONVENTIONS.md, AIDER_CONVENTIONS.md, or other AI-assistant config files detected.

---

## Where this file lives
- Path: `.github/copilot-instructions.md` (created by the Copilot CLI)

---

If any of the above is out-of-date (tests/lint added, router introduced, or other tooling added), update this file to keep Copilot context accurate.
