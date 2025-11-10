# Proximate — React + Vite scaffold (restructure branch preview)

This is a clean scaffold for Proximate using React + Vite (JavaScript). It contains a simple app flow:
Splash → Onboarding → Signup → Dashboard → Profile

Local dev
1. Install dependencies:
   npm install

2. Dev server:
   npm run dev
   Open http://localhost:5173

Build & Netlify
- The project includes a build-time inject hook (scripts/inject-key.js) pattern (optional).
- On Netlify, add the environment variable MAPS_API_KEY in Site settings → Build & deploy → Environment.
- The netlify.toml currently runs `npm run netlify-build`, which calls a build script if you add an inject step.

Notes
- No API keys are included in the scaffold. The app loads Google Maps if window.__MAPS_API_KEY__ exists or if a /config endpoint returns a MAPS_API_KEY.
- Next steps I can take on the restructure branch:
  - Add scripts/inject-key.js and a Netlify function for /config (choose runtime or build-time injection).
  - Replace placeholders with your real UI pages from the existing repo.
  - Add CI (link checker) and PR checks.
