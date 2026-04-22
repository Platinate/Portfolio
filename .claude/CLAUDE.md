# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR at localhost:5173
npm run build     # Type-check (tsc -b) then bundle for production
npm run lint      # Run ESLint across the project
npm run preview   # Serve the production build locally
```

There is no test suite configured.

## Architecture

Personal portfolio site built with React 19 + TypeScript + Vite. Uses React Router v7 for client-side routing (`/`, `/projects`, `/contact`).

### Component hierarchy (Atomic Design)

```
src/
  hoc/
    App/        # Router setup — defines all routes
    Main/       # Layout shell wrapping every page (header + outlet)
  components/
    atoms/      # Empty — intended for primitive UI elements
    molecules/  # Card, TimelineItem
    organisms/  # Header (animated nav highlight), Timeline
    pages/      # Home, Projects (stub), Contact (stub)
  assets/       # fonts, icons, images
```

### Routing / layout flow

`App` wraps everything in `<BrowserRouter>`. The `/` route renders `Main`, which renders `Header` + `<Outlet>`. Nested routes (`/projects`, `/contact`) render their page component into that outlet.

### Styling

Each component has its own CSS file (e.g. `Header.css` alongside `Header.tsx`). No CSS modules — class names are global strings, so keep them component-scoped by convention. No preprocessor, no utility framework.

### Data

All content (timeline entries, social links, profile info) is hardcoded inside components. There is no API, no state management library, and no context.

### TypeScript config

`tsconfig.json` references two configs: `tsconfig.app.json` (source, ES2023 target, strict) and `tsconfig.node.json` (build tooling). `noUnusedLocals` and `noUnusedParameters` are enabled — the build will fail on unused declarations.
