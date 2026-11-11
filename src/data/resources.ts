// Paginile de resurse gratuite (ebook-uri, template-uri). Conținut preluat de pe darmedia.ro.

export interface ResourceSection {
  title: string;
  paras?: string[];
  items?: string[];
  cards?: { title: string; text: string }[];
  numbered?: boolean;
}

export interface Resource {
  slug: string;
  heading: string;
  lead: string;
  formKey?: string;
  formTitle: string;
  externalForm?: boolean;
  sections: ResourceSection[];
}

export const resources: Resource[] = [
  {
    slug: 'retentie-ebook',
    heading: '10 sisteme de retenție pentru magazinele online',
    lead: 'Vei descoperi cum să construiești sisteme de retenție care îți cresc veniturile fără să depinzi constant de trafic nou. Nu e doar un ebook: ai acces și la un calculator de retenție care îți arată unde ești acum și cât poți crește.',
    formKey: 'retentie-ebook',
    formTitle: 'Descarcă ebook-ul și calculează retenția magazinului tău',
    sections: [
      {
        title: 'Ce găsești în acest ebook?',
        items: [
          'Cum să folosești personalizarea și datele pentru a crea experiențe relevante, recomandări inteligente și oferte care îi fac pe clienți să revină constant.',
          'Cum să implementezi comunicare eficientă prin email și SMS, cu mesaje utile și bine segmentate, care cresc încrederea și conversiile fără să devină intruzive.',
          'Cum să construiești programe de loialitate și mecanisme de gamificare care cresc frecvența achizițiilor și transformă clienții în ambasadori de brand.',
          'Cum să pui pe pilot automat automatizările esențiale (abandon de coș, follow-up, reactivare) și să folosești marketingul predictiv pentru a livra mesajul potrivit la momentul potrivit.',
          'Cum să optimizezi experiența post-vânzare, de la suport și recenzii până la testare de produse și upsell, astfel încât fiecare comandă să ducă la următoarea.',
          'Cum să creezi ecosisteme pe termen lung prin comunități, experiențe de livrare premium și abonamente recurente, care cresc loialitatea și generează venit predictibil.',
        ],
      },
      {
        title: 'Pentru cine este acest ebook?',
        cards: [
          { title: 'Antreprenorii din eCommerce', text: 'Ai deja comenzi constante, trafic stabil și produse validate în piață. Nu mai cauți „ce funcționează”, ci vrei să optimizezi ce ai deja și să scoți mai mult din fiecare client.' },
          { title: 'Echipe care vor să treacă de la campanii punctuale la sisteme scalabile', text: 'Nu mai vrei rezultate punctuale (Black Friday, promoții, campanii izolate), ci un setup care funcționează constant: automatizări, retenție, procese clare.' },
          { title: 'Business-uri care depășesc 1M€ cifră de afaceri', text: 'Ești într-un punct în care creșterea doar din ads devine tot mai scumpă. Ai nevoie de sisteme care cresc valoarea clienților existenți și stabilizează veniturile.' },
        ],
      },
      {
        title: 'De ce merită să-l citești?',
        paras: [
          'În eCommerce, diferența nu o face doar achiziția, ci retenția. Majoritatea magazinelor investesc constant în trafic nou, dar pierd din vedere ce se întâmplă după prima comandă. Acolo, de fapt, se face diferența între un business care crește greu și unul care scalează sănătos.',
          'Costurile de achiziție sunt în creștere, competiția este din ce în ce mai agresivă, iar clienții au zeci de alternative la un click distanță. În acest context, să aduci clienți noi devine din ce în ce mai scump, iar marjele sunt puse sub presiune. Magazinele care cresc constant sunt cele care își păstrează clienții și construiesc relații pe termen lung.',
          'Retenția nu înseamnă doar emailuri sau reduceri. Înseamnă un sistem: experiență, comunicare, timing, relevanță. Înseamnă să știi când, ce și cum să comunici, astfel încât clientul să revină natural, nu forțat.',
          'Este mult mai rentabil să vinzi din nou unui client existent decât să aduci unul nou. Ai deja încrederea lui, ai deja date despre comportamentul lui și ai șanse mai mari să crești valoarea fiecărei comenzi. Problema este că majoritatea magazinelor tratează retenția fragmentat sau o amână, pentru că nu au un cadru clar de implementare.',
        ],
      },
    ],
  },
  {
    slug: 'automatizari-email-ghid-ecommerce',
    heading: 'Automatizări de email care generează vânzări',
    lead: 'Ghid complet pentru eCommerce. Descoperă cele 11 secvențe de email must-have pentru orice magazin online care vrea să vândă constant și profitabil — automatizările pe care noi le-am folosit ca să generăm peste 100.000 € în doar 3 luni pentru un magazin online.',
    formKey: 'automatizari-email-ghid-ecommerce',
    formTitle: 'Descarcă ebook-ul gratuit',
    sections: [
      {
        title: 'Ce te așteaptă în ebook',
        cards: [
          { title: 'Ce este email marketingul automatizat și de ce ai nevoie de el?', text: 'Află cum email marketingul automatizat îți poate simplifica viața. Vei vedea cum poți economisi timp și cum poți fideliza clienții fără să stai mereu cu ochii pe calculator.' },
          { title: 'Alegerea platformei potrivite de email marketing', text: 'Găsește platforma care se potrivește cel mai bine afacerii tale. Vom analiza costuri, funcționalități și integrări pentru ca tu să iei cea mai bună decizie.' },
          { title: 'Segmentează lista ta pentru mai multe conversii', text: 'Segmentarea listei este crucială. Vei învăța cum să îți împarți lista de emailuri în segmente relevante, astfel încât să trimiți mesaje personalizate care atrag atenția și generează vânzări.' },
          { title: 'Transformă conținutul emailurilor în mesaje care vând', text: 'Află cum să scrii emailuri care nu doar că sunt citite, dar și transformă cititorii în clienți. Vom împărtăși tehnici pentru a crea subiecte atractive, conținut valoros și call-to-action-uri eficiente.' },
          { title: 'Automatizări care îți pot crește vânzările (+ exemple concrete)', text: 'Începe să folosești tipurile de emailuri automatizate care îți pot crește vânzările. De la emailuri de bun venit la cele pentru coș abandonat, îți vom arăta exemple practice pentru fiecare.' },
          { title: 'Rezultate mai bune prin A/B testing făcut ca la carte', text: 'Testează și optimizează campaniile tale de email marketing. Vei învăța cum să faci A/B testing pentru subiecte, conținut și CTA-uri, astfel încât să îmbunătățești constant performanța emailurilor tale.' },
          { title: 'Noutăți și greșeli de evitat în 2026', text: 'De la cele mai noi tendințe și schimbări care impactează direct vânzările online, până la greșelile pe care să le eviți dacă vrei să ai rezultate ca ale noastre.' },
          { title: 'Studiu de caz: cum am făcut 100.000 € în 3 luni', text: 'Îți arătăm pas cu pas ce automatizări am folosit ca să generăm peste 100.000 € în doar 3 luni. De la coș abandonat la browse abandonment și win-back, vei vedea concret ce strategii au funcționat și cum le poți aplica și tu.' },
        ],
      },
      {
        title: 'Pentru cine este acest ebook?',
        cards: [
          { title: 'Antreprenorii din eCommerce', text: 'Ai atins un nivel bun de trafic și vânzări, dar ești gata să îți extinzi afacerea și să îți optimizezi strategiile? Acest ebook este soluția ta pentru a automatiza vânzările și a construi relații solide cu clienții.' },
          { title: 'Specialiștii în marketing digital', text: 'Cauți soluții eficiente și automate pentru campaniile tale de email marketing? Acest ebook îți oferă ghiduri practice și exemple concrete pentru a aplica cele mai noi tehnici de automatizare și personalizare.' },
          { title: 'Start-up-uri în eCommerce', text: 'Ești la început de drum și vrei să îți duci start-up-ul la următorul nivel? Acest ebook este ghidul tău complet pentru alegerea platformei potrivite, segmentarea audienței și optimizarea campaniilor de email marketing.' },
        ],
      },
      {
        title: 'De ce să nu mai stai pe gânduri',
        items: [
          'Nu mai lăsa banii să-ți scape printre degete. Pune vânzările pe pilot automat: învață să creezi campanii de email marketing care rulează singure, economisindu-ți timp și energie.',
          'Poți crește semnificativ conversiile magazinului online. Află cum să trimiți mesajele potrivite, la momentul potrivit, persoanelor potrivite.',
          'Îți fidelizezi clienții cu interacțiuni personalizate. Descoperă cum să folosești datele despre comportamentul clienților pentru a le oferi exact ceea ce își doresc.',
          'Nu mai irosești timp și resurse valoroase. Automatizarea emailurilor nu doar că reduce erorile, dar îți și economisește timp prețios.',
          'Îți păstrezi avantajul competitiv, la curent cu cele mai noi tendințe și tehnici avansate în email marketing.',
          'Oferi o experiență mai bună de cumpărare clienților tăi, pe toată durata călătoriei lor (Buyer Journey).',
        ],
      },
      {
        title: 'Provocarea noastră pentru tine',
        numbered: true,
        items: [
          'Automatizează-ți primul email de bun venit. Creează o secvență pentru noii abonați și adaugă un cod de reducere pentru a-i încuraja să facă prima achiziție.',
          'Segmentează-ți lista de emailuri. Creează trei segmente cheie (comportament de cumpărare, locație, interese) și trimite mesaje personalizate fiecărui segment.',
          'Lansează o campanie de email pentru coșuri abandonate. Setează o serie de emailuri automatizate pentru a le reaminti clienților de produsele lăsate în coș.',
          'Fă un A/B test pe subiectul emailului. Creează două variante de subiect și testează-le pentru a vedea care are cea mai bună rată de deschidere.',
          'Încearcă un trend nou în email marketing, cum ar fi conținutul generat de utilizatori sau optimizarea pentru dark mode.',
        ],
      },
    ],
  },
  {
    slug: 'buyer-journey-template',
    heading: 'Buyer Journey Template',
    lead: 'Descoperă cele mai eficiente strategii de marketing pentru a atrage și fideliza clienții tăi. Descarcă template-ul cu 35 de exemple practice pentru fiecare etapă din călătoria clientului.',
    formKey: 'buyer-journey-template',
    formTitle: 'Primește template-ul gratuit',
    sections: [
      {
        title: 'Ce vei descoperi în acest template?',
        paras: ['Vei primi 35 de exemple concrete de activități pe care le poți face la fiecare pas din Buyer Journey. Află răspunsul la următoarele întrebări:'],
        items: [
          'Cum fac să audă mai mulți oameni de mine?',
          'Cum fac să-mi viziteze mai mulți oameni site-ul?',
          'Cum fac să obțin mai multe contacte în baza mea de date?',
          'Cum fac ca oamenii să experimenteze valoarea produsului meu?',
          'Cum fac să convertesc mai mulți vizitatori în clienți?',
          'Cum fac ca mai mulți clienți să cumpere din nou sau mai mult?',
          'Cum fac să am clienți fideli și să mă recomande?',
        ],
      },
      {
        title: 'Pentru cine este acest ghid?',
        items: [
          'Proprietari de business-uri online care doresc să își construiască un Buyer Journey pentru afacerea lor.',
          'Antreprenori eCommerce care au deja un Buyer Journey, dar vor să își maximizeze eficiența și rezultatele activităților de marketing.',
          'Antreprenori care vor o metodă structurată și validată pentru a crește accelerat vânzările.',
        ],
      },
      {
        title: 'De ce să-l descarci? Uite 3 motive',
        cards: [
          { title: 'Primești o structură de lucru', text: 'Acest ghid îți oferă o structură de lucru clară și validată în practică, care a adus creșteri de peste 50% la clienții din agenția noastră. Vei descoperi fiecare etapă din călătoria clientului și cele mai eficiente activități de marketing pentru acestea.' },
          { title: 'Economisești timp', text: 'Nu va mai trebui să consumi timp și resurse pentru a identifica toate punctele de contact prin care un client trece, de la conștientizare până la recomandarea afacerii tale. Vei înțelege clar etapele unui Buyer Journey și cum să îți aliniezi eforturile de marketing.' },
          { title: 'Crești performanța și reduci costurile', text: 'Template-ul conține 35 de strategii de marketing care răspund nevoilor clienților din fiecare etapă a călătoriei lor. Vei ști clar ce tactică să aplici în funcție de punctul în care se află un client sau potențial client.' },
        ],
      },
    ],
  },
  {
    slug: 'ecommerce-marketing-checklist',
    heading: 'eCommerce Marketing Checklist',
    lead: 'Începând de astăzi poți multiplica mai ușor vânzările din magazinul tău online! Descarcă checklistul gratuit cu 70 de strategii de marketing testate și validate, care se aplică oricărui tip de business eCommerce.',
    externalForm: true,
    formTitle: 'Vreau checklist-ul gratuit',
    sections: [
      {
        title: 'Cum arată acum viața ta de antreprenor?',
        items: [
          'Ai o mulțime de informații despre scalarea vânzărilor eCommerce, dar nu sunt suficient de bine organizate.',
          'Nu ai claritate în ceea ce privește importanța și prioritizarea activităților din afacerea ta online.',
          'Te simți copleșit de bugetul și timpul mult prea limitate pentru toate activitățile pe care crezi că ar trebui să le desfășori.',
          'Simți un sentiment de frustrare atunci când pui în practică strategii și tactici noi care nu îți aduc rezultatele dorite.',
          'Nu mai ai timp să te gândești la delegare, la prioritizarea acțiunilor importante sau să măsori atent ce funcționează și ce nu.',
          'Te-ai săturat să schimbi freelancerii sau agențiile cu care lucrezi și să nu ajungi la rezultatele dorite.',
        ],
      },
      {
        title: 'Nu există o soluție magică pentru succesul afacerii tale',
        paras: [
          'Așa este, nu există o soluție magică pentru a multiplica vânzările din afacerea ta eCommerce. Dar există șanse foarte mari să atingi acest țel. Iar pentru asta ai nevoie doar de o schimbare: de obiective bine puse la punct, de o structură clară, de organizare și prioritizare în activitățile din afacerea ta eCommerce.',
          'Scalarea vânzărilor din magazinul online nu este despre hard work, este despre smart work, adică planificare, experimentare și optimizare.',
          'În acest checklist vei descoperi 70 de strategii valabile și aplicabile pentru orice tip de business eCommerce. Sunt strategii pe care le-am testat și validat în multe business-uri eCommerce și care au generat de 2x până la 10x mai multe vânzări pentru antreprenori ca tine.',
        ],
      },
      {
        title: 'Trei etape pentru scalarea vânzărilor',
        cards: [
          { title: 'Strategia și arhitectura afacerii eCommerce', text: 'În primul capitol vei descoperi cele 15 puncte importante pe care trebuie să le urmezi pentru a asigura o bază solidă pentru scalarea afacerii tale eCommerce.' },
          { title: 'Activități de marketing din magazinul online', text: 'În capitolul doi vei găsi 15 acțiuni concrete de implementat în magazinul online, pentru ca acesta să poată susține un proces de vânzare eficient și profitabil.' },
          { title: 'Activități de marketing în afara magazinului online', text: 'În capitolul trei vei afla mai multe despre „pita” noastră de zi cu zi din agenție: 40 de acțiuni de marketing pe cele mai importante canale online frecventate de audiența ta.' },
        ],
      },
      {
        title: 'Cum poate arăta viața ta de antreprenor dacă aplici acțiunile din acest checklist?',
        items: [
          'Vei avea o structură clară cu cele mai importante acțiuni de marketing, atât la nivel de strategie de business, în magazinul online, cât și în afara lui.',
          'Vei ieși din zona operațională de marketing și vei ști cum să delegi mai eficient cele mai importante activități din afacerea ta eCommerce.',
          'Vei simți ușurarea că nu mai trebuie să stingi continuu focuri în business-ul tău, ci vei putea apela la acest plan pentru o organizare mai bună.',
          'Vei putea măsura și seta așteptări potrivite pentru activitatea echipei de marketing, fie că ea este formată din angajați, freelanceri sau o agenție.',
          'Vei fi mai motivat să țintești spre scalarea vânzărilor din magazinul tău online, știind concret ce ai de făcut pentru atingerea obiectivelor stabilite.',
          'Te vei bucura de profit, iar asta îți va permite să reinvestești bugete mai mari în alte activități de marketing și în dezvoltarea afacerii per ansamblu.',
        ],
      },
    ],
  },
  {
    slug: 'de-la-vizitator-la-client',
    heading: 'De la vizitator la client',
    lead: 'Tehnici practice ca să-ți convertești vizitatorii magazinului tău în clienți. Completează formularul și primești PDF-ul pe email.',
    formKey: 'de-la-vizitator-la-client',
    formTitle: 'Descarcă PDF-ul',
    sections: [],
  },
  {
    slug: 'cum-sa-iti-calculezi-bugetul-de-reclama',
    heading: 'Cum să îți calculezi bugetul de reclamă?',
    lead: 'Cât trebuie să investești în promovare? Completează formularul și primești PDF-ul pe email.',
    formKey: 'cum-sa-iti-calculezi-bugetul-de-reclama',
    formTitle: 'Descarcă PDF-ul',
    sections: [],
  },
  {
    slug: 'digital-marketing-la-tinta',
    heading: 'Digital Marketing la țintă',
    lead: 'Vinde mai bine în mediul online în doar 4 pași simpli. Completează formularul și primești PDF-ul pe email.',
    formKey: 'digital-marketing-la-tinta',
    formTitle: 'Descarcă PDF-ul',
    sections: [],
  },
];

export const downloads: Record<string, { title: string; text: string[]; file: string; label: string }> = {
  'multumim-buyer-journey-template': {
    title: 'Felicitări, template-ul de Buyer Journey este acum al tău!',
    text: [
      'Descarcă chiar acum template-ul gratuit. Între timp, o copie a acestuia se îndreaptă spre inboxul tău.',
      'Află care sunt cele 7 etape din călătoria clientului și ce activități de marketing poți implementa pentru fiecare. Notează ce faci în prezent la fiecare etapă și ce îți propui să implementezi în următoarele 6 luni.',
    ],
    file: '/wp-content/uploads/2023/03/Buyer-Journey-Template-DAR-MEDIA-1.pdf',
    label: 'Descarcă template-ul (PDF)',
  },
  'multumim-ca-ai-descarcat-ebook-ul-nostru': {
    title: 'Mulțumim că ai descărcat ebook-ul nostru!',
    text: [
      'Automatizări de email care generează vânzări: ghid complet pentru eCommerce. Ar trebui să primești un email de la noi cu linkul de descărcare. Dacă nu-l găsești, verifică și folderul de spam.',
      'Aplică cele 11 secvențe de emailuri automatizate și vezi cum încep să crească vânzările și să se îmbunătățească relația cu clienții tăi.',
    ],
    file: '/wp-content/uploads/2025/03/Automatizari-de-email-care-genereaza-vanzari-Ghid-eCommerce-DAR-MEDIA.pdf',
    label: 'Descarcă ebook-ul (PDF)',
  },
  'multumim-checklist-ecommerce': {
    title: 'Îți mulțumim!',
    text: ['Suntem bucuroși să vedem oameni determinați ca tine, care doresc să își scaleze vânzările din afacerea eCommerce corect și sigur!'],
    file: '/wp-content/uploads/2022/07/eBook-Checklist_3.pdf',
    label: 'Descarcă checklist-ul (PDF)',
  },
  multumim_retentie: {
    title: 'Mulțumim pentru că ai descărcat ebook-ul nostru!',
    text: ['Felicitări! Ebook-ul tău te așteaptă. Verifică emailul pentru link și descoperă cum să îți îmbunătățești retenția clienților.'],
    file: '/wp-content/uploads/2025/08/Tehnici-Retentie-ebook-DAR-MEDIA.pdf',
    label: 'Descarcă ebook-ul (PDF)',
  },
};
