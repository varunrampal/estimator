Plant estimating, sourcing and procurement support for landscape and restoration projects across British Columbia. This is a Next.js App Router website with statically rendered service pages, a structured local blog, technical SEO routes and an estimate-request interface.

## Requirements

- Node.js 20.9 or newer
- npm

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL`.
3. Start the development server with `npm run dev`.
4. Open `http://localhost:3000`.

## Commands

- Development: `npm run dev`
- Lint: `npm run lint`
- TypeScript: `npm run typecheck`
- Production build: `npm run build`
- Serve a production build: `npm run start`

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used by metadata, robots and sitemap. Replace the Plant Estimators example domain before deployment. |
| `IONOS_SMTP_HOST` | IONOS outgoing mail server, normally `smtp.ionos.com`. |
| `IONOS_SMTP_PORT` | SMTP port, normally `465` for SSL/TLS. |
| `IONOS_SMTP_SECURE` | Set to `true` when using port `465`; set to `false` for STARTTLS on port `587`. |
| `IONOS_SMTP_USER` | Full IONOS mailbox address used to authenticate and send. |
| `IONOS_SMTP_PASSWORD` | Server-only password for the IONOS mailbox. Never prefix it with `NEXT_PUBLIC_`. |
| `IONOS_SMTP_FROM_NAME` | Sender display name shown in email clients, for example `Plant Estimators`. |
| `CONTACT_EMAIL` | IONOS inbox that receives estimate requests and contact messages. |
| `BLOB_READ_WRITE_TOKEN` | Reserved for future private document storage; current estimate attachments are emailed through IONOS SMTP. |

Never commit `.env.local` or production credentials. Estimate and contact requests are sent through IONOS SMTP when all required mail settings are present. Without them, the endpoints return HTTP 503 and send nothing. Estimate documents are attached to the notification email; IONOS and the recipient mailbox process and retain them according to their own settings. Test the full delivery path before launch and update the privacy notice with the business's actual practices.

## Vercel deployment

1. Push the project to a Git provider and import it in Vercel. The Next.js framework and `npm run build` command should be detected automatically.
2. Set `NEXT_PUBLIC_SITE_URL` to the final canonical HTTPS origin in the Vercel project's environment variables.
3. Set the IONOS SMTP credentials and project inbox in Vercel environment variables. Never expose secrets through `NEXT_PUBLIC_` variables.
4. Deploy a preview, test every route and form, then promote the production deployment.

## Custom domain

Add the chosen domain in Vercel project settings, follow its DNS instructions at the registrar, and enable HTTPS. Set `NEXT_PUBLIC_SITE_URL` to the preferred canonical version (for example, `https://www.example.ca` or `https://example.ca`) and redeploy. Avoid publishing both variants as separate canonical hosts.

## Search Console

1. Verify the production domain in Google Search Console using DNS or the verification method selected for the property.
2. Submit `https://YOUR_DOMAIN/sitemap.xml` after deployment.
3. Inspect the homepage and priority service pages, then monitor indexing and Core Web Vitals.
4. Keep `NEXT_PUBLIC_SITE_URL` aligned with the verified canonical domain.

## Google Analytics

No analytics ID is hard-coded and no analytics script is loaded. Create a property when the business is ready, then add its measurement ID through the deployment environment and a consent/privacy-reviewed integration. The commented `NEXT_PUBLIC_GA_MEASUREMENT_ID` entry in `.env.example` is a reminder, not an active integration. Do not put Search Console verification values or analytics secrets in source code.

## Where to update business details

- Brand, service-area and contact copy: `components/site-header.tsx`, `components/site-footer.tsx`, `app/contact/page.tsx`, `app/request-estimate/page.tsx` and `lib/site.ts`.
- Organization structured data: `app/page.tsx` and service data in `app/[slug]/page.tsx`.
- Domain and canonical origin: `NEXT_PUBLIC_SITE_URL` in the deployment environment.
- Confirm `info@plantestimators.ca` and review the `privacy-policy` and `terms` records in `lib/site.ts` before launch. These starter notices are not legal advice.
- Replace development Unsplash selections in `app/page.tsx` and `content/articles.ts` with owned or licensed images and accurate alt text.

## SEO metadata

Root defaults are in `app/layout.tsx`. Service and audience page titles/descriptions are in `lib/site.ts`; contact, request and blog-index metadata is in each route; article metadata is derived from `content/articles.ts`. `app/robots.ts` and `app/sitemap.ts` generate the crawl files.

## Adding a blog post

Add an `Article` object to `content/articles.ts` with a unique slug, description, ISO date, author, category, reading time, featured image and useful alt text. Write a substantial introduction and several sections with complete paragraphs. The blog index, static article route, Article JSON-LD and sitemap are generated from this collection.

## Form and upload hardening before launch

The estimate endpoint validates required fields, project type, selected services, file extensions, declared MIME types, basic document signatures, file count and size. Before launch, enforce request limits at the hosting layer, add malware scanning and abuse protection/rate limiting, define email and attachment retention/deletion practices, and update the privacy notice. If adding storage later, use private/quarantined object storage with short-lived access. Confirm the workflow treats project documents confidentially and uses them only to evaluate requested services.
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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
