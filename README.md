This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Remotion (asset generation)

This repo includes a separate Remotion project for generating short video assets (used as *exported files*, not runtime effects).

- **Location**: `remotion/`
- **Install**:

```bash
cd remotion
npm install
```

- **Preview**:

```bash
npm run dev
```

- **Render hero video into the Next.js `public/` folder**:

```bash
cd remotion
npm run render:hero
```

This renders to `public/videos/hero-breathe.mp4`.

To show it on the homepage, run Next.js with:

```bash
NEXT_PUBLIC_SHOW_HERO_VIDEO=1 npm run dev
```

## Verification checklist

- **Code quality**:
  - `npm run lint`
  - `npm run build`
- **Manual mobile QA** (Chrome devtools device mode + a real phone if possible):
  - Scroll feels smooth (no jank during navbar changes)
  - Reduced-motion enabled: no distracting motion, 3D disabled, Lottie falls back
  - CTA buttons feel responsive to taps

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
