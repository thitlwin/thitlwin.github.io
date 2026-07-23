# Thit Lwin — Portfolio (thitlwin.github.io)

Next.js portfolio for https://thitlwin.github.io/

Legacy static paths (`/joy_app`, `/tayarr_app`, `/hso_openedx`, verification files) live under `public/` and are included in the build automatically.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # writes static site to out/
```

## Deploy

Push to `main`. GitHub Actions builds and publishes `out/` to GitHub Pages.

**One-time:** Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**
