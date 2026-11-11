# DAR Media — website

Redesign al site-ului [darmedia.ro](https://darmedia.ro/), construit ca site static cu [Astro](https://astro.build/).

## Comenzi

```bash
npm install
npm run dev      # server local de dezvoltare
npm run build    # generează site-ul în dist/
npm run preview  # servește build-ul local
```

## Structură

- `src/data/site.ts` — date de contact, navigație, echipă, clienți, testimoniale, FAQ, studii de caz
- `src/data/services.ts` — conținutul celor 15 pagini de servicii
- `src/data/resources.ts` — paginile de ebook-uri / resurse gratuite și paginile de descărcare
- `src/data/forms.json` — formularele Brevo (aceleași endpoint-uri ca pe vechiul site)
- `src/content/posts/*.json` — articolele de blog importate
- `src/data/pages/*.json` — paginile legale
- `src/styles/global.css` — design tokens (culori, tipografie fluidă, spațiere, radius, umbre) și stiluri de bază. Bază aproape neagră, un singur accent: magenta din logo `#ED1E79`
- `src/data/logos.ts` + `public/media/logos/` — logourile reale ale clienților/partenerilor (de pe darmedia.ro), monocrome
- `src/assets/site/` — imaginile optimizate de Astro (`<Picture>`, AVIF/WebP + srcset); `public/media/covers/640/` — coperți la 640px pentru srcset
- `src/components/` — componente; `src/components/pages/` — șabloane pentru paginile generate din date
- `src/pages/[slug].astro` — ruta comună pentru servicii, articole, resurse, pagini legale
- `public/media/` — imagini optimizate (WebP); `public/wp-content/uploads/` — PDF-urile ebook-urilor, la aceleași adrese ca înainte

Adresele paginilor sunt păstrate identic cu cele de pe vechiul site. Excepție: `studiu-de-caz-newsletttere-ecommerce` → `studiu-de-caz-newslettere-ecommerce` (redirect 301 în `astro.config.mjs` și `vercel.json`).

Numărul WhatsApp e setat în `company.whatsapp` (`src/data/site.ts`); `null` ascunde butonul.
