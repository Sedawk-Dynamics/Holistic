# Holistic Healing Pathways Foundation

The foundation's website — Next.js 15 (App Router), React 19 and TypeScript.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm start          # serve the production build
npm run lint
npm run typecheck
```

## Pages

| Route                       | Source page (now in `legacy/`)  |
| --------------------------- | ------------------------------- |
| `/`                         | `index.html`                    |
| `/about`                    | `about.html`                    |
| `/nadi-nakshatra-astrology` | `Nadi_Nakshatra_Astrology.html` |
| `/mental-health`            | `mental-health.html`            |
| `/contact`                  | `contact.html`                  |

The old `.html` URLs permanently redirect to the new routes (see `next.config.ts`),
so existing links and bookmarks keep working.

## How it's laid out

```
app/
  layout.tsx        <html>, fonts, the `has-js` bootstrap
  globals.css       design tokens, reset, base type, every @keyframes
  page.tsx          home        + home.css
  about/            page.tsx    + about.css
  contact/          page.tsx    + contact.css
  mental-health/    page.tsx    + mental-health.css
  nadi-nakshatra-astrology/     page.tsx + nadi.css
components/         Header, footers, and the scroll/reveal behaviour
lib/site.ts         nav, routes, contact details, shared copy
public/images/      every image the site uses
legacy/             the original standalone HTML pages, for reference
```

### Styling

Each page owns a stylesheet scoped under a `.p-*` class (`.p-home`, `.p-about`, …),
and its markup is wrapped in that class. This is deliberate rather than incidental:
the five original pages share class names (`.wrap`, `.btn`, `.head`, `.hero`,
`.form`, `.stat`, `footer`) whose **values genuinely differ** between them — home's
`.wrap` is 1280px wide while the rest are 1240px, Nadi's footer is three columns
while the others are four, and so on. Scoping keeps each page pixel-identical to
its original and lets you edit one page without disturbing another.

Anything truly shared — the colour tokens, the reset, and all `@keyframes` — lives
in `app/globals.css` and must not be repeated in a page stylesheet.

### Behaviour

The hand-written scroll JS from the original pages is now components:

| Component                        | Replaces                                             |
| -------------------------------- | ---------------------------------------------------- |
| `ScrollProgress`                 | the `#progress` bar width handler                    |
| `BackToTop`                      | the `#toTop` show/hide + smooth scroll               |
| `Header`                         | the `scrolled` class and the mobile menu toggle      |
| `Reveal` / `RevealScope`         | the `.reveal` → `.in` IntersectionObserver           |
| `CountUp`                        | the `data-count` / `data-suffix` counters            |
| `HeroPetals`, `ContactParticles` | the randomly-placed hero petals and contact dots     |

`Reveal` and `CountUp` take tuning props because home animates on slightly
different thresholds than the other pages; their defaults match the other pages.

### The Nadi guidance topics

The 16 cards in the Nadi page's "What It Can Predict" section, and the 16 pages
behind them, are all driven by one file: `lib/predict.tsx`. Each entry carries a
slug, card title, page title, teaser and icon — plus an optional `body: string[]`
that the topic page renders as paragraphs once you fill it in.

Card artwork lives in `public/images/predict/<slug>.jpg`; see the README there for
the filenames and licensing. A topic with no image falls back to a gradient tile
and its icon, so a partial set is fine.

The grid shows 4 cards and loads 4 more per click (`PAGE_SIZE` in
`components/PredictGrid.tsx`).

### Fonts and images

Fonts are self-hosted via `next/font` (Cormorant Garamond + Inter) and every image
lives in `public/images/`. Nothing is fetched from a third party at runtime, so the
site works offline and on first load — the original needed a connection for the
fonts, logo and founder photo.

## Deliberate differences from the original

The port is otherwise pixel-for-pixel (verified by screenshot diff against the old
pages: 0.08%–0.43% of pixels, all of it animation phase plus a 1px button height).
These five things were changed on purpose, because each was a bug:

- **The hero was invisible with reduced motion.** `prefers-reduced-motion` disabled
  the `rise` animation, but that animation is what faded the hero in — so the
  headline, lead paragraph and both buttons all sat at `opacity: 0` permanently.
  They are now shown.
- **The mobile menu button had no icon on the home page.** `index.html`'s
  `<button class="menu-btn" … onclick="…"` was missing its closing `>`, so the
  browser parsed `<svg`, `width`, `height`… as attributes of the button and the
  hamburger never rendered. The other pages were unaffected.
- **The home page never highlighted its nav link.** Its scroll-spy compared nav
  hrefs against `#section` ids, but the nav links point at other pages, so it
  stripped `active` from every link on load. Active state is now derived from the
  current route.
- **The mobile menu stayed open after navigating**, and could get stuck as a
  floating panel if you resized past 1080px while open.
- `#toTop` uses `aria-label="Back to top"` everywhere (some pages said just "Top").

## Known issues carried over from the original

- **`Healing Oil` product image** — the Unsplash URL the original pointed at
  (`photo-1611073615830-9f76b2f4a37b`) returns 404, so that card has always shown
  an empty gradient tile. Drop a file at `public/images/healing-oil.jpg` and it
  will appear; nothing else needs changing.
- **Enquiry forms don't submit.** As in the original, the submit buttons show a
  notice pointing at `nikunjhhp@gmail.com` (`FORM_NOTICE` in `lib/site.ts`). Wire
  them to Formspree, a route handler, or a server action when you're ready.
- **Newsletter sign-up** in the home footer is likewise not wired up.
- **Testimonials and team roles are placeholders** — the original marks both as
  sample content to replace before going live.
- `hero-flower-light.png` (1.9 MB) and `about-illustration.png` (2.4 MB) are large
  for what they are. They're served as-is to keep the design untouched; switching
  those two to `next/image` is the easy win if you want it.
