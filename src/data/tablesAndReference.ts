import {
  Table1Row,
  Table2Row,
  RegionalCase,
  GlossaryConcept,
  BibliographyItem,
  ChapterExecutiveSummary,
  InstitutionalProtocolRow
} from './types';
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
      'Instrumentalizarea politică a discursului identitar și religios de către actori politici oportuniști și promotori autohtoni ai radicalismului în convergență cu doctrina revizionistă Russkii Mir; subfinanțarea educației umaniste și civice și absența unui proces instituționalizat de asumare a traumelor totalitare din secolul al XX-lea.',
    stratumB:
      'Dubla falsificare axiologică și parazitarea semiotică a conservatorismului și a ortodoxiei prin camuflaj discursiv; substituirea sintezei creștin–seculare europene (întemeiată pe Imago Dei și universalismul drepturilor fundamentale) cu inversiunea normativă a Antilumii (Epstein), etnofiletismul și nihilismul cinic al stării Bobok (Dostoievski).',
    stratumC:
      'Incapacitatea de a ține doliu pentru complicitățile totalitare (Mitscherlich) și fixarea într-o traumă aleasă de victimă perpetuă (Volkan); reducerea credinței la o religiozitate ritualistă de fațadă și la un conformism confesional exterior, vulnerabil la proiecții paranoide și xenofobe.'
  },
  {
    id: 't1-dim-4',
    dimensionNumber: 4,
    dimensionTitle: '4. Ecologia informațională și dinamica decizională în bucla OODA',
    stratumA:
      'Dereglementarea pieței atenției digitale și proliferarea rețelelor de reciclare și disimulare a sursei informaționale (information laundering: ferme de boți, rețele de microinfluenceri coordonați netransparent, canale criptate); poluarea ecosistemului digital cu date sintetice care induc Model Collapse (Shumailov) și Model Autophagy Disorder (Alemohammad) în modelele generative de inteligență artificială.',
    stratumB:
      'Deturnarea fazei de Orientare din bucla OODA (Boyd) prin control reflexiv de rang secund și comutarea în al doilea sistem etic al confruntării (Lefebvre); regresia de la medierea ternară la semiotica binară a anihilării (Lotman); capturarea adictivă a circuitelor dopaminergice în nucleul accumbens (eroarea de predicție a recompensei) și contagiunea complexă în bule informaționale închise (camere de ecou, Centola).',
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
      'Bifurcarea procesării în nodul de criză acută: blocarea pe Traseul reactiv dezadaptativ (Track A: hiperactivare amigdaliană, adoptare precipitată și înghețare epistemică seizing/freezing, procesare defensivă motivată de protejarea identității de grup, furie și blocaj decizional) în detrimentul Traseului deliberativ adaptativ (Track B: reglare prefrontală, capacitate negativă și validare epistemică).',
    stratumC:
      'Enantiodromia suveranistă (răsturnarea mimetismului prooccidental în respingerea radicală a modernității constituționale); dominația sindromului Puer Aeternus colectiv (von Franz), a iluziei suveranității izolaționiste și a regresiei spre dependență pasivă față de un stat paternalist tutelar (Neumann).'
  }
];

export const TABLE_2_DATA: Table2Row[] = [
  {
    id: 't2-faza-1',
    phaseCode: 'Faza I',
    phaseSubtitle: 'Decompresia alostatică și igiena informațională',
    horizon: 'Orizont tactic imediat: 0–72 ore în criză acută · 0–12 luni structural',
    humanBiology:
      'Reducerea uzurii alostatice (McEwen) și a hiperactivării cronice a axei HPA prin scăderea insecurității materiale și birocratice; protejarea somnului și a atenției copiilor și adulților prin limitarea expunerii la fluxurile adictive de stimuli care provoacă capturarea circuitelor dopaminergice în nucleul accumbens; restabilirea latenței temporale necesare pentru deblocarea cortexului prefrontal dorsolateral.',
    digitalAndSociospatial:
      'Aplicarea Regulamentului DSA (Legea nr. 50/2024) și a AI Act prin cuplarea Ordinelor de eliminare a conținutului ilegal (art. 9 DSA / art. 7 Legea 50/2024) cu Ordinele de furnizare a informațiilor financiare și a identității plătitorilor (art. 10 DSA) transmise către VLOPs prin ANCOM; standardizarea probatorie a detecției de către DNSC și hub-ul regional EDMO/BROD în format STIX și maparea pe matricea DISARM; introducerea frânelor de viralitate, etichetarea criptografică a datelor sintetice și investiții de urgență în serviciile de bază din enclavele de excluziune socială.',
    informationalLifestyle:
      'Campanii publice de conștientizare a igienei digitale și a mecanismelor de capturare a atenției; înlocuirea comunicării oficiale arogante sau alarmiste cu o comunicare strategică de decompresie alostatică bazată pe principiile CDC CERC (Crisis and Emergency Risk Communication), menită să dezamorseze hipervigilența rețelei de detecție a relevanței (Salience Network – SN) și să oprească bucla reactivă dezadaptativă a Traseului A.',
    institutionalSystem:
      'Simplificarea administrativă și digitalizarea transparentă după modelul e-Estonia; verificarea codului unic al mandatarului financiar (CMF) și blocarea publicității politice nemarcate sau finanțate din țări terțe prin AEP și BEC (Legea nr. 334/2006, O.U.G. nr. 1/2025, Regulamentul TTPA 2024/900 art. 13, 15, 17); înghețarea operativă în timp real a tranzacțiilor suspecte și a conversiilor cripto off-ramp prin ONPCSB, BNR și ASF în temeiul art. 33–34 din Legea nr. 129/2019 (blocare de drept 24h și suspendare 48–72h, interogarea registrului BARIS conform Legii nr. 86/2025, aplicarea O.U.G. nr. 10/2025 / MiCA 2023/1114 și TFR 2023/1113 – Travel Rule, urmate de sesizarea PICCJ pentru sechestru asigurător).'
  },
  {
    id: 't2-faza-2',
    phaseCode: 'Faza II',
    phaseSubtitle: 'Stabilizarea comunitară și pregătirea preventivă',
    horizon: 'Orizont operațional mediu: 1–3 ani',
    humanBiology:
      'Antrenarea reglării descendente a amigdalei bazolaterale de către cortexul prefrontal ventromedial și dorsolateral; cultivarea capacității negative (Bion) și a toleranței la incertitudine pentru comutarea stabilă a procesării informației din nodul de bifurcație pe Traseul deliberativ adaptativ B; sesiuni periodice de consolidare mnezică calibrate pe curba uitării a lui Hermann Ebbinghaus.',
    digitalAndSociospatial:
      'Reconstrucția infrastructurii comunitare și culturale de proximitate în mediul rural, în orașele mici și în comunitățile din diaspora pentru a înlocui izolarea în bule informaționale închise cu spații fizice de interacțiune umană directă; crearea de rețele locale care favorizează contagiunea socială complexă pozitivă (Centola, 2018) și refacerea capitalului social de punte (Putnam, 2000).',
    informationalLifestyle:
      'Instituționalizarea pregătirii psihocognitive preventive în școli, universități și programe pentru adulți, axată pe detecția controlului reflexiv de rang secund și a semiozei binare; reconcilierea filtrului moral creștin–secular prin dialog între teologia ortodoxă patristică a demnității persoanei și etica civică constituțională, consolidând primul sistem etic al cooperării.',
    institutionalSystem:
      'Crearea unor mecanisme instituționale permanente de coordonare interministerială și societală pentru apărarea spațiului cognitiv, după modelul apărării cuprinzătoare din Estonia și Polonia; profesionalizarea comunicării strategice și integrarea validării comunitare în politicile publice pentru neutralizarea procesării defensive motivate de protejarea identității de grup.'
  },
  {
    id: 't2-faza-3',
    phaseCode: 'Faza III',
    phaseSubtitle: 'Consolidarea statului de drept și individuarea colectivă',
    horizon: 'Orizont strategic: 3–10 ani',
    humanBiology:
      'Stabilizarea pe termen lung a rezervei neurobiologice și a echilibrului psihofiziologic al populației printr-un mediu social predictibil și meritocratic; menținerea tonusului integrativ al conștiinței civice și prevenirea scăderii tensiunii conștiente în fața șocurilor geopolitice viitoare.',
    digitalAndSociospatial:
      'Reducerea structurală a faliilor sociospațiale dintre centrele metropolitane și periferiile interne; reconstrucția capitalului social de punte (Putnam, 2000) în mediul rural și depășirea familismului amoral (Banfield, 1958) prin reforma guvernanței cooperativelor agricole (Legea nr. 566/2004, art. 16 și art. 76: director executiv recrutat competitiv, interdicția rudelor sau afinilor până la gradul al III-lea ai administratorului, filtre de integritate contractuală și protejarea rambursărilor de TVA); integrarea diasporei în rețelele economice și civice ale țării.',
    informationalLifestyle:
      'Asumarea critică și onestă a istoriei naționale în educație și în cultura publică, depășind incapacitatea de a ține doliu și trauma aleasă; conversia funcțională a resurselor latente din Umbra colectivă și a arhetipului Trickster-ului în agilitate cognitivă și inovație; maturizarea conștiinței civice dincolo de sindromul Puer Aeternus și realizarea individuării colective pe axa Ego–Sine.',
    institutionalSystem:
      'Închiderea operațională autentică a justiției și a administrației publice (eliminarea numirilor temporare discreționare din art. 509–510 O.U.G. nr. 57/2019 și profesionalizarea guvernanței corporative O.U.G. nr. 109/2011 / AMEPIP); reforma de arhitectură a alegerii (Thaler & Sunstein) a art. 182 și art. 281 din Codul de procedură fiscală (Legea nr. 207/2015) prin „penalizarea în oglindă a statului” (virarea din oficiu, prin Trezoreria Statului, în același ordin de plată IBAN, a dobânzilor și penalităților pentru întârzierea rambursării TVA conform art. 169 CPF, a concediilor medicale FNUASS conform art. 40 O.U.G. nr. 158/2005 sau a facturilor din e-Factura conform Legii nr. 72/2013, eliminând blocajele din O.G. nr. 22/2002 și RIL nr. 24/2025, alături de răspunderea solidară a funcționarilor conform art. 281 CPF, art. 499–500 Codul administrativ și Decizia CCR nr. 694/2015); mecanism dublu de audit periodic independent: auditul bienal al performanței realizat de Curtea de Conturi (art. 2 lit. b și art. 28 alin. 2 Legea nr. 94/1992 asupra creditelor de angajament din Legea nr. 500/2002) și auditul științific și civic al „cercetătorilor agreați” (art. 40 DSA / EDMO / grilele DigComp, KAVI și Serious Games).'
  }
];

export const REGIONAL_CONTROL_GROUP: RegionalCase[] = [
  {
    id: 'romania',
    country: 'România — Diagnostic de bază',
    roleInModel: 'Societatea-țintă analizată în monografie',
    exposureProfile: 'Expunere intensă la camuflaj discursiv suveranist și parazitare semiotică a ortodoxiei și conservatorismului, ocolind aversiunea istorică directă față de Rusia.',
    stratumA: 'Ordine instituțională semiconformată bazată pe „forme fără fond”; coexistența instituțiilor formale euroatlantice cu rețele extractive clientelare și polarizare sociospațială severă.',
    stratumB: 'Uzură alostatică ridicată, absența unei strategii naționale de pregătire preventivă și dereglarea spațiului algoritmic, favorizând deturnarea fazei de Orientare din bucla OODA.',
    stratumC: 'Scindare între Persona instituțională mimetică și Umbra colectivă, incapacitatea de a ține doliu pentru complicitățile totalitare și declanșarea enantiodromiei suveraniste.',
    strategicLesson: 'Vulnerabilitatea nu decurge dintr-o fatalitate culturală sau din lipsa garanțiilor de securitate, ci din complacerea unei părți a elitelor într-o ordine extractivă care a lăsat filtrul axiologic expus eroziunii.',
    statusType: 'tension'
  },
  {
    id: 'estonia',
    country: 'Estonia — Reziliență instituțională și cognitivă',
    roleInModel: 'Modelul articulării coerente a celor patru determinanți Lalonde–Dever',
    exposureProfile: 'Stat în prima linie geografică la granița cu Federația Rusă, cu o minoritate rusofonă semnificativă și țintă a atacurilor cibernetice și informaționale majore încă din 2007.',
    stratumA: 'Tranziție timpurie și radicală către instituții incluzive cu închidere operațională autentică; digitalizare transparentă prin sistemul e-Estonia, care a eliminat corupția mică și umilința birocratică; educație echitabilă teritorial.',
    stratumB: 'Instituționalizarea pregătirii psihocognitive preventive și a alfabetizării mediatice și digitale de la grădiniță până la adulți, integrate în doctrina apărării cuprinzătoare și a voinței de apărare.',
    stratumC: 'Axă Ego–Sine colectivă stabilă, în care modernizarea prooccidentală este trăită ca expresie organică a identității naționale, nu ca o formă fără fond impusă din exterior.',
    strategicLesson: 'Eliminarea umilinței birocratice și a corupției prin digitalizare transparentă scade uzura alostatică și ancorează organic cetățeanul în apărarea ordinii constituționale.',
    statusType: 'synthesis'
  },
  {
    id: 'polonia',
    country: 'Polonia — Memorie istorică și consens strategic',
    roleInModel: 'Modelul rezilienței conservatorismului și a religiozității împotriva parazitării semiotice moscovite',
    exposureProfile: 'Polarizări politice și axiologice interne intense între tabăra conservatoare națională și cea liberală cosmopolită, oferind teoretic condiții pentru parazitarea discursului conservator.',
    stratumA: 'Consens strategic transpartinic asupra apărării naționale, a înzestrării militare și a consolidării flancului estic al Alianței Nord-Atlantice.',
    stratumB: 'Eșecul sistematic al operațiunilor ruse de a converti conservatorismul catolic și suveranismul polonez într-o platformă prorusă sau ostilă NATO.',
    stratumC: 'Memoria istorică a ocupației țariste și sovietice — de la împărțirile Poloniei până la Katyn și sindicatul Solidaritatea — a fost riguros instituționalizată prin educație, cultură publică și biserică.',
    strategicLesson: 'Asumarea și instituționalizarea riguroasă a memoriei istorice în educație și biserică creează o normă culturală transversală în care tradiția și suveranitatea sunt indisolubil legate de descurajarea Rusiei.',
    statusType: 'synthesis'
  },
  {
    id: 'moldova',
    country: 'Republica Moldova — Mobilizare sub presiune hibridă',
    roleInModel: 'Oglinda comparativă a rezilienței în condiții de resurse reduse și asalt hibrid extrem',
    exposureProfile: 'Resurse economice și militare mult mai reduse, lipsa umbrelei NATO, șantaj energetic decenal și finanțare ilegală masivă a rețelelor oligarhice de cumpărare de voturi, plus amenințarea transnistreană.',
    stratumA: 'Crearea de instituții dedicate, precum Centrul pentru Comunicare Strategică și Combatere a Dezinformării, și aplicarea de sancțiuni legale ferme împotriva fluxurilor financiare ilicite și a canalelor de propagandă.',
    stratumB: 'Confruntarea directă și deconstrucția operațiunilor de cumpărare a voinței politice și de reciclare și disimulare a sursei informaționale în momente electorale critice.',
    stratumC: 'Articularea unui proiect de modernizare în care integrarea europeană este asumată conștient ca garanție existențială a supraviețuirii naționale.',
    strategicLesson: 'Voința politică fermă de a sancționa fluxurile financiare ilicite și de a apăra instituțional spațiul informațional poate compensa deficite majore de resurse materiale.',
    statusType: 'synthesis'
  }
];

export const GLOSSARY_CONCEPTS: GlossaryConcept[] = [
  {
    id: 'al-saselea-domeniu',
    term: 'Al șaselea domeniu operațional: spațiul cognitiv',
    stratum: 'B',
    authors: 'Claverie, Baptiste și du Cluzel, 2022 · du Cluzel, 2020 · NATO ACT',
    domain: 'Doctrină strategică și cibernetică militară',
    definition: 'Domeniu operațional definit de Comandamentul Suprem Aliat pentru Transformare al NATO, alături de cel terestru, maritim, aerian, cosmic și cibernetic, în care ținta directă este arhitectura de procesare a realității și capacitatea decizională a unei națiuni.',
    monographContext: 'Urmărește erodarea încrederii în instituțiile democratice și paralizia decizională a statului-țintă fără a declanșa pragul articolului 5 al Tratatului Atlanticului de Nord.',
    polarity: 'neutral'
  },
  {
    id: 'macro-micro-macro',
    term: 'Arhitectura cauzală Macro–Micro–Macro: barca lui Coleman',
    stratum: 'A',
    authors: 'James S. Coleman, 1990 · Peter Hedström, 2005',
    domain: 'Sociologie analitică',
    definition: 'Model explicativ din sociologia analitică (cunoscut drept „barca lui Coleman”) care articulează trei mecanisme cauzale înlănțuite: mecanismele situaționale de tranziție de la nivel macro la nivel micro, mecanismele individuale de formare a acțiunii (nivelul micro) și mecanismele transformaționale de agregare colectivă (tranziția micro–macro). Operaționalizat în această monografie, modelul arată cum configurația instituțională din Stratul A condiționează procesarea neurocognitivă din Stratul B și se agregă algoritmic în polarizare sau reziliență în Stratul C.',
    monographContext: 'Explică științific cum deficitele instituționale din Stratul A modelează procesarea neurocognitivă în Stratul B și se agregă algoritmic în polarizare și autosabotaj colectiv.',
    polarity: 'neutral'
  },
  {
    id: 'determinantii-lalonde-dever',
    term: 'Determinanții sistemici Lalonde–Dever',
    stratum: 'A',
    authors: 'Marc Lalonde, 1974 · G. E. Alan Dever, 1976',
    domain: 'Politici publice și psihosociologie',
    definition: 'Model analitic fundamentat pe cadrul clasic al determinanților sănătății publice elaborat de Marc Lalonde (1974) și rafinat epidemiologic de G. E. Alan Dever (1976), potrivit căruia starea unei populații este guvernată de patru câmpuri structurale: biologia umană, mediul, stilul de viață și organizarea sistemului de servicii. Operaționalizat în arhitectura acestei monografii, modelul ne ajută să stabilim în acest context că reziliența și echilibrul mintal al unei populații depind de interacțiunea continuă a patru factori: organizarea sistemului instituțional și a serviciilor publice, mediul socioeconomic și informațional, stilul de viață informațional și asociativ și rezerva neurobiologică.',
    monographContext: 'Fundamentează atât diagnosticul vulnerabilității endogene din Capitolul 1, cât și ordinea cauzală obligatorie a protocolului de reconstrucție în trei faze din Capitolul 6 și Tabelul 2.',
    polarity: 'synthesis'
  },
  {
    id: 'filtrul-axiologic',
    term: 'Filtrul axiologic și normativ creștin–secular',
    stratum: 'B',
    authors: 'Nikolai Berdiaev, 1937 · Dumitru Stăniloae, 1978 · Jürgen Habermas, 2006 · Charles Taylor, 2007',
    domain: 'Filosofie constituțională și teologie',
    definition: 'Sinteza europeană dintre etica creștină a demnității inalienabile a persoanei — întemeiată pe principiul Imago Dei, libertatea conștiinței și iubirea aproapelui — și raționalismul juridic modern bazat pe domnia legii impersonale, separarea puterilor și judecata critică.',
    monographContext: 'Stabilizează închiderea operațională în Stratul A, primul sistem etic al cooperării în Stratul B și axa Ego–Sine în Stratul C.',
    polarity: 'synthesis'
  },
  {
    id: 'inchidere-operationala',
    term: 'Închiderea operațională și autonomia funcțională',
    stratum: 'A',
    authors: 'Niklas Luhmann, 1995, 2004',
    domain: 'Teoria sistemelor sociale',
    definition: 'Proprietatea fundamentală a subsistemelor unei societăți moderne (justiția, administrația publică, educația, sănătatea, știința) de a funcționa autonom, ghidate exclusiv de propriile criterii normative interne (legal/ilegal, merit/incompetență, adevărat/fals), refuzând imixtiunea arbitrară a politicului de clan sau tranzacționarea informală a influenței.',
    monographContext: 'Deficitul cronic de închidere operațională din România a menținut instituțiile formale permeabile la capturarea extractivă a rentei; garantarea acestei autonomii (prin meritocrație, eliminarea interimatelor politice și digitalizare) reprezintă cheia rezilienței societale în Faza a III-a a protocolului.',
    polarity: 'synthesis'
  },
  {
    id: 'forme-fara-fond',
    term: 'Forme fără fond și instituții extractive versus incluzive',
    stratum: 'A',
    authors: 'Titu Maiorescu, 1868 · Constantin Rădulescu-Motru, 1904 · Constantin Dobrogeanu-Gherea, 1910 · Henri H. Stahl, 1980 · Daron Acemoglu și James A. Robinson, 2012 · North, Wallis și Weingast, 2009',
    domain: 'Sociologie istorică și economie instituțională',
    definition: 'Paradigmă analitică inaugurată de Titu Maiorescu (1868) și dezvoltată în sociologia modernizării românești (Rădulescu-Motru, 1904; Dobrogeanu-Gherea, 1910; Stahl, 1980), care desemnează disocierea structurală dintre arhitectura constituțională occidentală adoptată formal — instituțiile incluzive — și persistența practicilor informale de capturare a rentei și blocare a meritocrației, specifice instituțiilor extractive dintr-o ordine socială cu acces limitat (North, Wallis & Weingast, 2009; Acemoglu & Robinson, 2012).',
    monographContext: 'Constituie rădăcina istorică a neîncrederii cetățeanului român în discursul oficial și a scindării dintre Persona instituțională mimetică și Umbra colectivă.',
    polarity: 'tension'
  },
  {
    id: 'persona-si-umbra',
    term: 'Persona instituțională mimetică și Umbra colectivă',
    stratum: 'C',
    authors: 'Carl Gustav Jung, 1928 · Joseph Henderson, 1984 · Thomas Singer și Samuel L. Kimbles, 2004 · Gail Kligman și Katherine Verdery, 2011',
    domain: 'Psihologie analitică postjungiană și antropologie istorică',
    definition: 'Scindarea din inconștientul cultural (Henderson, 1984) și din complexele culturale (Singer & Kimbles, 2004) între fațada conformistă de aliniere declarativă la standardele externe — Persona instituțională mimetică — și fondul refulat de strategii informale de supraviețuire, politică a duplicității (Kligman & Verdery, 2011) și traume istorice neintegrate care alcătuiesc Umbra colectivă.',
    monographContext: 'Explică de ce impostura elitelor interne compromite simbolic însăși ideea de modernizare europeană în ochii cetățeanului vulnerabilizat.',
    polarity: 'tension'
  },
  {
    id: 'trauma-aleasa',
    term: 'Incapacitatea de a ține doliu și trauma aleasă',
    stratum: 'C',
    authors: 'Alexander și Margarete Mitscherlich, 1967 · Vamık D. Volkan, 1997, 2004',
    domain: 'Psihanaliză socială și psihopolitică',
    definition: 'Cuplarea a două mecanisme psihodinamice colective: incapacitatea de a ține doliu (Die Unfähigkeit zu trauern, Mitscherlich & Mitscherlich, 1967), definită drept refuzul confruntării morale oneste cu propriile complicități interne din regimurile totalitare, și trauma aleasă (chosen trauma, Volkan, 1997, 2004), definită drept reprezentarea mentală a unei nedreptăți istorice care fixează grupul într-o identitate transgenerațională de victimă inocentă și perpetuă.',
    monographContext: 'Blochează maturizarea civică și favorizează evacuarea vinovăției istorice prin proiecții paranoide asupra unor „persecutori externi”.',
    polarity: 'tension'
  },
  {
    id: 'axa-ego-sine',
    term: 'Axa Ego–Sine colectivă: deflație și inflație',
    stratum: 'C',
    authors: 'Edward F. Edinger, 1972 · Martin Seligman, 1975',
    domain: 'Psihologie analitică',
    definition: 'Legătura structurală dintre conștiința colectivă și nucleul arhetipal de sens și ordine morală. Când această axă este scindată, colectivitatea oscilează între deflație — neputință învățată și autodevalorizare — și inflație compensatoare manifestată prin naționalism mesianic și protocronism.',
    monographContext: 'Refacerea coerenței pe axa Ego–Sine prin funcția transcendentă și individuare colectivă este condiția modernității organice.',
    polarity: 'synthesis'
  },
  {
    id: 'familism-amoral',
    term: 'Familism amoral versus capital social de punte',
    stratum: 'A',
    authors: 'Edward C. Banfield, 1958 · Robert D. Putnam, 2000',
    domain: 'Sociologie politică',
    definition: 'Concept sociologic formulat de Edward C. Banfield (1958) pentru a desemna replierea defensivă în care normele de cooperare și bună-credință se aplică exclusiv în cercul restrâns al familiei biologice și al clanului, sfera publică fiind tratată drept ostilă și extractivă — în opoziție cu capitalul social de punte (bridging social capital, Putnam, 2000), bazat pe încrederea generalizată între grupuri sociale diferite. În acest context, conceptul explică fragmentarea celulară a societății românești între supraviețuirea de clan în periferii și secesiunea tacită în servicii private a păturilor urbane.',
    monographContext: 'Erodează coeziunea societală românească simultan cu secesiunea tacită în servicii private a păturilor urbane prospere.',
    polarity: 'tension'
  },
  {
    id: 'uzura-alostatica',
    term: 'Alostazia și sarcina / uzura alostatică cronică',
    stratum: 'B',
    authors: 'Peter Sterling și Joseph Eyer, 1988 · Bruce S. McEwen și Eliot Stellar, 1993 · Bruce S. McEwen, 1998 · Robert M. Sapolsky, 2004, 2017',
    domain: 'Neurobiologia stresului',
    definition: 'Cadrul neurobiologic care distinge între alostazie — menținerea stabilității fiziologice prin schimbare adaptativă (Sterling & Eyer, 1988) — și sarcina sau uzura alostatică (allostatic load, McEwen & Stellar, 1993; McEwen, 1998), definită drept costul fiziologic cumulativ și deteriorarea tisulară și neurală produse de suprasolicitarea cronică a axei de răspuns la stres. Operaționalizat în această analiză, conceptul arată cum insecuritatea socioeconomică, impredictibilitatea legislativă și umilința birocratică din Stratul A epuizează rezerva neurocognitivă a cetățenilor înainte de intervenția propagandei externe.',
    monographContext: 'Epuizează rezerva neurocognitivă a cetățeanului înainte de contactul cu propaganda digitală; reducerea ei este obiectivul primar din Faza I.',
    polarity: 'tension'
  },
  {
    id: 'axa-hpa-dlpf',
    term: 'Hiperactivarea axei HPA, triada rețelelor cerebrale și inhibiția prefrontală',
    stratum: 'B',
    authors: 'Amy F. T. Arnsten, 2009 · Vinod Menon, 2011 · Robert M. Sapolsky, 2004, 2017 · Daniel Kahneman, 2011 · Keith E. Stanovich, 2009',
    domain: 'Neuroștiințe cognitive',
    definition: 'Mecanism neuroendocrin și de rețea cerebrală prin care excesul cronic de cortizol pe axa hipotalamo-hipofizo-suprarenaliană (axa HPA) provoacă hipertrofia dendritică în amigdala bazolaterală și hiperactivarea rețelei de detecție a relevanței (Salience Network – SN), antrenând decuplarea rețelei executive centrale (Central Executive Network – CEN, Menon, 2011) și inhibiția sinaptică în hipocamp și în cortexul prefrontal dorsolateral (dlPFC) și ventromedial (vmPFC).',
    monographContext: 'Blochează Sistemul 2 deliberativ, favorizează disraționalitatea (Stanovich, 2009) și comută creierul cetățeanului pe dominația exclusivă a Sistemului 1 reactiv.',
    polarity: 'tension'
  },
  {
    id: 'abaissement-du-niveau-mental',
    term: 'Scăderea tensiunii conștiente: abaissement du niveau mental',
    stratum: 'C',
    authors: 'Pierre Janet · Carl Gustav Jung, 1934',
    domain: 'Psihologie dinamică și analitică',
    definition: 'Concept psihodinamic introdus de Pierre Janet și dezvoltat în psihologia analitică de Carl Gustav Jung (1934) pentru a desemna diminuarea tonusului integrativ al Eului conștient sub presiunea oboselii cronice și a afectelor negative, care coboară pragul controlului inhibitor și al filtrajului metacognitiv și permite complexelor autonome din inconștient să invadeze conștiința.',
    monographContext: 'Corespondentul psihodinamic din Stratul C al inhibiției prefrontale produse de uzura alostatică în Stratul B.',
    polarity: 'tension'
  },
  {
    id: 'sistema',
    term: 'Rețeaua sistema, siloviki, kompromat și modelul celor „patru Rusii”',
    stratum: 'A',
    authors: 'Alena Ledeneva, 2013 · Natalia Zubarevich, 2011 · Karen Dawisha, 2014 · Mark Galeotti, 2019',
    domain: 'Economia politică a regimului rus',
    definition: 'Mecanism informal și opac de guvernare cleptocratică (Ledeneva, 2013) în care instituțiile constituționale formale sunt subordonate rețelelor din structurile de forță și informații (siloviki), loialitatea fiind menținută prin distribuirea discreționară a rentelor, șantaj instituționalizat cu materiale compromițătoare (kompromat) și exploatarea precarității periferiilor interne din modelul celor „patru Rusii” (Zubarevich, 2011) prin keynesianismul militar al economiei morții (deathonomics).',
    monographContext: 'Democrațiile funcționale din vecinătate amenință existențial legitimitatea internă a rețelei sistema, motivând războiul cognitiv rus.',
    polarity: 'tension'
  },
  {
    id: 'triada-ilin-gumiliov-dughin',
    term: 'Corpusul doctrinar revizionist: Ilin, Gumiliov și Dughin',
    stratum: 'B',
    authors: 'Michel Eltchaninoff, 2018 · Timothy Snyder, 2018 · Françoise Thom, 2018, 2022',
    domain: 'Istoria ideilor politice',
    definition: 'Articularea totalitarismului pretins inocent ontologic al lui Ivan Ilin, a determinismului biocosmic al lui Lev Gumiliov și a geopoliticii maniheiste a lui Aleksandr Dughin, construită pe opoziția dintre telurocrație și talasocrație.',
    monographContext: 'Oferă justificarea ideologică a agresiunii imperiale și a anihilării ordinii constituționale euroatlantice.',
    polarity: 'tension'
  },
  {
    id: 'antilumea-epstein',
    term: 'Antilumea rusă și inversiunea normativă',
    stratum: 'B',
    authors: 'Mihail Epstein, 2022, 2023',
    domain: 'Filosofia culturii și semiotică politică',
    definition: 'Sistem ideologic conceptualizat de Mihail Epstein ca Russkii Antimir, care nu propune un proiect civilizațional pozitiv, ci funcționează prin răsturnarea sistematică a semnificației fiecărui concept politic, juridic și moral: agresiunea este numită apărare a păcii, iar ocupația este numită suveranitate.',
    monographContext: 'Nucleul operativ real al ideologiei putiniste, mascat la export prin camuflaj tradiționalist și suveranist în Figura 2.',
    polarity: 'tension'
  },
  {
    id: 'starea-bobok',
    term: 'Starea Bobok și nihilismul cinic transgresiv',
    stratum: 'B',
    authors: 'Fiodor Dostoievski, 1873 · Françoise Thom, 2018 · Peter Pomerantsev, 2014, 2019',
    domain: 'Politologie și psihologia propagandei',
    definition: 'Cultivarea deliberată a cinismului transgresiv — rezumat de deviza „să nu ne mai rușinăm de nimic!” — și a relativismului epistemic absolut, menită să convingă audiența că adevărul nu există și că toate instituțiile democratice sunt doar măști ipocrite.',
    monographContext: 'Înlocuiește persuasiunea ideologică clasică cu paralizia morală și acceptarea legii celui mai tare.',
    polarity: 'tension'
  },
  {
    id: 'dubla-falsificare-axiologica',
    term: 'Dubla falsificare axiologică și parazitarea semiotică',
    stratum: 'B',
    authors: 'Pantelis Kalaitzidis et al., 2022 · Cyril Hovorun, 2018 · Dumitru Stăniloae, 1978',
    domain: 'Semiotică axiologică și teologie politică',
    definition: 'Operațiune de disimulare care falsifică simultan tradiția creștină ortodoxă — substituită cu erezia etnofiletistă militaristă Russkii Mir — și conceptul de suveranitate națională, transformat într-o doctrină a dezarmării strategice și a decuplării de NATO și UE.',
    monographContext: 'Permite propagandei ruse să ocolească aversiunea istorică a românilor față de Moscova, așa cum este ilustrat în Figura 2.',
    polarity: 'tension'
  },
  {
    id: 'bucla-ooda',
    term: 'Bucla decizională OODA și faza de Orientare',
    stratum: 'B',
    authors: 'John Boyd, 1987 · Frans P. B. Osinga, 2007',
    domain: 'Cibernetică decizională și teorie strategică',
    definition: 'Ciclul adaptativ continuu alcătuit din Observare, Orientare, Decizie și Acțiune, în care faza de Orientare — formată din moștenirea culturală, experiența istorică și valorile morale — reprezintă centrul de greutate al întregului proces decizional.',
    monographContext: 'Războiul cognitiv nu vizează doar faza de Observare prin știri false punctuale, ci penetrarea și reconfigurarea fazei de Orientare însăși, conform Figurii 3.',
    polarity: 'neutral'
  },
  {
    id: 'control-reflexiv-rang-secund',
    term: 'Controlul reflexiv de rang secund și cele două sisteme etice',
    stratum: 'B',
    authors: 'Vladimir Lefebvre, 1982, 2001 · Timothy L. Thomas, 2004',
    domain: 'Psihologie matematică și cibernetică',
    definition: 'Procesul prin care un adversar modifică însăși arhitectura axiologică și regulile de inferență morală ale țintei, comutând-o din primul sistem etic al cooperării procedurale și al dialogului în al doilea sistem etic al confruntării intransigente și al anihilării oponentului.',
    monographContext: 'Determină cetățeanul capturat cognitiv să adopte din proprie convingere decizii autodistructive pe care le percepe ca expresie a voinței sale suverane.',
    polarity: 'tension'
  },
  {
    id: 'mediere-ternara-vs-binara',
    term: 'Semioza ternară versus semiotica binară a anihilării',
    stratum: 'B',
    authors: 'Charles Sanders Peirce, 1931–1958 · Iuri Lotman, 1990, 1992 · Iuri Lotman și Boris Uspenski, 1985',
    domain: 'Semiotica culturii și pragmatică',
    definition: 'Opoziția structurală dintre semioza ternară a lui Charles Sanders Peirce (bazată pe triada semn – obiect – interpretant) și culturile ternare analizate de Iuri Lotman și Boris Uspenski (1985) — care mențin un spațiu neutru al legii impersonale, al verificării probatorii și al competiției legitime — și semiotica binară a anihilării, lipsită de zonă axiologică neutră, în care oponentul este tratat ca un dușman ontologic ce trebuie exterminat.',
    monographContext: 'Operațiunile cognitive exportă semiotica binară în democrații pentru a prăbuși pacea civilă și deliberarea rațională.',
    polarity: 'synthesis'
  },
  {
    id: 'inchidere-cognitiva-seizing-freezing',
    term: 'Nevoia de închidere cognitivă (seizing și freezing) și procesarea defensivă',
    stratum: 'B',
    authors: 'Arie W. Kruglanski și Donna M. Webster, 1996 · Arie W. Kruglanski, 2004 · Dan M. Kahan, 2013, 2017',
    domain: 'Psihologie cognitivă și socială',
    definition: 'Mecanism psihocognitiv declanșat de stres și ambiguitate acută, desfășurat în două secvențe: capturarea precipitată și necritică a primei explicații disponibile care promite ordine și certitudine (seizing), urmată de înghețarea epistemică și impermeabilitatea la contraargumente (freezing), prin fuzionarea credinței cu identitatea și statutul emoțional în grupul de apartenență (Identity-Protective Cognition, Kahan, 2013).',
    monographContext: 'Explică de ce confruntarea agresivă întărește defensiva amigdaliană și de ce Faza a II-a trebuie să înceapă cu validarea comunitară.',
    polarity: 'tension'
  },
  {
    id: 'capturare-dopaminergica',
    term: 'Capturarea dopaminergică mezolimbică și desensibilizarea receptorilor D2',
    stratum: 'B',
    authors: 'Wolfram Schultz, 1998, 2016 · Anna Lembke, 2021',
    domain: 'Neurobiologia adicției și a atenției',
    definition: 'Exploatarea mecanismului neurochimic al erorii de predicție a recompensei (reward prediction error) în nucleul accumbens prin administrarea de recompense variabile intermitente, derulare infinită și stimuli inflamatori care stârnesc indignarea morală, inducând desensibilizarea și reducerea densității receptorilor dopaminergici postsinaptici D2 (downregulation), sevraj informațional și suprimarea latenței temporale necesare activării cortexului prefrontal.',
    monographContext: 'Menține utilizatorul digital într-o stare de hipnoză reactivă și vulnerabilitate la sugestie.',
    polarity: 'tension'
  },
  {
    id: 'model-collapse-mad',
    term: 'Colapsul și autofagia modelelor generative pe date sintetice',
    stratum: 'A',
    authors: 'Ilia Shumailov et al., 2024 · Sina Alemohammad et al., 2024',
    domain: 'Inteligență artificială și informatică teoretică',
    definition: 'Degradarea matematică și îngustarea varianței modelelor generative — cunoscute în literatură drept Model Collapse și Model Autophagy Disorder — atunci când sunt antrenate sau interogate recursiv pe texte și clipuri sintetice clonate de boți, fără infuzie de date umane autentice.',
    monographContext: 'Exploatat de rețelele Doppelgänger, Matrioșka și Pravda pentru a polua infrastructura epistemică digitală, motoarele de căutare și sistemele RAG.',
    polarity: 'tension'
  },
  {
    id: 'contagiune-complexa',
    term: 'Contagiunea socială complexă în rețea',
    stratum: 'B',
    authors: 'Damon Centola, 2018, 2021 · Mark Granovetter, 1973',
    domain: 'Sociologia rețelelor',
    definition: 'Mecanism de difuziune în rețelele sociale teoretizat de Damon Centola (2018, 2021), prin care adoptarea unor credințe radicale, identități politice sau norme comportamentale cu cost ridicat necesită confirmări multiple și redundante prin „punți largi” (wide bridges) din vecinătatea socială imediată, spre deosebire de contagiunea simplă a informației banale prin „legături slabe” (weak ties, Granovetter, 1973).',
    monographContext: 'Roiurile coordonate de boți și microinfluenceri fabrică artificial iluzia unui consens social majoritar; în Faza a II-a, spațiile comunitare fizice generează contagiune complexă pozitivă.',
    polarity: 'neutral'
  },
  {
    id: 'enantiodromie',
    term: 'Legea enantiodromiei colective',
    stratum: 'C',
    authors: 'Heraclit · Carl Gustav Jung, 1921',
    domain: 'Psihologie analitică',
    definition: 'Principiu formulat de Heraclit și teoretizat în psihologia analitică de Carl Gustav Jung (1921), potrivit căruia orice atitudine extremă, rigidă și unilaterală a conștiinței se răstoarnă inevitabil, la atingerea unui prag critic de saturație, în contrariul său psihodinamic autonom. Operaționalizat în această analiză, conceptul explică pendularea colectivă de la mimetismul prooccidental de fațadă (Persona instituțională) la respingerea radicală a modernității constituționale.',
    monographContext: 'Explică pendularea violentă de la mimetismul prooccidental de fațadă la respingerea radicală a modernității constituționale.',
    polarity: 'tension'
  },
  {
    id: 'arhetipul-trickster',
    term: 'Arhetipul Trickster-ului și funcția transcendentă',
    stratum: 'C',
    authors: 'Carl Gustav Jung, 1916, 1954 · Paul Radin, 1956',
    domain: 'Psihologie analitică și antropologie culturală',
    definition: 'Ambivalența vitalității adaptative refugiate în zona informală: regresivă ca șmecherie cinică și ocolire a legii, dar prospectivă ca agilitate cognitivă și inventivitate atunci când este mediată de funcția transcendentă și de cele trei filtre instituționale și metacognitive.',
    monographContext: 'Constituie resursa latentă din Umbra colectivă românească ce poate fi convertită în modernitate organică, conform Figurii 4.',
    polarity: 'synthesis'
  },
  {
    id: 'matricea-cipolla',
    term: 'Matricea comportamentală a lui Carlo M. Cipolla',
    stratum: 'A',
    authors: 'Carlo M. Cipolla, 1976',
    domain: 'Istorie economică și teoria deciziei',
    definition: 'Sistem cartezian bidimensional care clasifică acțiunile după câștigul sau pierderea proprie pe axa X și beneficiul sau dauna societală pe axa Y în patru cadrane: Cadranul I al cooperării inteligente (+X, +Y), Cadranul II al cetățeanului vulnerabil (-X, +Y), Cadranul IV al actorului extractiv (+X, -Y) și Cadranul III al autosabotajului colectiv (-X, -Y).',
    monographContext: 'Formalizează traiectoria prin care victima spolierii interne din Cadranul II este împinsă de războiul cognitiv vertical în jos, în Cadranul III al autodistrugerii din Figura 5.',
    polarity: 'neutral'
  },
  {
    id: 'puer-aeternus',
    term: 'Sindromul Puer Aeternus colectiv și statul paternalist tutelar',
    stratum: 'C',
    authors: 'Marie-Louise von Franz, 1970 · James Hillman, 1979 · Erich Neumann, 1949',
    domain: 'Psihologie analitică a culturii',
    definition: 'Structură psihică ce refuză efortul instituțional răbdător și metodic, preferând gândirea magică, așteptarea unui „salvator” providențial, apărarea maniacală a neutralității izolaționiste și dependența pasivă de un stat paternalist.',
    monographContext: 'Generează blocajul decizional strategic și paralizia instituțională a statului-țintă în momentele de criză.',
    polarity: 'tension'
  },
  {
    id: 'bifurcare-track-a-track-b',
    term: 'Bifurcarea neurocognitivă în criză: Traseul A reactiv versus Traseul B deliberativ',
    stratum: 'B',
    authors: 'Wilfred R. Bion, 1962, 1970 · Stephen W. Porges, 2011 · Julian F. Thayer și Richard D. Lane, 2009',
    domain: 'Neurobiologia deciziei și psihanaliză epistemică',
    definition: 'Model decizional care descrie opoziția, în nodul de criză acută, între bucla reactivă dezadaptativă a Traseului A — dominată de hiperactivarea amigdaliană, tunelul dopaminergic și Sistemul 1 — și Traseul deliberativ adaptativ B, susținut de integrarea neuroviscerală (Thayer & Lane, 2009), reglarea vagală (Porges, 2011), inhibiția prefrontală descendentă, capacitatea negativă de a tolera incertitudinea (Bion, 1970) și validarea în comunități epistemice deschise.',
    monographContext: 'Fundamentează neurobiologic suveranitatea decizională a cetățeanului ilustrată în Figura 6.',
    polarity: 'synthesis'
  },
  {
    id: 'prebunking-inoculare',
    term: 'Pregătirea psihocognitivă preventivă (prebunking) și teoria inoculării',
    stratum: 'B',
    authors: 'William J. McGuire, 1964 · Jon Roozenbeek și Sander van der Linden, 2019, 2022 · Hermann Ebbinghaus, 1885',
    domain: 'Psihologie experimentală și educație cognitivă',
    definition: 'Mecanism de imunizare cognitivă preventivă fundamentat pe teoria inoculării psihologice (McGuire, 1964) și operaționalizat digital drept prebunking (Roozenbeek & van der Linden, 2019, 2022), prin care populația este expusă anticipat și explicat la tiparele formale de manipulare, însoțit de sesiuni periodice de consolidare mnezică calibrate pe curba uitării (Ebbinghaus, 1885) pentru transferul discernământului în memoria procedurală de lungă durată.',
    monographContext: 'Al doilea pilon al Fazei a II-a din protocolul de reconstrucție a rezilienței.',
    polarity: 'synthesis'
  },
  {
    id: 'guvernanta-policentrica-ostrom',
    term: 'Guvernanța policentrică, acțiunea politică autonomă și autoeficacitatea percepută',
    stratum: 'A',
    authors: 'Vincent și Elinor Ostrom, 1990, 2010 · Albert Bandura, 1997',
    domain: 'Științe politice și economie instituțională',
    definition: 'Sistem instituțional în care centre multiple de decizie autonome — local, regional, național și european — cooperează și se echilibrează reciproc sub un cadru constituțional comun (Ostrom, 1990, 2010), redându-i cetățeanului capacitatea de acțiune politică autonomă (political agency) și sentimentul autoeficacității percepute (self-efficacy, Bandura, 1997).',
    monographContext: 'Depășește în Faza a III-a atât hipercentralismul birocratic, cât și fiefurile baronilor locali.',
    polarity: 'synthesis'
  },
  {
    id: 'modernitate-organica',
    term: 'Sinteza modernității organice și suveranitatea democratică',
    stratum: 'C',
    authors: 'Titu Maiorescu, 1868 · Eugen Lovinescu, 1924–1925 · Ștefan Zeletin, 1925 · Jürgen Habermas, 1992',
    domain: 'Filosofie socială și sinteză strategică',
    definition: 'Starea de maturitate istorică și instituțională în care formele constituționale, juridice și de securitate occidentale încetează să mai fie împrumuturi mimetice de suprafață și devin expresia firească a unui fond cultural, asociativ și moral autohton regenerat, unind domnia legii impersonale (patriotismul constituțional, Habermas, 1992) cu etica demnității persoanei umane.',
    monographContext: 'Rezoluția finală a monografiei și fundamentul suveranității democratice a României în secolul al XXI-lea, sintetizată în Figura 7.',
    polarity: 'synthesis'
  },
  {
    id: 'stratul-a',
    term: 'Stratul A: Arhitectura instituțională, istorică și sociologică',
    stratum: 'A',
    authors: 'Titu Maiorescu, 1868 · Niklas Luhmann, 1995, 2004 · Daron Acemoglu și James A. Robinson, 2012',
    domain: 'Sociologie instituțională și teoria sistemelor',
    definition: 'Primul palier cauzal al modelului din monografie, care analizează structura statului, gradul de închidere operațională a justiției și administrației, raportul dintre instituțiile incluzive și rețelele extractive și polarizarea sociospațială.',
    monographContext: 'Deficitele din Stratul A generează în mod determinist uzura alostatică din Stratul B și scindarea dintre Persona mimetică și Umbra colectivă din Stratul C, conform Figurii 1.',
    polarity: 'neutral'
  },
  {
    id: 'stratul-b',
    term: 'Stratul B: Procesarea neurocognitivă, semiotică și axiologică',
    stratum: 'B',
    authors: 'Bruce S. McEwen, 1998 · Robert M. Sapolsky, 2004, 2017 · John Boyd, 1987 · Vladimir Lefebvre, 1982 · Iuri Lotman, 1990',
    domain: 'Neuroștiințe cognitive și cibernetică decizională',
    definition: 'Al doilea palier cauzal al modelului, care articulează mecanismele neurobiologice ale stresului — axa HPA, amigdala bazolaterală și cortexul prefrontal — cu faza de Orientare din bucla OODA, controlul reflexiv și medierea semiotică ternară versus binară.',
    monographContext: 'Constituie interfața micro-mecanismică în care insecuritatea instituțională internă se întâlnește cu vectorii algoritmici și semiotici ai războiului cognitiv extern.',
    polarity: 'neutral'
  },
  {
    id: 'stratul-c',
    term: 'Stratul C: Inconștientul cultural și dinamica arhetipală',
    stratum: 'C',
    authors: 'Carl Gustav Jung, 1959, 1968 · Edward F. Edinger, 1972 · Singer și Kimbles, 2004 · Vamık D. Volkan, 1997',
    domain: 'Psihologie analitică postjungiană și psihosociologie',
    definition: 'Al treilea palier cauzal al arhitecturii monografice, care examinează complexele culturale, raportul dintre Persona instituțională și Umbra colectivă, starea axei Ego–Sine, traumele istorice neintegrate și arhetipurile activate în criză.',
    monographContext: 'Explică de ce capturarea cognitivă capătă forța unei conversii identitare imune la simple argumente statistice sau verificări faptice.',
    polarity: 'neutral'
  },
  {
    id: 'institutii-extractive',
    term: 'Instituții extractive și ordine socială cu acces limitat',
    stratum: 'A',
    authors: 'Daron Acemoglu și James A. Robinson, 2012 · North, Wallis și Weingast, 2009',
    domain: 'Economie politică și neoinstituționalism',
    definition: 'Aranjamente instituționale în care regulile formale ale statului de drept sunt subordonate de rețele politico-economice clientelare pentru extracția de rentă, distribuirea privilegiilor de grup și blocarea competiției meritocratice deschise.',
    monographContext: 'Generează percepția cetățeanului că statul îi este ostil sau indiferent, erodând legitimitatea democratică și deschizând calea alunecării în Cadranul III al matricei lui Cipolla.',
    polarity: 'tension'
  },
  {
    id: 'russkii-mir-etnofiletism',
    term: 'Doctrina Russkii Mir și erezia etnofiletismului',
    stratum: 'B',
    authors: 'Pantelis Kalaitzidis, 2012 · Kalaitzidis et al., 2022 · Aristotle Papanikolaou, 2012 · Cyril Hovorun, 2018',
    domain: 'Teologie politică și studiul ideologiilor',
    definition: 'Subordonarea universalității evanghelice și a demnității persoanei create după chipul divin față de naționalismul etnic și expansiunea imperială a statului rus, condamnată de Sinodul de la Constantinopol din 1872 drept erezie etnofiletistă și denunțată prin Declarația de la Volos din 2022.',
    monographContext: 'Instrumentul principal prin care vectorul moscovit parazitează semiotic religiozitatea ortodoxă și conservatorismul în România, analizat în Subcapitolul 2.2.',
    polarity: 'tension'
  },
  {
    id: 'spalare-informationala',
    term: 'Reciclarea și disimularea sursei informaționale: rețelele Doppelgänger, Matrioșka și Pravda',
    stratum: 'A',
    authors: 'Thomas Rid, 2020 · Peter Pomerantsev și Michael Weiss, 2014 · Viginum și EEAS, 2023–2024',
    domain: 'Securitate cibernetică și analiză OSINT',
    definition: 'Arhitectură transnațională de disimulare a originii ruse a narațiunilor prin site-uri clonate precum Doppelgänger, portaluri automatizate de agregare din rețeaua Pravda și roiuri de boți și microinfluenceri locali care prezintă mesajele Kremlinului drept opinii autohtone.',
    monographContext: 'Ocolește aversiunea istorică directă a românilor față de Rusia și inundă modelele AI și motoarele de căutare cu date sintetice.',
    polarity: 'tension'
  },
  {
    id: 'identificarea-cu-agresorul',
    term: 'Identificarea cu agresorul geopolitic',
    stratum: 'C',
    authors: 'Sándor Ferenczi, 1933 · Anna Freud, 1936',
    domain: 'Psihanaliză clinică și psihopolitică',
    definition: 'Mecanism de apărare inconștient prin care un subiect sau o colectivitate copleșită de angoasă existențială și de neîncredere în propriile instituții își reprimă frica față de o putere agresoare și îi adoptă discursul, atribuind culpa victimei.',
    monographContext: 'Explică paradoxul psihodinamic prin care segmente dintr-o națiune agresată istoric de Rusia ajung să justifice revizionismul Kremlinului sub masca „păcii” și a „suveranității”.',
    polarity: 'tension'
  },
  {
    id: 'grup-control-regional',
    term: 'Grupul de control regional: Estonia, Polonia și Republica Moldova',
    stratum: 'A',
    authors: 'Analiza comparativă din Subcapitolul 2.3 al monografiei',
    domain: 'Politici comparate de securitate și reziliență',
    definition: 'Metodologie comparativă care examinează trei state din flancul estic expuse aceluiași vector cognitiv rus, demonstrând că reziliența rezultă din debirocratizare digitală și pregătire preventivă în Estonia, memorie istorică instituționalizată în Polonia și sancționarea fermă a fluxurilor ilicite în Republica Moldova.',
    monographContext: 'Infirmă teza fatalității culturale și izolează variabilele instituționale interne responsabile de vulnerabilitatea României.',
    polarity: 'synthesis'
  },
  {
    id: 'sistemele-etice-lefebvre',
    term: 'Cele două sisteme etice în algebra morală a lui Vladimir Lefebvre',
    stratum: 'B',
    authors: 'Vladimir Lefebvre, 1982, 2001',
    domain: 'Psihologie matematică și teoria jocurilor',
    definition: 'Model formal care distinge între primul sistem etic — în care compromisul instituțional și cooperarea dintre părți sunt evaluate ca binele moral superior — și al doilea sistem etic, în care orice compromis este perceput drept trădare, iar confruntarea intransigentă drept virtute.',
    monographContext: 'Controlul reflexiv de rang secund urmărește comutarea cetățeanului din primul în al doilea sistem etic pentru a face imposibil dialogul democratic.',
    polarity: 'neutral'
  },
  {
    id: 'proairesis',
    term: 'Proairesis: discernământul moral și alegerea deliberată',
    stratum: 'B',
    authors: 'Aristotel · Epictet · Grigorie de Nyssa · Maxim Mărturisitorul',
    domain: 'Etică clasică, teoria deciziei și teologie patristică',
    definition: 'Capacitatea rațională și morală a subiectului de a suspenda reacția automată impulsivă și de a alege conștient între bine și rău; facultatea deliberativă prin care conștiința își exercită libertatea ontologică în fața stimulilor manipulatori.',
    monographContext: 'Constituie fundamentul etic și teologic al Traseului deliberativ adaptativ B din nodul de bifurcație, permițând dezamorsarea capturării cognitive și afirmarea demnității umane.',
    polarity: 'synthesis'
  },
  {
    id: 'cognitia-protectoare-a-identitatii',
    term: 'Procesarea defensivă motivată de protejarea identității de grup',
    stratum: 'B',
    authors: 'Dan M. Kahan, 2013, 2017',
    domain: 'Psihologie politică și știința comunicării',
    definition: 'Tendința subiecților de a procesa informațiile faptice și riscurile nu pentru a ajunge la adevărul empiric obiectiv, ci pentru a-și proteja statutul emoțional și apartenența în interiorul grupului de afinitate culturală sau ideologică.',
    monographContext: 'Transformă respingerea unui fals demonstrabil într-un act de loialitate tribală și explică eșecul campaniilor de verificare a faptelor purtate pe un ton arogant.',
    polarity: 'tension'
  },
  {
    id: 'proiectie-paranoida',
    term: 'Proiecția paranoidă a Umbrei și mecanismul țapului ispășitor',
    stratum: 'C',
    authors: 'Carl Gustav Jung, 1951 · Erich Neumann, 1949 · René Girard, 1982',
    domain: 'Psihologie analitică și antropologie politică',
    definition: 'Evacuarea conținuturilor refulate din Umbra colectivă — neputință, complicitate și corupție internă — și atribuirea lor integrală unui inamic extern sau unei minorități demonizate, percepute ca sursă unică a răului social.',
    monographContext: 'Oferă o descărcare iluzorie a tensiunii psihice, dar orbește societatea față de cauzele instituționale interne reale ale suferinței sale.',
    polarity: 'tension'
  },
  {
    id: 'functia-transcendenta',
    term: 'Funcția transcendentă și medierea simbolică pe axa Ego–Sine',
    stratum: 'C',
    authors: 'Carl Gustav Jung, 1916 · Edward F. Edinger, 1972',
    domain: 'Psihologie analitică',
    definition: 'Capacitatea psihicului de a menține tensiunea dintre poziția conștientă și conținuturile inconștiente opuse din Umbră fără a suprima niciunul dintre poli, generând o sinteză integratoare superioară.',
    monographContext: 'Mecanismul psihodinamic care permite conversia memoriei istorice defensive și a vitalității Trickster-ului în modernitate organică, conform Figurii 4.',
    polarity: 'synthesis'
  },
  {
    id: 'aparare-maniacala-izolationism',
    term: 'Apărarea maniacală și iluzia suveranității izolaționiste',
    stratum: 'C',
    authors: 'Melanie Klein, 1935, 1946 · Donald W. Winnicott, 1935 · Marie-Louise von Franz, 1970',
    domain: 'Psihanaliză și psihologie politică',
    definition: 'Fantezie defensivă de omnipotență și autosuficiență prin care o colectivitate neagă vulnerabilitatea geopolitică reală și interdependența alianțelor, refugiindu-se în mitul unei neutralități autarhice invulnerabile.',
    monographContext: 'Servește obiectivul strategic al Kremlinului de a decupla statul-țintă de garanțiile colective NATO și UE și de a-l izola în bilateralism asimetric.',
    polarity: 'tension'
  },
  {
    id: 'capacitate-negativa-bion',
    term: 'Capacitatea negativă și grupul de lucru',
    stratum: 'B',
    authors: 'Wilfred R. Bion, 1961, 1962, 1970 · John Keats, 1817',
    domain: 'Psihanaliză epistemică și dinamica grupurilor',
    definition: 'Aptitudinea aparatului psihic și a unui grup matur de lucru de a tolera temporar incertitudinea, frustrarea și ambiguitatea fără a aluneca în explicații paranoide premature sau în ipotezele de bază regresive de dependență ori luptă-sau-fugi.',
    monographContext: 'Condiția decisivă în nodul de bifurcație pentru activarea Traseului deliberativ B în criză acută, ilustrată în Figura 6.',
    polarity: 'synthesis'
  },
  {
    id: 'protocolul-secvential-trei-faze',
    term: 'Protocolul secvențial obligatoriu în trei faze',
    stratum: 'A',
    authors: 'Marc Lalonde, 1974 · G. E. Alan Dever, 1976 · Bruce S. McEwen, 1998 · Brendan Nyhan și Jason Reifler, 2010',
    domain: 'Arhitectură strategică de reziliență societală',
    definition: 'Ordinea cauzală strictă a reconstrucției rezilienței pe determinanții sistemici Lalonde–Dever: Faza I de decompresie alostatică și igienă algoritmică (0–12 luni), Faza II de validare comunitară, pregătire preventivă și filtru moral (1–3 ani) și Faza III de închidere operațională, policentricitate și individuare colectivă (3–10 ani).',
    monographContext: 'Demonstrează de ce inversarea ordinii fazelor — lansarea de campanii de educație mediatică fără decompresie alostatică prealabilă — eșuează prin efectul de bumerang și întărirea paradoxală a convingerii (backfire effect, Nyhan & Reifler, 2010).',
    polarity: 'synthesis'
  },
  {
    id: 'curba-uitarii-ebbinghaus',
    term: 'Curba uitării a lui Ebbinghaus și consolidarea mnezică spațiată',
    stratum: 'B',
    authors: 'Hermann Ebbinghaus, 1885 · Jon Roozenbeek și Sander van der Linden, 2022',
    domain: 'Psihologia memoriei și pregătire psihocognitivă preventivă',
    definition: 'Lege psihocognitivă care arată că reziliența cognitivă dobândită printr-o singură sesiune de pregătire preventivă se erodează exponențial în timp dacă nu este reactivată prin sesiuni periodice de consolidare mnezică calibrate pe curba uitării.',
    monographContext: 'Impune proiectarea programelor educaționale din Faza a II-a ca antrenament recurent pentru transferul discernământului în memoria procedurală.',
    polarity: 'synthesis'
  },
  {
    id: 'individuare-colectiva',
    term: 'Individuarea colectivă și reconcilierea fondului cu forma',
    stratum: 'C',
    authors: 'Carl Gustav Jung, 1928 · Edward F. Edinger, 1972 · Alexander și Margarete Mitscherlich, 1967',
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
  { id: 'bib-36b', authors: 'Girard, R.', year: '1982', title: 'Le Bouc émissaire', publication: 'Grasset', fullCitation: 'Girard, R. (1982). Le Bouc émissaire. Grasset.', domain: 'Psihologie analitică și memorie' },
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
  { id: 'bib-53b', authors: 'Kligman, G., & Verdery, K.', year: '2011', title: 'Peasants under siege: The collectivization of Romanian agriculture, 1949–1962', publication: 'Princeton University Press', fullCitation: 'Kligman, G., & Verdery, K. (2011). Peasants under siege: The collectivization of Romanian agriculture, 1949–1962. Princeton University Press.', domain: 'Sociologie instituțională' },
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
  { id: 'bib-64b', authors: 'McEwen, B. S., & Stellar, E.', year: '1993', title: 'Stress and the individual: Mechanisms leading to disease', publication: 'Archives of Internal Medicine, 153(18), 2093–2101', fullCitation: 'McEwen, B. S., & Stellar, E. (1993). Stress and the individual: Mechanisms leading to disease. Archives of Internal Medicine, 153(18), 2093–2101.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-65', authors: 'McEwen, B. S.', year: '1998', title: 'Protective and damaging effects of stress mediators', publication: 'New England Journal of Medicine, 338(3), 171–179', fullCitation: 'McEwen, B. S. (1998). Protective and damaging effects of stress mediators. New England Journal of Medicine, 338(3), 171–179.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-66', authors: 'McGuire, W. J.', year: '1964', title: 'Inducing resistance to persuasion: Some contemporary approaches', publication: 'Advances in experimental social psychology (Vol. 1, pp. 191–229)', fullCitation: 'McGuire, W. J. (1964). Inducing resistance to persuasion: Some contemporary approaches. In L. Berkowitz (Ed.), Advances in experimental social psychology (Vol. 1, pp. 191–229). Academic Press.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-66b', authors: 'Menon, V.', year: '2011', title: 'Large-scale brain networks and psychopathology: A unifying triple network model', publication: 'Trends in Cognitive Sciences, 15(10), 483–506', fullCitation: 'Menon, V. (2011). Large-scale brain networks and psychopathology: A unifying triple network model. Trends in Cognitive Sciences, 15(10), 483–506.', domain: 'Neuroștiințe și psihobiologie' },
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
  { id: 'bib-80b', authors: 'Rid, T.', year: '2020', title: 'Active measures: The secret history of disinformation and political warfare', publication: 'Farrar, Straus and Giroux', fullCitation: 'Rid, T. (2020). Active measures: The secret history of disinformation and political warfare. Farrar, Straus and Giroux.', domain: 'Cibernetică și semiotică' },
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
  { id: 'bib-93a', authors: 'Stanovich, K. E.', year: '2009', title: 'What intelligence tests miss: The psychology of rational thought', publication: 'Yale University Press', fullCitation: 'Stanovich, K. E. (2009). What intelligence tests miss: The psychology of rational thought. Yale University Press.', domain: 'Neuroștiințe și psihobiologie' },
  { id: 'bib-93b', authors: 'Sterling, P., & Eyer, J.', year: '1988', title: 'Allostasis: A new paradigm to explain arousal pathology', publication: 'Handbook of life stress, cognition and health (pp. 629–649), John Wiley & Sons', fullCitation: 'Sterling, P., & Eyer, J. (1988). Allostasis: A new paradigm to explain arousal pathology. In S. Fisher & J. Reason (Eds.), Handbook of life stress, cognition and health (pp. 629–649). John Wiley & Sons.', domain: 'Neuroștiințe și psihobiologie' },
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
  { id: 'bib-106b', authors: 'Zubarevich, N.', year: '2011', title: 'Four Russias: Rethinking the post-Soviet map', publication: 'Russian Politics & Law, 50(4), 7–18', fullCitation: 'Zubarevich, N. (2011). Four Russias: Rethinking the post-Soviet map. Russian Politics & Law, 50(4), 7–18.', domain: 'Geopolitică și ideologie rusă' },
  { id: 'bib-107', authors: 'Zuboff, S.', year: '2019', title: 'The age of surveillance capitalism: The fight for a human future at the new frontier of power', publication: 'PublicAffairs', fullCitation: 'Zuboff, S. (2019). The age of surveillance capitalism: The fight for a human future at the new frontier of power. PublicAffairs.', domain: 'Cibernetică și semiotică' }
];

export const MASTER_STYLE_PROMPT = `Creează o experiență video în modul Cinematic urmând o rigoare academică strictă (temperatură 0.3: ton analitic, sobru, calm, clinic, fără speculații sau metafore gratuite). Nu menționa și nu afișa niciun fel de date statistice, procente sau scoruri numerice; explică toate ideile exclusiv ca dinamici structurale și cauzale. Structurează prezentarea progresiv, dublând fiecare concept teoretic cu explicația sa practică/empirică, de la definirea cadrului sistemic și a blocajelor până la sinteza și soluția finală.

Regulă vizuală obligatorie: Folosește exclusiv un stil de ilustrație editorială 2D / gravură vectorială curată și diagrame de sistem pe un fundal alb-crem cald texturat (#F6F5EE). Toate liniile, contururile și textul principal vor fi în negru-cărbune (#222426) și nuanțe de gri-ardezie (#6E7376, #8C9BA5). Folosește strict galben-muștar (#E5B822) ca accent pentru concepte-cheie, sinteză și soluții, și roșu-vermilion (#F01E1E) exclusiv pentru tensiuni, crize sau bucle de blocaj. Interzis să folosești alte culori, efecte 3D sau desene de tip whiteboard.`;

export const CHAPTER_EXECUTIVE_SUMMARIES: ChapterExecutiveSummary[] = [
  {
    chapterNumber: 0,
    chapterTitle: 'Introducere',
    executiveSynthesis: [
      {
        id: 'exec-0-1',
        title: 'Mecanismul diagnosticat: Al șaselea domeniu operațional',
        takeaway:
          'Războiul cognitiv depășește propaganda informațională punctuală, vizând alterarea arhitecturii de procesare a realității și paralizia capacității decizionale sub pragul articolului 5 al NATO.',
        implication:
          'Apărarea națională nu se mai poate limita la securizarea infrastructurii fizice și cibernetice, ci trebuie să protejeze integritatea proceselor cognitive și a încrederii constituționale.'
      },
      {
        id: 'exec-0-2',
        title: 'Vulnerabilitatea sistemică: Cauzalitatea recursivă pe trei straturi',
        takeaway:
          'Operațiunile ostile se grefează simultan pe falii și vulnerabilități preexistente din trei paliere: instituțiile extractive în Stratul A, rezerva neurocognitivă epuizată de stres în Stratul B și complexele culturale neintegrate în Stratul C.',
        implication:
          'Campaniile izolate de comunicare strategică sau verificare a faptelor eșuează inevitabil dacă ignoră cauzele instituționale și neurobiologice ale vulnerabilității.'
      },
      {
        id: 'exec-0-3',
        title: 'Decizia strategică: Abordarea sistemică integrată',
        takeaway:
          'Reziliența societală impune tratarea sincronizată a determinanților instituționali, informaționali, asociativi și neurobiologici într-o ordine cauzală strictă.',
        implication:
          'Instituțiile de securitate și de politici publice trebuie să acționeze coordonat după un model unificat care leagă reforma statului de igiena spațiului digital și de coeziunea socială.'
      }
    ]
  },
  {
    chapterNumber: 1,
    chapterTitle: 'Capitolul 1: Vulnerabilitățile structurale ale societății românești și eroziunea rezilienței endogene',
    executiveSynthesis: [
      {
        id: 'exec-1-1',
        title: 'Mecanismul diagnosticat: Forme fără fond și uzură alostatică',
        takeaway:
          'Deficitul de închidere operațională, instituțiile extractive și polarizarea sociospațială induc uzură alostatică cronică, hiperactivând amigdala și inhibând cortexul prefrontal dorsolateral.',
        implication:
          'Insecuritatea cotidiană și umilința birocratică epuizează biologic capacitatea cetățeanului de a procesa analitic informația prin Sistemul 2 înainte de contactul cu propaganda externă.'
      },
      {
        id: 'exec-1-2',
        title: 'Vulnerabilitatea sistemică: Familism amoral și hiperconectivitatea diasporei',
        takeaway:
          'Distrugerea capitalului social de punte prin replierea în familism amoral, secesiunea păturilor urbane prospere și imersiunea algoritmică a diasporei pe platformele de clipuri video scurte creează bule informaționale închise la scară transnațională.',
        implication:
          'Faliile demografice și trauma dezrădăcinării oferă vectorilor de control reflexiv de rang secund suprafețe directe de cuplare emoțională și mobilizare antisistem.'
      },
      {
        id: 'exec-1-3',
        title: 'Decizia strategică: Debirocratizarea ca securitate cognitivă',
        takeaway:
          'Reducerea stresului alostatic prin servicii publice echitabile, predictibilitate fiscală și digitalizare transparentă, după modelul e-Estonia, este precondiția neurobiologică a oricărei reziliențe.',
        implication:
          'Guvernul și administrația publică trebuie să trateze calitatea interacțiunii dintre cetățean și stat drept pilonul primar al apărării în al șaselea domeniu operațional.'
      }
    ]
  },
  {
    chapterNumber: 2,
    chapterTitle: 'Capitolul 2: Arhitectura ideologiei putiniste și camuflajul discursiv suveranist',
    executiveSynthesis: [
      {
        id: 'exec-2-1',
        title: 'Mecanismul diagnosticat: Antilumea, starea Bobok și dubla falsificare',
        takeaway:
          'Regimul cleptocratic rus funcționează prin inversiunea normativă a Antilumii și cinismul transgresiv al stării Bobok, camuflate la export sub masca apărării tradiției și a suveranității.',
        implication:
          'Pentru a ocoli rusofobia istorică a românilor, vectorul ostil parazitează semiotic codurile identitare autohtone prin rețele de reciclare și disimulare a sursei informaționale.'
      },
      {
        id: 'exec-2-2',
        title: 'Vulnerabilitatea sistemică: Rețele paraecleziale și contagiune complexă',
        takeaway:
          'Erezia etnofiletistă Russkii Mir și falsul suveranism izolaționist se propagă prin nuclee informale paraecleziale, canale de Telegram și microinfluenceri, utilizând contagiunea socială complexă.',
        implication:
          'Religiozitatea ritualistă de fațadă și nemulțumirea față de impostura elitelor locale sunt deturnate prin proiecție paranoidă și identificare cu agresorul împotriva UE și NATO.'
      },
      {
        id: 'exec-2-3',
        title: 'Decizia strategică: Modelul grupului de control regional și parteneriatul axiologic',
        takeaway:
          'Comparația cu Estonia, Polonia și Republica Moldova demonstrează că reziliența rezultă din sancționarea fluxurilor ilicite, memoria istorică instituționalizată și apărarea antropologiei patristice a persoanei.',
        implication:
          'Autoritățile trebuie să destructureze rețelele financiare de reciclare și disimulare a sursei informaționale și să susțină dialogul dintre cultura constituțională și teologia ortodoxă canonică.'
      }
    ]
  },
  {
    chapterNumber: 3,
    chapterTitle: 'Capitolul 3: Mecanismul capturării cognitive și colonizarea deciziei în al șaselea domeniu operațional',
    executiveSynthesis: [
      {
        id: 'exec-3-1',
        title: 'Mecanismul diagnosticat: Colonizarea fazei de Orientare OODA și semioza binară',
        takeaway:
          'Controlul reflexiv de rang secund țintește faza de Orientare din bucla OODA, comutând cetățeanul din primul sistem etic al cooperării în al doilea sistem etic al confruntării și al logicii binare a anihilării.',
        implication:
          'Odată alterată matricea de Orientare, cetățeanul respinge spontan verificările faptice pentru a-și proteja identitatea și statutul în interiorul grupului de apartenență.'
      },
      {
        id: 'exec-3-2',
        title: 'Vulnerabilitatea sistemică: Capturarea dopaminergică și poluarea cu date sintetice',
        takeaway:
          'Algoritmii de retenție exploatează mecanismul neurochimic al erorii de predicție a recompensei în nucleul accumbens prin recompense variabile intermitente, în timp ce rețelele Doppelgänger, Matrioșka și Pravda poluează modelele AI și motoarele de căutare cu date sintetice.',
        implication:
          'Se creează o buclă de retroacțiune epistemică om–mașină în care suprimarea latenței prefrontale și contaminarea infrastructurii digitale blochează deliberarea democratică.'
      },
      {
        id: 'exec-3-3',
        title: 'Decizia strategică: Audit algoritmic și pași tehnici de încetinire a viralității',
        takeaway:
          'Restabilirea latenței temporale pentru Sistemul 2 necesită dezactivarea amplificării algoritmice a indignării morale și etichetarea criptografică a datelor sintetice.',
        implication:
          'ANCOM și DNSC, în coordonare cu Comisia Europeană în baza regulamentelor DSA și AI Act, trebuie să impună audituri algoritmice și frâne de viralitate în perioadele de criză.'
      }
    ]
  },
  {
    chapterNumber: 4,
    chapterTitle: 'Capitolul 4: Polarizarea socială, proiecția Umbrei colective și vulnerabilitatea la manipulare',
    executiveSynthesis: [
      {
        id: 'exec-4-1',
        title: 'Mecanismul diagnosticat: Enantiodromia suveranistă și proiecția Umbrei',
        takeaway:
          'Saturația față de Persona instituțională mimetică declanșează legea enantiodromiei, răsturnând conformismul prooccidental de fațadă în respingerea radicală a ordinii constituționale.',
        implication:
          'Conținuturile neintegrate din Umbra colectivă sunt evacuate prin proiecție paranoidă asupra unui „persecutor extern”, mascând responsabilitatea rețelelor extractive interne.'
      },
      {
        id: 'exec-4-2',
        title: 'Vulnerabilitatea sistemică: Alunecarea în Cadranul III al matricei lui Cipolla',
        takeaway:
          'Sub presiunea actorilor extractivi din Cadranul IV (+X, -Y) și pe fondul barierei instituționale fisurate, cetățeanul vulnerabil din Cadranul II (-X, +Y) este împins de războiul cognitiv în Cadranul III al autosabotajului colectiv (-X, -Y).',
        implication:
          'Conform celei de-a treia legi fundamentale a lui Cipolla, Cadranul III este mai periculos decât Cadranul IV deoarece sfidează raționalitatea utilitaristă, transformând victima în agentul propriei sale ruine.'
      },
      {
        id: 'exec-4-3',
        title: 'Decizia strategică: Activarea celor trei filtre de conversie în modernitate organică',
        takeaway:
          'Resursele latente din Umbra colectivă — memoria istorică defensivă și vitalitatea adaptativă a arhetipului Trickster-ului — nu trebuie reprimate arogant, ci convertite prin funcția transcendentă.',
        implication:
          'Statul trebuie să activeze cele trei filtre structurale: legea impersonală dreaptă în Stratul A, discernământul critic și vigilența metacognitivă în Stratul B, pentru a readuce societatea în Cadranul I (+X, +Y).'
      }
    ]
  },
  {
    chapterNumber: 5,
    chapterTitle: 'Capitolul 5: Comportamentul decizional în criză acută: Matricea lui Cipolla și bifurcația neurocognitivă',
    executiveSynthesis: [
      {
        id: 'exec-5-1',
        title: 'Mecanismul diagnosticat: Sindromul Puer Aeternus și apărarea maniacală',
        takeaway:
          'În momentele de criză strategică, activarea arhetipului Puer Aeternus alimentează așteptarea magică a unui „salvator” providențial și iluzia neutralității izolaționiste.',
        implication:
          'Nostalgia după dependența pasivă de un stat paternalist tutelar paralizează voința politică și capacitatea de descurajare strategică a statului-țintă.'
      },
      {
        id: 'exec-5-2',
        title: 'Vulnerabilitatea sistemică: Bifurcația dintre Traseul A reactiv și Traseul B deliberativ',
        takeaway:
          'Sub șoc informațional acut, absența reglării prefrontale deviază procesarea pe Traseul reactiv A — bucla amigdaliană, tunelul dopaminergic și contagiunea fricii — blocând Traseul deliberativ adaptativ B.',
        implication:
          'Pe Traseul A, corpul electoral și instituțiile intră în paralizie decizională fără tragerea unui singur foc de armă, îndeplinind obiectivul terminal al războiului cognitiv.'
      },
      {
        id: 'exec-5-3',
        title: 'Decizia strategică: Capacitatea negativă și validarea în comunități deschise',
        takeaway:
          'Comutarea pe Traseul deliberativ B depinde de reglarea descendentă exercitată de cortexul prefrontal, de tonusul vagal și de capacitatea negativă de a tolera incertitudinea fără reacții paranoide premature.',
        implication:
          'Liderii instituționali trebuie să practice o comunicare calmă, predictibilă și verificabilă probatoriu, care să ancoreze cetățenii în regimul grupului de lucru și al medierii ternare.'
      }
    ]
  },
  {
    chapterNumber: 6,
    chapterTitle: 'Capitolul 6: Protocolul secvențial de reconstrucție a rezilienței cognitive societale',
    executiveSynthesis: [
      {
        id: 'exec-6-1',
        title: 'Mecanismul diagnosticat: Secvențialitatea cauzală obligatorie pe modelul Lalonde–Dever',
        takeaway:
          'Protocolul de reconstrucție trebuie executat strict secvențial: Faza I de decompresie alostatică și igienă digitală (0–12 luni), Faza II de validare comunitară și pregătire preventivă (1–3 ani) și Faza III de închidere operațională și policentricitate (3–10 ani).',
        implication:
          'Inversarea fazelor — lansarea de campanii de educație mediatică peste o populație aflată în uzură alostatică și capturare algoritmică — provoacă efectul de bumerang (întărirea paradoxală a convingerii — backfire effect) și adâncește polarizarea.'
      },
      {
        id: 'exec-6-2',
        title: 'Vulnerabilitatea sistemică: Erodarea rezilienței pe curba uitării și hipercentralismul',
        takeaway:
          'Reziliența cognitivă dobândită printr-o singură sesiune de pregătire preventivă se erodează pe curba uitării a lui Ebbinghaus, iar hipercentralismul birocratic sau fiefurile clientelare mențin neputința învățată.',
        implication:
          'Fără consolidare mnezică periodică și fără descentralizare policentrică menită să redea capacitatea de acțiune politică autonomă și autoeficacitatea percepută, societatea rămâne vulnerabilă la recidive autoritare.'
      },
      {
        id: 'exec-6-3',
        title: 'Decizia strategică: Operaționalizarea instituțională și sinteza modernității organice',
        takeaway:
          'Articularea responsabilităților între DNSC, ANCOM, CSAT, CNA, Ministerul Educației, Biserica Ortodoxă Română, universități și administrația locală unește legea impersonală dreaptă cu etica demnității persoanei.',
        implication:
          'Sinteza modernității organice rezolvă definitiv anomalia istorică a „formelor fără fond”, transformând România într-un pilon de suveranitate democratică în NATO și Uniunea Europeană.'
      }
    ]
  }
];

export const OPERATIONAL_PROTOCOL_TABLE: InstitutionalProtocolRow[] = [
  {
    id: 'op-faza-1',
    phaseCode: 'Faza I',
    phaseTitle: 'Decompresia alostatică, interdicția financiară Follow the Money și încetinirea tehnică a viralității',
    horizon: 'Fereastra tactică imediată: 0–72 ore în criză acută · 0–12 luni structural',
    targetObjective:
      'Oprirea buclei reactive dezadaptative a Traseului A, scăderea hipercortizolemiei bazale pe axa HPA, întreruperea capturării dopaminergice în nucleul accumbens și blocarea fluxurilor financiare și criptografice ale operațiunilor informaționale.',
    concreteIntervention:
      'Cuplarea sistematică a Ordinelor de eliminare a conținutului ilegal (art. 9 din DSA / art. 7 din Legea nr. 50/2024) cu Ordinele obligatorii de furnizare a informațiilor financiare și a identității plătitorilor (art. 10 din DSA) transmise către VLOPs prin punctul unic de contact ANCOM; verificarea codului unic al mandatarului financiar (CMF) și blocarea publicității politice nemarcate sau finanțate din țări terțe prin AEP și BEC (Legea nr. 334/2006, O.U.G. nr. 1/2025 și Regulamentul UE 2024/900 TTPA, art. 13, 15 și 17); înghețarea operativă în timp real a tranzacțiilor suspecte și blocarea conversiilor cripto off-ramp prin ONPCSB, BNR și ASF în temeiul art. 33 și art. 34 din Legea nr. 129/2019 (blocare de drept 24h și suspendare ONPCSB 48–72h, interogarea automată a registrului BARIS conform Legii nr. 86/2025, aplicarea O.U.G. nr. 10/2025 / Regulamentului MiCA 2023/1114 și a Regulamentului TFR 2023/1113 – Travel Rule, urmate de sesizarea PICCJ pentru sechestru asigurător); standardizarea probatorie a detecției de către DNSC și hub-ul regional EDMO/BROD în format STIX și maparea pe matricea DISARM; comunicare strategică de decompresie alostatică bazată pe principiile CDC CERC și debirocratizare digitală după modelul e-Estonia.',
    responsibleActors:
      'ANCOM în calitate de Coordonator al Serviciilor Digitale (DSC, Legea nr. 50/2024), DNSC, AEP și BEC, ONPCSB, BNR, ASF și PICCJ, celulele de criză din CSAT, MAI și MApN, în coordonare directă cu Comisia Europeană și European Digital Media Observatory (EDMO / hub-ul regional BROD).'
  },
  {
    id: 'op-faza-2',
    phaseCode: 'Faza II',
    phaseTitle: 'Pregătirea psihocognitivă preventivă, validarea comunitară și reconcilierea morală',
    horizon: 'Orizont operațional mediu: 1–3 ani',
    targetObjective:
      'Reconstrucția fazei de Orientare din bucla OODA, comutarea stabilă pe Traseul deliberativ adaptativ B și neutralizarea dublei falsificări axiologice a doctrinei Russkii Mir.',
    concreteIntervention:
      'Auditarea independentă a algoritmilor de recomandare de către cercetătorii agreați (art. 40 din DSA) și sesizarea timpurie a manipulării prin notificatorii de încredere certificați; campanii naționale de pregătire psihocognitivă preventivă cu sesiuni periodice de consolidare mnezică calibrate pe curba uitării a lui Ebbinghaus; refacerea infrastructurii asociative de proximitate pentru contagiune complexă pozitivă și parteneriat civic–teologic întemeiat pe principiul Imago Dei și discernământul moral.',
    responsibleActors:
      'ANCOM (DSC), Consiliul Național al Audiovizualului (CNA), DNSC, Comisia Europeană, hub-ul regional EDMO/BROD, cercetătorii agreați și notificatorii de încredere certificați, mass-media de interes public și ierarhia canonică alături de facultățile de teologie.'
  },
  {
    id: 'op-faza-3',
    phaseCode: 'Faza III',
    phaseTitle: 'Închiderea operațională a statului de drept, isonomia fiscală, guvernanța policentrică și auditul dublu',
    horizon: 'Orizont strategic: 3–10 ani',
    targetObjective:
      'Eliminarea rădăcinii istorice a „formelor fără fond”, consolidarea barierei instituționale în matricea lui Cipolla prin arhitectura alegerii (Thaler & Sunstein) pentru atragerea în Cadranul I al cooperării inteligente și susținerea instituțională a patriotismului constituțional matur.',
    concreteIntervention:
      'Eliminarea numirilor temporare discreționare în funcțiile publice (art. 509–510 din Codul administrativ – O.U.G. nr. 57/2019); reforma de lege ferenda a art. 182 și art. 281 din Legea nr. 207/2015 privind Codul de procedură fiscală („penalizarea în oglindă a statului” și isonomia fiscală): calculul și virarea automată, din oficiu, prin Trezoreria Statului, în același ordin de plată IBAN, a dobânzilor și penalităților în oglindă pentru întârzierea rambursării TVA (art. 169 CPF), a decontării concediilor medicale din FNUASS (art. 40 O.U.G. nr. 158/2005) sau a facturilor din e-Factura (Legea nr. 72/2013), înlăturând asimetria din O.G. nr. 22/2002 și Decizia ÎCCJ RIL nr. 24/2025, alături de răspunderea solidară a funcționarilor (art. 281 CPF, art. 499–500 Codul administrativ și Decizia CCR nr. 694/2015); reforma guvernanței cooperativelor agricole (Legea nr. 566/2004, art. 16 și art. 76: director executiv recrutat competitiv, interdicția rudelor și afinilor până la gradul al III-lea ai administratorului, filtre de integritate și protejarea rambursărilor de TVA) pentru reconstrucția capitalului social de punte (Putnam, 2000); mecanism dublu de audit periodic independent: Auditul public extern al performanței realizat bienal de Curtea de Conturi a României (art. 2 lit. b și art. 28 alin. 2 din Legea nr. 94/1992) asupra creditelor de angajament multianuale (Legea nr. 500/2002) și Auditul științific și civic independent realizat de consorțiile universitare acreditate ca „cercetători agreați” (art. 40 DSA / EDMO / grilele DigComp, KAVI și simulările Serious Games).',
    responsibleActors:
      'Parlamentul României, Ministerul Finanțelor și Trezoreria Statului, Curtea de Conturi a României, sistemul judiciar și administrativ, Ministerul Educației, consorțiile universitare acreditate (cercetători agreați conform art. 40 DSA / EDMO), cooperativele agricole și administrația publică locală.'
  }
];


