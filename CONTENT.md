# Kazan Um Ahmed — Content Checklist

This file lists every placeholder text, image, and contact detail that should be replaced before launching the site.

## Global / Brand

- [ ] Business name variations (currently: `Kazan Um Ahmed | كازان أم أحمد`)
- [ ] Primary brand color palette (already configured in `src/app/globals.css` via tweakcn)
- [ ] Favicon (`src/app/favicon.ico`)
- [ ] Default language preference in `src/lib/i18n.ts` (`defaultLocale`)

## Contact Details

Update in the following files:

- [ ] WhatsApp number — `src/lib/data.ts` (`WHATSAPP_NUMBER`)
- [ ] WhatsApp number / phone — `src/app/layout.tsx` JSON-LD schema (`telephone`)
- [ ] Email — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`footer.contact.email`)
- [ ] Email — `src/app/layout.tsx` JSON-LD schema (`email`)
- [ ] Location / address — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`footer.contact.location`)
- [ ] Location / address — `src/app/layout.tsx` JSON-LD schema (`address`)
- [ ] Working hours — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`footer.hours`)
- [ ] Working hours — `src/app/layout.tsx` JSON-LD schema (`openingHoursSpecification`)

## SEO

- [ ] Page title — `src/app/layout.tsx` (`metadata.title`)
- [ ] Meta description — `src/app/layout.tsx` (`metadata.description`)
- [ ] Keywords — `src/app/layout.tsx` (`metadata.keywords`)
- [ ] Open Graph / Twitter metadata — `src/app/layout.tsx`
- [ ] Domain / canonical URL — `src/app/layout.tsx` JSON-LD schema (`url`)
- [ ] Schema.org `FoodEstablishment` + `CateringService` details — `src/app/layout.tsx`

## Navigation

- [ ] Nav link labels — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`nav.*`)

## a. Hero Section (`src/components/hero.tsx`)

- [ ] Hero floating logo — replace `/images/logo.png` in the `<Image>` component (keeps the slow spin animation)
- [ ] Eyebrow tagline — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`hero.eyebrow`)
- [ ] Headline — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`hero.headline`)
- [ ] Sub-headline — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`hero.subHeadline`)
- [ ] CTA button labels — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`hero.ctaBook`, `hero.ctaMenu`)
- [ ] Trust strip items — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`hero.trust1`, `hero.trust2`, `hero.trust3`)

## b. About Us Section (`src/components/about.tsx`)

- [ ] Home kitchen prep photo — replace `<PlaceholderImage label={t.about.imageLabel} />`
- [ ] Eyebrow — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`about.eyebrow`)
- [ ] Heading — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`about.heading`)
- [ ] Company story paragraphs — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`about.paragraph1`, `about.paragraph2`, `about.paragraph3`)

## c. Pricing Section (`src/components/pricing.tsx` + `src/lib/data.ts`)

- [ ] Package names & descriptions — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`pricing.packages.*`)
- [ ] Guest counts per package — `src/lib/data.ts` (`feeds`)
- [ ] Original and current prices — `src/lib/data.ts` (`originalPrice`, `currentPrice`)
- [ ] Section headings — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`pricing.oneLambTitle`, `pricing.twoLambTitle`)
- [ ] Inclusions subtitle under the main heading — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`pricing.subheading`)

## d. How It Works Section (`src/components/how-it-works.tsx`)

- [ ] Step titles & descriptions — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`howItWorks.step1` to `howItWorks.step4`)

## e. Photo Gallery (`src/components/gallery.tsx`)

- [ ] Gallery image 1 — replace `[FOOD PRESENTATION 1]` placeholder
- [ ] Gallery image 2 — replace `[CHAFING DISH SETUP]` placeholder
- [ ] Gallery image 3 — replace `[LAMB PLATTER CLOSE-UP]` placeholder
- [ ] Gallery image 4 — replace `[FAMILY GATHERING TABLE]` placeholder
- [ ] Gallery image 5 — replace `[SIDE DISHES SPREAD]` placeholder
- [ ] Gallery image 6 — replace `[PACKED DELIVERY TRAY]` placeholder
- [ ] Gallery labels — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`gallery.imageLabels.*`)

## f. Booking Form (`src/components/booking-form.tsx`)

- [ ] Form heading & subtext — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`booking.heading`, `booking.subtext`)
- [ ] Form field labels — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`booking.fields.*`)
- [ ] Order preview labels — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`booking.orderPreview.*`)
- [ ] WhatsApp message template — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`booking.whatsappMessage`)
- [ ] Submit button label — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`booking.submit`)
- [ ] WhatsApp number — `src/lib/data.ts` (`WHATSAPP_NUMBER`)
- [ ] Note: the phone number field has been removed — customers send the booking directly from their own WhatsApp number

## g. Footer (`src/components/footer.tsx` + `src/components/social-links.tsx`)

- [ ] Follow Us heading — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`footer.followUs`)
- [ ] Social platform labels — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`footer.social.*`)
- [ ] Actual social profile URLs — `src/components/social-links.tsx` (`socials[].href`):
  - [ ] TikTok
  - [ ] Instagram
  - [ ] Facebook
  - [ ] YouTube
  - [ ] X (Twitter)
- [ ] Quick Links heading — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`footer.quickLinks`)
- [ ] Quick link labels — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`footer.links.*`)
- [ ] Contact info — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`footer.contact.*`)
- [ ] Working hours — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`footer.hours.*`)
- [ ] Copyright — `src/dictionaries/en.json` + `src/dictionaries/ar.json` (`footer.copyright`)

## Floating WhatsApp Button (`src/components/whatsapp-fab.tsx`)

- [ ] Default inquiry message — update in component or dictionary (`t.whatsappFab.label`)
- [ ] WhatsApp number — `src/lib/data.ts` (`WHATSAPP_NUMBER`)

## Images — Recommended Sizes

- Hero floating logo: 512×512 or larger PNG with transparent background
- About photo: 1200×900 (4:3), kitchen or prep scene
- Gallery photos: 1200×900 (4:3) each

## Notes

- Image placeholders use the `PlaceholderImage` component in `src/components/placeholder-image.tsx`.
- The hero logo is loaded directly via Next.js `<Image src="/images/logo.png" />`.
- To replace a placeholder, swap the component for a Next.js `<Image>` or a `<img>` tag.
- Keep filenames descriptive (e.g., `logo.png`, `about-kitchen.jpg`, `gallery-platter-1.jpg`).


