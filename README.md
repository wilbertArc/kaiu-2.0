# KAIU Archived Website — React (Vite)

A faithful React port of the KAIU wood veneer site (Fraunces + Jost, walnut/veneer/moss palette) — same pages, same copy, same styling, no redesign.

## Run it

```
npm install
npm run dev
```

`npm run build` produces a static `dist/` you can deploy anywhere (Vercel, Netlify, etc).

## Structure

- `src/App.jsx` — router shell (Header + Routes + Footer).
- `src/pages/` — `Home`, `About`, `Products`, `Projects`, `Services`, `Contact` — one file per page, matching the original `.html` files 1:1.
- `src/components/Header.jsx` / `Footer.jsx` — shared chrome, nav active-state now driven by the route instead of a script comparing `location.pathname`.
- `src/grainsData.js` — the 200-swatch procedural grain catalog (10 species × 20 tonal variants), ported from `grains-data.js`.
- `src/index.css` — the original `styles.css`, unchanged.
- `public/images/` — logo.

## Behavior preserved

- Products page starts with 10 grains shown, "Load More Grains" reveals 20 more at a time, button hides once the full catalog (200) is shown, and the count label updates — same as the original `script.js`.
- Contact form shows the same "Thanks — your message has been received…" note on submit and resets the form, without a real submission endpoint (same placeholder behavior as the original).
- Nav active-state (`.active` on the current page's link) is handled by `useLocation()` instead of comparing `location.pathname` to link hrefs.
