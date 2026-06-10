# face-lock · landing site

Marketing site for [WiseAmos/face-lock](https://github.com/WiseAmos/face-lock) — the CLI that auto-locks your laptop when you walk away.

## Stack
- Static HTML / CSS / vanilla JS
- Geist + Geist Mono via Google Fonts
- Deploys to Vercel with zero config

## Local preview
```bash
npx serve .
# → http://localhost:3000
```

## Design tokens
Measured directly from the Monako.ai reference (1280×720 PNG, k-means clustering on 8k quantized samples):

| token | value | role |
|---|---|---|
| `--bg` | `#040404` | page background |
| `--fg` | `#ffffff` | primary text |
| `--fg-mute` | `#a6a6a6` | secondary text |
| `--fg-dim` | `#5f5f5f` | huge dim subheads |
| `--acc` | `#5eead4` | brand accent (teal) |
| `--r-pill` | `16px` | CTA corner radius |

## Deploy
Hosted on Vercel. Production URL: https://face-lock.dev (or assigned subdomain).
