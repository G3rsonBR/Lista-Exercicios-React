# AGENTS.md

## Stack
- **React 19** + **TypeScript 6** + **Vite 8** (modern, Oxc-based)
- **Package manager**: pnpm
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` plugin, `@import "tailwindcss"` in CSS entry)
- **Dark mode**: Class-based (`@custom-variant dark (&:where(.dark, .dark *))` in `index.css`); toggle stored in `localStorage('theme')`
- **Lint**: ESLint 10 flat config (`tseslint.configs.recommended`)

## Commands

| Command | What it does |
|---------|-------------|
| `pnpm dev` | Vite dev server |
| `pnpm build` | `tsc -b && vite build` — **must pass both** |
| `pnpm lint` | ESLint over all files |
| `pnpm preview` | Vite preview of production build |

## Architecture
- **Entry**: `src/main.tsx` → `src/App.tsx`
- **Data**: `LISTAS/**/*.md` — files are grouped by parent directory (category), parsed via Vite glob
- **Categories**: `1 - listas_classes_metodos_herancas/` (multi-level), `2 - lista_map_destructingArrays/` (single-level), `3 - lista_arrowFunctions/` (single-level)
- No router, no test framework, no state management library installed
- No CI config

## TypeScript gotchas
- `verbatimModuleSyntax: true` → use `import type` for type-only imports
- `noUnusedLocals` / `noUnusedParameters` are **errors** — remove unused bindings
- `erasableSyntaxOnly: true` — no enums, no namespaces, no `parameter properties`

## Conventions
- Prefer `function` components and hooks over classes
- Keep `src/` lean for app code; data lives in `LISTAS/`
- Markdown must be parsed at runtime (no build-time data pipeline)
