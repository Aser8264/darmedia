// Informații de business preluate de pe darmedia.ro. Sursă unică pentru date de contact, navigație și conținut recurent.

export const company = {
  name: 'DAR Media',
  legalName: 'DAR MEDIA MARKETING SRL',
  cui: 'RO40029286',
  reg: 'J12/4757/2018',
  tagline: 'Agenție de digital marketing · Cluj-Napoca',
  email: 'salut@darmedia.ro',
  phone: '0736 702 107',
  phoneHref: 'tel:+40736702107',
  // Sediul social (din footer-ul darmedia.ro) și biroul de lucru („Vizitează-ne” pe darmedia.ro/contact). Ambele sunt reale — le etichetăm explicit.
  hq: { label: 'Sediu social', line: 'Str. Oașului 86-90 B', city: 'Cluj-Napoca' },
  office: { label: 'Birou', line: 'Strada Eroilor nr. 25', city: 'Florești, Cluj' },
  // Numărul de telefon existent. DE CONFIRMAT cu clientul că este activ pe WhatsApp; setează null ca să ascunzi butonul.
  whatsapp: '40736702107' as string | null,
  calendly: 'https://calendly.com/darmediamarketing/virtualcoffee',
  english: 'https://darmedia.biz/',
  since: 2017,
  social: [
    { name: 'Facebook', href: 'https://www.facebook.com/dar.media.marketing/' },
    { name: 'Instagram', href: 'https://www.instagram.com/dar.media.mark/' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dar-media-marketing-795083146/' },
    { name: 'YouTube', href: 'https://www.youtube.com/channel/UCVtoQOskEMEsDFFMD-_q-eg' },
  ],
  googlePartner: 'https://www.google.com/partners/agency?id=2215663942',
};

export const nav = [
  { label: 'Servicii', href: '/servicii/' },
  { label: 'Despre noi', href: '/despre-noi/' },
  { label: 'Portofoliu', href: '/portofoliu/' },
  { label: 'Studii de caz', href: '/studii-de-caz/' },
  { label: 'Resurse', href: '/ebook/' },
  { label: 'Blog', href: '/blog/' },
];

export const aboutNav = [
  { label: 'Despre noi', href: '/despre-noi/' },
  { label: 'Povestea noastră', href: '/povestea-noastra/' },
  { label: 'Echipa', href: '/echipa-darmedia/' },
  { label: 'Apariții media', href: '/aparitii-media/' },
  { label: 'Carieră', href: '/cariere/' },
];

export const stats = [
  { value: '9+', label: 'Ani de experiență', note: 'Din 2017, livrăm cu pasiune servicii de marketing online, pentru afaceri cu obiective mărețe.' },
  { value: '350+', label: 'Proiecte', note: 'Indiferent de proiectul la care lucrăm, investim timp, creativitate, expertiză și dedicare pentru a livra rezultate excelente.' },
  { value: '4+', unit: 'mil. €', label: 'Bugete gestionate', note: 'Peste 4 milioane de euro bugete de reclamă gestionate pentru clienții noștri.' },
];

export const keyResults = [
  { title: 'Claritate', text: 'În strategia de marketing și de business: focus pe diferențiatori, poziționare, marjă de profit, CPA, AOV, CLV.' },
  { title: 'Clienți noi', text: 'Atragerea de leaduri și clienți noi prin PPC, conținut organic, SEO și campanii cu influenceri.' },
  { title: 'Conversie', text: 'Optimizarea ratei de conversie în site și a experienței clientului, prin UI/UX și A/B testing.' },
  { title: 'Retenție', text: 'Creșterea retenției și a profitabilității prin email marketing, SMS și programe de loializare.' },
];

export const process = [
  {
    title: 'Audit & strategie',
    text: 'Înțelegem contextul afacerii și obiectivele tale. Identificăm punctele forte și punctele slabe ale canalelor prin care te promovezi și creăm o strategie de marketing personalizată pentru tine.',
  },
  {
    title: 'Implementare',
    text: 'Punem în aplicare cu atenție fiecare punct discutat în strategia inițială, pentru ca afacerea ta să aibă parte de o creștere vizibilă, la nivel de vizibilitate, leaduri și clienți (noi și loiali).',
  },
  {
    title: 'Raportare',
    text: 'Săptămânal, te ținem la curent cu modul în care decurg lucrurile în implementare, iar la fiecare final de lună primești un raport detaliat cu rezultatele, plus ce îmbunătățim în luna următoare.',
  },
];

// Logourile reale de pe darmedia.ro (secțiunea de parteneri), în public/media/logos.
export const partners: { name: string; logo: string; href?: string }[] = [
  { name: 'Meta Business Partner', logo: 'meta-business-partner' },
  { name: 'Google Partner', logo: 'google-partner', href: 'https://www.google.com/partners/agency?id=2215663942' },
  { name: 'Gomag', logo: 'gomag' },
  { name: 'easySales', logo: 'easysales' },
  { name: 'theMarketer', logo: 'themarketer' },
  { name: 'Romanian Business Leaders', logo: 'romanian-business-leaders' },
  { name: 'Brevo Academy', logo: 'brevo-academy' },
  { name: 'OptiMonk', logo: 'optimonk' },
];

// Footer legal: aceleași pagini și aceleași ținte ANPC (SAL/SOL) ca pe darmedia.ro, cu insignele originale.
export const legal = {
  pages: [
    { label: 'Termeni și condiții', href: '/termeni-si-conditii/' },
    { label: 'Politica de confidențialitate', href: '/politica-de-confidentialitate/' },
    { label: 'Politica de cookies', href: '/politica-de-cookies/' },
  ],
  anpc: [
    { label: 'ANPC — SAL', href: 'https://anpc.ro/ce-este-sal/', img: '/media/site/anpc-sal.webp', alt: 'ANPC — Soluționarea Alternativă a Litigiilor (SAL). Detalii' },
    { label: 'SOL', href: 'https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO', img: '/media/site/anpc-sol.webp', alt: 'Soluționarea Online a Litigiilor (SOL). Detalii' },
  ],
};

export const founders = [
  {
    name: 'Dumitru Pascariu', initial: 'D', role: 'CEO & co-fondator', img: '/media/site/f-dumitru.webp',
    links: { LinkedIn: 'https://www.linkedin.com/in/dumitru-pascariu-33a50160/', Instagram: 'https://www.instagram.com/dumitrupascariu/', Facebook: 'https://www.facebook.com/dumitru.pascariu' },
  },
  {
    name: 'Adelina Elena Ababei', initial: 'A', role: 'CMO & co-fondator', img: '/media/site/f-adelina.webp',
    links: { LinkedIn: 'https://www.linkedin.com/in/ababei-adelina-elena-57046683/', Instagram: 'https://www.instagram.com/adelena.ro/', Facebook: 'https://www.facebook.com/adelina.elena.716' },
  },
  {
    name: 'Radu Dascălul', initial: 'R', role: 'COO & co-fondator', img: '/media/site/f-radu.webp',
    links: { LinkedIn: 'https://www.linkedin.com/in/radudascalul/', Instagram: 'https://www.instagram.com/radudascalul/', Facebook: 'https://www.facebook.com/radu.dascalul' },
  },
];

export const team = [
  { name: 'Dumitru Pascariu', role: 'Co-fondator & CEO', img: '/media/site/team-00.webp' },
  { name: 'Adelina Elena Ababei', role: 'Co-fondator & Marketing Manager', img: '/media/site/team-01.webp' },
  { name: 'Radu Dascălul', role: 'Co-fondator & COO', img: '/media/site/team-02.webp' },
  { name: 'Delia Botan', role: 'Project Manager', img: '/media/site/team-03.webp' },
  { name: 'Amalia Oseaca', role: 'PPC Specialist — Meta / TikTok Ads', img: '/media/site/team-04.webp' },
  { name: 'Raluca Cosovanu', role: 'PPC Specialist — Google', img: '/media/site/team-05.webp' },
  { name: 'Maria Pascariu', role: 'Content Specialist', img: '/media/site/team-06.webp' },
  { name: 'Dumitru Branc', role: 'Copywriter & PPC Specialist', img: '/media/site/team-07.webp' },
  { name: 'Bianca Alexandra Bota', role: 'Specialist email marketing și automatizări', img: '/media/site/team-08.webp' },
  { name: 'Gabriela Simbotin', role: 'PPC Specialist — Google și Meta Ads', img: '/media/site/team-09.webp' },
  { name: 'Mariana Ulici', role: 'Agent vânzări', img: '/media/site/team-10.webp' },
];

export const timeline = [
  { year: '2011', text: 'A luat naștere pasiunea pentru marketing online și antreprenoriat.' },
  { year: '2012', text: 'Cei trei asociați, Dumitru, Adelina și Radu, ne-am cunoscut în Iași, în cadrul aceluiași business.' },
  { year: '2014', text: 'Alături de alți 11 tineri determinați, am pornit într-o călătorie în jurul României: „Zig Zag prin România”.' },
  { year: '2016', text: 'La final de an, ne-am retras din proiectul Zig Zag prin România și am decis să deschidem o agenție de marketing online.' },
  { year: '2017', text: 'Ia naștere agenția DAR Media și ne mutăm biroul la Cluj-Napoca.' },
  { year: '2018', text: 'Participăm în finala Future Makers — hub de investiții pentru start-upuri.' },
  { year: '2019', text: 'Primul eveniment DAR Media: Digital Marketing Hacks | Pentru Antreprenori.' },
  { year: '2020', text: 'DAR Media devine Meta Business Partner.' },
];

export const testimonials = [
  {
    quote: [
      'După colaborarea cu 4 agenții mari de marketing cu care am pierdut foarte mulți bani, am zis să încercăm cu o agenție mai mică, pusă pe treabă și cu o echipă la fel de tânără ca și echipa noastră NOAH.',
      'Nu ne-au promis rezultate bune peste noapte, însă și-au asumat o mare parte din provocările și riscurile acestei colaborări. Am setat împreună niște targete și după aproape 4 luni de muncă constantă am atins rezultatele dorite.',
      'Tot ce a urmat după cele 4 luni au fost optimizări care ne-au adus rezultate mai bune decât am anticipat. Și aici mă refer la cost per vânzare, nu la un marketing frumos și fără rezultate.',
    ],
    name: 'Ruben Perju', role: 'Co-fondator NOAH', short: 'NOAH',
  },
  {
    quote: [
      'Problema majoră pe care o aveam înainte de lucrul cu DAR Media era lipsa de rezultate în campaniile noastre de performance marketing. Aveam un buget care se cheltuia destul de rapid, dar nu reușeam să ne apropiem de obiectivul nostru de ROAS și profitabilitate. Când am început discuțiile cu Radu, mi-am dat seama că abordarea lor este una mult mai diferită, în sensul pozitiv, față de experiențele avute cu alte agenții și am decis să mergem împreună mai departe cu proiectul nostru.',
      'În ultimele 12 luni de când am început colaborarea, s-a dovedit că decizia a fost una bună, pentru că Radu și echipa ne-au ajutat să creștem cifra de afaceri cu peste 50% și să optimizăm bugetele astfel încât să ne apropiem și chiar să depășim obiectivele propuse. Recomand cu încredere echipa DAR Media datorită profesionalismului lor, orientării către rezultate și abordării multi-channel.',
    ],
    name: 'Flaviu Matei', role: 'CEO Faunus Plant', short: 'Faunus Plant',
  },
  {
    quote: [
      'Colaborarea cu echipa DAR Media a avut un impact semnificativ asupra dezvoltării magazinului online CasaVie. Înainte ne-am confruntat cu multiple provocări, inclusiv dificultăți în comunicare și testare a noilor soluții, grafică de calitate scăzută și o strategie neclară pentru obiectivele pe termen mediu. DAR Media a fost soluția la aceste provocări, aducându-ne rezultate notabile.',
      'Am reușit să optimizăm bugetele și să îmbunătățim performanța campaniilor Ads. Apreciem că vin mereu cu idei noi pentru a ne atinge obiectivele pe termen scurt și mediu. Avem o comunicare deschisă, o grafică mult mai bună și rezultatele sunt pe măsură. Suntem recunoscători pentru modul în care gestionează campaniile și mai ales pentru faptul că aduc mereu un plus de valoare în acest proiect.',
    ],
    name: 'Mihaela Pinisoara', role: 'Marketing Manager, Casa Vie', short: 'Casa Vie',
  },
  {
    quote: [
      'Recomand DAR Media oricui caută o agenție serioasă de email marketing și analiză de competiție. Am lucrat cu mai mulți furnizori de-a lungul timpului, iar diferența aici e că tratează fiecare proiect cu aceeași seriozitate, indiferent de dimensiune.',
      'Radu pune întrebări bune și vine pregătit la fiecare discuție, iar rezultatele se văd: claritate în decizii și o comunicare coerentă cu audiența. Dacă vrei parteneri care gândesc împreună cu tine, nu doar execută, merită o discuție.',
    ],
    name: 'Alevia România', role: 'Recenzie Google', short: 'Alevia',
  },
  {
    quote: [
      'DAR Media — o echipă de profesioniști! Am început colaborarea cu agenția DAR Media deoarece eram la început de drum și simțeam că este nevoie de specialiști pentru a putea construi o strategie de marketing care să aducă rezultate. A fost cea mai bună alegere!',
      'Rezultatele au apărut încă din prima lună, vânzările fiind în creștere de la o lună la alta. Recomand cu încredere serviciile oferite de acești oameni deosebiți!',
    ],
    name: 'Ciprian Coste', role: 'Co-fondator & owner, Dinplante.ro', short: 'Dinplante.ro',
  },
  {
    quote: ['O echipă drăguță și implicată. Promptă în ceea ce promite, atentă la detalii și la dorințele clientului. Recomand!'],
    name: 'Georgiana Bularcă', role: 'Founder & owner, Felicity Store', short: 'Felicity Store',
  },
];

export const googleReviews = {
  rating: 'Excelent',
  count: 21,
  items: [
    { name: 'Ancuța Dascălul', role: 'The Dungeon escape room', text: 'Am lucrat cu echipa DAR Media aproximativ 4 ani de zile și au livrat impecabil serviciile de email marketing, social media și copywriting. Recomand!' },
    { name: 'Tiperciuc Romeo', role: 'Recenzie Google', text: 'Colaborarea cu această agenție de Google Ads a fost o experiență foarte bună. Au înțeles rapid nevoile businessului meu și au creat campanii eficiente, bine structurate. Am apreciat transparența, rapoartele clare și faptul că au venit constant cu optimizări și sugestii. Rezultatele au apărut într-un timp rezonabil și raportul cost–rezultat a fost foarte bun. Recomand fără rezerve.' },
    { name: 'Cristian Lucian Stan', role: 'Recenzie Google', text: 'Lucrăm cu ei pentru creație grafică de aproximativ un an și ne este bine :). Recomand pentru entuziasm, creativitate, flexibilitate și chiar rapiditate (cât se poate într-o industrie creativă și cu un client care mereu vrea cu 2 zile înainte să trimită brief-ul), un raport calitate-preț foarte bun.' },
    { name: 'Cristian Iordache', role: 'Recenzie Google', text: 'De la prima discuție mi-a plăcut abordarea, seriozitatea și strategia. Aveam deja două site-uri făcute înainte și au fost un eșec total. Site-ul a fost livrat la timp și s-a ținut cont nu doar de ce am dorit, dar chiar au venit cu îmbunătățiri. Mulțumesc!' },
    { name: 'Alina Dita', role: 'Recenzie Google', text: 'Recomand cu mare drag echipa DAR Media! Oameni dedicați, serioși și foarte implicați în ceea ce fac. Apreciez profesionalismul, comunicarea excelentă și atenția acordată fiecărui detaliu. Dacă sunteți în căutarea unei agenții de marketing de încredere, DAR Media este o alegere foarte bună!' },
    { name: 'Ben', role: 'Recenzie Google', text: 'O echipă super profi ce mi-a fost recomandată de o bună prietenă pentru serviciile din spațiul media. Principalul motiv pentru care am ales să lucrăm cu echipa DAR Media fiind implicarea, consilierea de înaltă clasă și rezultatele aduse. O echipă super închegată, pusă pe treabă.' },
    { name: 'Eugen Ștefan', role: 'Adm. Silva Top Concept', text: 'O echipă extraordinară de oameni, implicați maxim în serviciile oferite. Recomand colaborarea cu această companie. Eu am fost foarte mulțumit.' },
    { name: 'GEHO Distribution', role: 'Recenzie Google', text: 'A fost un pas important pentru activitatea firmei noastre, care împreună cu această echipă de profesioniști a fost implementat cu succes! Felicitări și mulțumim frumos pentru deschidere și profesionalism!' },
  ],
};

export const clients: { name: string; href?: string; logo: string }[] = [
  { name: 'Alevia', href: 'https://alevia.ro/', logo: 'alevia' },
  { name: 'Casa Vie', href: 'https://casavie.ro/', logo: 'casa-vie' },
  { name: 'NOAH', href: 'https://noah-watch.com/', logo: 'noah' },
  { name: 'Faunus Plant', href: 'https://faunusplant.ro/', logo: 'faunus-plant' },
  { name: 'Noodle Pack', href: 'https://noodlepack.ro/en/', logo: 'noodle-pack' },
  { name: 'TEDxCluj', href: 'https://tedxcluj.com/', logo: 'tedxcluj' },
  { name: 'Torockoi', href: 'https://torockoi.ro/', logo: 'torockoi' },
  { name: 'Undelucram', href: 'https://www.undelucram.ro/', logo: 'undelucram' },
  { name: 'EuroUnelte', href: 'https://eurounelte.ro/', logo: 'eurounelte' },
  { name: 'Din Plante', href: 'https://www.dinplante.ro/', logo: 'din-plante' },
  { name: 'Franchwise', href: 'https://www.francize.ro/', logo: 'franchwise' },
  { name: 'BrightSkin', href: 'https://brightskin.ro/', logo: 'brightskin' },
  { name: 'Trio Verde', href: 'https://trioverde.ro/', logo: 'trio-verde' },
  { name: 'Life Upgrader', href: 'https://lifeupgrader.ro/', logo: 'life-upgrader' },
  { name: 'Felicity Store', href: 'https://www.felicitystore.ro/', logo: 'felicity-store' },
  { name: 'Integrio Kids', href: 'https://integriokids.ro/', logo: 'integrio-kids' },
  { name: 'H Plus Group', href: 'https://www.hplusgroup.ro/', logo: 'h-plus-group' },
  { name: 'Focus Development', href: 'https://www.focusdevelopment.ro/', logo: 'focus-development' },
  { name: 'Conacul Archia', href: 'https://conacularchia.ro/', logo: 'conacul-archia' },
  { name: 'Conacul Secuiesc', href: 'https://conaculsecuiesc.ro/', logo: 'conacul-secuiesc' },
  { name: 'eComMasters', href: 'https://ecommasters.ro/', logo: 'ecommasters' },
  { name: 'Garden Depot', href: 'https://gardendepot.ro/', logo: 'garden-depot' },
  { name: 'Wolf Electric', href: 'https://wolfelectric.ro/', logo: 'wolf-electric' },
  { name: 'The Dungeon', href: 'https://thedungeon.ro/', logo: 'the-dungeon' },
  { name: 'Dragos Transport', href: 'https://dragostransportltd.co.uk/', logo: 'dragos-transport' },
  { name: 'Romanian Business Leaders', logo: 'romanian-business-leaders' },
  { name: 'Contessa', logo: 'contessa' },
  { name: 'Servus Candles', logo: 'servus-candles' },
  { name: 'Scarlatti Jewelry', logo: 'scarlatti-jewelry' },
  { name: 'Solartium', logo: 'solartium' },
  { name: 'MultiClean', logo: 'multiclean' },
  { name: 'NeuroDenta Clinic', logo: 'neurodenta-clinic' },
  { name: 'Gourmet Gift', logo: 'gourmet-gift' },
  { name: 'Mega Izolații', logo: 'mega-izolatii' },
  { name: 'Cămara de la Munte', logo: 'camara-de-la-munte' },
  { name: 'You Plate It', logo: 'you-plate-it' },
  { name: 'Modern Glass Art', logo: 'modern-glass-art' },
  { name: 'Gina Cakes', logo: 'gina-cakes' },
  { name: 'Colour Sense', logo: 'colour-sense' },
  { name: 'Argon Dental', logo: 'argon-dental' },
  { name: 'Vendum', logo: 'vendum' },
  { name: 'Casa dinainte', logo: 'casa-dinainte' },
  { name: 'Sarmala Fusion', logo: 'sarmala-fusion' },
  { name: 'Sandy Cola', logo: 'sandy-cola' },
  { name: 'Cofeels', logo: 'cofeels' },
  { name: 'Flacăra', logo: 'flacara' },
  { name: 'Funky Fashion', logo: 'funky-fashion' },
  { name: 'Top Mop', logo: 'top-mop' },
  { name: 'Fior', logo: 'fior' },
  { name: '24 Beauty', logo: '24-beauty' },
  // Prezente în portofoliul de pe darmedia.ro, lipseau din versiunea anterioară. Numele „Alina Hlipca” e dedus din numele fișierului logo — de confirmat.
  { name: 'BioBitter', logo: 'biobitter' },
  { name: 'Alina Hlipca', logo: 'alina-hlipca' },
];

// Toate cele 9 studii de caz de pe darmedia.ro/studii-de-caz. Cifrele vin din titlurile/conținutul studiilor; nu adăuga cifre noi.
// `client`/`logo` doar acolo unde studiul numește clientul.
export interface CaseStudy { slug: string; figure: string; unit: string; channel: string; icon: 'mail' | 'search' | 'ads' | 'chart'; line: string; client?: string; logo?: string; featured?: boolean }
export const caseStudies: CaseStudy[] = [
  { slug: 'email-marketing-q1', figure: '550.000', unit: 'RON', channel: 'Email Marketing', icon: 'mail', line: 'generați din email marketing în Q1 2026, pentru un brand din nișa health.', featured: true },
  { slug: 'studiu-de-caz-de-la-0-la-83-699-lei-roas-18-32-google-ads', figure: '18,32', unit: 'ROAS', channel: 'Google Ads', icon: 'search', line: 'De la 0 la 83.699 RON încasări prin Google Ads.', featured: true },
  { slug: 'studiu-de-caz-de-la-0-la-323-92714-lei-in-doar-6-luni-prin-email-marketing', figure: '323.927', unit: 'RON', channel: 'Email Marketing', icon: 'mail', line: 'De la zero, în doar 6 luni, prin email marketing.', featured: true },
  { slug: 'studiu-de-caz-de-la-0-la-63295-30-lei-incasari-roas-9-10-prin-facebook-ads', figure: '9,10', unit: 'ROAS', channel: 'Facebook Ads', icon: 'ads', line: 'De la 0 la 63.295 RON încasări prin Facebook Ads.', featured: true },
  { slug: 'studiu-de-caz-newslettere-ecommerce', figure: '312.380', unit: 'RON', channel: 'Newslettere', icon: 'mail', line: 'generați în 4 luni, prin newslettere, pentru un magazin online.', featured: true },
  { slug: 'studiu-de-caz-reclame-pe-facebook-noah', figure: '65.870', unit: 'RON', channel: 'Facebook Ads', icon: 'ads', line: 'încasări cu 10.300 RON investiți în reclame pe Facebook.', client: 'NOAH', logo: 'noah', featured: true },
  { slug: '71-061-in-3luni-automatizari', figure: '71.061', unit: 'RON', channel: 'Automatizări email', icon: 'mail', line: 'generați în 3 luni prin automatizări email, în nișa băuturilor premium.' },
  { slug: 'open-rate-studiu', figure: '+25.000', unit: 'RON', channel: 'Email Marketing', icon: 'mail', line: 'în plus, după un drop major în open rate.' },
  { slug: 'studiu-de-caz-seo', figure: 'SEO', unit: '', channel: 'SEO', icon: 'chart', line: 'Creștere accelerată prin optimizare on-page și off-page.' },
];

export const ebooks = [
  { slug: 'retentie-ebook', kind: 'Ebook', title: '10 sisteme de retenție pentru magazinul online', text: '10 sisteme de retenție pe care le poți implementa imediat, pentru ca afacerea ta să devină alegerea lor constantă. Bonus: calculator de retenție.', img: '/media/site/ebook-1.webp' },
  { slug: 'automatizari-email-ghid-ecommerce', kind: 'Ebook', title: 'Automatizări de email care generează vânzări', text: '11 secvențe de email must-have pentru orice magazin online care vrea să vândă constant și profitabil.', img: '/media/site/ebook-2.webp' },
  { slug: 'buyer-journey-template', kind: 'Template', title: 'Buyer Journey', text: 'Un ghid pas cu pas, de la prima întâlnire cu brandul tău până la client loial.', img: '/media/site/ebook-3.webp' },
  { slug: 'ecommerce-marketing-checklist', kind: 'Checklist', title: 'eCommerce Marketing Checklist', text: 'Checklist gratuit cu 70 de strategii de marketing testate și validate, care se aplică oricărui tip de business eCommerce.', img: '/media/site/ebook-7.webp' },
  { slug: 'de-la-vizitator-la-client', kind: 'Ebook', title: 'De la vizitator la client', text: 'Tehnici practice ca să-ți convertești vizitatorii magazinului tău în clienți.', img: '/media/site/ebook-4.webp' },
  { slug: 'cum-sa-iti-calculezi-bugetul-de-reclama', kind: 'Ebook', title: 'Cum să îți calculezi bugetul de reclamă?', text: 'Cât trebuie să investesc în promovare?', img: '/media/site/ebook-6.webp' },
  { slug: 'digital-marketing-la-tinta', kind: 'Ebook', title: 'Digital Marketing la țintă', text: 'Vinde mai bine în mediul online în doar 4 pași simpli.', img: '/media/site/ebook-5.webp' },
];

export const mediaAppearances = [
  { kind: 'Podcast', title: 'Marketing Online vs. Media Buying, cu Radu Dascălul de la DAR Media', href: 'https://www.youtube.com/watch?v=yVFlJyk7GZA&t=716s', img: '/media/site/media-00.webp' },
  { kind: 'Podcast', title: 'Secretul creșterii vânzărilor online: călătoria clientului și strategii de marketing eficiente', href: 'https://www.youtube.com/watch?v=Zk8wgi68Q_I&t=380s', img: '/media/site/media-01.webp' },
  { kind: 'Articol', title: 'De ce ACUM e momentul potrivit ca afacerea ta să fie prezentă în online? — Transilvania Business', href: 'https://issuu.com/transilvaniabusiness/docs/tb_95/108', img: '/media/site/media-02.webp' },
  { kind: 'Articol', title: 'Sfatul expertului e-commerce: 11 idei de marketing de la specialiști români și internaționali', href: 'https://packhelp.com/ro-ro/sfatul-expertului-e-commerce/', img: '/media/site/media-03.webp' },
  { kind: 'Podcast', title: 'Radu Dascălul, co-fondator DAR Media, vorbește despre viață, despre parcursul său profesional și despre lecțiile învățate din întâlnirile cu oameni, proiecte și provocări', href: 'https://www.facebook.com/watch/?v=1347046402996160&ref=sharing', img: '/media/site/media-04.webp' },
  { kind: 'Podcast', title: 'Cum se adaptează brandurile la o piață online unde Temu și Shein schimbă jocul — cu Radu Dascălul', href: 'https://florinrosoga.ro/radu-dascalul/', img: '/media/site/media-05.webp' },
  { kind: 'Articol', title: 'Radu Dascălul: de la fost polițist la co-fondator DAR Media', href: 'https://careers-business.ro/radu-dascalul-dar-media-marketing-digital/', img: '/media/site/media-06.webp' },
];

export const eventImages = ['/media/site/media-07.webp', '/media/site/media-08.webp', '/media/site/media-09.webp', '/media/site/media-10.webp'];

export interface Faq { q: string; a: string }
export const faq: Faq[] = [
  {
    q: 'Cu ce tip de business-uri lucrați?',
    a: '<p>Lucrăm în principal cu:</p><ul><li>magazine online (atât producători, cât și distribuitori, care vând fie DTC prin site propriu, fie offline + marketplace-uri și vor să dezvolte magazinul online);</li><li>business-uri de servicii (HoReCa, clinici, construcții, beauty, auto etc.).</li></ul>',
  },
  {
    q: 'Care este bugetul minim necesar pentru a începe?',
    a: '<p>Pentru eCommerce, recomandăm:</p><ul><li>buget de ads minim: 1.000–2.000 €/lună/canal de reclamă;</li><li>fee de management separat.</li></ul><p>Pentru servicii, bugetul depinde de nișă și competiție, dar discutăm realist înainte de orice ofertă.</p>',
  },
  {
    q: 'Îmi garantați rezultate?',
    a: '<p>Nu garantăm cifre fixe. Rezultatele nu depind doar de implementarea pe ads, email sau SEO… Acestea sunt influențate de poziționare, ofertă, diferențiatori, brand, competiție, stadiul de sofisticare a pieței etc.</p><p>Garantăm însă:</p><ul><li>proces clar de lucru + livrabile;</li><li>testare bazată pe priorități;</li><li>optimizare bazată pe date;</li><li>transparență totală;</li><li>comunicarea variabilelor care influențează rezultatele (fie că implementarea lor ține exclusiv de noi sau nu).</li></ul>',
  },
  {
    q: 'Cât durează până vedem rezultate?',
    a: '<p>Depinde de maturitatea contului, validarea produsului, procesul de vânzare și competiție. De regulă:</p><ul><li>în primele 30 de zile obținem date clare;</li><li>în 60–90 de zile optimizăm și stabilizăm ce funcționează;</li><li>în 3–6 luni scalăm ce funcționează.</li></ul><p>Rezultatele preliminare pot apărea și în primele 30 de zile. Înainte de a colabora îți vom spune clar ce putem să ne asumăm și ce nu.</p>',
  },
  {
    q: 'Ce platforme gestionați?',
    a: '<p>Lucrăm în special cu:</p><ul><li>Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, Pinterest Ads;</li><li>Email Marketing (pe diverse platforme precum Klaviyo, TheMarketer, Brevo etc.);</li><li>optimizarea ratei de conversie pe multiple platforme eCommerce (Gomag, Shopify, WooCommerce etc.);</li><li>optimizare SEO și GEO pe diverse platforme eCommerce și non-eCommerce.</li></ul>',
  },
  {
    q: 'Ce face DAR Media diferit față de alte agenții?',
    a: '<p><strong>Abordare integrată.</strong> Soluțiile noastre te susțin să obții 4 rezultate cheie: claritate în strategia de marketing și de business (focus pe diferențiatori, poziționare, marjă de profit, CPA, AOV, CLV); atragerea de leaduri și clienți noi; optimizarea ratei de conversie în site și a experienței clientului; creșterea retenției și a profitabilității.</p><p><strong>Atenție personalizată.</strong> Ne limităm la un număr restrâns de clienți pentru a le oferi atenție și implicare maximă. De asemenea, alegem oameni cu experiență, compatibili cu cerințele proiectului.</p><p><strong>Educație și dezvoltare constantă.</strong> Investim timp și bani în a fi la curent cu trendurile și bunele practici de eCommerce și digital marketing. Dezvoltăm soluții noi care vin în sprijinul clienților (ex.: soluții AI sau cercetare de produse noi cu potențial de a deveni bestsellere). De asemenea, documentăm experiențele noastre în articole de blog, video-uri și postări organice, ghiduri gratuite, studii de caz sau apariții media.</p><p><strong>Ecosistem de parteneriate.</strong> Punem la dispoziție o rețea de parteneriate și soluții conexe pentru nevoile clienților noștri, chiar și acolo unde nu oferim servicii direct.</p>',
  },
  {
    q: 'Lucrați pe procent din vânzări?',
    a: '<p>În general lucrăm pe fee fix. Putem construi modele hibride (fee fix + procent din vânzări sau bonus pe KPI-uri), în funcție de proiect și de obiectivele acestuia.</p>',
  },
  {
    q: 'Cât durează colaborarea minimă?',
    a: '<p>Recomandăm minimum 3 luni. Marketingul nu este un sprint de câteva săptămâni, ci un proces care are nevoie de monitorizare, testare și optimizare.</p>',
  },
  { q: 'Aveți studii de caz?', a: '<p>Da. Oferim exemple relevante în call, în funcție de industrie. O parte dintre ele sunt publicate în secțiunea <a href="/studii-de-caz/">Studii de caz</a>.</p>' },
  { q: 'Cum începem colaborarea?', a: '<ol><li>Call de calificare</li><li>Audit rapid</li><li>Propunere personalizată</li><li>Onboarding</li></ol>' },
  {
    q: 'Ce aveți nevoie de la noi pentru a începe?',
    a: '<ul><li>acces la conturi;</li><li>brief completat cu date reale din business;</li><li>o evidență a resurselor disponibile pentru marketing;</li><li>implicare din partea decidentului.</li></ul><p>Fără transparență și implicare, nu putem construi rezultate predictibile.</p>',
  },
  {
    q: 'Ce se întâmplă dacă nu funcționează?',
    a: '<p>Dacă datele arată clar că oferta nu convertește, marja nu permite scalare sau piața este suprasaturată, spunem direct.</p>',
  },
  {
    q: 'Cât de des raportați?',
    a: '<ul><li>Raportare lunară strategică, detaliată.</li><li>Raportare săptămânală pe KPI-urile esențiale.</li><li>Acces permanent la date.</li><li>Intervenții punctuale când e nevoie de claritate sau de decizii luate pe baza datelor.</li></ul>',
  },
];

export const thanks: Record<string, { title: string; text: string[] }> = {
  multumim: { title: 'Mulțumim!', text: ['În cel mai scurt timp un coleg te va contacta pentru mai multe informații.'] },
  'multumim-audit': {
    title: 'Îți mulțumim!',
    text: ['Suntem bucuroși să vedem oameni determinați ca tine, care doresc să își scaleze vânzările din afacerea eCommerce, corect și sigur!', 'Unul dintre colegii noștri din echipă te va contacta în cel mai scurt timp.'],
  },
  'multumim-quiz': {
    title: 'Am primit răspunsurile tale!',
    text: ['Ne bucurăm că ai completat quiz-ul! Răspunsurile tale au ajuns deja la echipa noastră de la DAR Media și, în următoarele 3–5 zile lucrătoare, colegii noștri vor analiza cu atenție tot ce ne-ai transmis.', 'Ne auzim curând, cu recomandările pentru tine pe email!'],
  },
  'te-ai-abonat-cu-succes-la-newsletterul-nostru': { title: 'Mulțumim!', text: ['Te-ai abonat cu succes la newsletterul nostru!'] },
};
