# Contributing to Zepa UI

Thank you for contributing. This repo is a component registry — every addition should be self-contained, installable, and reviewable.

## Requirements

Before opening a PR, make sure your component:

- Has `meta.ts`
- Has `demo.tsx`
- Has `preview.mov` in `public/previews/`
- Passes `npm run build:registry`
- Passes `npm run lint`
- Passes `npm run test`
- Has no `console.log`
- Has no hardcoded secrets or API keys
- Is responsive (mobile + desktop)
- Uses no hardcoded colors/assets that break theming (prefer design tokens / Tailwind utilities)

## Folder structure

Each component lives under:

```text
content/registry/{category}/{slug}/
  meta.ts
  demo.tsx
  ui/          # optional supporting files
```

Example:

```text
content/registry/hero-sections/new-hero/
  meta.ts
  demo.tsx
  ui/
    badge.tsx
    button.tsx
    glow.tsx
    mockup.tsx
```

Preview video path (required):

```text
public/previews/{category}/{slug}/preview.mov
```

Example:

```text
public/previews/hero-sections/new-hero/preview.mov
```

## How to add a component

1. Create the folder: `content/registry/{category}/{slug}/`
2. Add `meta.ts` (slug must match folder name)
3. Add `demo.tsx` (default export — this is what the live demo renders)
4. Add any `ui/*.tsx` helpers your demo needs
5. Add `public/previews/{category}/{slug}/preview.mov`
6. Run:

```bash
npm run build:registry
npm run lint
npm run test
```

7. Open a PR using the PR template

## `meta.ts` example

```ts
export const meta = {
  slug: "new-hero",
  title: "New Hero",
  description: "Premium hero with CTA, glow, and framed mockup.",
  category: "hero-sections",
  preview: "/previews/hero-sections/new-hero/preview.mov",
  github: "your-github-username",
  tags: ["hero", "landing", "cta"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  version: 1,
  views: 0,
  likes: 0,
  installs: 0,
} as const
```

## Generated files (do not edit manually)

`npm run build:registry` updates:

- `content/registry/items.ts`
- `content/registry/loaders.ts`
- `content/registry/index.ts`
- `lib/registry/code-paths.ts`
- `content/registry/registry.json`
- `public/r/{slug}.json`

## Review criteria

PRs are reviewed for:

- **Security** — no XSS, no unsafe scripts, no secrets
- **Performance** — reasonable bundle impact
- **Accessibility** — semantic HTML, labels, focus states
- **Code quality** — clear structure, no copy-paste bloat
- **Architecture** — follows registry conventions
- **Responsive** — works on small and large screens
- **Dependencies** — only what’s needed

PRs may be rejected if:

- Single file is ~1000+ lines without reason
- Many unnecessary dependencies
- Copied code without adaptation
- Wrong folder structure or missing required files

## Local checks

```bash
npm run lint
npm run test
npm run build:registry
npm run build
```

## Questions

Use **GitHub Discussions** for questions. Use **Issues** for bugs and component requests.
