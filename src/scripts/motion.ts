// Interacțiuni și mișcare, vanilla (fără biblioteci). Animăm doar transform, opacity și clip-path.
// Totul funcționează și arată corect fără JS sau cu prefers-reduced-motion.

const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
const raf = (fn: () => void) => requestAnimationFrame(fn);

/* ---------- intro: marcat ca văzut, scos din DOM după cortină */
const intro = document.querySelector<HTMLElement>('[data-intro]');
if (intro) {
  const done = () => { try { sessionStorage.setItem('dm-intro', '1'); } catch {} intro.remove(); };
  if (root.classList.contains('no-intro')) intro.remove();
  else { intro.addEventListener('animationend', (e) => { if ((e as AnimationEvent).animationName.includes('intro-wipe')) done(); }); setTimeout(done, 2600); }
}

/* ---------- header: ascuns la scroll în jos, revine la scroll în sus; mega-meniu și meniu mobil */
const header = document.querySelector<HTMLElement>('[data-header]')!;
let lastY = window.scrollY;
const megaBtn = document.querySelector<HTMLButtonElement>('[data-mega-toggle]');
const mega = document.querySelector<HTMLElement>('[data-mega]');
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
const megaOpen = () => !!mega && !mega.hidden;
const menuOpen = () => !!menu && !menu.hidden;
const onScrollHeader = () => {
  const y = window.scrollY;
  header.classList.toggle('is-scrolled', y > 8);
  if (!megaOpen() && !menuOpen() && !header.contains(document.activeElement)) header.classList.toggle('is-hidden', y > lastY && y > 320);
  if (y < lastY) header.classList.remove('is-hidden');
  lastY = y;
};
onScrollHeader();
window.addEventListener('scroll', onScrollHeader, { passive: true });
header.addEventListener('focusin', () => header.classList.remove('is-hidden'));

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

const outside = [document.querySelector('main'), document.querySelector('[data-footer]'), document.querySelector('[data-sticky]')];
const setMenu = (open: boolean) => {
  if (!menuBtn || !menu) return;
  menuBtn.setAttribute('aria-expanded', String(open));
  if (open) { menu.hidden = false; raf(() => raf(() => menu.classList.add('is-open'))); }
  else { menu.classList.remove('is-open'); setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, reduce ? 0 : 450); }
  document.body.classList.toggle('menu-open', open);
  outside.forEach((el) => el && ((el as HTMLElement).inert = open));
  if (open) setTimeout(() => menu.querySelector<HTMLElement>('a')?.focus(), 60);
};
menuBtn?.addEventListener('click', (e) => {
  const r = menuBtn.getBoundingClientRect();
  menu?.style.setProperty('--ox', `${r.left + r.width / 2}px`);
  menu?.style.setProperty('--oy', `${r.top + r.height / 2}px`);
  setMenu(!menuOpen());
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (megaOpen()) setMega(false, true);
  if (menuOpen()) { setMenu(false); menuBtn?.focus(); }
});
matchMedia('(min-width: 1101px)').addEventListener('change', () => menuOpen() && setMenu(false));

/* ---------- apariție la scroll */
const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  reveals.forEach((el) => io.observe(el));
} else reveals.forEach((el) => el.classList.add('is-in'));

/* ---------- fundalul paginii își schimbă culoarea când intră secțiunile (magenta → crem → prună) */
const themed = [...document.querySelectorAll<HTMLElement>('main[data-color-shift] [data-theme]:not([data-lock])')];
const fx = document.querySelector<HTMLElement>('[data-bgfx]');
if (themed.length && fx && 'IntersectionObserver' in window) {
  const setTheme = (t: string) => {
    if (root.dataset.theme === t) return;
    if (!reduce && root.classList.contains('bg-fx')) {
      fx.style.backgroundColor = getComputedStyle(document.body).backgroundColor;
      fx.classList.remove('is-fading'); void fx.offsetWidth; fx.classList.add('is-fading');
    }
    root.dataset.theme = t;
  };
  setTheme(themed[0].dataset.theme!);
  root.classList.add('bg-fx');
  const io = new IntersectionObserver((es) => es.forEach((en) => en.isIntersecting && setTheme((en.target as HTMLElement).dataset.theme!)), { rootMargin: '-50% 0px -50% 0px' });
  themed.forEach((s) => io.observe(s));
}

/* ---------- numere care cresc când intră în ecran */
const counters = document.querySelectorAll<HTMLElement>('[data-count]');
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((es) => es.forEach((en) => {
    if (!en.isIntersecting) return;
    io.unobserve(en.target);
    const el = en.target as HTMLElement; const end = parseFloat(el.dataset.count!); const t0 = performance.now(); const dur = 1400;
    const step = (t: number) => { const p = Math.min(1, (t - t0) / dur); const v = Math.round(end * (1 - Math.pow(1 - p, 3))); el.textContent = String(v); if (p < 1) raf(() => step(performance.now())); };
    el.textContent = '0'; raf(() => step(performance.now()));
  }), { threshold: 0.6 });
  counters.forEach((c) => io.observe(c));
}

/* ---------- parallax subtil + secțiunea orizontală fixată (desktop) */
const para = [...document.querySelectorAll<HTMLElement>('[data-speed]')];
const pins = reduce ? [] : [...document.querySelectorAll<HTMLElement>('[data-hscroll]')];
const wide = matchMedia('(min-width: 1024px)');
let ticking = false;
const frame = () => {
  ticking = false;
  const vh = window.innerHeight;
  for (const el of para) {
    const r = el.getBoundingClientRect();
    if (r.bottom < -200 || r.top > vh + 200) continue;
    const mid = r.top + r.height / 2 - vh / 2;
    el.style.transform = `translate3d(0, ${(-mid * parseFloat(el.dataset.speed!)).toFixed(1)}px, 0)`;
  }
  for (const sec of pins) {
    const track = sec.querySelector<HTMLElement>('[data-track]')!;
    if (!wide.matches) { track.style.transform = ''; continue; }
    const r = sec.getBoundingClientRect();
    const dist = sec.offsetHeight - vh;
    const p = Math.min(1, Math.max(0, -r.top / dist));
    const max = track.scrollWidth - track.clientWidth;
    track.style.transform = `translate3d(${(-p * max).toFixed(1)}px, 0, 0)`;
    sec.style.setProperty('--progress', p.toFixed(3));
  }
};
const sizePins = () => pins.forEach((sec) => {
  const track = sec.querySelector<HTMLElement>('[data-track]')!;
  sec.style.height = wide.matches ? `${track.scrollWidth - track.clientWidth + window.innerHeight}px` : '';
});
if (pins.length) { sizePins(); window.addEventListener('resize', () => { sizePins(); frame(); }); wide.addEventListener('change', () => { sizePins(); frame(); }); }
if (!reduce) {
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; raf(frame); } }, { passive: true });
  frame();
}

/* ---------- desktop: cursor custom, butoane magnetice, umplere care urmărește cursorul */
if (fine && !reduce) {
  const cur = document.querySelector<HTMLElement>('[data-cursor]');
  if (cur) {
    root.classList.add('has-cursor');
    let x = -100, y = -100, cx = x, cy = y;
    window.addEventListener('pointermove', (e) => { x = e.clientX; y = e.clientY; }, { passive: true });
    const loop = () => { cx += (x - cx) * 0.22; cy += (y - cy) * 0.22; cur.style.transform = `translate3d(${cx}px, ${cy}px, 0)`; raf(loop); };
    loop();
    document.addEventListener('pointerover', (e) => {
      const t = (e.target as HTMLElement).closest('a, button, summary, [data-cursor-label]');
      cur.classList.toggle('is-link', !!t);
      const label = (t as HTMLElement | null)?.dataset?.cursorLabel || '';
      cur.querySelector('span')!.textContent = label;
      cur.classList.toggle('has-label', !!label);
    });
    document.addEventListener('mouseout', (e) => { if (!e.relatedTarget) cur.classList.add('is-out'); });
    document.addEventListener('mouseover', () => cur.classList.remove('is-out'));
  }
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * 0.25).toFixed(1)}px, ${((e.clientY - r.top - r.height / 2) * 0.35).toFixed(1)}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
  document.querySelectorAll<HTMLElement>('[data-follow]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${(e.clientX - r.left).toFixed(0)}px`);
      el.style.setProperty('--my', `${(e.clientY - r.top).toFixed(0)}px`);
    });
  });
}
