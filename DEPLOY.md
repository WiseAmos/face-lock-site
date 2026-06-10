# Deploy to Vercel

The site is built, committed, and pushed to GitHub. Last step: deploy to Vercel.

## Status: blocked — no VERCEL_TOKEN
- Vercel CLI 54.6.1 is installed at `/root/.hermes/node/bin/vercel`
- `/root/.local/share/com.vercel.cli/auth.json` is `{}` (no saved login)
- No `VERCEL_TOKEN` in `/root/.hermes/.env` or any profile env
- Need either a token or interactive login

## Option A — quick (1 line, no browser)
Get a token at https://vercel.com/account/tokens (Settings → Tokens → Create Token, scope: Full Account, TTL: 24h or your choice).

Add it to `/root/.hermes/.env`:
```bash
echo "VERCEL_TOKEN=***" >> /root/.hermes/.env  # paste token, chmod 600 already
chmod 600 /root/.hermes/.env
```
Then run:
```bash
cd /root/face-lock-site
npx vercel link --yes --token "$VERCEL_TOKEN"
npx vercel deploy --prod --yes --token "$VERCEL_TOKEN"
```

## Option B — interactive login (no token)
```bash
cd /root/face-lock-site
npx vercel login          # paste one-time code in browser
npx vercel link --yes     # links to a new/existing Vercel project
npx vercel deploy --prod --yes
```

## What you'll get
- Production URL like `https://face-lock-site-<hash>.vercel.app`
- Auto-deploy on every push to `main` once linked
- Static: no build step, ~50 ms TTFB, served from Vercel's edge

## Files that will deploy
```
index.html       16 KB
styles.css       18 KB
app.js            2.6 KB
vercel.json       headers + cache rules
package.json     npx serve dev script
README.md         docs
.gitignore        node_modules etc
```
