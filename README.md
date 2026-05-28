# Harborview Medical Clinic — Website

A modern clinic landing site built with **Next.js 16**, global CSS theming (light/dark), Framer Motion, and **Resend** for contact form email.

## Features

- Five pages: Home, Services, About, Our Clinic (gallery), Contact
- Auto-hiding floating navigation
- Light / dark theme toggle in the footer
- Medical-focused content in [`content/site.ts`](content/site.ts)

## Setup

```bash
npm install
cp .env.example .env.local
# Add Resend credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit clinic name, doctor details, services, images, and hours in [`content/site.ts`](content/site.ts).
