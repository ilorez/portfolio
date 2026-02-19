# Portfolio

A [Next.js](https://nextjs.org/) portfolio with Tailwind CSS, theme toggle, and responsive navbar.

**Package manager: Bun only.** Do not use npm, yarn, or pnpm.

## Setup

Install dependencies with Bun:

```bash
bun install
```

## Scripts

| Script   | Command       | Description                    |
|----------|---------------|--------------------------------|
| dev      | `bun run dev` | Start the development server   |
| build    | `bun run build` | Build for production        |
| start    | `bun run start` | Start production server      |
| lint     | `bun run lint`  | Run ESLint                   |
| clean    | `bun run clean` | Remove `.next` cache (fixes webpack cache errors) |

## Getting Started

1. Install dependencies: `bun install`
2. Run the dev server: `bun run dev`
3. Open [http://localhost:3000](http://localhost:3000)

If you see webpack cache errors (e.g. `ENOENT` on `.next/cache/...`), run `bun run clean` then `bun run dev` again.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Bun](https://bun.sh/)
