// Articolele de blog, importate ca JSON din vechiul site.
export interface Post {
  slug: string; title: string; date: string; categories: string[]; description: string; html: string; words: number;
  cover: { src: string; width: number; height: number } | null;
}
const RENAME: Record<string, string> = {
  'Email Maketing': 'Email Marketing',
  'Uncategorized @ro': 'Marketing Online',
  'carti de marketing & afaceri': 'Cărți',
  'Google ads': 'Google Ads',
  'Evenimente din lumea business-ului': 'Evenimente',
  'Echipa DAR Media': 'Echipa',
};
import { services } from './services';
import { resources } from './resources';

// Linkurile interne din articolele vechi: le aducem la structura nouă sau, dacă pagina nu mai există, păstrăm doar textul.
const STATIC = ['', 'servicii', 'despre-noi', 'povestea-noastra', 'echipa-darmedia', 'portofoliu', 'studii-de-caz', 'blog', 'ebook', 'aparitii-media', 'cariere', 'contact', 'audit-gratuit', 'termeni-si-conditii', 'politica-de-confidentialitate', 'politica-de-cookies'];
const ALIAS: Record<string, string> = {
  quiz: 'audit-gratuit', 'lp-ebook': 'ebook', 'consultanta-gratuita': 'audit-gratuit', 'lp-consultanta-gratuita': 'audit-gratuit', 'pages/contact': 'contact',
  educatie: 'blog', articole: 'blog', 'email-marketing-2': 'email-marketing', 'servicii/reclame-google-adwords': 'google-ads', 'despre-noi/echipa-darmedia': 'echipa-darmedia',
  'blog-ecommerce-ce-este-si-cum-te-ajuta-sa-iti-cresti-vanzarile-online': 'blog-ecommerce-ce-este-si-cum-te-ajuta-sa-iti-cresti-vanzarile-online-2',
};
function fixLinks(html: string, valid: Set<string>) {
  return html.replace(/<a href="([^"]*)"([^>]*)>([\s\S]*?)<\/a>/g, (all, href: string, rest: string, inner: string) => {
    if (/^(https?:|mailto:|tel:)/.test(href)) return all;
    if (!href.startsWith('/')) return inner;
    if (/\.(pdf|webp|png|jpe?g)$/i.test(href)) return all;
    const [path, hash = ''] = href.split('#');
    let key = path.replace(/^\/|\/$/g, '').replace(/^\d{4}\/\d{2}\/\d{2}\//, '');
    key = ALIAS[key] ?? key;
    if (!valid.has(key)) key = key.replace(/^servicii\//, '');
    if (!valid.has(key) && /^(category|blog)\//.test(key)) key = 'blog';
    if (!valid.has(key)) return inner;
    return `<a href="/${key ? key + '/' : ''}${hash ? '#' + hash : ''}"${rest}>${inner}</a>`;
  });
}

const files = import.meta.glob<{ default: Post }>('../content/posts/*.json', { eager: true });
const raw = Object.values(files).map((m) => m.default);
const valid = new Set<string>([...STATIC, ...raw.map((p) => p.slug), ...services.map((s) => s.slug), ...resources.map((r) => r.slug)]);
export const posts: Post[] = raw
  .map((p) => ({ ...p, html: fixLinks(p.html, valid), title: p.title.replace(/\s+/g, ' ').trim(), categories: [...new Set(p.categories.map((c) => RENAME[c] ?? c))] }))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
const MONTHS = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'];
export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};
export const readingTime = (words: number) => Math.max(1, Math.round(words / 220));
export const categories = [...new Set(posts.flatMap((p) => p.categories))].sort((a, b) => a.localeCompare(b, 'ro'));
