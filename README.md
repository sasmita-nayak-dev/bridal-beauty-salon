# ÉLORA Beauty Studio: bridal salon demo (Parts 1 + 2)

Next.js App Router + TypeScript + Tailwind CSS 4. Frontend-only: no database, auth, payments or booking backend.

## Routes
`/` · `/services` · `/bridal` · `/gallery` · `/offers` · `/about` · `/contact` · `/book` (demo) · `/privacy` · `/sitemap.xml` · `/robots.txt`

## Customising for a client
All content lives in `src/data/`:

| File | Controls |
| --- | --- |
| `salon.ts` | name, phone, WhatsApp number, address, hours, social links, maps link, SEO/site URL, `isDemo` |
| `services.ts` | services, sample prices, durations, highlights, enquiry messages |
| `packages.ts` | bridal packages, bridal process steps, consultation/trial copy |
| `gallery.ts` | portfolio images, categories, `galleryFilterCategories` |
| `offers.ts` | promotional offers (no countdowns or scarcity claims) |
| `team.ts` | team members (sample content) |
| `faqs.ts` | bridal FAQ |
| `booking.ts` | sample time slots for the booking demo |
| `testimonials.ts` | placeholder testimonials (labelled as demo) |

**Images:** replace the placeholder SVGs in `public/images/` (keep file names) or change the paths in the data files. JPG/WebP photographs are optimised by `next/image` automatically. Only use photographs the studio owns or has permission to publish, and set `isSalonWork: true` for those in `gallery.ts`.

**Before launch:** set `isDemo: false` in `salon.ts`; replace every sample price, address, team bio, credential, FAQ answer and offer; set `NEXT_PUBLIC_SITE_URL`; review `/privacy`.

## Booking demo and forms
`/book` and the `/contact` form validate input in the browser and build a URL-encoded WhatsApp message (`src/lib/messages.ts`). Nothing is stored or sent by this site; the visitor sends the message inside WhatsApp. Validation rules live in `src/lib/validation.ts`.

## SEO
- Per-page metadata via `src/lib/seo.ts`.
- `robots.txt` **disallows crawling while `isDemo` is true** so sample details are not indexed; it allows crawling when `isDemo` is false. The root layout's `robots` meta follows the same flag.
- LocalBusiness JSON-LD is emitted only when `salon.seo.localBusiness.enabled` is true **and** a verified `address` is provided.
- No Open Graph image is set (the placeholder artwork is not suitable). Add `opengraph-image` once real photography exists.

## Scripts
`npm run dev` · `npm run lint` · `npm run build`
