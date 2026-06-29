# Vinci Labs — Website

Bilingual (Portuguese / English) static marketing site for **Vinci Labs**, built with
[Astro](https://astro.build) and deployed for free on **GitHub Pages** at
[`vincilabs.com.br`](https://vincilabs.com.br).

The site exists to present the company publicly and supports the **Apple Developer
Organization** account verification (company name, services, and a domain contact email).

## Stack

- **Astro** static site (pure HTML output, no client framework)
- **i18n routing** — `/` (Portuguese, default) and `/en/` (English)
- All copy lives in a single file: [`src/data/content.ts`](src/data/content.ts)

## Project structure

```
src/
  data/content.ts      ← all text for both languages (edit here)
  layouts/Base.astro   ← <head>, SEO/OpenGraph, global styles
  components/          ← Header, Hero, About, Services, Contact, Footer
  pages/index.astro    ← Portuguese page
  pages/en/index.astro ← English page
public/CNAME           ← custom domain (vincilabs.com.br)
.github/workflows/deploy.yml ← auto-deploy to GitHub Pages on push to main
```

## Local development

Requires Node.js 18.20.8+, 20.3.0+, or 22+.

```bash
npm install
npm run dev       # http://localhost:4321/  (PT)  and  /en/  (EN)
npm run build     # outputs static site to dist/
npm run preview   # serve the production build locally
```

## ✅ Before going live — fill in TODOs

Open [`src/data/content.ts`](src/data/content.ts) and replace the `TODO:` placeholders in
the `company` object:

- `legalName` — legal company name (razão social), e.g. `Vinci Labs Tecnologia LTDA`
- `cnpj` — CNPJ (optional to display)
- `location` — city / state, e.g. `São Paulo, SP`

The footer automatically hides any field still left as a `TODO`, so it stays clean until
you fill them in. The contact email (`contato@vincilabs.com.br`) is already set.

## Deployment (GitHub Pages)

1. **Create the repo and push:**
   ```bash
   git init
   git add .
   git commit -m "Initial Vinci Labs website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/vinci-labs.git
   git push -u origin main
   ```
2. In the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions.**
   The included workflow builds and publishes automatically on every push to `main`.
3. Wait for the **Actions** tab run to go green. The site will be live at
   `https://<your-username>.github.io/vinci-labs/` (temporary URL) — note that styling/links
   are tuned for the custom apex domain, so the final domain below is the canonical one.

## Custom domain — `vincilabs.com.br`

1. In GitHub: **Settings → Pages → Custom domain** → enter `vincilabs.com.br` → **Save.**
   (The `public/CNAME` file already pins this domain on each deploy.)
2. At **Registro.br** (DNS for the `.com.br` domain), add these records:

   | Type  | Host / Name              | Value                         |
   | ----- | ------------------------ | ----------------------------- |
   | A     | `@` (apex / vincilabs.com.br) | `185.199.108.153`        |
   | A     | `@`                      | `185.199.109.153`             |
   | A     | `@`                      | `185.199.110.153`             |
   | A     | `@`                      | `185.199.111.153`             |
   | CNAME | `www`                    | `<your-username>.github.io.`  |

   (Optionally add the matching AAAA/IPv6 records: `2606:50c0:8000::153`, `…8001::153`,
   `…8002::153`, `…8003::153`.)
3. Wait for DNS to propagate (minutes to a few hours). Back in **Settings → Pages**, once the
   domain is verified, enable **Enforce HTTPS** (free Let's Encrypt certificate).
4. Confirm `https://vincilabs.com.br` loads with a valid certificate.

## Apple Developer Organization checklist

- [x] Public website live on the company domain
- [x] Company name and services clearly visible
- [x] Contact email on the domain (`contato@vincilabs.com.br`)
- [ ] Legal name / CNPJ / location filled in (`src/data/content.ts`)
- [ ] D-U-N-S number obtained for the legal entity (required by Apple; the website supports
      verification but does not replace the D-U-N-S registration)
