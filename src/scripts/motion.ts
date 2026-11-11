// Interacțiuni, vanilla și minime. Fără efecte decorative: header, meniuri, numărătoare, marquee.

const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const raf = (fn: () => void) => requestAnimationFrame(fn);

/* ---------- intro: marcat ca văzut, scos din DOM după cortină */
const intro = document.querySelector<HTMLElement>('[data-intro]');
if (intro) {
  const done = () => intro.remove();
  if (root.classList.contains('no-intro')) intro.remove();
  else { intro.addEventListener('animationend', (e) => { if ((e as AnimationEvent).animationName.includes('intro-wipe')) done(); }); setTimeout(done, 2400); }
}

/* ---------- header: ascuns la scroll în jos, revine la scroll în sus */
const header = document.querySelector<HTMLElement>('[data-header]')!;
const megaBtn = document.querySelector<HTMLButtonElement>('[data-mega-toggle]');
const mega = document.querySelector<HTMLElement>('[data-mega]');
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
const megaOpen = () => !!mega && !mega.hidden;
const menuOpen = () => !!menu && !menu.hidden;
let lastY = window.scrollY;
const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle('is-scrolled', y > 8);
  if (y > lastY + 4 && y > 320 && !megaOpen() && !menuOpen() && !header.contains(document.activeElement)) header.classList.add('is-hidden');
  else if (y < lastY - 4) header.classList.remove('is-hidden');
  lastY = y;
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
header.addEventListener('focusin', () => header.classList.remove('is-hidden'));

/* ---------- meniul de servicii (disclosure accesibil) */
const setMega = (open: boolean, focusBtn = false) => {
  if (!megaBtn || !mega) return;
  megaBtn.setAttribute('aria-expanded', String(open));
  mega.hidden = !open;
  if (!open && focusBtn) megaBtn.focus();
};
megaBtn?.addEventListener('click', () => setMega(!megaOpen()));
document.addEventListener('click', (e) => { if (megaOpen() && !header.contains(e.target as Node)) setMega(false); });
header.addEventListener('focusout', (e) => {
  const to = e.relatedTarget as Node | null;
  if (megaOpen() && to && !mega!.contains(to) && to !== megaBtn) setMega(false);
});

/* ---------- meniul mobil pe tot ecranul */
const outside = [document.querySelector('main'), document.querySelector('[data-footer]'), document.querySelector('[data-sticky]')];
const setMenu = (open: boolean) => {
  if (!menuBtn || !menu) return;
  menuBtn.setAttribute('aria-expanded', String(open));
  if (open) { menu.hidden = false; raf(() => raf(() => menu.classList.add('is-open'))); }
  else { menu.classList.remove('is-open'); setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, reduce ? 0 : 220); }
  document.body.classList.toggle('menu-open', open);
  outside.forEach((el) => el && ((el as HTMLElement).inert = open));
  if (open) setTimeout(() => menu.querySelector<HTMLElement>('a')?.focus(), 30);
};
menuBtn?.addEventListener('click', () => setMenu(!menuOpen()));
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (megaOpen()) setMega(false, true);
  if (menuOpen()) { setMenu(false); menuBtn?.focus(); }
});
matchMedia('(min-width: 1101px)').addEventListener('change', () => menuOpen() && setMenu(false));

/* ---------- cifrele cresc o singură dată, când intră în ecran */
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((es) => es.forEach((en) => {
    if (!en.isIntersecting) return;
    io.unobserve(en.target);
    const el = en.target as HTMLElement; const end = parseFloat(el.dataset.count!); const t0 = performance.now(); const dur = 1100;
    const step = () => { const p = Math.min(1, (performance.now() - t0) / dur); el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 4)))); if (p < 1) raf(step); };
    el.textContent = '0'; raf(step);
  }), { threshold: 0.7 });
  counters.forEach((c) => io.observe(c));
}

/* ---------- marquee: pauză la hover și la focus (tastatură), fără buton */
document.querySelectorAll<HTMLElement>('[data-marquee]').forEach((m) => {
  m.addEventListener('focusin', () => m.classList.add('is-paused'));
  m.addEventListener('focusout', () => m.classList.remove('is-paused'));
});

/* ---------- apariție la scroll, cu decalaj automat între copii ([data-stagger]) */
document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((list) => {
  [...list.children].forEach((el, i) => {
    const c = el as HTMLElement;
    if (!c.hasAttribute('data-reveal')) c.setAttribute('data-reveal', '');
    c.style.setProperty('--d', `${Math.min(i, 8) * 70}ms`);
  });
});
const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  reveals.forEach((el) => io.observe(el));
} else reveals.forEach((el) => el.classList.add('is-in'));

/* ---------- bara de progres a paginii */
const bar = document.querySelector<HTMLElement>('[data-progress]');
if (bar && !reduce) {
  let ticking = false;
  const upd = () => { ticking = false; const max = document.documentElement.scrollHeight - innerHeight; bar.style.setProperty('--p', String(max > 0 ? Math.min(1, scrollY / max) : 0)); };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; raf(upd); } }, { passive: true });
  upd();
}
