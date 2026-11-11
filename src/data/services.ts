// Conținut preluat de pe darmedia.ro și reorganizat. Nu adăuga servicii sau cifre care nu există în sursă.

export interface Service {
  slug: string;
  name: string;
  group: 'fundament' | 'achizitie' | 'retentie' | 'brand';
  parent?: string;
  summary: string;
  lead: string;
  what?: { title: string; paras: string[]; bullets?: string[] };
  why: { title: string; intro?: string; items: string[]; outro?: string };
  how: { title: string; intro?: string; items: string[] };
  steps?: { title: string; items: string[] };
  fit?: { title: string; items: string[]; outro?: string };
}

export const groups = [
  { id: 'fundament', label: 'Claritate', note: 'Audit, strategie și consultanță' },
  { id: 'achizitie', label: 'Clienți noi', note: 'Reclame plătite, SEO și conținut' },
  { id: 'retentie', label: 'Retenție', note: 'Email și SMS marketing' },
  { id: 'brand', label: 'Brand', note: 'Identitate și design' },
] as const;

export const services: Service[] = [
  {
    slug: 'audit-marketing',
    name: 'Audit de marketing',
    group: 'fundament',
    summary: 'Identificăm punctele forte și punctele slabe ale canalelor prin care te promovezi și ale site-ului tău.',
    lead: 'Îți facem audit de marketing pentru a identifica punctele forte și punctele slabe ale canalelor de marketing prin care te promovezi, dar și ale site-ului/shop-ului tău.',
    what: {
      title: 'Ce este un audit de marketing?',
      paras: [
        'Este important de știut că un audit de marketing este o etapă premergătoare foarte importantă pentru realizarea unei strategii de marketing noi sau pentru îmbunătățirea strategiei actuale. Acesta constă în specificarea, culegerea, măsurarea, analiza și interpretarea datelor ce țin de modul în care te promovezi.',
        'Realizând un audit de marketing, ne vom da seama care sunt plusurile, minusurile, oportunitățile și riscurile cu care te confrunți în mediul online. În urma auditului, vom putea crea o strategie de marketing realistă și complexă a afacerii tale, cu ajutorul căreia să atingem obiectivele pe care ți le dorești.',
      ],
    },
    why: {
      title: 'De ce să faci un audit de marketing?',
      intro:
        'Auditul de marketing este un proces util ori de câte ori este necesară evaluarea poziției firmei față de mediul intern și extern. Este un proces complex, care se face atunci când compania se află într-un impas, are dificultăți de dezvoltare sau atunci când compania dorește să schimbe strategia, se repoziționează în piață sau chiar face un rebranding.',
      items: [],
      outro:
        'În cele din urmă, un audit de marketing se concentrează să afle cum poate să reducă distanța dintre nivelul la care se află business-ul tău online acum și nivelul la care îți dorești să fie. Auditorii profesioniști te vor ajuta să înțelegi dacă procesul tău actual de marketing se aliniază la ceea ce își dorește / are nevoie cu adevărat afacerea ta. În caz contrar, auditul va indica unde poți ajusta mai bine strategia astfel încât să atingă obiectivele tale.',
    },
    how: {
      title: 'Cum te ajutăm să îți crești veniturile printr-un audit de marketing?',
      items: [
        'Analizăm eficiența site-ului în prezent (la nivel de UI, UX, aspecte tehnice sau optimizare a ratei de conversie).',
        'Facem audit SEO (identificare erori, analiză cuvinte cheie, analiză On Page, analiză backlinks).',
        'Evaluăm prezența brandului pe rețelele sociale și verificăm poziționarea brandului în mediul online și dacă mesajele comunicate se potrivesc cu tonul vocii și valorile acestuia.',
        'Analizăm bugetele pentru fiecare campanie PPC și cât de eficient sunt alocate.',
        'Urmărim interacțiunea utilizatorilor cu conturile de social media.',
        'Verificăm poziționarea ta ca brand în raport cu competiția.',
      ],
    },
    fit: {
      title: 'Este pentru tine acest audit de marketing dacă vrei să…',
      items: [
        'Îți crești vânzările',
        'Previi greșeli minore, dar mai ales fatale, care te fac să pierzi timp, energie, buget și oportunități de business',
        'Înțelegi cum poți să-ți îmbunătățești strategia de marketing actuală',
        'Actualizezi site-ul/shop-ul și prezența în social media pentru a avea rezultate mai bune',
        'Ai o viziune clară asupra punctelor slabe ale promovării și cum poți să le îmbunătățești',
        'Treci la un alt nivel cu business-ul tău pe scara evoluției',
        'Ai o poziționare mai bună în motorul de căutare Google și pe rețelele sociale',
      ],
      outro: 'Poate nu sunt cele mai simple lucruri de făcut, dar știi vorba aia: „după muncă și răsplată”.',
    },
  },
  {
    slug: 'strategie-marketing',
    name: 'Strategie de marketing',
    group: 'fundament',
    summary: 'Strategii care conectează obiectivele și activitățile de marketing la obiectivele tale de business.',
    lead: 'Te ajutăm să creezi strategii de marketing online eficiente, care se pliază pe nevoile/dorințele publicului tău țintă și care conectează obiectivele și activitățile de marketing la obiectivele tale de business.',
    what: {
      title: 'Ce sunt aceste strategii de marketing online?',
      paras: [
        'Strategiile de marketing online sunt ca niște hărți care îți arată pașii către „comoara” dorită: obiective precum creșterea vizibilității și încrederii în brandul tău, creșterea bazei de potențiali clienți, a clienților noi și recurenți în mediul online sau creșterea profitabilității.',
        'Ca business, pentru a te adapta și a supraviețui în această piață extrem de competitivă, ai nevoie de mixul potrivit de strategii pentru ca mesajul tău să ajungă la publicul țintă dorit și să te conducă la atingerea obiectivelor tale de business.',
      ],
    },
    why: {
      title: 'De ce să ai și tu strategii de marketing online?',
      items: [
        'Cunoști bine contextul în care activezi (situația din nișa ta).',
        'Îți delimitezi publicul țintă/avatarele de clienți.',
        'Înțelegi cum afacerea ta poate servi mai bine publicul tău.',
        'Formulezi, pe baza aspectelor de mai sus, un plan de acțiune clar stabilit, în care știi ce obiective ai, ce tactici vei aplica și cum măsori progresul.',
      ],
    },
    how: {
      title: 'Cum te ajutăm să îți crești veniturile prin strategii de marketing online?',
      items: [
        'Analizăm și evaluăm situația inițială a business-ului tău (misiune, viziune, valori, puncte de diferențiere față de alte afaceri similare).',
        'Analizăm piața și interesul ei pentru ce ai de oferit + competiția ta directă și indirectă.',
        'Stabilim obiectivele și punctele țintă la care îți dorești să ajungi.',
        'Definim cât mai exact avatarele de clienți pe care le vizezi.',
        'Stabilim mesajele cheie, beneficiile, ofertele și canalele de marketing prin care ajungem la publicul țintă.',
        'Stabilim bugetul și resursele necesare pentru a atinge obiectivele propuse.',
        'Stabilim planul de acțiuni și de campanii.',
        'Definim modul de lucru, indicatorii de performanță de urmărit și echipa care va implementa strategia.',
      ],
    },
    fit: {
      title: 'Sunt pentru tine aceste strategii de marketing online dacă…',
      items: [
        'Vrei să ai o „hartă a comorii” care te ghidează pas cu pas să-ți atingi obiectivele de business prin intermediul unuia sau mai multor canale de marketing online',
        'Vrei claritate în departamentul tău de marketing',
        'Vrei să-ți crești vânzările și fluxul de clienți',
        'Vrei să definești clar publicul tău țintă și să-l servești mai bine prin informațiile, produsele și serviciile oferite de brandul tău',
        'Vrei să obții o poziție mai bună printre competitorii tăi',
        'Vrei să ai un ROI (Return on Investment) semnificativ',
        'Vrei să ai o vizibilitate mai bună în mediul online',
      ],
      outro: 'Cel mai probabil te regăsești în cel puțin o situație dintre cele de mai sus, nu-i așa?',
    },
  },
  {
    slug: 'consultanta-marketing',
    name: 'Consultanță în marketing',
    group: 'fundament',
    summary: 'Răspunsuri punctuale la problemele afacerii tale din online și pași clari către obiective.',
    lead: 'Îți oferim servicii de consultanță în marketing care te vor ajuta să găsești răspunsuri punctuale la problemele afacerii tale din online și să știi clar ce pași ai de făcut ca să-ți atingi obiectivele.',
    what: {
      title: 'Ce sunt serviciile de consultanță în marketing?',
      paras: [
        'Consultanța în marketing este considerată ca fiind un serviciu profesional oferit de experți în domeniul marketingului, menit să te ajute în deslușirea celor mai bune practici de promovare pentru tine.',
        'Rolul unui consultant de marketing este să intervină specific acolo unde simți nevoia unei îmbunătățiri în aspecte precum vizibilitate, public țintă, campanii de promovare, generare de lead-uri, creșterea vânzărilor sau retenția clienților.',
      ],
    },
    why: {
      title: 'De ce să alegi serviciile de consultanță în marketing?',
      intro:
        'Fie că business-ul tău este la început de drum și are nevoie de integrare pe piață, fie că există deja, dar are nevoie de optimizare pentru accelerarea creșterii, consultanța în marketing este cheia. Printre principalele avantaje se numără:',
      items: [
        'Cunoștințe specifice pentru nevoile tale.',
        'Consultanță profesională din surse exterioare afacerii tale, care prezintă un mare avantaj.',
        'Flexibilitate — serviciul de consultanță în marketing poate fi pentru un anumit proiect sau un serviciu pe baza unui abonament lunar ori a unui număr fix de ședințe.',
        'Personalizare — pe consultanții în marketing îi poți considera partenerii tăi strategici, iar rolul lor este de a investiga provocările cu care te confrunți și a-ți oferi soluții punctuale.',
        'Eficiență — investiția în consultanță înainte de a te apuca de treabă te ajută să salvezi timp, energie sau bani (și nervi) irosiți fără niciun rezultat.',
      ],
    },
    how: {
      title: 'Cum te ajutăm să îți crești veniturile prin serviciile de consultanță?',
      intro: 'În funcție de problemele cu care te confrunți, te putem ajuta cu consultanță pentru:',
      items: [
        'Optimizare site + SEO',
        'Social Media Marketing',
        'Reclame plătite (Google, Facebook, Instagram, LinkedIn, TikTok)',
        'Email Marketing',
        'Branding',
        'Content Marketing: articole blog, advertoriale, texte site, brand story etc.',
      ],
    },
    fit: {
      title: 'Serviciile de consultanță în marketing sunt pentru tine dacă vrei să…',
      items: [
        'Afli unde se pierd bani în campaniile de marketing online și ce soluții ai',
        'Găsești noi metode pentru a-ți crește vânzările și profitabilitatea',
        'Îți validezi strategia actuală de marketing online',
        'Înțelegi cum poți să-ți dezvolți un branding puternic în online',
      ],
      outro: 'Cel mai probabil te regăsești în cel puțin o situație dintre cele de mai sus, nu-i așa?',
    },
  },
  {
    slug: 'reclame-platite-ppc',
    name: 'Reclame plătite (PPC)',
    group: 'achizitie',
    summary: 'Campanii PPC care aduc clienți noi, cresc profitabilitatea și încurajează loializarea clienților existenți.',
    lead: 'Campanii PPC pentru creșteri de vânzări profitabile în business-ul tău. Te ajutăm să creezi campanii PPC care aduc clienți noi, cresc profitabilitatea și încurajează loializarea clienților existenți.',
    what: {
      title: 'Campanii PPC pentru Facebook/Instagram, Google, LinkedIn, TikTok',
      paras: [
        'Ce trebuie să știi este că aceste campanii PPC (pay per click) sunt un instrument esențial atât pentru magazinele online, cât și pentru afacerile care vând online servicii sau info-produse. Practic, dacă îți dorești să ajungi la o audiență targetată extrem de rapid, atunci campaniile PPC sunt cea mai bună soluție.',
        'Ca să aducem oameni interesați de ce ai de oferit pe site-ul tău, este nevoie să folosim reclame plătite pe platformele unde stau de obicei oamenii din publicul tău țintă. Așa că, în funcție de canalele de comunicare folosite de potențialii tăi clienți, ne vom orienta către servicii precum Facebook/Instagram Ads, Google Ads, LinkedIn Ads sau TikTok Ads.',
      ],
    },
    why: {
      title: 'De ce să alegi campanii PPC?',
      intro: 'Pe lângă traficul masiv pe site cu o audiență foarte bine țintită, atunci când faci campanii PPC mai beneficiezi de:',
      items: [
        'Costuri optime. O campanie PPC optimizată corect este foarte eficientă din punct de vedere al costurilor, pentru că tu plătești doar atunci când cineva face o acțiune pe care o dorești.',
        'Locul în primele căutări pe Google. Atunci când un utilizator caută un termen (cuvânt cheie) care are legătură cu serviciile sau produsele tale, vei fi printre primele opțiuni. Anunțurile plătite se afișează înainte de cele organice.',
        'Vizibilitatea brandului îmbunătățită considerabil, pentru că traficul este direcționat direct pe site-ul companiei care face PPC marketing.',
        'Traficul pe website crește imediat — comparativ cu SEO, în care rezultatele notabile apar în câteva luni, impactul pe care îl are o campanie PPC este vizibil imediat.',
        'O campanie PPC eficientă poate genera conversii și venituri imediat din vânzări. Condiția este ca magazinul/site-ul tău să fie pregătit să primească volume mari de vizitatori, cu infrastructura (UI/UX, viteză de încărcare) și mesajele/ofertele potrivite.',
      ],
    },
    how: {
      title: 'Cum te ajutăm să îți crești afacerea prin campanii PPC?',
      items: [
        'Creăm strategia de reclame pornind de la obiectivele afacerii tale și publicul tău țintă.',
        'Setăm conturile de reclamă noi sau verificăm conturile existente pentru ca acestea să fie setate corect.',
        'Creăm campanii țintite de Facebook/Instagram Ads, Google Ads, LinkedIn Ads sau TikTok Ads pentru atingerea obiectivului dorit, pe baza pâlniei de vânzare.',
        'Ținem cont de bunele practici/trendurile actuale din domeniul PPC ads.',
        'Testăm continuu la nivel de audiențe, mesaje sau plasamente ale reclamelor ca să găsim formule câștigătoare de reclamă la nivel de cost-ROAS-încasări.',
        'Gestionăm bugetul de reclamă cât mai eficient posibil, astfel încât să nu irosești bani în campanii neproductive.',
        'Măsurăm și îmbunătățim constant rezultatele campaniilor, pe orice platformă vom lucra.',
      ],
    },
    fit: {
      title: 'Campaniile PPC sunt pentru tine dacă…',
      items: [
        'Vrei să validezi produsele sau serviciile tale în piață într-un timp scurt',
        'Te interesează achiziția de clienți noi, la costuri profitabile',
        'Vrei să crești procentul de clienți loiali și valoarea medie pe coș',
        'Nu obții rezultatele dorite din alte canale de marketing folosite până acum',
        'Nu ești dispus să aștepți să vezi rezultate (ex.: SEO și content marketing), dar dispui de buget suficient și ai produse/servicii congruente cu ce vrea publicul tău',
        'Vrei să ajungi la cât mai mulți oameni interesați de produsul/serviciul tău sau să deschizi piețe noi',
      ],
      outro: 'Cel mai probabil te regăsești în cel puțin o situație dintre cele de mai sus, nu-i așa?',
    },
  },
  {
    slug: 'facebook-instagram-ads',
    name: 'Facebook / Instagram Ads',
    group: 'achizitie',
    parent: 'reclame-platite-ppc',
    summary: 'Promovare pe Facebook și Instagram pentru vizibilitate, leaduri și vânzări.',
    lead: 'Promovare pe Facebook și Instagram pentru vânzări profitabile, prin atragerea de clienți noi și loializarea clienților existenți. Te ajutăm să-ți atingi obiectivul dorit în termeni de vizibilitate a brandului, leaduri și vânzări.',
    why: {
      title: 'De ce să faci promovare pe Facebook și Instagram?',
      intro:
        'Fiind una dintre cele mai renumite și utilizate rețele de socializare, Facebook ne oferă cea mai mare vizibilitate în mediul online. Potrivit Statista, în lume există 4,2 miliarde de utilizatori activi de social media, din care 2,98 miliarde folosesc Facebook. Cât despre România, din cei 15,5 milioane de oameni cu acces la internet, aproape 12 milioane folosesc Facebook. E limpede așadar potențialul acestei rețele sociale în termeni de promovare online. Printre beneficiile oferite de campaniile Facebook Ads se numără:',
      items: [
        'Targetarea precisă a publicului țintă în funcție de sex, vârstă, interese, nivel de studii, locație geografică, stare civilă etc.',
        'Cu cercetarea și poziționarea potrivite, Facebook Ads rămâne în continuare o metodă de promovare plătită eficientă, comparativ cu alte platforme de reclamă.',
        'Ai control asupra bugetului investit — poți opri și relua campaniile în orice moment, cu bugetul dorit de tine, poți seta reguli automate și analiza eficiența alocării lui.',
        'Rezultate măsurabile în timp real — urmărești cu ușurință costul, ROAS-ul și ROI-ul.',
        'Oferă rezultate rapide într-un timp relativ scurt, cu strategia, așteptările și resursele potrivite.',
      ],
    },
    how: {
      title: 'Cum te ajutăm să îți crești veniturile prin promovare pe Facebook și Instagram?',
      items: [
        'Rulăm reclame care țin cont de călătoria clientului prin pâlnia ta de vânzare: de la reclame care cresc numărul de fani ai paginii tale, la campanii de recuperare a coșurilor abandonate în site-ul tău și până la reclame de remarketing pentru vizitatorii site-ului.',
        'Nu ne bazăm pe presupuneri, ci pe date statistice, așa că testăm constant audiențele, mesajele, creativele sau formatul de livrare al reclamelor.',
        'Setăm obiective de marketing pornind de la obiectivele tale de business.',
        'Găsim strategiile și tacticile potrivite pentru a atinge obiectivele stabilite.',
        'Monitorizăm performanța campaniilor în Ads Manager, Google Analytics și alte instrumente.',
        'Creăm rapoarte complete pentru ca tu să fii la curent cu evoluția campaniilor tale și să știi ce urmează mai departe.',
      ],
    },
  },
  {
    slug: 'google-ads',
    name: 'Google Ads',
    group: 'achizitie',
    parent: 'reclame-platite-ppc',
    summary: 'Ajungi rapid la clienții interesați de produsele și serviciile tale.',
    lead: 'Promovare prin Google Ads pentru a ajunge rapid la clienții interesați de produsele și serviciile tale. Te ajutăm să ajungi la clienți noi și să-ți dezvolți afacerea într-un mod accelerat.',
    why: {
      title: 'De ce să faci promovare Google Ads?',
      intro:
        'Dacă ai deja un site pe care aduci trafic, știi că ai la îndemână o paletă largă de instrumente gratuite pe care le poți folosi: publicarea de articole, postări pe social media, trimiterea de newslettere etc. Spre deosebire de aceste metode, care sunt gratis/implică costuri mai mici, dar necesită mai mult timp, campaniile Google Ads implică costuri mai mari (alocarea de buget de reclamă, pregătirea materialelor grafice și text, plus fee-ul de administrare pentru freelancer sau agenție). Avantajele sunt însă numeroase:',
      items: [
        'Atragerea de noi clienți într-un timp mai scurt.',
        'Upsell și cross-sell către clienții existenți + creșterea valorii medii pe tranzacție (AOV).',
        'Costul eficient al promovării — plătești doar în momentul în care un utilizator ajunge pe site prin intermediul anunțului (plata per click).',
        'Reclama ta apare doar persoanelor interesate — targetare pe mai multe interese.',
        'Un set larg de obiective și mecanisme de reclamă care îți permit să ajungi la oamenii care caută deja soluții pentru problemele/dorințele lor (campanii de search), să afișezi bannere audiențelor (display) sau să te focusezi pe vânzare atât pentru audiențe noi (Shopping Ads & Performance Max), cât și pentru audiențe existente (Remarketing).',
        'Campanii de promovare relevante — poți schimba strategia oricând, având acces la date importante cu privire la comportamentul vizitatorilor în site/shop.',
      ],
    },
    how: {
      title: 'Cum te ajutăm să îți crești veniturile prin promovare Google Ads?',
      items: [
        'Setăm obiectivele și strategia de la bun început.',
        'Ne asigurăm că monitorizarea și procesarea datelor se fac corect, atât în contul de Google Ads, cât și în instrumente conexe (Google Merchant sau Google Analytics).',
        'Creăm campanii prin realizarea de anunțuri atrăgătoare (la nivel de mesaj și grafică).',
        'Gestionăm bugetul de reclamă eficient și căutăm să obținem rezultatele dorite la cele mai bune costuri posibile.',
        'Monitorizăm, testăm noi tactici și optimizăm constant reclamele.',
        'Creăm un raport detaliat la fiecare final de lună.',
      ],
    },
  },
  {
    slug: 'linkedin-ads',
    name: 'LinkedIn Ads',
    group: 'achizitie',
    parent: 'reclame-platite-ppc',
    summary: 'Vânzări profitabile în regim B2B, cu targetare precisă.',
    lead: 'LinkedIn Ads pentru vânzări profitabile în regim B2B. Te ajutăm să faci promovare prin LinkedIn Ads, pentru a te conecta repede și eficient cu publicul tău business-to-business.',
    why: {
      title: 'De ce să faci promovare prin LinkedIn Ads?',
      intro:
        'LinkedIn este un canal de comunicare extrem de eficient, iar dacă ești o companie B2B, ar trebui să iei în considerare promovarea prin LinkedIn Ads. Canalul are două avantaje principale în ceea ce privește audiența pe care o poți acoperi: targetarea precisă și actualizarea datelor profilelor. Uite cu ce te ajută LinkedIn Ads:',
      items: [
        'Poți atrage audiența specifică afacerii tale pe pagina de LinkedIn și crește o comunitate în jurul soluțiilor pe care le oferi.',
        'Promovarea serviciilor, a produselor și beneficiilor companiei tale, susținută de o vizibilitate organică mai mare decât pe alte rețele social media (Facebook, de exemplu).',
        'Posibilitatea de a trimite mesaje direct în inbox-ul de LinkedIn. Un tip de campanie ce nu se lovește de o reacție atât de negativă ca pe Facebook, deoarece utilizatorii sunt obișnuiți cu astfel de mesaje și nu folosesc aproape deloc mesageria în scop personal.',
        'Poți sublinia și evidenția beneficiile brandului tău celor ce ți-au vizitat deja website-ul: remarketing pe LinkedIn.',
      ],
    },
    how: {
      title: 'Cum te ajutăm să îți crești veniturile prin promovare via LinkedIn Ads?',
      items: [
        'Sponsored Content — postare sau update sponsorizat, cu posibilitatea targetării de interese și audiențe clare.',
        'Sponsored Messaging — un mesaj privat sponsorizat, personalizat, care are ca scop interacțiunea directă cu audiența.',
        'Text Ads — format mic de reclamă, în lateralul feed-ului, la care se poate adăuga și o imagine de 50×50 pixeli.',
        'Dynamic Ads — reclame livrate dinamic, bazate pe interesele utilizatorilor și datele de profil ale acestora.',
        'Reclame de lead generation, video ads sau reclame care îți aduc aplicanți pentru anunțurile de angajare postate în LinkedIn.',
      ],
    },
  },
  {
    slug: 'tik-tok-ads',
    name: 'TikTok Ads',
    group: 'achizitie',
    parent: 'reclame-platite-ppc',
    summary: 'Cu un pas înaintea competiției, acolo unde este publicul tânăr.',
    lead: 'TikTok Ads pentru a fi cu un pas înaintea competiției. Te ajutăm să faci promovare pe TikTok pentru a fi în ton cu trendul și ca business-ul tău să fie mereu atractiv pentru publicul tău.',
    why: {
      title: 'De ce să faci promovare pe TikTok Ads?',
      intro:
        'Noua platformă de social media a devenit în scurt timp un succes pentru generația tânără. Dacă acesta este și publicul tău țintă, trebuie să fii prezent pe TikTok. Această aplicație câștigă utilizatori noi zi de zi, fiind în continuă creștere. În consecință, tot mai multe branduri încep promovarea pe TikTok, pentru a ține pasul cu trendul și a fructifica acel canal de comunicare pentru afacerea lor. Încă te gândești de ce să te promovezi pe TikTok? Uite motivele:',
      items: [
        'Public tânăr și în creștere.',
        'Competiție mică momentan.',
        'Costuri mici în comparație cu alte platforme de promovare.',
        'Brand awareness în dezvoltare.',
        'Platformă nouă și în plină ascensiune, ceea ce înseamnă posibili noi clienți pentru tine.',
        'Conținut video în mod special, care are un impact mult mai mare la public.',
        'Posibilitatea de personalizare a video-urilor în așa fel încât să fie creative, atractive și convingătoare.',
      ],
    },
    how: {
      title: 'Cum te ajutăm să îți crești veniturile prin promovare TikTok Ads?',
      intro:
        'TikTok for Business pune la dispoziție o mulțime de instrumente de targetare a audienței, optimizare a bugetului, creare și plasare a reclamelor, iar noi le vom folosi pe toate.',
      items: [
        'Vom înregistra contul de TikTok for Business și vom face toate setările necesare pentru promovarea afacerii tale.',
        'Vom realiza campaniile relevante pentru afacerea ta prin intermediul platformei TikTok for Business.',
        'Vom monitoriza împreună campania pentru a observa ce ajustări putem face pe parcurs pentru cel mai bun rezultat.',
        'Ne vom asigura că vei avea costuri cât mai bune, țintind în același timp un impact semnificativ asupra vânzărilor și notorietății afacerii tale.',
      ],
    },
  },
  {
    slug: 'seo',
    name: 'SEO',
    group: 'achizitie',
    summary: 'Optimizare care te duce în prima pagină Google, la o simplă căutare.',
    lead: 'Îți oferim servicii de optimizare SEO care te vor ajuta să fii în prima pagină Google, la o simplă căutare.',
    what: {
      title: 'Ce înseamnă optimizare SEO?',
      paras: [
        'SEO (optimizarea pentru motoarele de căutare) este metoda de marketing care oferă site-ului tău puterea necesară pentru a fi afișat în prima pagină din Google.',
        'Practic, ori de câte ori cineva caută produsele sau serviciile oferite de tine, tu vei fi în topul căutărilor organice, în fața concurenților tăi. Aflându-te în primele căutări, ai cele mai mari șanse ca posibilul cumpărător să devină rapid clientul tău.',
      ],
    },
    why: {
      title: 'De ce servicii de optimizare SEO?',
      intro: 'Ca să te lămurim mai bine de ce SEO este atât de important pentru afacerea ta, uite câteva avantaje demne de luat în seamă:',
      items: [
        'Ai trafic relevant, targetat și livrat în mod constant pe site.',
        'Ai lead-uri calificate și venituri pasive.',
        'Ai un brand din ce în ce mai cunoscut, fără să plasezi afișe publicitare peste tot.',
        'Ai un ROI (Return on Investment) asigurat pe termen lung.',
      ],
      outro:
        'Așadar, dacă ești genul de antreprenor care înțelege cu adevărat procesele de dezvoltare ale unui business și ești interesat de venituri în creștere și profitabilitate pe termen lung, serviciile de optimizare SEO trebuie să devină instrumentele tale favorite.',
    },
    how: {
      title: 'Cum te ajutăm să îți crești veniturile cu serviciile de optimizare SEO?',
      items: [
        'Prima etapă va fi optimizarea site-ului / a magazinului online, deoarece SEO este un proces de lungă durată, care necesită pregătire pentru a fi cu adevărat eficient. Astfel, începem prin analiza site-ului existent pentru a vedea punctul în care se află acum la nivel de SEO, viteza de încărcare și erorile care ar putea împiedica o clasare mai bună în afișările motoarelor de căutare.',
        'Creăm și implementăm o strategie de On-Page SEO — arhitectura site-ului, keyword research, remedierea erorilor, optimizarea vitezei și a paginilor. În paralel, creăm o strategie pentru Off-Page SEO — link-uri externe relevante ce conduc înapoi în site (backlinks) și activitatea pe rețele sociale ce consolidează acest proces.',
        'În tot acest timp vom monitoriza și optimiza constant performanțele site-ului tău în motoarele de căutare.',
        'Periodic vei primi de la noi rapoarte de analiză, cu rezultatele obținute și soluțiile propuse de specialiștii noștri.',
      ],
    },
    fit: {
      title: 'Sunt pentru tine serviciile de optimizare SEO dacă…',
      items: [
        'Ești pregătit să te bucuri de rezultate pe termen lung: trafic, clienți noi și recurenți, creșterea notorietății brandului, a vânzărilor și a profitabilității',
        'Ești dispus să investești, chiar dacă nu vezi rezultate mâine neapărat, ci în 6–12 luni',
        'Îți plac riscul, competiția, provocările',
        'Îți place să te bucuri de proces, cu răbdare și înțelegere',
        'Vrei venituri pasive, o experiență mai bună pentru clienții tăi și o profitabilitate mai mare, dar înțelegi ce eforturi presupune asta',
      ],
      outro: 'Poate nu sunt cele mai simple lucruri de făcut, dar știi vorba aia: „după muncă și răsplată”.',
    },
  },
  {
    slug: 'social-media',
    name: 'Social Media Marketing',
    group: 'achizitie',
    summary: 'Brandul tău, prezent exact acolo unde sunt clienții tăi.',
    lead: 'Îți oferim servicii de promovare social media pentru a fi prezent cu brandul tău exact acolo unde sunt clienții tăi: pe Facebook, Instagram, YouTube, LinkedIn, Twitter, TikTok.',
    what: {
      title: 'Ce sunt serviciile de promovare pe social media?',
      paras: [
        'Promovarea în social media sau Social Media Marketing este o formă de digital marketing care se bazează pe capacitatea rețelelor sociale relevante de a crește vizibilitatea unui brand. Altfel spus, serviciul de promovare social media este un mijloc puternic de comunicare prin care tu, ca brand, te poți conecta în mod constant cu clienții și potențialii clienți.',
        'Scopul principal al marketingului realizat prin intermediul rețelelor sociale este de a produce conținut relevant, cu care utilizatorii să interacționeze și pe care să-l distribuie mai departe. Acest lucru va mări expunerea brandului și vei ajunge mai repede la publicul țintă potrivit. Activitățile de social media marketing organice sunt, de regulă, prima etapă din pâlnia de vânzare și puntea de trecere către site/shop sau lista de email.',
        'Deși nu au aceeași „viteză de răspândire” precum reclamele plătite, activitățile organice de marketing în social media acumulează treptat încrederea și atenția audienței. În plus, poți combina activitățile organice cu reclamele plătite foarte ușor, astfel încât să faci conținutul și mai vizibil, într-un timp mai scurt.',
      ],
    },
    why: {
      title: 'De ce să alegi serviciile de promovare social media?',
      intro: 'Promovarea organică în social media are multe beneficii, printre care se numără:',
      items: [
        'Creșterea gradului de recunoaștere al brandului.',
        'Creșterea autorității brandului — interacțiunea regulată cu clienții tăi denotă seriozitate și încredere pentru alți utilizatori.',
        'O înțelegere mai profundă a consumatorilor — social media oferă oportunitatea de a afla informații valoroase despre interesele consumatorilor și comportamentul lor. Este mediul ideal în care poți avea conversații deschise și autentice cu audiența.',
        'Creșterea numărului de conversii și a ratei de conversie.',
        'Reducerea costurilor de marketing.',
        'O poziție mai bună pe motoarele de căutare.',
      ],
    },
    how: {
      title: 'Cum te ajutăm să îți dezvolți afacerea prin serviciile de promovare social media?',
      items: [
        'Analizăm cu precizie afacerea ta și nișa în care activezi.',
        'Stabilim care este publicul țintă și identificăm ce canal social ți se potrivește.',
        'Optimizăm informațiile fiecărui cont pe care îl administrăm, pentru cele mai bune rezultate.',
        'Creăm pentru publicul tău țintă o experiență memorabilă, nu postări agasante.',
        'Structurăm materialele postate pe categorii care educă, informează, amuză și inspiră.',
        'Alegem subiectele postărilor relevante pentru audiență și identitatea brandului tău.',
        'Creăm concursuri sau promoții în funcție de sezon, care mențin interesul activ al utilizatorilor.',
        'Avem grijă să îți promovăm constant articolele de blog, video-urile și ofertele speciale.',
        'Ne facem mereu temele, iar afacerea ta va aplica noutățile și bunele practici în domeniu.',
        'Suntem vigilenți: monitorizăm activitatea, păstrăm ce funcționează și eliminăm restul.',
      ],
    },
  },
  {
    slug: 'content-marketing',
    name: 'Content Marketing',
    group: 'achizitie',
    summary: 'Articole de blog, advertoriale, texte de site și povești de brand care construiesc reputație.',
    lead: 'Servicii de content marketing pentru creșterea valorii și a reputației brandului tău în mediul online. Brandul tău creează conținut mai relevant, captivant și util.',
    what: {
      title: 'Ce sunt aceste servicii de content marketing?',
      paras: [
        'Când spunem „conținut” ne referim la articole de blog, advertoriale, postări & stories în social media, povești de brand și orice ține de exprimare în mediul online prin mesaje text, imagini sau video. Practic, prin crearea și distribuirea de conținut online, posibilii clienți sunt ghidați în fiecare pas al procesului de cumpărare, sistematic. Îi trecem prin etapele pâlniei de vânzare, în care le oferim informații valoroase, care îi conduc în mod firesc să cumpere produsul/serviciul tău, să distribuie conținutul tău mai departe sau să cumpere din nou de la tine.',
        'Când spunem „valoroase” ne referim la conținut care informează, educă, inspiră, amuză sau convinge audiența ta să facă anumite acțiuni.',
      ],
      bullets: ['atrage noi clienți pentru afacerea ta', 'fidelizează clienții existenți', 'creează o comunitate de fani în jurul produselor/serviciilor tale'],
    },
    why: {
      title: 'De ce să alegi servicii de content marketing pentru afacerea ta online?',
      intro: 'Content marketingul înseamnă informație de calitate, care construiește credibilitate și autoritate în relație cu audiența ta. Printre beneficiile principale ale conținutului se numără:',
      items: [
        'Vizibilitatea în motoarele de căutare.',
        'Traficul social.',
        'Creșterea potențialului de conversie.',
        'Reputația îmbunătățită a brandului.',
        'Costuri de marketing reduse și valoare adăugată.',
        'Relația mai strânsă cu audiența, pe termen lung.',
      ],
      outro:
        'Îți mai spunem un mic secret! Indiferent că strategia ta de marketing include canale precum PPC Ads, Email Marketing, Blogging, Video Marketing, Social Media Marketing sau PR, conținutul relevant și de calitate este „unitatea” de bază fără de care niciunul n-ar aduce rezultate.',
    },
    how: {
      title: 'Cum te ajutăm să îți crești veniturile prin servicii de content marketing?',
      items: [
        'Ne facem temele. Nu scriem un cuvânt până nu înțelegem foarte clar cine este publicul țintă.',
        'Facem research aprofundat să înțelegem de ce posibilul tău client are nevoie de produsele/serviciile tale, ce nevoi/frustrări/dorințe are și care sunt punctele tale forte care l-ar ajuta să și le îndeplinească.',
        'Conținutul reflectă tonul vocii brandului tău, dar în același timp pornește de la ceea ce spun clienții tăi (în comunități, în comentarii & recenzii despre produsele/serviciile tale).',
        'Prin articole/postări/video-uri educative te vom poziționa ca expert în domeniul de activitate, care nu are doar „alte produse/servicii de vândut”, ci care cunoaște foarte bine nișa și este în măsură să dea recomandări potrivite.',
        'Gândim pe termen lung și în ansamblu. Acționăm pe baza pâlniei de vânzări potrivite afacerii tale și creăm conținut care să fie util/actual chiar și peste câțiva ani (evergreen content).',
        'Îți construim un trib de clienți și fani loiali. Prin content creation îți vom crește baza de abonați pe email, dar mai ales vom crea o comunitate activă și fidelă în jurul brandului tău.',
        'Prin diverse forme de conținut (poll-uri, quiz-uri, chestionare etc.) primim feedback relevant de la audiența ta, care va fi folosit ulterior în comunicare.',
      ],
    },
    fit: {
      title: 'Sunt pentru tine serviciile de content marketing dacă vrei să…',
      items: [
        'Îți crești vizibilitatea, credibilitatea și autoritatea în mediul online, în fața publicului tău țintă',
        'Dezvolți o listă de abonați cu care să ai o relație comercială și de încredere',
        'Creezi o comunitate în jurul brandului tău',
        'Generezi trafic și vânzări în site-ul/magazinul tău online',
        'Ai răbdare și investești pe termen lung în creșterea afacerii tale',
      ],
      outro: 'Cel mai probabil te regăsești în cel puțin o situație dintre cele de mai sus, nu-i așa?',
    },
  },
  {
    slug: 'email-marketing',
    name: 'Email Marketing',
    group: 'retentie',
    summary: 'Îți crești vânzările, educi și construiești relații puternice cu actualii și viitorii clienți.',
    lead: 'Îți oferim servicii de email marketing care te vor ajuta să îți crești vânzările, să educi și să construiești relații puternice cu actualii și viitorii clienți.',
    what: {
      title: 'Email marketing cu efort puțin și rezultate profitabile',
      paras: [
        'Da, da, ai citit bine. Efort puțin înseamnă că acest tip de marketing online nu necesită bugete comparabile cu cele din campaniile PPC. Mai degrabă ai nevoie de constanță, un strop de creativitate și testare continuă. În raport cu efortul depus și abonamentul lunar al platformei de email, rezultatele sunt de-a dreptul încântătoare. Newsletterele sau emailurile automate ajung rapid la orice abonat. Totul se întâmplă la un click distanță.',
        'Unul dintre principalele avantaje ale email marketingului este acordul explicit al potențialilor clienți/clienților existenți de a păstra legătura cu tine. Prin platformele de email marketing, trimiți newslettere doar acelor clienți care și-au dat acordul să primească informații de la business-ul pe care îl apreciază și în care au încredere. Astfel, clienții nu vor primi mesaje de tip SPAM, iar rata de conversie este mai mare.',
      ],
    },
    why: {
      title: 'De ce să alegi email marketingul?',
      intro:
        'După cum probabil știi deja, un mesaj trimis într-un stil personal, cu adresare directă și care cuprinde informații utile, relevante pentru cititor sporește considerabil vânzările. De asemenea, crește tendința abonaților de a continua să te urmărească și să cumpere de la tine. Nu degeaba aceste servicii de email marketing sunt folosite de sute de mii de companii la nivel global, iar rezultatele sunt în creștere de la an la an.',
      items: [],
      outro:
        'Gândește-te așa: emailurile sunt personale, instante și ajung la acei oameni care sunt interesați direct de tine. Practic, este un canal care te ajută să accesezi un public nou sau existent. Pe măsură ce îl informezi și educi constant, motivezi acest public să te aleagă atunci când are nevoie de un produs/serviciu din nișa ta. Mai pe scurt, îți creezi autoritate simplu și rapid, cu câteva newslettere pe lună și/sau secvențe de mesaje automate.',
    },
    how: {
      title: 'Cum te ajutăm să îți crești veniturile prin serviciile noastre de email marketing?',
      items: [
        'Îți recomandăm platforma de email marketing potrivită, în funcție de situația actuală a afacerii și obiectivele tale.',
        'Acționăm pe baza unei strategii care are în vedere călătoria clientului prin pâlnia de vânzare (sales funnel). Nu trimitem emailuri „la bucată” sau la duzină.',
        'Punem la punct campanii de generare de leaduri și creăm secvențele de emailuri pentru „încălzirea” relației.',
        'Creăm emailuri atractive, concise, clare, care educă, informează, dar îi și conduc pe abonați să cumpere de la tine.',
        'Ținem cont de Regulamentul GDPR (intrat în vigoare pe 25 mai 2018) în ceea ce privește datele cu caracter personal.',
        'Automatizăm în timp ce personalizăm. Vom trimite abonaților tăi emailuri umane, personale, interactive, dar orientate spre rezultat. Aplicăm mecanismele de vânzare (oferte, reduceri, upsell, cross-sell etc.) din magazin și testăm mecanisme noi.',
        'Măsurăm, monitorizăm și îmbunătățim permanent: rata de deschidere, rata de click pe link, numărul de vânzări sau de alte acțiuni specifice din email, cum ar fi înscrierea la un webinar, rezervarea unui loc sau descărcarea unui material. De asemenea, corelăm indicatorii din platforma de email cu Google Analytics și alte instrumente pentru a optimiza performanța campaniilor de email.',
        'Primești de la noi rapoarte care conțin indicatorii agreați, acțiunile făcute, interpretarea rezultatelor și măsuri de îmbunătățire.',
      ],
    },
    fit: {
      title: 'Serviciile de email marketing DAR Media sunt pentru tine dacă vrei…',
      items: [
        'Un serviciu de marketing eficient, cu costuri reduse',
        'Să-ți mărești baza de potențiali clienți și să-i transformi în clienți noi',
        'O metodă prin care să ții legătura cu clienții existenți și să-i fidelizezi',
        'Un canal de marketing integrat în strategia ta omnichannel',
        'Să testezi noi variante de mesaje care aduc rezultate mai bune',
        'Să îți crești vânzările într-un mod sustenabil și profitabil',
        'Să urmărești ușor rezultatele',
        'Strategii și campanii de email marketing eficiente, orientate spre rezultate, pe termen scurt și lung',
      ],
      outro: 'Cel mai probabil te regăsești în cel puțin o situație dintre cele de mai sus, nu-i așa?',
    },
  },
  {
    slug: 'sms-marketing',
    name: 'SMS Marketing',
    group: 'retentie',
    summary: 'Comunici punctual, relevant și eficient cu audiența ta sau cu segmente din aceasta.',
    lead: 'Servicii de SMS marketing pentru mai multă eficiență în comunicarea cu clienții. Te ajutăm să comunici punctual, relevant și eficient cu audiența ta sau cu diferite segmente din aceasta.',
    what: {
      title: 'Ce este SMS marketingul?',
      paras: [
        'SMS (serviciul de mesaje scurte) este doar un alt cuvânt pentru trimiterea de mesaje text. Trimiterea de mesaje text clienților este la fel de importantă pentru marketing ca prezența în social media.',
        'Prin SMS marketing ai oportunitatea imensă de a avea un canal de marketing asupra căruia ai control (la fel ca și lista de email) și de a comunica mai bine/mai mult cu clienții tăi. Acesta nu va depinde de schimbarea regulilor platformei de reclamă sau de performanța uneori foarte fluctuantă a reclamelor.',
      ],
    },
    why: {
      title: 'De ce să alegi SMS marketing?',
      intro:
        'Principalul avantaj al acestui canal de marketing este că poți să ai o abordare extrem de personală prin SMS-ul tău. Acest lucru duce la mai multă apropiere față de clienți și la crearea unei legături mai personale. Pe scurt, vei dobândi clienți fideli și de încredere. Printre beneficiile majore ale SMS marketingului se numără:',
      items: [
        'Liniște din punct de vedere legal. Contactarea clienților prin SMS se face doar cu permisiunea lor și cu respectarea normelor GDPR.',
        'Calitatea înaintea cantității. Oferi informații valoroase și oferte exclusive, relevante pentru audiența ta.',
        'Costuri accesibile, care îți oferă un ROI semnificativ.',
        'Comunicare aproape instant. De multe ori oamenii verifică mai rapid SMS-ul decât emailul sau conturile de social media.',
        'Ideal pentru promovarea evenimentelor/webinariilor/ofertelor speciale. Participanții se pot înregistra în avans cu un cupon de reducere sau îi informezi despre speakerii principali.',
        'Aduni adrese de email și îți poți mări în paralel și lista de email.',
        'Rată de deschidere foarte mare a mesajelor, în jur de 95%. Elimini bariera de la email (întâi trebuie să deschizi mesajul dacă te atrage titlul, abia apoi dai click). Prin SMS marketing, dacă ai un copy relevant, e mai ușor să crești rata de click și ulterior rata de conversie.',
        'Versatilitate. Platformele de SMS marketing îți permit să schimbi formatul mesajelor (pe lângă text poți introduce imagini/video, carusele) sau să adresezi audiențe noi, pe lângă contactele de care dispui deja.',
      ],
    },
    how: {
      title: 'Cum te ajutăm să îți crești afacerea prin SMS marketing?',
      items: [
        'Oferim un stimulent (material gratuit, cupon etc.) potențialilor și actualilor tăi clienți pentru acordul lor de a intra în baza ta de contacte. Ne asigurăm că alegem materialul relevant pentru audiența ta.',
        'Ne asigurăm că informația transmisă clientului va fi una valoroasă și de impact pentru el.',
        'Mărim treptat nivelul permisivității. De exemplu: mai multe recompense clientului care oferă mai multe informații/feedback.',
        'Transformăm permisiunea dată de clienți într-un win-win. Ei primesc informații valoroase, vouchere cadou și oferte speciale, iar noi creăm o bază de clienți fideli, pe care ne putem baza mereu.',
        'Segmentăm baza de contacte și trimitem SMS-uri pentru fiecare segment în parte. Segmentarea crește relevanța, rata de click și ulterior rata de conversie.',
      ],
    },
    fit: {
      title: 'Sunt pentru tine serviciile de SMS marketing dacă vrei…',
      items: [
        'Să atragi noi potențiali clienți și clienți noi, pe care ulterior să îi loializezi',
        'Să ai o bază proprie de contacte cu care să comunici ușor și țintit',
        'Să adaugi un canal nou de marketing în strategia omnichannel a brandului tău',
        'Să îți îmbunătățești relația cu clienții existenți',
        'Să generezi noi vânzări și să crești profitul',
      ],
      outro: 'Cel mai probabil te regăsești în cel puțin o situație dintre cele de mai sus, nu-i așa?',
    },
  },
  {
    slug: 'branding',
    name: 'Branding',
    group: 'brand',
    summary: 'Comunici clar și autentic esența afacerii tale și cum aceasta ajută publicul tău țintă.',
    lead: 'Îți oferim servicii de branding care te ajută să comunici clar și autentic esența afacerii tale și cum aceasta ajută publicul tău țintă.',
    what: {
      title: 'Ce sunt aceste servicii de branding?',
      paras: [
        'Brandingul este suma tuturor activităților care dau personalitate brandului și îl șlefuiesc. La fel cum caracterizezi o persoană, brandul are propria personalitate, este unic și are ceva diferit de oferit. Este ceea ce îl diferențiază în mod relevant de competiție.',
        'Identitatea vizuală a brandului este formată din tot ceea ce văd oamenii și se realizează printr-un set de instrumente. Folosind aceste instrumente, se realizează o imagine unitară la nivel de elemente de design, paletă de culori etc., ce va fi folosită pe toate materialele ce vor intra în contact cu mediul extern și intern. Astfel, identitatea vizuală a unui brand se conturează prin logo, schema de culori, look & feel, fonturi — elemente care mai apoi se vor regăsi congruent și unitar pe ambalaje, produse, materiale printabile (foi cu antet, pliante, broșuri, cărți de vizită etc.), website sau canalele de marketing pe care activează afacerea.',
      ],
    },
    why: {
      title: 'De ce să alegi servicii de branding pentru dezvoltarea afacerii tale?',
      intro:
        'Brandingul este absolut esențial pentru o afacere, datorită impactului general pe care îl are. Brandingul poate schimba modul în care oamenii percep afacerea ta, poate stimula creșterea vânzărilor și poate spori gradul de conștientizare al mărcii.',
      items: [],
      outro:
        'Brandingul este important deoarece nu numai că face impresia memorabilă asupra consumatorilor, ci permite clienților să știe la ce să se aștepte de la brandul tău. Este o modalitate de a te distinge de concurenți și de a clarifica ceea ce oferi. Brandul tău este construit pentru a fi o reprezentare adevărată a cine ești ca afacere și a modului în care dorești să fii perceput. Deși e intangibilă aparent, percepția audienței tale asupra brandului tău este foarte reală în mintea/emoțiile acesteia și, implicit, îi influențează acțiunile (pro sau contra apropierii de brandul tău).',
    },
    how: {
      title: 'Cum te ajutăm să îți dezvolți afacerea prin servicii de branding?',
      items: [
        'Ne punem la bătaie răbdarea și atenția la detalii și facem market research. Identificăm publicul țintă potrivit pentru ceea ce ai de oferit.',
        'Sintetizăm esența brandului tău: misiune, viziune, valori, puncte forte și felul în care acestea servesc audiența ta.',
        'Ne adunăm apoi toată originalitatea, expertiza și creativitatea ca să creăm elementele cheie ale brandului tău: un nume de brand potrivit (brand naming), un slogan (tagline), hashtag-uri potrivite, tonul vocii, stil de comunicare, logo, fonturi și schema de culori, povestea brandului (brand story). Aceste elemente se vor regăsi într-o ordine coerentă în manualul tău de branding.',
        'Ținem totul sub lupă: monitorizăm feedback-ul publicului țintă, evoluția pieței și venim cu ajustările necesare, când situația o cere.',
        'Îți oferim strategiile potrivite ca să te asiguri că imaginea pe care o vrei pentru brandul tău se potrivește cu acțiunile tale zilnice de business.',
      ],
    },
    fit: {
      title: 'Sunt pentru tine aceste servicii de branding dacă…',
      items: [
        'Nu ai lansat încă afacerea și nu îți sunt clare încă scopul, viziunea, misiunea sau valorile companiei. Deci există riscul să iei decizii de marketing și de business care nu reflectă ceea ce îți dorești',
        'Nu ai un plan de business documentat, dar speri că orice vei face va funcționa',
        'Ai deja un business activ, dar echipa ta este confuză, ceea ce face dificil pentru angajați să se simtă implicați și interesați',
        'Este dificil să atragi oameni care îți împărtășesc valorile (clienți noi, angajați, parteneri de afaceri etc.)',
        'Nu știi ce mesaje cheie să comunici în afacerea ta și mai ales când și în ce contexte',
      ],
      outro: 'Pe scurt, fără o strategie de branding, pierzi foarte mult atât pe termen scurt, dar mai ales pe termen lung.',
    },
  },
  {
    slug: 'graphic-design',
    name: 'Graphic Design',
    group: 'brand',
    summary: 'Comunici clar și cu impact mesajele brandului tău.',
    lead: 'Îți oferim servicii de grafic design pentru a comunica clar și cu impact mesajele brandului tău.',
    what: {
      title: 'Grafic design. Cum funcționează?',
      paras: [
        'Prin grafic design îți conturezi identitatea vizuală a brandului tău. Ea are două scopuri: cel de a capta atenția și cel de a transmite mesajul dorit într-un mod congruent cu celelalte segmente ale business-ului tău.',
        'Rolul grafic design-ului este cel de a combina fonturi, forme, elemente grafice, culori, imagini pentru a obține un concept grafic unic. Grafic design-ul nu trebuie să interfereze cu produsul. Grafica trebuie să scoată în evidență calitățile cheie ale produsului sau ale brandului în sine.',
        'La fel ca și conținutul scris, grafic design-ul este un element cheie din orice campanie de marketing.',
      ],
    },
    why: {
      title: 'De ce să alegi servicii de grafic design pentru afacerea ta?',
      intro:
        'Unul dintre principalele motive pentru care design-ul grafic joacă un rol atât de important în identitatea brandului este că se ocupă de rezolvarea problemelor de comunicare pe care le poate întâmpina o firmă. Mai precis:',
      items: [
        'Scoate produsele în evidență.',
        'Atrage și păstrează atenția publicului tău țintă.',
        'Comunică indirect prin aspect.',
        'Crește încrederea și interesul potențialilor clienți sau ale clienților existenți.',
      ],
    },
    how: {
      title: 'Cum te ajutăm să îți crești veniturile prin serviciile de grafic design DAR Media?',
      items: [
        'Creăm o strategie pentru identitatea vizuală a brandului (dacă nu ai făcut-o deja).',
        'Construim fundația: îți creăm un logo atractiv de care să spui „Ăsta e! Se potrivește cu ce vreau eu să transmit!”.',
        'Îți recrutăm toți „soldățeii vizuali”: ne ocupăm de design-ul pentru flyerele, cataloagele, afișele, posterele, etichetele, bannerele tale pentru site/magazin online, grafica pentru conținutul de pe Facebook/Instagram sau pentru reclamele PPC.',
        'Avem grijă ca toate materialele create să fie profesioniste, atractive, funcționale și congruente cu imaginea brandului tău.',
      ],
    },
    fit: {
      title: 'Sunt pentru tine serviciile de grafic design dacă vrei să…',
      items: [
        'Ai o imagine profesionistă pentru brandul tău, în mediul online/offline',
        'Comunici mesajele vizuale potrivite oamenilor potriviți',
        'Atragi clienți noi & îți loializezi clienții existenți',
        'Ai materiale vizuale pentru fiecare etapă a pâlniei de vânzare',
      ],
      outro: 'Cel mai probabil te regăsești în cel puțin o situație dintre cele de mai sus, nu-i așa?',
    },
  },
];

export const whyUs = {
  title: 'De ce să lucrezi cu noi?',
  lead: 'Suntem DAR Media, o agenție de performance marketing tânără, creativă și orientată spre rezultate.',
  items: [
    'Facem cu drag ceea ce facem și credem în forța echipei noastre.',
    'Suntem disponibili pentru clienții noștri.',
    'Punem preț pe respect, transparență și comunicare deschisă.',
    'Facem ceea ce spunem că facem și vrem să livrăm mai mult decât se așteaptă de la noi.',
    'Acumulăm constant experiență și rezultate din mai multe nișe și modele de business.',
    'Suntem la curent cu ultimele trenduri, strategii și tactici de marketing și business online.',
    'Ne concentrăm pe punctele forte ale fiecărui client în parte și personalizăm serviciile oferite pentru a atinge obiectivele stabilite împreună.',
    'Măsurăm atent rezultatele și ne perfecționăm continuu abilitățile de marketing și de vânzări prin experiență directă, cursuri, seminarii și cărți de specialitate.',
    'Documentăm activitatea noastră în procese de lucru, studii de caz și articole de specialitate.',
    'Facem networking de calitate cu oameni din domeniu și nu numai.',
  ],
};

export const topLevel = services.filter((s) => !s.parent);
export const bySlug = (slug: string) => services.find((s) => s.slug === slug)!;
