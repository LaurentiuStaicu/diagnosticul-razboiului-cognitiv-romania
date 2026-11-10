import { Table1Row, Table2Row, RegionalCase, GlossaryConcept, BibliographyItem } from './types';
import { CHAPTERS_PART_1 } from './chaptersPart1';
import { CHAPTERS_PART_2 } from './chaptersPart2';

export const ALL_SUBCHAPTER_STEPS = [...CHAPTERS_PART_1, ...CHAPTERS_PART_2];

export const TABLE_1_DATA: Table1Row[] = [
  {
    id: 't1-dim-1',
    dimensionNumber: 1,
    dimensionTitle: '1. Arhitectura statului și raportul cu norma legală',
    stratumA:
      'Modernizare asincronă prin „forme fără fond” (Maiorescu); coexistența instituțiilor formale incluzive cu rețele informale extractive (Acemoglu & Robinson); ordine socială cu acces limitat (North, Wallis & Weingast) și deficit cronic de închidere operațională a justiției și administrației (Luhmann).',
    stratumB:
      'Erodarea încrederii în regulile formale și percepția legii ca instrument selectiv de spoliere; slăbirea angajamentului față de primul sistem etic al cooperării procedurale (Lefebvre) și creșterea toleranței cognitive față de transgresiunea normativă.',
    stratumC:
      'Scindarea structurală între Persona instituțională mimetică (conformismul oficial prooccidental de fațadă) și Umbra colectivă (refularea strategiilor informale de supraviețuire, a „descurcărelii” și a ambivalenței arhetipului Trickster-ului).'
  },
  {
    id: 't1-dim-2',
    dimensionNumber: 2,
    dimensionTitle: '2. Coeziunea sociodemografică și regimul de stres cotidian',
    stratumA:
      'Polarizare severă între centrele metropolitane prospere și periferiile dezindustrializate sau rurale; declin demografic sever și emigrație masivă a forței de muncă active; enclave de excluziune socială și anomie; familism amoral (Banfield) versus retragerea individualistă în sfera privată a păturilor urbane.',
    stratumB:
      'Uzură alostatică ridicată (McEwen) și hiperactivarea cronică a axei HPA; hipercortizolemie care induce hipertrofia și hiperreactivitatea amigdalei bazolaterale și a rețelei de detecție a relevanței, concomitent cu inhibiția funcțională a cortexului prefrontal dorsolateral (dlPFC) și comutarea pe Sistemul 1 (Kahneman).',
    stratumC:
      'Scăderea tensiunii conștiente (abaissement du niveau mental – Janet/Jung); blocarea sau scindarea axei Ego–Sine colective (Edinger); instalarea deflației Eului colectiv, a neputinței învățate (learned helplessness) și a fatalismului defensiv, alternând cu inflația naționalistă compensatoare.'
  },
  {
    id: 't1-dim-3',
    dimensionNumber: 3,
    dimensionTitle: '3. Filtrul axiologic și raportarea la tradiția spirituală',
    stratumA:
      'Instrumentalizarea politică a discursului identitar și religios de către antreprenori populiști autohtoni în convergență cu doctrina revizionistă Russkii Mir; subfinanțarea educației umaniste și civice și absența unui proces instituționalizat de asumare a traumelor totalitare din secolul al XX-lea.',
    stratumB:
      'Dubla falsificare axiologică și parazitarea semiotică a conservatorismului și a ortodoxiei prin camuflaj discursiv; substituirea sintezei creștin-seculare europene (întemeiată pe Imago Dei și universalismul drepturilor fundamentale) cu inversiunea normativă a Antilumii (Epstein), etnofiletismul și nihilismul cinic al stării Bobok (Dostoievski).',
    stratumC:
      'Incapacitatea de a ține doliu pentru complicitățile totalitare (Mitscherlich) și fixarea într-o traumă aleasă de victimă perpetuă (Volkan); reducerea credinței la o religiozitate ritualistă de fațadă și la un conformism confesional exterior, vulnerabil la proiecții paranoide și xenofobe.'
  },
  {
    id: 't1-dim-4',
    dimensionNumber: 4,
    dimensionTitle: '4. Ecologia informațională și dinamica decizională în bucla OODA',
    stratumA:
      'Dereglementarea pieței atenției digitale și proliferarea rețelelor de spălare informațională (ferme de boți, microinfluenceri, canale criptate); poluarea ecosistemului digital cu date sintetice care induc Model Collapse (Shumailov) și Model Autophagy Disorder (Alemohammad) în modelele generative de inteligență artificială.',
    stratumB:
      'Deturnarea fazei de Orientare din bucla OODA (Boyd) prin control reflexiv de rang secund și comutarea în al doilea sistem etic al confruntării (Lefebvre); regresia de la medierea ternară la semiotica binară a anihilării (Lotman); capturarea adictivă a circuitelor dopaminergice în nucleul accumbens (eroarea de predicție a recompensei) și contagiunea complexă în camere de ecou (Centola).',
    stratumC:
      'Captivitatea psihologică în bule identitare închise, omogenizarea cognitivă și deteriorarea hărții mentale predictive a realității; activarea autonomă a complexelor culturale defensive (Singer & Kimbles) și identificarea cu agresorul geopolitic sub masca apărării suveranității.'
  },
  {
    id: 't1-dim-5',
    dimensionNumber: 5,
    dimensionTitle: '5. Dinamica polarizării și răspunsul la criză acută',
    stratumA:
      'Alunecarea cetățeanului vulnerabil (-X, +Y), sub presiunea de spoliere a actorilor extractivi (+X, -Y) și pe fondul barierei instituționale fisurate, în cadranul comportamentului autodistructiv și al autosabotajului colectiv (-X, -Y) din matricea lui Cipolla; paralizie instituțională și vulnerabilizare strategică a statului-țintă.',
    stratumB:
      'Bifurcarea procesării în nodul de criză acută: blocarea pe Traseul reactiv dezadaptativ (Track A: hiperactivare amigdaliană, închidere cognitivă seizing/freezing, cogniție protectoare a identității, furie și blocaj decizional) în detrimentul Traseului deliberativ adaptativ (Track B: reglare prefrontală, capacitate negativă și validare epistemică).',
    stratumC:
      'Enantiodromia suveranistă (răsturnarea mimetismului prooccidental în respingerea radicală a modernității constituționale); dominația sindromului Puer Aeternus colectiv (von Franz), a iluziei suveranității izolaționiste și a regresiei spre dependență pasivă față de un stat paternalist tutelar (Neumann).'
  }
];

export const TABLE_2_DATA: Table2Row[] = [
  {
    id: 't2-faza-1',
    phaseCode: 'Faza I',
    phaseSubtitle: 'Decompresia alostatică și igiena informațională',
    horizon: 'Orizont tactic imediat (de la zero la douăsprezece luni)',
    humanBiology:
      'Faza I (Decompresia alostatică și igiena informațională). Reducerea uzurii alostatice (McEwen) și a hiperactivării cronice a axei HPA prin scăderea insecurității materiale și birocratice; protejarea somnului și a atenției copiilor și adulților prin limitarea expunerii la fluxurile adictive de stimuli care provoacă capturarea circuitelor dopaminergice în nucleul accumbens; restabilirea latenței temporale necesare pentru deblocarea cortexului prefrontal dorsolateral (dlPFC).',
    digitalAndSociospatial:
      'Faza I (Reglementare algoritmică și sociospațială). Aplicarea strictă a regulamentelor europene (Digital Services Act și AI Act) prin auditarea algoritmilor de recomandare, dezactivarea amplificării automate a indignării morale și introducerea frânelor de viralitate; destructurarea fermelor de boți și etichetarea criptografică a datelor sintetice pentru a preveni Model Collapse (Shumailov) și Model Autophagy Disorder (Alemohammad); investiții de urgență în serviciile de bază din enclavele de excluziune socială.',
    informationalLifestyle:
      'Faza I (Igienă digitală și comunicare calmă). Campanii publice de conștientizare a igienei digitale și a mecanismelor de capturare a atenției; înlocuirea comunicării oficiale arogante sau alarmiste cu o comunicare instituțională calmă, predictibilă și empatică, menită să dezamorseze hipervigilența rețelei de detecție a relevanței și să oprească bucla reactivă dezadaptativă (Track A).',
    institutionalSystem:
      'Faza I (Debirocratizare și blocarea fluxurilor ilicite). Simplificarea administrativă și digitalizarea transparentă a interacțiunii cetățean–stat (după modelul eston) pentru eliminarea umilinței birocratice și a corupției mici; oprirea modificărilor fiscale și legislative imprevizibile; blocarea fluxurilor financiare ilicite care alimentează rețelele de spălare informațională și microinfluencerii inautentici.'
  },
  {
    id: 't2-faza-2',
    phaseCode: 'Faza II',
    phaseSubtitle: 'Stabilizarea comunitară și pregătirea preventivă prebunking',
    horizon: 'Orizont operațional mediu (de la unu la trei ani)',
    humanBiology:
      'Faza II (Stabilizarea comunitară și pregătirea preventivă prebunking). Antrenarea reglării descendente (top-down) a amigdalei bazolaterale de către cortexul prefrontal ventromedial și dorsolateral; cultivarea capacității negative (Bion) și a toleranței la incertitudine pentru comutarea stabilă a procesării informației din nodul de bifurcație pe Traseul deliberativ adaptativ (Track B); sesiuni periodice de consolidare mnezică calibrate pe curba uitării a lui Hermann Ebbinghaus.',
    digitalAndSociospatial:
      'Faza II (Infrastructură comunitară de proximitate). Reconstrucția infrastructurii comunitare și culturale de proximitate în mediul rural, în orașele mici și în comunitățile din diaspora pentru a înlocui izolarea în camere de ecou algoritmice cu spații fizice de interacțiune umană directă; crearea de rețele locale care favorizează contagiunea socială complexă pozitivă (Centola) și refacerea capitalului social de punte (Putnam).',
    informationalLifestyle:
      'Faza II (Inoculare preventivă și reconciliere morală). Instituționalizarea pregătirii psihocognitive preventive (prebunking, McGuire, Roozenbeek, van der Linden) în școli, universități și programe pentru adulți, axată pe detecția controlului reflexiv de rang secund și a semiozei binare; reconcilierea filtrului moral creștin-secular prin dialog între teologia ortodoxă patristică (Imago Dei, respingerea etnofiletismului Russkii Mir) și etica civică constituțională, consolidând primul sistem etic (Lefebvre).',
    institutionalSystem:
      'Faza II (Coordonare interministerială și validare comunitară). Crearea unor mecanisme instituționale permanente de coordonare interministerială și societală pentru apărarea spațiului cognitiv (după modelul apărării cuprinzătoare din Estonia și Polonia); profesionalizarea comunicării strategice și integrarea validării comunitare în politicile publice pentru neutralizarea cogniției protectoare a identității (Kahan).'
  },
  {
    id: 't2-faza-3',
    phaseCode: 'Faza III',
    phaseSubtitle: 'Consolidarea statului de drept și individuarea colectivă',
    horizon: 'Orizont strategic (de la trei la zece ani)',
    humanBiology:
      'Faza III (Consolidarea statului de drept și individuarea colectivă). Stabilizarea pe termen lung a rezervei neurobiologice și a echilibrului psihofiziologic al populației printr-un mediu social predictibil și meritocratic; menținerea tonusului integrativ al conștiinței civice și prevenirea scăderii tensiunii conștiente (abaissement du niveau mental, Janet și Jung) în fața șocurilor geopolitice viitoare.',
    digitalAndSociospatial:
      'Faza III (Coeziune teritorială și integrarea diasporei). Reducerea structurală a faliilor de dezvoltare sociospațială dintre centrele metropolitane și periferiile interne prin infrastructură, educație echitabilă și politici de coeziune teritorială; integrarea organică a diasporei românești în rețelele economice, științifice și civice ale țării, inversând tendința de declin demografic și dezrădăcinare.',
    informationalLifestyle:
      'Faza III (Travaliu de doliu istoric și individuare colectivă). Asumarea critică și onestă a istoriei naționale în educație și în cultura publică, depășind incapacitatea de a ține doliu (Mitscherlich) și trauma aleasă (Volkan); conversia funcțională a resurselor latente din Umbra colectivă și a arhetipului Trickster-ului în agilitate cognitivă și inovație; maturizarea conștiinței civice dincolo de sindromul Puer Aeternus (von Franz) și realizarea individuării colective pe axa Ego–Sine (Edinger).',
    institutionalSystem:
      'Faza III (Închidere operațională și guvernanță policentrică). Închiderea operațională autentică a justiției și a administrației publice (Luhmann) și tranziția completă la o ordine socială cu acces deschis (North, Wallis & Weingast) și la instituții incluzive (Acemoglu & Robinson); implementarea guvernanței policentrice (Ostrom) și a subsidiarității locale; consolidarea barierei instituționale pentru menținerea societății în Cadranul I al cooperării inteligente (+X, +Y) din matricea lui Cipolla și afirmarea suveranității democratice în NATO și UE.'
  }
];

export const REGIONAL_CONTROL_GROUP: RegionalCase[] = [
  {
    id: 'romania',
    country: 'România (Diagnostic de bază)',
    roleInModel: 'Societatea-țintă analizată în monografie',
    exposureProfile: 'Expunere intensă la camuflaj discursiv suveranist și parazitare semiotică a ortodoxiei și conservatorismului, ocolind aversiunea istorică directă față de Rusia.',
    stratumA: 'Ordine instituțională semiconformată („forme fără fond”); coexistența instituțiilor formale euroatlantice cu rețele extractive clientelare și polarizare sociospațială severă.',
    stratumB: 'Uzură alostatică ridicată, absența unei strategii naționale de prebunking și dereglarea spațiului algoritmic, favorizând deturnarea fazei de Orientare din bucla OODA.',
    stratumC: 'Scindare între Persona instituțională mimetică și Umbra colectivă, incapacitatea de a ține doliu pentru complicitățile totalitare și declanșarea enantiodromiei suveraniste.',
    strategicLesson: 'Vulnerabilitatea nu decurge dintr-o fatalitate culturală sau din lipsa garanțiilor de securitate, ci din complacerea unei părți a elitelor într-o ordine extractivă care a lăsat filtrul axiologic expus eroziunii.',
    statusType: 'tension'
  },
  {
    id: 'estonia',
    country: 'Estonia (Reziliență instituțională și cognitivă integrată)',
    roleInModel: 'Modelul articulării coerente a celor patru determinanți Lalonde-Dever',
    exposureProfile: 'Stat în prima linie geografică la granița cu Federația Rusă, cu o minoritate rusofonă semnificativă și țintă a atacurilor cibernetice și informaționale majore încă din 2007.',
    stratumA: 'Tranziție timpurie și radicală către instituții incluzive cu închidere operațională autentică; digitalizare transparentă (e-Estonia) care a eliminat corupția mică și umilința birocratică; educație echitabilă teritorial.',
    stratumB: 'Instituționalizarea pregătirii psihocognitive preventive (prebunking) și a alfabetizării mediatice și digitale de la grădiniță până la adulți, integrate în doctrina apărării cuprinzătoare (Total Defence) și voința de apărare (Kaitsetahe).',
    stratumC: 'Axă Ego–Sine colectivă stabilă, în care modernizarea prooccidentală este trăită ca expresie organică a identității naționale, nu ca o formă fără fond impusă din exterior.',
    strategicLesson: 'Eliminarea umilinței birocratice și a corupției prin digitalizare transparentă scade uzura alostatică și ancorează organic cetățeanul în apărarea ordinii constituționale.',
    statusType: 'synthesis'
  },
  {
    id: 'polonia',
    country: 'Polonia (Memorie istorică instituționalizată și consens strategic)',
    roleInModel: 'Modelul imunizării conservatorismului și a religiozității împotriva parazitării semiotice moscovite',
    exposureProfile: 'Polarizări politice și axiologice interne intense între tabăra conservatoare națională și cea liberală cosmopolită, oferind teoretic condiții pentru parazitarea discursului conservator.',
    stratumA: 'Consens strategic transpartinic asupra apărării naționale, a înzestrării militare și a consolidării flancului estic al Alianței Nord-Atlantice.',
    stratumB: 'Eșecul sistematic al operațiunilor ruse de a converti conservatorismul catolic și suveranismul polonez într-o platformă prorusă sau ostilă NATO.',
    stratumC: 'Memoria istorică a ocupației țariste și sovietice (de la împărțirile Poloniei până la Katyn și sindicatul Solidaritatea) a fost riguros instituționalizată prin educație, cultură publică și biserică.',
    strategicLesson: 'Asumarea și instituționalizarea riguroasă a memoriei istorice în educație și biserică creează o normă culturală transversală în care tradiția și suveranitatea sunt indisolubil legate de descurajarea Rusiei.',
    statusType: 'synthesis'
  },
  {
    id: 'moldova',
    country: 'Republica Moldova (Mobilizare instituțională și civică sub presiune existențială)',
    roleInModel: 'Oglinda comparativă a rezilienței în condiții de resurse reduse și asalt hibrid extrem',
    exposureProfile: 'Resurse economice și militare mult mai reduse, lipsa umbrelei NATO, șantaj energetic decenal și finanțare ilegală masivă a rețelelor oligarhice de cumpărare de voturi (Ilan Șor) plus amenințarea transnistreană.',
    stratumA: 'Crearea de instituții dedicate (precum Centrul pentru Comunicare Strategică și Combatere a Dezinformării) și aplicarea de sancțiuni legale ferme împotriva fluxurilor financiare ilicite și a canalelor de propagandă.',
    stratumB: 'Confruntarea directă și deconstrucția operațiunilor de cumpărare a voinței politice și de spălare informațională în momente electorale critice.',
    stratumC: 'Articularea unui proiect de modernizare în care integrarea europeană este asumată conștient ca garanție existențială a supraviețuirii naționale.',
    strategicLesson: 'Voința politică fermă de a sancționa fluxurile financiare ilicite și de a apăra instituțional spațiul informațional poate compensa deficite majore de resurse materiale.',
    statusType: 'synthesis'
  }
];

export const GLOSSARY_CONCEPTS: GlossaryConcept[] = [
  {
    id: 'al-saselea-domeniu',
    term: 'Al șaselea domeniu operațional (Spațiul cognitiv)',
    stratum: 'B',
    authors: 'Claverie, Baptiste & du Cluzel (2022); du Cluzel (2020); NATO ACT',
    domain: 'Doctrină strategică și cibernetică militară',
    definition: 'Domeniu operațional definit de Comandamentul Suprem Aliat pentru Transformare (NATO ACT), alături de cel terestru, maritim, aerian, cosmic și cibernetic, în care ținta directă este arhitectura de procesare a realității și capacitatea decizională a unei națiuni.',
    monographContext: 'Urmărește erodarea încrederii în instituțiile democratice și paralizia decizională a statului-țintă fără a declanșa pragul articolului 5 al Tratatului Atlanticului de Nord.',
    polarity: 'neutral'
  },
  {
    id: 'macro-micro-macro',
    term: 'Arhitectura cauzală Macro–Micro–Macro (Barca lui Coleman)',
    stratum: 'A',
    authors: 'James S. Coleman (1990); Peter Hedström (2005)',
    domain: 'Sociologie analitică',
    definition: 'Model explicativ care articulează trei segmente cauzale concatenate: mecanismele situaționale (tranziția Macro–Micro), mecanismele de formare a acțiunii individuale (nivelul Micro) și mecanismele transformaționale (tranziția Micro–Macro).',
    monographContext: 'Explică științific cum deficitele instituționale din Stratul A modelează procesarea neurocognitivă în Stratul B și se agregă algoritmic în polarizare și autosabotaj colectiv.',
    polarity: 'neutral'
  },
  {
    id: 'determinantii-lalonde-dever',
    term: 'Determinanții sistemici Lalonde-Dever',
    stratum: 'A',
    authors: 'Marc Lalonde (1974); G. E. Alan Dever (1976)',
    domain: 'Politici publice și psihosociologie',
    definition: 'Model sistemic care stabilește că reziliența și echilibrul mintal al unei populații depind de interacțiunea continuă a patru factori: 1) organizarea sistemului instituțional și a serviciilor publice, 2) mediul socioeconomic și informațional, 3) stilul de viață informațional și asociativ, 4) rezerva neurobiologică.',
    monographContext: 'Fundamentează atât diagnosticul vulnerabilității endogene (Capitolul 1), cât și ordinea cauzală obligatorie a protocolului de reconstrucție în trei faze (Capitolul 6 și Tabelul 2).',
    polarity: 'synthesis'
  },
  {
    id: 'filtrul-axiologic',
    term: 'Filtrul axiologic și normativ creștin-secular',
    stratum: 'B',
    authors: 'Berdiaev (1937/1996); Stăniloae (1978); Habermas (2006); Taylor (2007)',
    domain: 'Filosofie constituțională și teologie',
    definition: 'Sinteza europeană dintre etica creștină a demnității inalienabile a persoanei (Imago Dei, libertatea conștiinței, porunca iubirii aproapelui) și raționalismul juridic modern (domnia legii impersonale, separarea puterilor, judecata critică).',
    monographContext: 'Stabilizează închiderea operațională în Stratul A, primul sistem etic al cooperării în Stratul B și axa Ego–Sine în Stratul C.',
    polarity: 'synthesis'
  },
  {
    id: 'inchidere-operationala',
    term: 'Închidere operațională (Autonomie funcțională)',
    stratum: 'A',
    authors: 'Niklas Luhmann (1995, 2004)',
    domain: 'Teoria sistemelor sociale',
    definition: 'Proprietatea subsistemelor unei societăți moderne (justiția, administrația, știința, educația) de a opera exclusiv după propriile coduri normative interne (legal/ilegal, adevărat/fals), refuzând imixtiunea politică de clan sau tranzacționarea influenței.',
    monographContext: 'Deficitul istoric de închidere operațională a menținut România într-o ordine socială cu acces limitat; consolidarea ei este ținta Fazei a III-a a protocolului.',
    polarity: 'synthesis'
  },
  {
    id: 'forme-fara-fond',
    term: 'Forme fără fond și instituții extractive versus incluzive',
    stratum: 'A',
    authors: 'Titu Maiorescu (1868/1984); Acemoglu & Robinson (2012); North, Wallis & Weingast (2009)',
    domain: 'Sociologie istorică și economie instituțională',
    definition: 'Disocierea dintre arhitectura constituțională occidentală formală (instituții incluzive) și practicile informale de capturare a rentei și blocare a meritocrației (instituții extractive într-o ordine socială cu acces limitat).',
    monographContext: 'Constituie rădăcina istorică a neîncrederii cetățeanului român în discursul oficial și a scindării dintre Persona instituțională mimetică și Umbra colectivă.',
    polarity: 'tension'
  },
  {
    id: 'persona-si-umbra',
    term: 'Persona instituțională mimetică și Umbra colectivă',
    stratum: 'C',
    authors: 'Carl Gustav Jung (1928/1966); Joseph Henderson (1984); Singer & Kimbles (2004)',
    domain: 'Psihologie analitică postjungiană',
    definition: 'Scindarea în inconștientul cultural între fațada conformistă de aliniere declarativă la standardele externe (Persona mimetică) și fondul refulat de strategii informale de supraviețuire și traume istorice neintegrate (Umbra colectivă).',
    monographContext: 'Explică de ce impostura elitelor interne compromite simbolic însăși ideea de modernizare europeană în ochii cetățeanului vulnerabilizat.',
    polarity: 'tension'
  },
  {
    id: 'trauma-aleasa',
    term: 'Incapacitatea de a ține doliu și trauma aleasă',
    stratum: 'C',
    authors: 'Alexander & Margarete Mitscherlich (1967/1975); Vamık D. Volkan (1997, 2004)',
    domain: 'Psihanaliză socială și psihopolitică',
    definition: 'Refuzul confruntării morale oneste cu complicitățile interne din regimurile totalitare (Die Unfähigkeit zu trauern) și fixarea transgenerațională într-o identitate colectivă de victimă inocentă și perpetuă (chosen trauma).',
    monographContext: 'Blochează maturizarea civică și favorizează evacuarea vinovăției istorice prin proiecții paranoide asupra unor „persecutori externi”.',
    polarity: 'tension'
  },
  {
    id: 'axa-ego-sine',
    term: 'Axa Ego–Sine colectivă (Deflație și inflație)',
    stratum: 'C',
    authors: 'Edward F. Edinger (1972); Martin Seligman (1975)',
    domain: 'Psihologie analitică',
    definition: 'Legătura structurală dintre conștiința colectivă (Ego) și nucleul arhetipal de sens și ordine morală (Sinele). Când este scindată, colectivitatea oscilează între deflație (neputință învățată, autodevalorizare) și inflație compensatoare (naționalism mesianic, protocronism).',
    monographContext: 'Refacerea coerenței pe axa Ego–Sine prin funcția transcendentă și individuare colectivă este condiția modernității organice.',
    polarity: 'synthesis'
  },
  {
    id: 'familism-amoral',
    term: 'Familism amoral versus capital social de punte',
    stratum: 'A',
    authors: 'Edward C. Banfield (1958); Robert D. Putnam (2000)',
    domain: 'Sociologie politică',
    definition: 'Repliea defensivă în care normele morale se aplică exclusiv în cercul familiei biologice și al clanului, privind sfera publică drept ostilă (familism amoral), în opoziție cu încrederea generalizată între grupuri sociale diferite (bridging social capital).',
    monographContext: 'Erodează coeziunea societală românească simultan cu secesiunea tacită în servicii private a păturilor urbane prospere.',
    polarity: 'tension'
  },
  {
    id: 'uzura-alostatica',
    term: 'Uzură alostatică (Allostatic load)',
    stratum: 'B',
    authors: 'Bruce S. McEwen (1998); Robert M. Sapolsky (2004, 2017)',
    domain: 'Neurobiologia stresului',
    definition: 'Costul fiziologic cumulativ și deteriorarea tisulară și neurală suferite de organism în urma suprasolicitării cronice a sistemelor neuroendocrine de adaptare la stres (insecuritate socioeconomică, impredictibilitate și umilință birocratică).',
    monographContext: 'Epuizează rezerva neurocognitivă a cetățeanului înainte de contactul cu propaganda digitală; reducerea ei este obiectivul primar din Faza I.',
    polarity: 'tension'
  },
  {
    id: 'axa-hpa-dlpf',
    term: 'Hiperactivarea axei HPA, amigdala bazolaterală și inhibiția dlPFC / vmPFC',
    stratum: 'B',
    authors: 'Amy F. T. Arnsten (2009); Robert M. Sapolsky (2004, 2017); Daniel Kahneman (2011)',
    domain: 'Neuroștiințe cognitive',
    definition: 'Excesul cronic de cortizol pe axa hipotalamo-hipofizo-suprarenaliană provoacă hipertrofia dendritică în amigdala bazolaterală (frică, agresivitate defensivă) și atrofia sinaptică în hipocamp și în cortexul prefrontal dorsolateral (dlPFC) și ventromedial (vmPFC).',
    monographContext: 'Blochează Sistemul 2 deliberativ și comută creierul cetățeanului pe dominația exclusivă a Sistemului 1 reactiv.',
    polarity: 'tension'
  },
  {
    id: 'abaissement-du-niveau-mental',
    term: 'Abaissement du niveau mental (Scăderea tensiunii conștiente)',
    stratum: 'C',
    authors: 'Pierre Janet; Carl Gustav Jung (1934/1960)',
    domain: 'Psihologie dinamică și analitică',
    definition: 'Diminuarea tonusului integrativ al Eului conștient sub presiunea oboselii cronice și a afectelor negative, care coboară pragul cenzurii metacognitive și permite complexelor autonome din inconștient să invadeze conștiința.',
    monographContext: 'Corespondentul psihodinamic din Stratul C al inhibiției prefrontale produse de uzura alostatică în Stratul B.',
    polarity: 'tension'
  },
  {
    id: 'sistema',
    term: 'Rețeaua sistema, siloviki și kompromat',
    stratum: 'A',
    authors: 'Alena Ledeneva (2013); Karen Dawisha (2014); Mark Galeotti (2019)',
    domain: 'Economia politică a regimului rus',
    definition: 'Mecanism informal și opac de guvernare cleptocratică în care instituțiile formale sunt subordonate loialității personale față de Kremlin, menținută prin rente energetice și șantaj sistematic (kompromat).',
    monographContext: 'Democrațiile funcționale din vecinătate amenință existențial legitimitatea internă a rețelei sistema, motivând războiul cognitiv rus.',
    polarity: 'tension'
  },
  {
    id: 'triada-ilin-gumiliov-dughin',
    term: 'Corpusul doctrinar revizionist (Ilin, Gumiliov, Dughin)',
    stratum: 'B',
    authors: 'Eltchaninoff (2018); Snyder (2018); Thom (2018, 2022)',
    domain: 'Istoria ideilor politice',
    definition: 'Articularea totalitarismului pretins inocent ontologic al lui Ivan Ilin (Gosudar), a determinismului biocosmic al lui Lev Gumiliov (supraetnosul eurasiatic) și a geopoliticii maniheiste a lui Aleksandr Dughin (Telurocrație versus Talasocrație).',
    monographContext: 'Oferă justificarea ideologică a agresiunii imperiale și a anihilării ordinii constituționale euroatlantice.',
    polarity: 'tension'
  },
  {
    id: 'antilumea-epstein',
    term: 'Antilumea (Russkii Antimir) și inversiunea normativă',
    stratum: 'B',
    authors: 'Mihail Epstein (2022, 2023)',
    domain: 'Filosofia culturii și semiotică politică',
    definition: 'Sistem ideologic care nu propune un proiect civilizațional pozitiv, ci operează prin răsturnarea sistematică a semnificației fiecărui concept politic, juridic și moral (agresiunea numită apărare a păcii, ocupația numită suveranitate).',
    monographContext: 'Nucleul operativ real al ideologiei putiniste, mascat la export prin camuflaj tradiționalist și suveranist (Figura 2).',
    polarity: 'tension'
  },
  {
    id: 'starea-bobok',
    term: 'Starea Bobok (Nihilismul cinic transgresiv)',
    stratum: 'B',
    authors: 'Fiodor Dostoievski (1873); Françoise Thom (2018); Peter Pomerantsev (2014, 2019)',
    domain: 'Politologie și psihologia propagandei',
    definition: 'Cultivarea deliberată a cinismului transgresiv („să nu ne mai rușinăm de nimic!”) și a relativismului epistemic absolut, menită să convingă audiența că adevărul nu există și că toate statele și instituțiile democratice sunt doar măști ipocrite.',
    monographContext: 'Înlocuiește persuasiunea ideologică clasică cu paralizia morală și acceptarea legii celui mai tare.',
    polarity: 'tension'
  },
  {
    id: 'dubla-falsificare-axiologica',
    term: 'Dubla falsificare axiologică și parazitarea semiotică',
    stratum: 'B',
    authors: 'Kalaitzidis et al. (2022); Hovorun (2018); Stăniloae (1978)',
    domain: 'Semiotică axiologică și teologie politică',
    definition: 'Operațiune de disimilare care falsifică simultan tradiția creștină ortodoxă (substituită cu erezia etnofiletistă militaristă Russkii Mir) și conceptul de suveranitate națională (transformat într-o doctrină a dezarmării strategice și a decuplării de NATO și UE).',
    monographContext: 'Permite propagandei ruse să ocolească aversiunea istorică a românilor față de Moscova (Figura 2).',
    polarity: 'tension'
  },
  {
    id: 'bucla-ooda',
    term: 'Bucla decizională OODA și faza de Orientare (Schwerpunkt)',
    stratum: 'B',
    authors: 'John Boyd; Frans P. B. Osinga (2007)',
    domain: 'Cibernetică decizională și teorie strategică',
    definition: 'Ciclul adaptativ continuu alcătuit din Observare, Orientare, Decizie și Acțiune, în care faza de Orientare (formată din moștenirea culturală, experiența istorică și valorile morale) reprezintă centrul de greutate al întregului proces decizional.',
    monographContext: 'Războiul cognitiv nu vizează doar faza de Observare (fake news punctuale), ci penetrarea și reconfigurarea fazei de Orientare însăși (Figura 3).',
    polarity: 'neutral'
  },
  {
    id: 'control-reflexiv-rang-secund',
    term: 'Control reflexiv de rang secund și cele două sisteme etice',
    stratum: 'B',
    authors: 'Vladimir Lefebvre (1982, 2001); Timothy L. Thomas (2004)',
    domain: 'Psihologie matematică și cibernetică',
    definition: 'Procesul prin care un adversar modifică însăși arhitectura axiologică și regulile de inferență morală ale țintei, comutând-o din Primul sistem etic (cooperare procedurală și dialog) în Al doilea sistem etic (confruntare intransigentă și anihilarea oponentului).',
    monographContext: 'Determină cetățeanul capturat cognitiv să adopte din proprie convingere decizii autodistructive pe care le percepe ca expresie a voinței sale suverane.',
    polarity: 'tension'
  },
  {
    id: 'mediere-ternara-vs-binara',
    term: 'Semioza ternară (Peirce / Lotman) versus Semiotica binară a anihilării',
    stratum: 'B',
    authors: 'Charles Sanders Peirce (1931–1958); Iuri Lotman (1990, 1992/2009); Lotman & Uspenski (1985)',
    domain: 'Semiotica culturii',
    definition: 'Opoziția dintre culturile ternare (care mențin un spațiu neutru al interpretantului, al dreptului civil și al competiției legitime) și sistemele binare ale anihilării (fără zonă axiologică neutră, în care oponentul este un dușman ontologic ce trebuie exterminat).',
    monographContext: 'Operațiunile cognitive exportă semiotica binară în democrații pentru a prăbuși pacea civilă și deliberarea rațională.',
    polarity: 'synthesis'
  },
  {
    id: 'inchidere-cognitiva-seizing-freezing',
    term: 'Nevoia de închidere cognitivă (Seizing / Freezing) și cogniția protectoare a identității',
    stratum: 'B',
    authors: 'Arie W. Kruglanski (2004); Dan M. Kahan (2013, 2017)',
    domain: 'Psihologie cognitivă și socială',
    definition: 'Captarea precipitată a unei explicații conspirative simple sub presiunea stresului (seizing), urmată de înghețarea epistemică (freezing) și fuzionarea credinței cu identitatea și statutul emoțional în interiorul grupului de apartenență.',
    monographContext: 'Explică de ce confruntarea agresivă (debunking umilitor) întărește defensiva amigdaliană și de ce Faza a II-a trebuie să înceapă cu validarea comunitară.',
    polarity: 'tension'
  },
  {
    id: 'capturare-dopaminergica',
    term: 'Capturarea dopaminergică mezolimbică și subreglarea receptorilor D2',
    stratum: 'B',
    authors: 'Wolfram Schultz (1998, 2016); Anna Lembke (2021)',
    domain: 'Neurobiologia adicției și a atenției',
    definition: 'Manipularea erorii de predicție a recompensei în nucleul accumbens prin derulare infinită și stimuli indignați/șocanți, care induce subreglarea receptorilor D2, sevraj informațional și suprimarea latenței temporale necesare activării cortexului prefrontal.',
    monographContext: 'Menține utilizatorul digital într-o stare de hipnoză reactivă și vulnerabilitate la sugestie.',
    polarity: 'tension'
  },
  {
    id: 'model-collapse-mad',
    term: 'Model Collapse și Model Autophagy Disorder (MAD)',
    stratum: 'A',
    authors: 'Ilia Shumailov et al. (2024); Sina Alemohammad et al. (2024)',
    domain: 'Inteligență artificială și informatică teoretică',
    definition: 'Degradarea matematică și îngustarea varianței modelelor generative antrenate sau interogate recursiv pe date sintetice (texte și clipuri clonate de boți) fără infuzie de date umane autentice.',
    monographContext: 'Exploatat de rețelele Doppelgänger, Matrioșka și Pravda pentru a polua infrastructura epistemică digitală (motoare de căutare și sisteme RAG).',
    polarity: 'tension'
  },
  {
    id: 'contagiune-complexa',
    term: 'Contagiunea complexă în rețea (Complex contagion)',
    stratum: 'B',
    authors: 'Damon Centola (2018, 2021); Mark Granovetter (1973)',
    domain: 'Sociologia rețelelor',
    definition: 'Mecanism prin care adoptarea unor credințe radicale sau norme comportamentale costisitoare necesită confirmări multiple și redundante din vecinătatea socială imediată (wide bridges), spre deosebire de contagiunea simplă prin legături slabe.',
    monographContext: 'Roiurile coordonate de boți și microinfluenceri fabrică artificial iluzia unui consens social majoritar; în Faza a II-a, spațiile comunitare fizice generează contagiune complexă pozitivă.',
    polarity: 'neutral'
  },
  {
    id: 'enantiodromie',
    term: 'Legea enantiodromiei colective',
    stratum: 'C',
    authors: 'Heraclit; Carl Gustav Jung (1921/1971)',
    domain: 'Psihologie analitică',
    definition: 'Proces psihodinamic prin care orice atitudine extremă, rigidă și unilaterală a conștiinței se răstoarnă inevitabil, la atingerea unui prag de saturație, în contrariul său absolut și autonom.',
    monographContext: 'Explică pendularea violentă de la mimetismul prooccidental de fațadă la respingerea radicală a modernității constituționale.',
    polarity: 'tension'
  },
  {
    id: 'arhetipul-trickster',
    term: 'Arhetipul Trickster-ului și funcția transcendentă',
    stratum: 'C',
    authors: 'Carl Gustav Jung (1916/1960, 1954/1968); Paul Radin (1956)',
    domain: 'Psihologie analitică și antropologie culturală',
    definition: 'Ambivalența vitalității adaptative refugiate în zona informală: regresivă ca șmecherie cinică și ocolire a legii, dar prospectivă ca agilitate cognitivă și inventivitate atunci când este mediată de funcția transcendentă și de cele trei filtre instituționale și metacognitive.',
    monographContext: 'Constituie resursa latentă din Umbra colectivă românească ce poate fi convertită în modernitate organică (Figura 4).',
    polarity: 'synthesis'
  },
  {
    id: 'matricea-cipolla',
    term: 'Matricea comportamentală a lui Carlo M. Cipolla',
    stratum: 'A',
    authors: 'Carlo M. Cipolla (1976/2011)',
    domain: 'Istorie economică și teoria deciziei',
    definition: 'Sistem cartezian bidimensional care clasifică acțiunile după câștigul/pierderea proprie (X) și beneficiul/dauna societală (Y) în patru cadrane: Cadranul I Cooperare inteligentă (+X, +Y), Cadranul II Cetățean vulnerabil (-X, +Y), Cadranul IV Actor extractiv (+X, -Y) și Cadranul III Autosabotaj colectiv (-X, -Y).',
    monographContext: 'Formalizează traiectoria prin care victima spolierii interne din Cadranul II este împinsă de războiul cognitiv vertical în jos, în Cadranul III al autodistrugerii (Figura 5).',
    polarity: 'neutral'
  },
  {
    id: 'puer-aeternus',
    term: 'Sindromul Puer Aeternus colectiv și statul paternalist tutelar',
    stratum: 'C',
    authors: 'Marie-Louise von Franz (1970/2000); James Hillman (1979); Erich Neumann (1949/1954)',
    domain: 'Psihologie analitică a culturii',
    definition: 'Structură psihică ce refuză efortul instituțional răbdător și metodic, preferând gândirea magică, așteptarea unui „Salvator” providențial, apărarea maniacală a neutralității izolaționiste (Klein) și dependența pasivă de un stat paternalist.',
    monographContext: 'Generează blocajul decizional strategic și paralizia instituțională a statului-țintă în momentele de criză.',
    polarity: 'tension'
  },
  {
    id: 'bifurcare-track-a-track-b',
    term: 'Bifurcarea neurocognitivă (Track A reactiv versus Track B deliberativ) și capacitatea negativă',
    stratum: 'B',
    authors: 'Wilfred R. Bion (1962, 1970); Stephen Porges (2011); Thayer & Lane (2009); Cogniție și Manipulare',
    domain: 'Neurobiologia deciziei și psihanaliză epistemică',
    definition: 'Opoziția în nodul de criză acută între bucla reactivă dezadaptativă (Track A: amigdală, tunel dopaminergic, Sistem 1) și traseul deliberativ adaptativ (Track B: reglare descendentă dlPFC/vmPFC, tonus vagal, capacitate negativă de a tolera incertitudinea și validare în comunități epistemice deschise).',
    monographContext: 'Fundamentează neurobiologic suveranitatea decizională a cetățeanului (Figura 6).',
    polarity: 'synthesis'
  },
  {
    id: 'prebunking-inoculare',
    term: 'Pregătire psihocognitivă preventivă (Prebunking) și curba uitării a lui Ebbinghaus',
    stratum: 'B',
    authors: 'William J. McGuire (1964); Jon Roozenbeek & Sander van der Linden (2019, 2022); Hermann Ebbinghaus (1885/1913)',
    domain: 'Psihologie experimentală și educație cognitivă',
    definition: 'Inocularea preventivă a populației prin expunerea explicată la tiparele formale de manipulare, însoțită de sesiuni periodice de consolidare mnezică calibrate pe curba uitării pentru transferul în memoria procedurală de lungă durată.',
    monographContext: 'Al doilea pilon al Fazei a II-a din protocolul de reconstrucție a rezilienței.',
    polarity: 'synthesis'
  },
  {
    id: 'guvernanta-policentrica-ostrom',
    term: 'Guvernanța policentrică și autoeficacitatea politică (Self-efficacy)',
    stratum: 'A',
    authors: 'Vincent & Elinor Ostrom (1990, 2010); Albert Bandura (1997)',
    domain: 'Științe politice și economie instituțională',
    definition: 'Sistem instituțional în care centre multiple de decizie autonome (local, regional, național, european) cooperează și se echilibrează sub un cadru constituțional comun, redând cetățeanului sentimentul de agenție politică tangibilă.',
    monographContext: 'Depășește în Faza a III-a atât hipercentralismul birocratic, cât și fiefurile baronilor locali.',
    polarity: 'synthesis'
  },
  {
    id: 'modernitate-organica',
    term: 'Individuarea colectivă și sinteza modernității organice',
    stratum: 'C',
    authors: 'Titu Maiorescu (1868/1984); Carl Gustav Jung (1928/1966); Edward F. Edinger (1972)',
    domain: 'Filosofie socială și sinteză strategică',
    definition: 'Starea de maturitate istorică și instituțională în care formele constituționale și de securitate occidentale devin expresia firească a unui fond cultural și moral autohton regenerat, unind legea impersonală dreaptă cu etica demnității persoanei umane.',
    monographContext: 'Rezoluția finală a monografiei și fundamentul suveranității democratice a României în secolul al XXI-lea (Figura 7).',
    polarity: 'synthesis'
  },
  {
    id: 'stratul-a',
    term: 'Stratul A (Arhitectura instituțională, istorică și sociologică)',
    stratum: 'A',
    authors: 'Titu Maiorescu (1868/1984); Niklas Luhmann (1995, 2004); Acemoglu & Robinson (2012)',
    domain: 'Sociologie instituțională și teoria sistemelor',
    definition: 'Primul palier cauzal al modelului din monografie, care analizează structura statului, gradul de închidere operațională a justiției și administrației, raportul dintre instituțiile incluzive și rețelele extractive și polarizarea sociospațială.',
    monographContext: 'Deficitele din Stratul A generează în mod determinist uzura alostatică din Stratul B și scindarea dintre Persona mimetică și Umbra colectivă din Stratul C (Figura 1).',
    polarity: 'neutral'
  },
  {
    id: 'stratul-b',
    term: 'Stratul B (Procesarea neurocognitivă, semiotică și axiologică)',
    stratum: 'B',
    authors: 'Bruce S. McEwen (1998); Robert M. Sapolsky (2004, 2017); John Boyd (1987); Vladimir Lefebvre (1982, 2001); Iuri Lotman (1990)',
    domain: 'Neuroștiințe cognitive și cibernetică decizională',
    definition: 'Al doilea palier cauzal al modelului, care articulează mecanismele neurobiologice ale stresului (axa HPA, amigdala bazolaterală, dlPFC/vmPFC) cu faza de Orientare din bucla OODA, controlul reflexiv și medierea semiotică ternară versus binară.',
    monographContext: 'Constituie interfața micro-mecanismică în care insecuritatea instituțională internă se întâlnește cu vectorii algoritmici și semiotici ai războiului cognitiv extern.',
    polarity: 'neutral'
  },
  {
    id: 'stratul-c',
    term: 'Stratul C (Inconștientul cultural și dinamica arhetipală)',
    stratum: 'C',
    authors: 'Carl Gustav Jung (1959, 1968); Edward F. Edinger (1972); Singer & Kimbles (2004); Vamık D. Volkan (1997, 2004)',
    domain: 'Psihologie analitică postjungiană și psihosociologie',
    definition: 'Al treilea palier cauzal al arhitecturii monografice, care examinează complexele culturale, raportul dintre Persona instituțională și Umbra colectivă, starea axei Ego–Sine, traumele istorice neintegrate și arhetipurile activate în criză.',
    monographContext: 'Explică de ce capturarea cognitivă capătă forța unei conversii identitare imune la simple argumente statistice sau verificări faptice.',
    polarity: 'neutral'
  },
  {
    id: 'institutii-extractive',
    term: 'Instituții extractive și ordine socială cu acces limitat',
    stratum: 'A',
    authors: 'Daron Acemoglu & James A. Robinson (2012); Douglass C. North, John J. Wallis & Barry R. Weingast (2009)',
    domain: 'Economie politică și neoinstituționalism',
    definition: 'Aranjamente instituționale în care regulile formale ale statului de drept sunt subordonate de rețele politico-economice clientelare pentru extracția de rentă, distribuirea privilegiilor de grup și blocarea competiției meritocratice deschise.',
    monographContext: 'Generează percepția cetățeanului că statul îi este ostil sau indiferent, erodând legitimitatea democratică și deschizând calea alunecării în Cadranul III al matricei lui Cipolla.',
    polarity: 'tension'
  },
  {
    id: 'russkii-mir-etnofiletism',
    term: 'Doctrina Russkii Mir și erezia etnofiletismului',
    stratum: 'B',
    authors: 'Pantelis Kalaitzidis (2012); Kalaitzidis et al. (2022); Aristotle Papanikolaou (2012); Cyril Hovorun (2018)',
    domain: 'Teologie politică și studiul ideologiilor',
    definition: 'Subordonarea universalității evanghelice și a demnității persoanei (Imago Dei) față de naționalismul etnic și expansiunea imperială a statului rus, condamnată de Sinodul de la Constantinopol (1872) drept erezie etnofiletistă și denunțată prin Declarația de la Volos (2022).',
    monographContext: 'Instrumentul principal prin care vectorul moscovit parazitează semiotic religiozitatea ortodoxă și conservatorismul în România (Subcapitolul 2.2).',
    polarity: 'tension'
  },
  {
    id: 'spalare-informationala',
    term: 'Spălare informațională și ecosistemul Doppelgänger / Matrioșka / Pravda',
    stratum: 'A',
    authors: 'Thomas Rid (2020); Pomerantsev & Weiss (2014); rapoartele Viginum și EEAS (2023–2024)',
    domain: 'Securitate cibernetică și analiză OSINT',
    definition: 'Arhitectură transnațională de disimilare a originii ruse a narațiunilor prin site-uri clonate (Doppelgänger), portaluri automatizate de agregare (Pravda) și roiuri de boți și microinfluenceri locali care prezintă mesajele Kremlinului drept opinii autohtone.',
    monographContext: 'Ocolește aversiunea istorică directă a românilor față de Rusia și inundă modelele AI și motoarele de căutare cu date sintetice.',
    polarity: 'tension'
  },
  {
    id: 'identificarea-cu-agresorul',
    term: 'Identificarea cu agresorul geopolitic',
    stratum: 'C',
    authors: 'Sándor Ferenczi (1933/1949); Anna Freud (1936)',
    domain: 'Psihanaliză clinică și psihopolitică',
    definition: 'Mecanism de apărare inconștient prin care un subiect sau o colectivitate copleșită de angoasă existențială și de neîncredere în propriile instituții își reprimă frica față de o putere agresoare și îi adoptă discursul, atribuind culpa victimei.',
    monographContext: 'Explică paradoxul psihodinamic prin care segmente dintr-o națiune agresată istoric de Rusia ajung să justifice revizionismul Kremlinului sub masca „păcii” și a „suveranității”.',
    polarity: 'tension'
  },
  {
    id: 'grup-control-regional',
    term: 'Grupul de control regional (Estonia, Polonia, Republica Moldova)',
    stratum: 'A',
    authors: 'Analiza comparativă din Subcapitolul 2.3 al monografiei',
    domain: 'Politici comparate de securitate și reziliență',
    definition: 'Metodologie comparativă care examinează trei state din flancul estic expuse aceluiași vector cognitiv rus, demonstrând că reziliența rezultă din debirocratizare digitală și prebunking (Estonia), memorie istorică instituționalizată (Polonia) și sancționarea fermă a fluxurilor ilicite (Moldova).',
    monographContext: 'Infirmă teza fatalității culturale și izolează variabilele instituționale interne responsabile de vulnerabilitatea României.',
    polarity: 'synthesis'
  },
  {
    id: 'sistemele-etice-lefebvre',
    term: 'Cele două sisteme etice în algebra morală a lui Vladimir Lefebvre',
    stratum: 'B',
    authors: 'Vladimir Lefebvre (1982, 2001)',
    domain: 'Psihologie matematică și teoria jocurilor',
    definition: 'Model formal care distinge între Primul sistem etic (în care compromisul și cooperarea dintre părți sunt evaluate ca binele moral superior) și Al doilea sistem etic (în care orice compromis este perceput drept lașitate și trădare, iar confruntarea intransigentă drept virtute).',
    monographContext: 'Controlul reflexiv de rang secund urmărește comutarea cetățeanului din Primul în Al doilea sistem etic pentru a face imposibil dialogul democratic (Figura 3).',
    polarity: 'neutral'
  },
  {
    id: 'cognitia-protectoare-a-identitatii',
    term: 'Cogniția protectoare a identității (Identity-protective cognition)',
    stratum: 'B',
    authors: 'Dan M. Kahan (2013, 2017)',
    domain: 'Psihologie politică și știința comunicării',
    definition: 'Tendința subiecților de a procesa informațiile faptice și riscurile nu pentru a ajunge la adevărul empiric obiectiv, ci pentru a-și proteja statutul emoțional și apartenența în interiorul grupului de afinitate culturală sau ideologică.',
    monographContext: 'Transformă respingerea unui fals demonstrabil într-un act de loialitate tribală și explică eșecul campaniilor de fact-checking arogant.',
    polarity: 'tension'
  },
  {
    id: 'proiectie-paranoida',
    term: 'Proiecția paranoidă a Umbrei și mecanismul țapului ispășitor',
    stratum: 'C',
    authors: 'Carl Gustav Jung (1951/1968); Erich Neumann (1949/1990); René Girard (1982)',
    domain: 'Psihologie analitică și antropologie politică',
    definition: 'Evacuarea conținuturilor refulate din Umbra colectivă (neputință, complicitate, corupție internă) și atribuirea lor integrală unui inamic extern sau unei minorități demonizate, percepute ca sursă unică a răului social.',
    monographContext: 'Oferă o descărcare iluzorie a tensiunii psihice, dar orbește societatea față de cauzele instituționale interne reale ale suferinței sale.',
    polarity: 'tension'
  },
  {
    id: 'functia-transcendenta',
    term: 'Funcția transcendentă (Medierea simbolică pe axa Ego–Sine)',
    stratum: 'C',
    authors: 'Carl Gustav Jung (1916/1960); Edward F. Edinger (1972)',
    domain: 'Psihologie analitică',
    definition: 'Capacitatea psihicului de a menține tensiunea dintre poziția conștientă (Persona / Ego) și conținuturile inconștiente opuse (Umbra) fără a suprima niciunul dintre poli, generând o sinteză integratoare superioară.',
    monographContext: 'Mecanismul psihodinamic care permite conversia memoriei istorice defensive și a vitalității Trickster-ului în modernitate organică (Figura 4).',
    polarity: 'synthesis'
  },
  {
    id: 'aparare-maniacala-izolationism',
    term: 'Apărarea maniacală și iluzia suveranității izolaționiste',
    stratum: 'C',
    authors: 'Melanie Klein (1935, 1946); Donald W. Winnicott (1935); Marie-Louise von Franz (1970/2000)',
    domain: 'Psihanaliză și psihologie politică',
    definition: 'Fantezie defensivă de omnipotență și autosuficiență prin care o colectivitate neagă vulnerabilitatea geopolitică reală și interdependența alianțelor, refugiindu-se în mitul unei neutralități autarhice invulnerabile.',
    monographContext: 'Servește obiectivul strategic al Kremlinului de a decupla statul-țintă de garanțiile colective NATO și UE și de a-l izola în bilateralism asimetric.',
    polarity: 'tension'
  },
  {
    id: 'capacitate-negativa-bion',
    term: 'Capacitatea negativă și Grupul de Lucru (Work Group W)',
    stratum: 'B',
    authors: 'Wilfred R. Bion (1961, 1962, 1970); John Keats (1817)',
    domain: 'Psihanaliză epistemică și dinamica grupurilor',
    definition: 'Aptitudinea aparatului psihic și a unui grup matur (Grupul de Lucru W) de a tolera temporar incertitudinea, frustrarea și ambiguitatea fără a aluneca în explicații paranoide premature sau în Ipotezele de Bază regresive (dependență baD, luptă-fugi baF).',
    monographContext: 'Condiția decisivă în nodul de bifurcație pentru activarea Traseului deliberativ adaptativ Track B în criză acută (Figura 6).',
    polarity: 'synthesis'
  },
  {
    id: 'protocolul-secvential-trei-faze',
    term: 'Protocolul secvențial obligatoriu în trei faze (Capitolul 6)',
    stratum: 'A',
    authors: 'Sinteza operațională din Capitolul 6, Figura 7 și Tabelul 2',
    domain: 'Arhitectură strategică de reziliență societală',
    definition: 'Ordinea cauzală strictă a reconstrucției rezilienței pe determinanții Lalonde-Dever: Faza I (0–12 luni, decompresie alostatică și igienă algoritmică), Faza II (1–3 ani, validare comunitară, prebunking și filtru moral) și Faza III (3–10 ani, închidere operațională, policentricitate Ostrom și individuare colectivă).',
    monographContext: 'Demonstrează de ce inversarea ordinii fazelor (de exemplu, educație mediatică fără decompresie alostatică prealabilă) eșuează prin efect de ricoșeu.',
    polarity: 'synthesis'
  },
  {
    id: 'curba-uitarii-ebbinghaus',
    term: 'Curba uitării a lui Ebbinghaus și consolidarea mnezică spațiată',
    stratum: 'B',
    authors: 'Hermann Ebbinghaus (1885/1913); Jon Roozenbeek & Sander van der Linden (2022)',
    domain: 'Psihologia memoriei și inoculare cognitivă',
    definition: 'Lege psihocognitivă care arată că imunitatea dobândită printr-o singură sesiune de inoculare (prebunking) se erodează exponențial în timp dacă nu este reactivată prin rapeluri cognitive periodice (booster sessions).',
    monographContext: 'Impune proiectarea programelor educaționale din Faza a II-a ca antrenament recurent pentru transferul discernământului în memoria procedurală.',
    polarity: 'synthesis'
  },
  {
    id: 'individuare-colectiva',
    term: 'Individuarea colectivă și reconcilierea fondului cu forma',
    stratum: 'C',
    authors: 'Carl Gustav Jung (1928/1966); Edward F. Edinger (1972); Alexander & Margarete Mitscherlich (1967/1975)',
    domain: 'Psihologie analitică și filozofia istoriei',
    definition: 'Procesul de maturizare istorică prin care o comunitate națională își integrează onest Umbra și traumele totalitare, depășește scindarea dintre Persona mimetică și realitatea informală și își reconstruiește coerența pe axa Ego–Sine.',
    monographContext: 'Încununează Faza a III-a a protocolului, transformând instituțiile democratice din „forme fără fond” în expresia unei modernități organice.',
    polarity: 'synthesis'
  }
];

export const BIBLIOGRAPHY_DATA: BibliographyItem[] = [
  { id: 'bib-1', authors: 'Acemoglu, D., & Robinson, J. A.', year: '2012', title: 'Why nations fail: The origins of power, prosperity, and poverty', publication: 'Crown Business', fullCitation: 'Acemoglu, D., & Robinson, J. A. (2012). Why nations fail: The origins of power, prosperity, and poverty. Crown Business.', domain: 'Sociologie instituțională' },
  { id: 'bib-2', authors: 'Alemohammad, S., Casco-Rodriguez, J., Luzi, L., Humayun, A. I., Babaei, H., LeJeune, D., Siahkoohi, A., & Baraniuk, R. G.', year: '2024', title: 'Self-consuming generative models go MAD', publication: 'Proceedings of the Twelfth International Conference on Learning Representations (ICLR 2024)', fullCitation: 'Alemohammad, S., Casco-Rodriguez, J., Luzi, L., Humayun, A. I., Babaei, H., LeJeune, D., Siahkoohi, A., & Baraniuk, R. G. (2024). Self-consuming generative models go MAD. In Proceedings of the Twelfth International Conference on Learning Representations (ICLR 2024).', domain: 'Cibernetică și semiotică' },
  { id: 'bib-3', authors: 'Arnsten, A. F. T.', year: '2009', title: 'Stress signalling pathways that impair prefrontal cortex structure and function', publication: 'Nature Reviews Neuroscience, 10(6), 410–422', fullCitation: 'Arnsten, A. F. T. (2009). Stress signalling pathways that impair prefrontal cortex structure and function. Nature Reviews Neuroscience, 10(6), 410–422.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-4', authors: 'Bandura, A.', year: '1997', title: 'Self-efficacy: The exercise of control', publication: 'W. H. Freeman', fullCitation: 'Bandura, A. (1997). Self-efficacy: The exercise of control. W. H. Freeman.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-5', authors: 'Banfield, E. C.', year: '1958', title: 'The moral basis of a backward society', publication: 'The Free Press', fullCitation: 'Banfield, E. C. (1958). The moral basis of a backward society. The Free Press.', domain: 'Sociologie instituțională' },
  { id: 'bib-6', authors: 'Bădescu, G., Comșa, M., Gheorghiță, A., Stănuș, C., & Tufiș, C. D.', year: '2010', title: 'Implicarea civică și politică a tinerilor', publication: 'Editura Dobrogea', fullCitation: 'Bădescu, G., Comșa, M., Gheorghiță, A., Stănuș, C., & Tufiș, C. D. (2010). Implicarea civică și politică a tinerilor. Editura Dobrogea.', domain: 'Sociologie instituțională' },
  { id: 'bib-7', authors: 'Bădescu, I.', year: '2002', title: 'Sincronism european și cultură critică românească', publication: 'Editura Mica Valahie', fullCitation: 'Bădescu, I. (2002). Sincronism european și cultură critică românească. Editura Mica Valahie.', domain: 'Sociologie instituțională' },
  { id: 'bib-8', authors: 'Berdiaev, N.', year: '1937/1996', title: 'Împărăția Duhului și împărăția Cezarului (Trad. S. Lupan)', publication: 'Editura Amarcord', fullCitation: 'Berdiaev, N. (1996). Împărăția Duhului și împărăția Cezarului (Trad. S. Lupan). Editura Amarcord. (Lucrarea originală publicată postum în 1949; studii preliminare asupra persoanei și comunismului publicate în 1937).', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-9', authors: 'Bion, W. R.', year: '1962', title: 'Learning from experience', publication: 'William Heinemann Medical Books', fullCitation: 'Bion, W. R. (1962). Learning from experience. William Heinemann Medical Books.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-10', authors: 'Bion, W. R.', year: '1970', title: 'Attention and interpretation', publication: 'Tavistock Publications', fullCitation: 'Bion, W. R. (1970). Attention and interpretation. Tavistock Publications.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-11', authors: 'Boia, L.', year: '1997', title: 'Istorie și mit în conștiința românească', publication: 'Editura Humanitas', fullCitation: 'Boia, L. (1997). Istorie și mit în conștiința românească. Editura Humanitas.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-12', authors: 'Brady, W. J., Wills, J. A., Jost, J. T., Tucker, J. A., & Van Bavel, J. J.', year: '2017', title: 'Emotion shapes the diffusion of moralized content in social networks', publication: 'Proceedings of the National Academy of Sciences, 114(28), 7313–7318', fullCitation: 'Brady, W. J., Wills, J. A., Jost, J. T., Tucker, J. A., & Van Bavel, J. J. (2017). Emotion shapes the diffusion of moralized content in social networks. Proceedings of the National Academy of Sciences, 114(28), 7313–7318.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-13', authors: 'Brewer, M. B.', year: '1999', title: 'The psychology of prejudice: Ingroup love and outgroup hate?', publication: 'Journal of Social Issues, 55(3), 429–444', fullCitation: 'Brewer, M. B. (1999). The psychology of prejudice: Ingroup love and outgroup hate? Journal of Social Issues, 55(3), 429–444.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-14', authors: 'Centola, D.', year: '2018', title: 'How behavior spreads: The science of complex contagions', publication: 'Princeton University Press', fullCitation: 'Centola, D. (2018). How behavior spreads: The science of complex contagions. Princeton University Press.', domain: 'Sociologie instituțională' },
  { id: 'bib-15', authors: 'Centola, D.', year: '2021', title: 'Change: How to make big things happen', publication: 'Little, Brown Spark', fullCitation: 'Centola, D. (2021). Change: How to make big things happen. Little, Brown Spark.', domain: 'Sociologie instituțională' },
  { id: 'bib-16', authors: 'Cipolla, C. M.', year: '1976/2011', title: 'The basic laws of human stupidity', publication: 'il Mulino', fullCitation: 'Cipolla, C. M. (2011). The basic laws of human stupidity. il Mulino. (Lucrarea originală difuzată în ediție privată în 1976 și publicată în Allegro ma non troppo în 1988).', domain: 'Sociologie instituțională' },
  { id: 'bib-17', authors: 'Claverie, B., Baptiste, P., & du Cluzel, F. (Eds.)', year: '2022', title: 'Cognitive warfare: The future of cognitive dominance', publication: 'NATO Collaboration Support Office / Allied Command Transformation', fullCitation: 'Claverie, B., Baptiste, P., & du Cluzel, F. (Eds.). (2022). Cognitive warfare: The future of cognitive dominance. NATO Collaboration Support Office / Allied Command Transformation.', domain: 'Cibernetică și semiotică' },
  { id: 'bib-18', authors: 'Coleman, J. S.', year: '1990', title: 'Foundations of social theory', publication: 'Belknap Press of Harvard University Press', fullCitation: 'Coleman, J. S. (1990). Foundations of social theory. Belknap Press of Harvard University Press.', domain: 'Sociologie instituțională' },
  { id: 'bib-19', authors: 'Dawisha, K.', year: '2014', title: "Putin's kleptocracy: Who owns Russia?", publication: 'Simon & Schuster', fullCitation: "Dawisha, K. (2014). Putin's kleptocracy: Who owns Russia?. Simon & Schuster.", domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-20', authors: 'Dever, G. E. A.', year: '1976', title: 'An epidemiological model for health policy analysis', publication: 'Social Indicators Research, 2(4), 453–466', fullCitation: 'Dever, G. E. A. (1976). An epidemiological model for health policy analysis. Social Indicators Research, 2(4), 453–466.', domain: 'Sociologie instituțională' },
  { id: 'bib-21', authors: 'Dobrogeanu-Gherea, C.', year: '1910', title: 'Neoiobăgia: Studiu economico-sociologic al problemei noastre agrare', publication: 'Editura Librăriei Socec & Co.', fullCitation: 'Dobrogeanu-Gherea, C. (1910). Neoiobăgia: Studiu economico-sociologic al problemei noastre agrare. Editura Librăriei Socec & Co.', domain: 'Sociologie instituțională' },
  { id: 'bib-22', authors: 'Dostoievski, F. M.', year: '1873', title: 'Bobok: Însemnările unei persoane', publication: 'Grajdanin, (6), 1873', fullCitation: 'Dostoievski, F. M. (1873). Bobok: Însemnările unei persoane. Grajdanin, (6), 1873.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-23', authors: 'du Cluzel, F.', year: '2020', title: 'Cognitive warfare', publication: 'NATO Allied Command Transformation Innovation Hub', fullCitation: 'du Cluzel, F. (2020). Cognitive warfare. NATO Allied Command Transformation Innovation Hub.', domain: 'Cibernetică și semiotică' },
  { id: 'bib-24', authors: 'Dughin, A.', year: '1997', title: 'Osnovy geopolitiki: Geopoliticeskoe budușcee Rossii [Bazele geopoliticii: Viitorul geopolitic al Rusiei]', publication: 'Arktogheia', fullCitation: 'Dughin, A. (1997). Osnovy geopolitiki: Geopoliticeskoe budușcee Rossii [Bazele geopoliticii: Viitorul geopolitic al Rusiei]. Arktogheia.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-25', authors: 'Durkheim, É.', year: '1897/2005', title: 'Despre sinucidere (Trad. M. Calcan)', publication: 'Editura Institutul European', fullCitation: 'Durkheim, É. (2005). Despre sinucidere (Trad. M. Calcan). Editura Institutul European. (Lucrarea originală publicată în 1897).', domain: 'Sociologie instituțională' },
  { id: 'bib-26', authors: 'Ebbinghaus, H.', year: '1885/1913', title: 'Memory: A contribution to experimental psychology', publication: 'Teachers College, Columbia University', fullCitation: 'Ebbinghaus, H. (1913). Memory: A contribution to experimental psychology (Trad. H. A. Ruger & C. E. Bussenius). Teachers College, Columbia University. (Lucrarea originală Über das Gedächtnis publicată în 1885).', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-27', authors: 'Edinger, E. F.', year: '1972', title: 'Ego and archetype: Individuation and the religious function of the psyche', publication: "G. P. Putnam's Sons", fullCitation: "Edinger, E. F. (1972). Ego and archetype: Individuation and the religious function of the psyche. G. P. Putnam's Sons.", domain: 'Psihologie analitică și memorie' },
  { id: 'bib-28', authors: 'Eltchaninoff, M.', year: '2018', title: 'Inside the mind of Vladimir Putin (Trad. J. Ferguson)', publication: 'Hurst & Company', fullCitation: 'Eltchaninoff, M. (2018). Inside the mind of Vladimir Putin (Trad. J. Ferguson). Hurst & Company.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-29', authors: 'Epstein, M.', year: '2022', title: 'Russkii antimir: Politika na grani apokalipsisa [Antilumea rusă: Politica la limita apocalipsei]', publication: 'Franc-Tireur USA', fullCitation: 'Epstein, M. (2022). Russkii antimir: Politika na grani apokalipsisa [Antilumea rusă: Politica la limita apocalipsei]. Franc-Tireur USA.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-30', authors: 'Epstein, M.', year: '2023', title: 'Schizofascism and the Russian Antiworld', publication: 'Studies in East European Thought, 75(2), 189–210', fullCitation: 'Epstein, M. (2023). Schizofascism and the Russian Antiworld. Studies in East European Thought, 75(2), 189–210.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-31', authors: 'Ferenczi, S.', year: '1933/1949', title: 'Confusion of the tongues between the adults and the child', publication: 'International Journal of Psycho-Analysis, 30, 225–230', fullCitation: 'Ferenczi, S. (1949). Confusion of the tongues between the adults and the child. International Journal of Psycho-Analysis, 30, 225–230. (Comunicare susținută în 1932 și publicată în 1933).', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-32', authors: 'Festinger, L.', year: '1957', title: 'A theory of cognitive dissonance', publication: 'Stanford University Press', fullCitation: 'Festinger, L. (1957). A theory of cognitive dissonance. Stanford University Press.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-33', authors: 'Freud, A.', year: '1936/1993', title: 'The ego and the mechanisms of defence', publication: 'Karnac Books', fullCitation: 'Freud, A. (1993). The ego and the mechanisms of defence. Karnac Books. (Lucrarea originală publicată în 1936).', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-34', authors: 'Friston, K.', year: '2010', title: 'The free-energy principle: A unified brain theory?', publication: 'Nature Reviews Neuroscience, 11(2), 127–138', fullCitation: 'Friston, K. (2010). The free-energy principle: A unified brain theory? Nature Reviews Neuroscience, 11(2), 127–138.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-35', authors: 'Galeotti, M.', year: '2019', title: "The Vory: Russia's super mafia", publication: 'Yale University Press', fullCitation: "Galeotti, M. (2019). The Vory: Russia's super mafia. Yale University Press.", domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-36', authors: 'Giles, K.', year: '2019', title: 'Moscow rules: What drives Russia to confront the West', publication: 'Brookings Institution Press / Chatham House', fullCitation: 'Giles, K. (2019). Moscow rules: What drives Russia to confront the West. Brookings Institution Press / Chatham House.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-37', authors: 'Granovetter, M. S.', year: '1973', title: 'The strength of weak ties', publication: 'American Journal of Sociology, 78(6), 1360–1380', fullCitation: 'Granovetter, M. S. (1973). The strength of weak ties. American Journal of Sociology, 78(6), 1360–1380.', domain: 'Sociologie instituțională' },
  { id: 'bib-38', authors: 'Habermas, J.', year: '2006', title: 'Religion in the public sphere', publication: 'European Journal of Philosophy, 14(1), 1–25', fullCitation: 'Habermas, J. (2006). Religion in the public sphere. European Journal of Philosophy, 14(1), 1–25.', domain: 'Sociologie instituțională' },
  { id: 'bib-39', authors: 'Hedström, P.', year: '2005', title: 'Dissecting the social: On the principles of analytical sociology', publication: 'Cambridge University Press', fullCitation: 'Hedström, P. (2005). Dissecting the social: On the principles of analytical sociology. Cambridge University Press.', domain: 'Sociologie instituțională' },
  { id: 'bib-40', authors: 'Henderson, J. L.', year: '1984', title: 'Cultural attitudes in psychological perspective', publication: 'Inner City Books', fullCitation: 'Henderson, J. L. (1984). Cultural attitudes in psychological perspective. Inner City Books.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-41', authors: 'Hillman, J. (Ed.)', year: '1979', title: 'Puer papers', publication: 'Spring Publications', fullCitation: 'Hillman, J. (Ed.). (1979). Puer papers. Spring Publications.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-42', authors: 'Hovorun, C.', year: '2018', title: 'Political Orthodoxies: The unorthodoxies of the Church coerced', publication: 'Fortress Press', fullCitation: 'Hovorun, C. (2018). Political Orthodoxies: The unorthodoxies of the Church coerced. Fortress Press.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-43', authors: 'Ioanid, R.', year: '2000', title: 'The Holocaust in Romania: The destruction of Jews and Gypsies under the Antonescu regime, 1940–1944', publication: 'Ivan R. Dee / United States Holocaust Memorial Museum', fullCitation: 'Ioanid, R. (2000). The Holocaust in Romania: The destruction of Jews and Gypsies under the Antonescu regime, 1940–1944. Ivan R. Dee / United States Holocaust Memorial Museum.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-44', authors: 'Ionescu, G.', year: '1964', title: 'Communism in Rumania, 1944–1962', publication: 'Oxford University Press', fullCitation: 'Ionescu, G. (1964). Communism in Rumania, 1944–1962. Oxford University Press.', domain: 'Sociologie instituțională' },
  { id: 'bib-45', authors: 'Jung, C. G.', year: '1916/1934/1960', title: 'The structure and dynamics of the psyche (Vol. 8)', publication: 'Princeton University Press', fullCitation: 'Jung, C. G. (1960). The structure and dynamics of the psyche (Trad. R. F. C. Hull). In The collected works of C. G. Jung (Vol. 8, include „The transcendent function”, 1916, și „A review of the complex theory”, 1934). Princeton University Press.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-46', authors: 'Jung, C. G.', year: '1928/1966', title: 'The relations between the ego and the unconscious (Vol. 7)', publication: 'Princeton University Press', fullCitation: 'Jung, C. G. (1966). The relations between the ego and the unconscious (Trad. R. F. C. Hull). In The collected works of C. G. Jung (Vol. 7, pp. 123–241). Princeton University Press. (Lucrarea originală publicată în 1928).', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-47a', authors: 'Jung, C. G.', year: '1951/1968', title: 'Aion: Researches into the phenomenology of the self (Vol. 9, Partea a II-a)', publication: 'Princeton University Press', fullCitation: 'Jung, C. G. (1968). Aion: Researches into the phenomenology of the self (Trad. R. F. C. Hull). In The collected works of C. G. Jung (Vol. 9, Partea a II-a). Princeton University Press. (Lucrarea originală publicată în 1951).', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-47b', authors: 'Jung, C. G.', year: '1954/1968', title: 'On the psychology of the trickster-figure (Vol. 9, Partea I)', publication: 'Princeton University Press', fullCitation: 'Jung, C. G. (1968). On the psychology of the trickster-figure (Trad. R. F. C. Hull). In The collected works of C. G. Jung (Vol. 9, Partea I, pp. 255–272). Princeton University Press. (Lucrarea originală publicată în 1954).', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-48', authors: 'Jung, C. G.', year: '1921/1971', title: 'Psychological types (Vol. 6)', publication: 'Princeton University Press', fullCitation: 'Jung, C. G. (1971). Psychological types (Trad. H. G. Baynes, rev. R. F. C. Hull). In The collected works of C. G. Jung (Vol. 6). Princeton University Press. (Lucrarea originală publicată în 1921).', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-49', authors: 'Kahan, D. M.', year: '2013', title: 'Ideology, motivated reasoning, and cognitive reflection', publication: 'Judgment and Decision Making, 8(4), 407–424', fullCitation: 'Kahan, D. M. (2013). Ideology, motivated reasoning, and cognitive reflection. Judgment and Decision Making, 8(4), 407–424.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-50', authors: 'Kahan, D. M.', year: '2017', title: 'Misconceptions, misinformation, and the logic of identity-protective cognition', publication: 'Cultural Cognition Project Working Paper Series, (164), Yale Law School', fullCitation: 'Kahan, D. M. (2017). Misconceptions, misinformation, and the logic of identity-protective cognition. Cultural Cognition Project Working Paper Series, (164), Yale Law School.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-51', authors: 'Kahneman, D.', year: '2011', title: 'Thinking, fast and slow', publication: 'Farrar, Straus and Giroux', fullCitation: 'Kahneman, D. (2011). Thinking, fast and slow. Farrar, Straus and Giroux.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-52a', authors: 'Kalaitzidis, P.', year: '2012', title: 'Orthodoxy and political theology', publication: 'World Council of Churches Publications', fullCitation: 'Kalaitzidis, P. (2012). Orthodoxy and political theology. World Council of Churches Publications.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-52b', authors: 'Kalaitzidis, P., Hovorun, C., Papanikolaou, A., & Gallaher, B.', year: '2022', title: 'A declaration on the „Russian World” (Russkii Mir) teaching', publication: 'Volos Academy for Theological Studies / Fordham University Orthodox Christian Studies Center', fullCitation: 'Kalaitzidis, P., Hovorun, C., Papanikolaou, A., & Gallaher, B. (2022). A declaration on the „Russian World” (Russkii Mir) teaching. Volos Academy for Theological Studies / Fordham University Orthodox Christian Studies Center.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-53', authors: 'Klein, M.', year: '1946/1975', title: 'Notes on some schizoid mechanisms', publication: 'The Hogarth Press', fullCitation: 'Klein, M. (1975). Notes on some schizoid mechanisms. In Envy and gratitude and other works 1946–1963 (pp. 1–24). The Hogarth Press. (Lucrarea originală publicată în 1946).', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-54a', authors: 'Kruglanski, A. W.', year: '2004', title: 'The psychology of closed mindedness', publication: 'Psychology Press', fullCitation: 'Kruglanski, A. W. (2004). The psychology of closed mindedness. Psychology Press.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-54b', authors: 'Kruglanski, A. W., & Webster, D. M.', year: '1996', title: 'Motivated closing of the mind: „Seizing” and „freezing”', publication: 'Psychological Review, 103(2), 263–283', fullCitation: 'Kruglanski, A. W., & Webster, D. M. (1996). Motivated closing of the mind: „Seizing” and „freezing”. Psychological Review, 103(2), 263–283.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-55', authors: 'Kunda, Z.', year: '1990', title: 'The case for motivated reasoning', publication: 'Psychological Bulletin, 108(3), 480–498', fullCitation: 'Kunda, Z. (1990). The case for motivated reasoning. Psychological Bulletin, 108(3), 480–498.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-56', authors: 'Lalonde, M.', year: '1974', title: 'A new perspective on the health of Canadians: A working document', publication: 'Minister of Supply and Services Canada', fullCitation: 'Lalonde, M. (1974). A new perspective on the health of Canadians: A working document. Minister of Supply and Services Canada.', domain: 'Sociologie instituțională' },
  { id: 'bib-57', authors: 'Ledeneva, A. V.', year: '2013', title: 'Can Russia modernise? Sistema, power networks and informal governance', publication: 'Cambridge University Press', fullCitation: 'Ledeneva, A. V. (2013). Can Russia modernise? Sistema, power networks and informal governance. Cambridge University Press.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-58a', authors: 'Lefebvre, V. A.', year: '1982', title: 'Algebra of conscience: A comparative analysis of Western and Soviet ethical systems', publication: 'D. Reidel Publishing Company', fullCitation: 'Lefebvre, V. A. (1982). Algebra of conscience: A comparative analysis of Western and Soviet ethical systems. D. Reidel Publishing Company.', domain: 'Cibernetică și semiotică' },
  { id: 'bib-58b', authors: 'Lefebvre, V. A.', year: '2001', title: 'Algebra of conscience (Ed. a 2-a extinsă, cu o nouă parte despre controlul reflexiv)', publication: 'Kluwer Academic Publishers', fullCitation: 'Lefebvre, V. A. (2001). Algebra of conscience (Ed. a 2-a extinsă, cu o nouă parte despre controlul reflexiv). Kluwer Academic Publishers.', domain: 'Cibernetică și semiotică' },
  { id: 'bib-59', authors: 'Lembke, A.', year: '2021', title: 'Dopamine nation: Finding balance in the age of indulgence', publication: 'Dutton', fullCitation: 'Lembke, A. (2021). Dopamine nation: Finding balance in the age of indulgence. Dutton.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-60', authors: 'Lipset, S. M., & Rokkan, S. (Eds.)', year: '1967', title: 'Party systems and voter alignments: Cross-national perspectives', publication: 'The Free Press', fullCitation: 'Lipset, S. M., & Rokkan, S. (Eds.). (1967). Party systems and voter alignments: Cross-national perspectives. The Free Press.', domain: 'Sociologie instituțională' },
  { id: 'bib-61a', authors: 'Lotman, I. M.', year: '1990', title: 'Universe of the mind: A semiotic theory of culture', publication: 'I. B. Tauris', fullCitation: 'Lotman, I. M. (1990). Universe of the mind: A semiotic theory of culture (Trad. A. Shukman). I. B. Tauris.', domain: 'Cibernetică și semiotică' },
  { id: 'bib-61b', authors: 'Lotman, I. M.', year: '1992/2009', title: 'Culture and explosion', publication: 'Mouton de Gruyter', fullCitation: 'Lotman, I. M. (2009). Culture and explosion (Trad. W. Clark). Mouton de Gruyter. (Lucrarea originală Kultura i vzrîv publicată în 1992).', domain: 'Cibernetică și semiotică' },
  { id: 'bib-61c', authors: 'Lotman, I. M., & Uspenski, B. A.', year: '1985', title: 'Binary models in the dynamics of Russian culture (to the end of the eighteenth century)', publication: 'Cornell University Press', fullCitation: 'Lotman, I. M., & Uspenski, B. A. (1985). Binary models in the dynamics of Russian culture (to the end of the eighteenth century). In A. D. Nakhimovsky & A. Stone Nakhimovsky (Eds.), The semiotics of Russian cultural history (pp. 30–66). Cornell University Press.', domain: 'Cibernetică și semiotică' },
  { id: 'bib-62', authors: 'Lovinescu, E.', year: '1924–1925/1997', title: 'Istoria civilizației române moderne (Vol. 1–3)', publication: 'Editura Minerva', fullCitation: 'Lovinescu, E. (1997). Istoria civilizației române moderne (Vol. 1–3). Editura Minerva. (Lucrarea originală publicată în 1924–1925).', domain: 'Sociologie instituțională' },
  { id: 'bib-63a', authors: 'Luhmann, N.', year: '1995', title: 'Social systems', publication: 'Stanford University Press', fullCitation: 'Luhmann, N. (1995). Social systems (Trad. J. Bednarz Jr. & D. Baecker). Stanford University Press.', domain: 'Sociologie instituțională' },
  { id: 'bib-63b', authors: 'Luhmann, N.', year: '2004', title: 'Law as a social system', publication: 'Oxford University Press', fullCitation: 'Luhmann, N. (2004). Law as a social system (Trad. K. A. Ziegert). Oxford University Press.', domain: 'Sociologie instituțională' },
  { id: 'bib-64', authors: 'Maiorescu, T.', year: '1868/1984', title: 'În contra direcției de astăzi în cultura română', publication: 'Editura Minerva (Convorbiri literare, 1868)', fullCitation: 'Maiorescu, T. (1984). În contra direcției de astăzi în cultura română. În Critice (Vol. 1, pp. 147–156). Editura Minerva. (Studiul original publicat în Convorbiri literare în 1868).', domain: 'Sociologie instituțională' },
  { id: 'bib-65', authors: 'McEwen, B. S.', year: '1998', title: 'Protective and damaging effects of stress mediators', publication: 'New England Journal of Medicine, 338(3), 171–179', fullCitation: 'McEwen, B. S. (1998). Protective and damaging effects of stress mediators. New England Journal of Medicine, 338(3), 171–179.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-66', authors: 'McGuire, W. J.', year: '1964', title: 'Inducing resistance to persuasion: Some contemporary approaches', publication: 'Advances in experimental social psychology (Vol. 1, pp. 191–229)', fullCitation: 'McGuire, W. J. (1964). Inducing resistance to persuasion: Some contemporary approaches. In L. Berkowitz (Ed.), Advances in experimental social psychology (Vol. 1, pp. 191–229). Academic Press.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-67', authors: 'Merton, R. K.', year: '1938', title: 'Social structure and anomie', publication: 'American Sociological Review, 3(5), 672–682', fullCitation: 'Merton, R. K. (1938). Social structure and anomie. American Sociological Review, 3(5), 672–682.', domain: 'Sociologie instituțională' },
  { id: 'bib-68', authors: 'Mitscherlich, A., & Mitscherlich, M.', year: '1967/1975', title: 'The inability to mourn: Principles of collective behavior (Die Unfähigkeit zu trauern)', publication: 'Grove Press', fullCitation: 'Mitscherlich, A., & Mitscherlich, M. (1975). The inability to mourn: Principles of collective behavior (Trad. B. R. Placzek). Grove Press. (Lucrarea originală Die Unfähigkeit zu trauern publicată în 1967).', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-69', authors: 'Neumann, E.', year: '1949/1954', title: 'The origins and history of consciousness', publication: 'Pantheon Books / Bollingen Series', fullCitation: 'Neumann, E. (1954). The origins and history of consciousness (Trad. R. F. C. Hull). Pantheon Books / Bollingen Series. (Lucrarea originală publicată în 1949).', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-70', authors: 'North, D. C., Wallis, J. J., & Weingast, B. R.', year: '2009', title: 'Violence and social orders: A conceptual framework for interpreting recorded human history', publication: 'Cambridge University Press', fullCitation: 'North, D. C., Wallis, J. J., & Weingast, B. R. (2009). Violence and social orders: A conceptual framework for interpreting recorded human history. Cambridge University Press.', domain: 'Sociologie instituțională' },
  { id: 'bib-71', authors: 'Osinga, F. P. B.', year: '2007', title: 'Science, strategy and war: The strategic theory of John Boyd', publication: 'Routledge', fullCitation: 'Osinga, F. P. B. (2007). Science, strategy and war: The strategic theory of John Boyd. Routledge.', domain: 'Cibernetică și semiotică' },
  { id: 'bib-72a', authors: 'Ostrom, E.', year: '1990', title: 'Governing the commons: The evolution of institutions for collective action', publication: 'Cambridge University Press', fullCitation: 'Ostrom, E. (1990). Governing the commons: The evolution of institutions for collective action. Cambridge University Press.', domain: 'Sociologie instituțională' },
  { id: 'bib-72b', authors: 'Ostrom, E.', year: '2010', title: 'Beyond markets and states: Polycentric governance of complex economic systems', publication: 'American Economic Review, 100(3), 641–672', fullCitation: 'Ostrom, E. (2010). Beyond markets and states: Polycentric governance of complex economic systems. American Economic Review, 100(3), 641–672.', domain: 'Sociologie instituțională' },
  { id: 'bib-73', authors: 'Papanikolaou, A.', year: '2012', title: 'The mystical as political: Democracy and non-radical Orthodoxy', publication: 'University of Notre Dame Press', fullCitation: 'Papanikolaou, A. (2012). The mystical as political: Democracy and non-radical Orthodoxy. University of Notre Dame Press.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-74', authors: 'Pariser, E.', year: '2011', title: 'The filter bubble: What the Internet is hiding from you', publication: 'Penguin Press', fullCitation: 'Pariser, E. (2011). The filter bubble: What the Internet is hiding from you. Penguin Press.', domain: 'Cibernetică și semiotică' },
  { id: 'bib-75', authors: 'Peirce, C. S.', year: '1931–1958', title: 'Collected papers of Charles Sanders Peirce (Vol. 1–8)', publication: 'Harvard University Press', fullCitation: 'Peirce, C. S. (1931–1958). Collected papers of Charles Sanders Peirce (Vol. 1–8, C. Hartshorne, P. Weiss & A. W. Burks, Eds.). Harvard University Press.', domain: 'Cibernetică și semiotică' },
  { id: 'bib-76a', authors: 'Pomerantsev, P.', year: '2014', title: 'Nothing is true and everything is possible: The surreal heart of the new Russia', publication: 'PublicAffairs', fullCitation: 'Pomerantsev, P. (2014). Nothing is true and everything is possible: The surreal heart of the new Russia. PublicAffairs.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-76b', authors: 'Pomerantsev, P.', year: '2019', title: 'This is not propaganda: Adventures in the war against reality', publication: 'PublicAffairs', fullCitation: 'Pomerantsev, P. (2019). This is not propaganda: Adventures in the war against reality. PublicAffairs.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-77', authors: 'Porges, S. W.', year: '2011', title: 'The polyvagal theory: Neurophysiological foundations of emotions, attachment, communication, and self-regulation', publication: 'W. W. Norton & Company', fullCitation: 'Porges, S. W. (2011). The polyvagal theory: Neurophysiological foundations of emotions, attachment, communication, and self-regulation. W. W. Norton & Company.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-78', authors: 'Putnam, R. D.', year: '2000', title: 'Bowling alone: The collapse and revival of American community', publication: 'Simon & Schuster', fullCitation: 'Putnam, R. D. (2000). Bowling alone: The collapse and revival of American community. Simon & Schuster.', domain: 'Sociologie instituțională' },
  { id: 'bib-79', authors: 'Radin, P.', year: '1956', title: 'The trickster: A study in American Indian mythology (Cu comentarii de K. Kerényi și C. G. Jung)', publication: 'Routledge & Kegan Paul', fullCitation: 'Radin, P. (1956). The trickster: A study in American Indian mythology (Cu comentarii de K. Kerényi și C. G. Jung). Routledge & Kegan Paul.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-80', authors: 'Rădulescu-Motru, C.', year: '1904/1996', title: 'Cultura română și politicianismul', publication: 'Editura Scrisul Românesc', fullCitation: 'Rădulescu-Motru, C. (1996). Cultura română și politicianismul. Editura Scrisul Românesc. (Lucrarea originală publicată în 1904).', domain: 'Sociologie instituțională' },
  { id: 'bib-81a', authors: 'Roozenbeek, J., & van der Linden, S.', year: '2019', title: 'Fake news game confers psychological resistance against online misinformation', publication: 'Palgrave Communications, 5(1), 65', fullCitation: 'Roozenbeek, J., & van der Linden, S. (2019). Fake news game confers psychological resistance against online misinformation. Palgrave Communications, 5(1), 65.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-81b', authors: 'Roozenbeek, J., van der Linden, S., Goldberg, B., Rathje, S., & Lewandowsky, S.', year: '2022', title: 'Psychological inoculation improves resilience against misinformation on social media', publication: 'Science Advances, 8(34), eabo6254', fullCitation: 'Roozenbeek, J., van der Linden, S., Goldberg, B., Rathje, S., & Lewandowsky, S. (2022). Psychological inoculation improves resilience against misinformation on social media. Science Advances, 8(34), eabo6254.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-82', authors: 'Sandu, D.', year: '2010', title: 'Lumile sociale ale migrației românești în străinătate', publication: 'Editura Polirom', fullCitation: 'Sandu, D. (2010). Lumile sociale ale migrației românești în străinătate. Editura Polirom.', domain: 'Sociologie instituțională' },
  { id: 'bib-83a', authors: 'Sapolsky, R. M.', year: '2004', title: "Why zebras don't get ulcers: The acclaimed guide to stress, stress-related diseases, and coping (Ed. a 3-a)", publication: 'Henry Holt and Company', fullCitation: "Sapolsky, R. M. (2004). Why zebras don't get ulcers: The acclaimed guide to stress, stress-related diseases, and coping (Ed. a 3-a). Henry Holt and Company.", domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-83b', authors: 'Sapolsky, R. M.', year: '2017', title: 'Behave: The biology of humans at our best and worst', publication: 'Penguin Press', fullCitation: 'Sapolsky, R. M. (2017). Behave: The biology of humans at our best and worst. Penguin Press.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-84', authors: 'Schmitt, C.', year: '1932/1996', title: 'The concept of the political (Der Begriff des Politischen)', publication: 'University of Chicago Press', fullCitation: 'Schmitt, C. (1996). The concept of the political (Trad. G. Schwab). University of Chicago Press. (Lucrarea originală Der Begriff des Politischen publicată în 1932).', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-85', authors: 'Schmitt, O. J.', year: '2017', title: 'Corneliu Zelea Codreanu: Ascensiunea și căderea „Căpitanului”', publication: 'Editura Humanitas', fullCitation: 'Schmitt, O. J. (2017). Corneliu Zelea Codreanu: Ascensiunea și căderea „Căpitanului” (Trad. W. Tauwinkl). Editura Humanitas.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-86a', authors: 'Schultz, W.', year: '1998', title: 'Predictive reward signal of dopamine neurons', publication: 'Journal of Neurophysiology, 80(1), 1–27', fullCitation: 'Schultz, W. (1998). Predictive reward signal of dopamine neurons. Journal of Neurophysiology, 80(1), 1–27.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-86b', authors: 'Schultz, W.', year: '2016', title: 'Dopamine reward prediction error coding', publication: 'Dialogues in Clinical Neuroscience, 18(1), 23–32', fullCitation: 'Schultz, W. (2016). Dopamine reward prediction error coding. Dialogues in Clinical Neuroscience, 18(1), 23–32.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-87', authors: 'Seligman, M. E. P.', year: '1975', title: 'Helplessness: On depression, development, and death', publication: 'W. H. Freeman', fullCitation: 'Seligman, M. E. P. (1975). Helplessness: On depression, development, and death. W. H. Freeman.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-88', authors: 'Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., & Gal, Y.', year: '2024', title: 'AI models collapse when trained on recursively generated data', publication: 'Nature, 631(8022), 755–759', fullCitation: 'Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., & Gal, Y. (2024). AI models collapse when trained on recursively generated data. Nature, 631(8022), 755–759.', domain: 'Cibernetică și semiotică' },
  { id: 'bib-89', authors: 'Singer, T., & Kimbles, S. L. (Eds.)', year: '2004', title: 'The cultural complex: Contemporary Jungian perspectives on psyche and society', publication: 'Brunner-Routledge', fullCitation: 'Singer, T., & Kimbles, S. L. (Eds.). (2004). The cultural complex: Contemporary Jungian perspectives on psyche and society. Brunner-Routledge.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-90', authors: 'Snyder, T.', year: '2018', title: 'The road to unfreedom: Russia, Europe, America', publication: 'Tim Duggan Books', fullCitation: 'Snyder, T. (2018). The road to unfreedom: Russia, Europe, America. Tim Duggan Books.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-91', authors: 'Soloviov, V.', year: '1900/1994', title: 'Povestire despre Antihrist (Trei conversații despre război, progres și sfârșitul istoriei universale)', publication: 'Editura Institutul European', fullCitation: 'Soloviov, V. (1994). Povestire despre Antihrist (În Trei conversații despre război, progres și sfârșitul istoriei universale). Editura Institutul European. (Lucrarea originală publicată în 1900).', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-92', authors: 'Stahl, H. H.', year: '1980', title: 'Traditional Romanian village communities: The transition from the communal to the capitalist mode of production in the Danube region', publication: 'Cambridge University Press', fullCitation: 'Stahl, H. H. (1980). Traditional Romanian village communities: The transition from the communal to the capitalist mode of production in the Danube region (Trad. D. Chirot & H. C. R. Chirot). Cambridge University Press.', domain: 'Sociologie instituțională' },
  { id: 'bib-93', authors: 'Stăniloae, D.', year: '1978', title: 'Teologia dogmatică ortodoxă (Vol. 1–3)', publication: 'Editura Institutului Biblic și de Misiune al Bisericii Ortodoxe Române', fullCitation: 'Stăniloae, D. (1978). Teologia dogmatică ortodoxă (Vol. 1–3). Editura Institutului Biblic și de Misiune al Bisericii Ortodoxe Române.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-94', authors: 'Sunstein, C. R.', year: '2017', title: '#Republic: Divided democracy in the age of social media', publication: 'Princeton University Press', fullCitation: 'Sunstein, C. R. (2017). #Republic: Divided democracy in the age of social media. Princeton University Press.', domain: 'Cibernetică și semiotică' },
  { id: 'bib-95', authors: 'Taylor, C.', year: '2007', title: 'A secular age', publication: 'Belknap Press of Harvard University Press', fullCitation: 'Taylor, C. (2007). A secular age. Belknap Press of Harvard University Press.', domain: 'Sociologie instituțională' },
  { id: 'bib-96', authors: 'Thayer, J. F., & Lane, R. D.', year: '2009', title: 'Claude Bernard and the heart–brain connection: Further elaboration of a model of neurovisceral integration', publication: 'Neuroscience & Biobehavioral Reviews, 33(2), 81–88', fullCitation: 'Thayer, J. F., & Lane, R. D. (2009). Claude Bernard and the heart–brain connection: Further elaboration of a model of neurovisceral integration. Neuroscience & Biobehavioral Reviews, 33(2), 81–88.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-97a', authors: 'Thom, F.', year: '2018', title: 'Comprendre le poutinisme', publication: 'Desclée De Brouwer', fullCitation: 'Thom, F. (2018). Comprendre le poutinisme. Desclée De Brouwer.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-97b', authors: 'Thom, F.', year: '2022', title: "La marche à rebours: Regard sur l'histoire soviétique et russe", publication: 'Sorbonne Université Presses', fullCitation: "Thom, F. (2022). La marche à rebours: Regard sur l'histoire soviétique et russe. Sorbonne Université Presses.", domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-98', authors: 'Thomas, T. L.', year: '2004', title: "Russia's reflexive control theory and the military", publication: 'The Journal of Slavic Military Studies, 17(2), 237–256', fullCitation: "Thomas, T. L. (2004). Russia's reflexive control theory and the military. The Journal of Slavic Military Studies, 17(2), 237–256.", domain: 'Cibernetică și semiotică' },
  { id: 'bib-99', authors: 'Tismaneanu, V.', year: '2003', title: 'Stalinism for all seasons: A political history of Romanian communism', publication: 'University of California Press', fullCitation: 'Tismaneanu, V. (2003). Stalinism for all seasons: A political history of Romanian communism. University of California Press.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-100', authors: 'Verdery, K.', year: '1991', title: "National ideology under socialism: Identity and cultural politics in Ceaușescu's Romania", publication: 'University of California Press', fullCitation: "Verdery, K. (1991). National ideology under socialism: Identity and cultural politics in Ceaușescu's Romania. University of California Press.", domain: 'Psihologie analitică și memorie' },
  { id: 'bib-101a', authors: 'Volkan, V. D.', year: '1997', title: 'Bloodlines: From ethnic pride to ethnic terrorism', publication: 'Farrar, Straus and Giroux', fullCitation: 'Volkan, V. D. (1997). Bloodlines: From ethnic pride to ethnic terrorism. Farrar, Straus and Giroux.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-101b', authors: 'Volkan, V. D.', year: '2004', title: 'Blind trust: Large groups and their leaders in times of crisis and terror', publication: 'Pitchstone Publishing', fullCitation: 'Volkan, V. D. (2004). Blind trust: Large groups and their leaders in times of crisis and terror. Pitchstone Publishing.', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-102a', authors: 'von Franz, M.-L.', year: '1972/1995', title: 'Shadow and evil in fairy tales (Ed. revizuită)', publication: 'Shambhala', fullCitation: 'von Franz, M.-L. (1995). Shadow and evil in fairy tales (Ed. revizuită). Shambhala. (Lucrarea originală publicată în 1972).', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-102b', authors: 'von Franz, M.-L.', year: '1970/2000', title: 'The problem of the Puer Aeternus (Ed. a 3-a)', publication: 'Inner City Books', fullCitation: 'von Franz, M.-L. (2000). The problem of the Puer Aeternus (Ed. a 3-a). Inner City Books. (Lucrarea originală bazată pe prelegerile din 1959–1960 și publicată în 1970).', domain: 'Psihologie analitică și memorie' },
  { id: 'bib-103', authors: 'Vosoughi, S., Roy, D., & Aral, S.', year: '2018', title: 'The spread of true and false news online', publication: 'Science, 359(6380), 1146–1151', fullCitation: 'Vosoughi, S., Roy, D., & Aral, S. (2018). The spread of true and false news online. Science, 359(6380), 1146–1151.', domain: 'Cibernetică și semiotică' },
  { id: 'bib-104', authors: 'Wallerstein, I.', year: '1974', title: 'The modern world-system I: Capitalist agriculture and the origins of the European world-economy in the sixteenth century', publication: 'Academic Press', fullCitation: 'Wallerstein, I. (1974). The modern world-system I: Capitalist agriculture and the origins of the European world-economy in the sixteenth century. Academic Press.', domain: 'Sociologie instituțională' },
  { id: 'bib-105', authors: 'Wu, T.', year: '2016', title: 'The attention merchants: The epic scramble to get inside our heads', publication: 'Alfred A. Knopf', fullCitation: 'Wu, T. (2016). The attention merchants: The epic scramble to get inside our heads. Alfred A. Knopf.', domain: 'Cibernetică și semiotică' },
  { id: 'bib-106', authors: 'Zeletin, Ș.', year: '1925/1991', title: 'Burghezia română: Originea și rolul ei istoric', publication: 'Editura Humanitas', fullCitation: 'Zeletin, Ș. (1991). Burghezia română: Originea și rolul ei istoric. Editura Humanitas. (Lucrarea originală publicată în 1925).', domain: 'Sociologie instituțională' },
  { id: 'bib-107', authors: 'Zuboff, S.', year: '2019', title: 'The age of surveillance capitalism: The fight for a human future at the new frontier of power', publication: 'PublicAffairs', fullCitation: 'Zuboff, S. (2019). The age of surveillance capitalism: The fight for a human future at the new frontier of power. PublicAffairs.', domain: 'Cibernetică și semiotică' }
];

export const MASTER_STYLE_PROMPT = `Creează o experiență video în modul Cinematic urmând o rigoare academică strictă (temperatură 0.3: ton analitic, sobru, calm, clinic, fără speculații sau metafore gratuite). Nu menționa și nu afișa niciun fel de date statistice, procente sau scoruri numerice; explică toate ideile exclusiv ca dinamici structurale și cauzale. Structurează prezentarea progresiv, dublând fiecare concept teoretic cu explicația sa practică/empirică, de la definirea cadrului sistemic și a blocajelor până la sinteza și soluția finală.

Regulă vizuală obligatorie: Folosește exclusiv un stil de ilustrație editorială 2D / gravură vectorială curată și diagrame de sistem pe un fundal alb-crem cald texturat (#F6F5EE). Toate liniile, contururile și textul principal vor fi în negru-cărbune (#222426) și nuanțe de gri-ardezie (#6E7376, #8C9BA5). Folosește strict galben-muștar (#E5B822) ca accent pentru concepte-cheie, sinteză și soluții, și roșu-vermilion (#F01E1E) exclusiv pentru tensiuni, crize sau bucle de blocaj. Interzis să folosești alte culori, efecte 3D sau desene de tip whiteboard.`;
