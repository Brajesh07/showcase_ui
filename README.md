<div align="center">

# Impossible UI Showcase

Explorations of “impossible” feeling CSS & animation techniques using **Next.js**, **Tailwind CSS**, and **Storybook**.

</div>

## Live Links (to fill in after first deploy)

- App (Vercel): <!-- TODO: add URL -->
- Storybook (Chromatic): <!-- TODO: add URL -->

## Features

- Advanced animated components (LiquidButton, MorphingCard, ParticleSystem)
- Storybook 9 with docs, a11y, Vitest addon & Chromatic visual tests
- Tailwind CSS with custom keyframes & CSS variables
- Automated CI: Chromatic publish + Vercel deploy
- Pre-commit quality gates (ESLint, Prettier, Tailwind class sorting)

## Getting Started

Install dependencies (already done if using existing environment):

```bash
npm install
```

Run Next.js dev server:

```bash
npm run dev
```

Run Storybook:

```bash
npm run storybook
```

Build Storybook static export:

```bash
npm run build-storybook
```

Run Chromatic (requires CHROMATIC_PROJECT_TOKEN env var):

```bash
npm run chromatic
```

## Component Gallery

- `LiquidButton` – animated liquid gradient, gooey-esque blur layers
- `MorphingCard` – clip-path morphing with 3D tilt illusion
- `ParticleSystem` – lightweight canvas ambient particle field

## Scripts

| Script          | Purpose                             |
| --------------- | ----------------------------------- |
| dev             | Run Next.js (Turbopack)             |
| build           | Build Next.js app                   |
| storybook       | Launch Storybook dev server         |
| build-storybook | Build static Storybook              |
| chromatic       | Publish Storybook to Chromatic (CI) |
| lint            | ESLint across project               |
| prettier:write  | Format all supported files          |

## CI/CD

GitHub Actions:

- `chromatic.yml` – visual regression & hosted Storybook
- `deploy.yml` – Vercel production deployment on `main`

## Contributing

1. Create a branch
2. Implement / update stories
3. `npm run lint && npm test` (tests placeholder)
4. Commit (husky will run lint-staged)
5. Open PR – Chromatic & Vercel previews step in

## Roadmap

- Add Shadcn/ui base components
- Add MDX docs stories with design rationale
- Add accessibility test thresholds (a11y: error in CI)
- Add visual test baseline locking strategy

## License

MIT
