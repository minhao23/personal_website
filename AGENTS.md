# figma-make-app

Next.js + Tailwind CSS project.

## Development Server

Use Bun to run the Next.js development server.

- `bun run dev` starts the local app
- Default local URL: `http://localhost:3000`
- Hot reload is handled by Next.js

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `app/layout.tsx` - Root HTML shell and global CSS import
- `app/page.tsx` - Home page route
- `app/portfolio-page.tsx` - Main client component for the portfolio UI
- `app/globals.css` - Global CSS entrypoint and Tailwind import
- `package.json` - Project dependencies and Bun/Next scripts
- `next.config.ts` - Next.js configuration
- `postcss.config.mjs` - Tailwind PostCSS wiring
- `tsconfig.json` - TypeScript configuration for Next.js

## Dependencies

- Runtime: Next.js 15, React 19, and React DOM 19
- Styling: Tailwind CSS v4 via PostCSS
- Build tooling: TypeScript 5.7
- Package manager: Bun
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** with PostCSS. `app/globals.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `app/globals.css`.

Keep CSS `@import` statements first, then add any font imports, `@font-face` rules, and global defaults there.
