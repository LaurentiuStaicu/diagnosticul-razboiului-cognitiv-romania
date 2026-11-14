# Ghid de Identitate Vizuală, Tipografică și Editorială (Specificație Tehnică Internă)

Acest document păstrează în depozitul GitHub toate regulile de design, tipografie, construcție a diagramelor vectoriale SVG (`Figurile 1–7` și viitoarele figuri) și normele logico-terminologice și bibliografice ale aplicației **Diagnosticul războiului cognitiv în România**. El servește drept referință obligatorie la adăugarea sau modificarea unei Figuri ori a textului din monografie.

---

## 1. Paleta cromatică obligatorie (Stil Gravură Vectorială 2D / Editorial Arhivistic)

Aplicația și toate diagramele SVG folosesc exclusiv următoarea paletă de 5 tokenuri cromatice definite în `src/index.css`:

| Rol vizual și semantic | Cod HEX | Variabilă CSS / Utilizare | Reguli de aplicare |
| :--- | :--- | :--- | :--- |
| **Fundal principal (Canvas)** | `#F6F5EE` | `--canvas-primary` / `bg-[#F6F5EE]` | Alb-crem cald cu textură editorială discretă (`radial-gradient` la `24px`). Folosit ca fundal unic pentru pagină, casete, tabele și pânza SVG. |
| **Structură și tipografie (Cerneală)** | `#222426` | `--ink-primary` / `text-[#222426]`, `border-[#222426]` | Negru-cărbune pentru textul principal, titluri, chenare structurale primare (`1px` sau `2px`), axe carteziene și săgeți neutre. |
| **Context, metadate și delimitări** | `#6E7376` / `#8C9BA5` | `--slate-dark` / `--slate-mid` | Gri-ardezie închis (`#6E7376`) pentru etichete secundare, subtitluri tehnice și note metodologice; gri-ardezie mediu (`#8C9BA5`) pentru grile de fundal SVG, separatoare interioare și borduri inactive. |
| **Claritate, filtrare și sinteză** | `#E5B822` | `--accent-synthesis` / `bg-[#E5B822]` | Galben-muștar (întotdeauna conturat cu `#222426` pentru lizibilitate maximă). Rezervat strict pentru filtre morale/constituționale, primul sistem etic, Traseul deliberativ B, puntea de coreglare CERC, Cadranul I (+X, +Y), protocolul de reconstrucție și butoanele de acțiune primară. |
| **Tensiune, vulnerabilitate și blocaj** | `#F01E1E` | `--accent-tension` / `text-[#F01E1E]`, `border-[#F01E1E]` | Roșu-vermilion. Rezervat strict pentru puncte de presiune, uzură alostatică, parazitare semiotică, al doilea sistem etic, bucla reactivă Track A, barajul extractiv, planșeul fisurat și Cadranul III (-X, -Y). |

**Interdicții cromatice și stilistice**:
- Nu se folosesc alte culori (albastru, verde, violet, portocaliu etc.), gradienți decorativi, umbre (`box-shadow` / `drop-shadow`), colțuri rotunjite (`rounded-*` în CSS sau `rx > 0` pe casetele structurale din SVG) sau efecte 3D.

---

## 2. Tipografie și Sistemul de Fonturi (`src/index.css`, `index.html`)

- **Ierarhia tipografică pe 3 familii de fonturi** (încărcate din Google Fonts în `index.html` cu suport complet pentru diacritice românești `latin-ext`):
  - `--font-serif: "Newsreader", Georgia, Cambria, serif;` -> aplicat pe toate titlurile de capitole/subcapitole (`H1`, `H2`, `H3`), pe paragrafele narative ale monografiei și pe citatele verbatim;
  - `--font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;` -> aplicat pe navigație, butoane, tabele, glosar și etichetele nodurilor din interiorul diagramelor SVG (`svg text`);
  - `--font-mono: "JetBrains Mono", monospace;` -> aplicat pe indicatorii de pas (`PASUL 01 / 19`), antetele tehnice ale planșelor (`FIGURA 01`), coordonatele matematice `(+X, +Y)` și codurile de strat (`STRATUL A`, `STRATUL B`, `STRATUL C`), cu `font-variant-numeric: tabular-nums`.
- **Parametrii de lectură ai textului monografic (`src/App.tsx`)**:
  - Corpul textului integral: `font-serif text-[17px] sm:text-[18px] text-[#222426] leading-[1.75] max-w-[72ch] space-y-6`.
  - Primul paragraf al fiecărei secțiuni are letrină editorială (`first-letter:text-4xl first-letter:font-bold first-letter:float-left`).
  - Titlurile majore folosesc clasa `.headline-balance` (`text-wrap: balance`).

---

## 3. Reguli de Proiectare pentru Crearea sau Modificarea unei Figuri (`src/components/InteractiveFigures.tsx`)

Atunci când se modifică o diagramă existentă sau se adaugă o nouă Figură vectorială 2D:

1. **Structura pânzei SVG**:
   - Atribut `viewBox` explicit (de ex. `viewBox="0 0 960 620"` sau `viewBox="0 0 980 680"`), `className="w-full h-auto block"`.
   - Fundal compus din două dreptunghiuri de bază:
     - `<rect x="0" y="0" width="..." height="..." fill="#F6F5EE" />`
     - `<rect x="0" y="0" width="..." height="..." fill="url(#figX-grid)" />` (pattern de puncte cu `r="0.75"`, `fill="#8C9BA5"`, `opacity="0.35"`).
2. **Geometria casetelor și absența elementelor decorative inutile**:
   - Casetele de noduri sunt dreptunghiuri ortogonale (`rx="0"`), cu `stroke="#222426"` (sau `#F01E1E` pentru nodurile de patologie/blocaj) și `strokeWidth="1.75"`–`"2.5"`.
   - **Nu se adaugă figuri geometrice decorative inutile** (romburi, triunghiuri etc.) în interiorul casetelor de text; singurele forme non-dreptunghiulare permise sunt simbolurile convenționale de diagramă de sistem atunci când au rol topologic autonom (de ex. nodul de bifurcație sau cercul buclei de feedback `R`).
3. **Încadrarea textului în casete (Prevenirea depășirii chenarului)**:
   - Lățimea fiecărui `<rect>` trebuie calibrată la lungimea reală a șirului în limba română (calculând aproximativ `6.2px`–`7.5px` per caracter pentru `fontSize="11"`–`"13"` bold în fontul `Inter`, plus minimum `24px`–`32px` padding orizontal total).
   - Textul centrat în casetă folosește `textAnchor="middle"` cu `x` egal exact cu centrul dreptunghiului (`rect.x + rect.width / 2`).
4. **Săgeți și orientare cauzală**:
   - Săgețile trebuie să indice întotdeauna sensul real al acțiunii cauzale (de ex. de la vectorul parazitar / spoliator către țintă sau de la filtrul de conversie către rezultat).
   - Se definesc markere SVG dedicate (`markerWidth="6.5"`, `markerHeight="6.5"`, `refX="8"`, `refY="5"`, `orient="auto-start-reverse"`):
     - Negru (`#222426`) pentru fluxuri structurale,
     - Roșu (`#F01E1E`) pentru fluxuri patologice / deturnare / prăbușire,
     - Galben-muștar (`#E5B822` cu contur `#222426` sau linie dublă `#222426` + `#E5B822`) pentru trasee de reziliență și sinteză.
5. **Arhitectura interactivă a fiecărei Figuri**:
   - Bara superioară cu **comutatorul de regim / scenariu** (2 butoane în contrast: starea vulnerabilă/patologică vs. starea de reziliență/conversie).
   - Noduri SVG clicabile (`onClick`, `className="cursor-pointer"`), cu contur evidențiat atunci când nodul este selectat.
   - Bara inferioară de **butoane numerotate** pentru toate nodurile figurii (sincronizate cu clicurile din SVG).
   - **Caseta explicativă de sub SVG** (`bg-[#F6F5EE] border-t border-[#222426] p-3.5`), care afișează explicația analitică detaliată a nodului selectat.
   - Înregistrarea figurii în `FIGURE_METADATA` (`title`, `subtitle`, `chapterRef`, `caption`, `methodologicalNote`) și în `scripts/generate-og-share-pages.mjs`.

---

## 4. Reguli Editoriale, Lingvistice și Bibliografice pentru Modificarea Textului

La editarea sau extinderea fișierelor de date (`src/data/chaptersPart1.ts`, `src/data/chaptersPart2.ts`, `src/data/tablesAndReference.ts`, `src/components/ContextualTooltip.tsx`):

1. **Conservarea densității teoretice, juridice și empirice**:
   - Textul monografiei nu se rezumă și nu se trunchiază. Toate referințele legislative (de ex. `Legea nr. 50/2024`, `DSA`, `Regulamentul (UE) 2024/900 – TTPA`, `O.U.G. nr. 1/2025`, `Legea nr. 129/2019`, `O.U.G. nr. 10/2025`, `MiCA`, `art. 182` și `art. 281 CPF`, `Decizia CCR nr. 694/2015`, `art. 499–500 Codul administrativ`, `Legea nr. 566/2004`) se păstrează cu exactitate.
2. **Igiena tipografică și terminologică în limba română**:
   - **Ghilimele**: se utilizează exclusiv ghilimelele românești jos-sus (`„...”`). Ghilimelele franțuzești (`«...»`) sau drepte (`"..."`) în interiorul prozei afișate sunt interzise.
   - **Puritate lexicală (DEX)**:
     - Se folosește *„în mediile afectate de precaritate”* / *„în periferiile afectate de precaritate”* (nu *„precarizate”*).
     - Se folosește *„disimularea sursei prin intermediari (information laundering)”* / *„3 paliere de disimulare a sursei”* (nu calcul *„spălare informațională”*).
     - Se folosește *„simulări decizionale participative (serious games)”* (cu minuscule în paranteză).
     - Se folosește *„scheme de condiționare cu recompense variabile intermitente (Skinner, 1953)”*.
   - **Lizibilitate sintactică**: frazele foarte lungi (>80–90 de cuvinte) se segmentează în propoziții clare, fără pierdere de informație.
3. **Clauze epistemologice obligatorii**:
   - **Clauza anti-eroare ecologică (Robinson, 1950)**: stările neurobiologice individuale (Stratul B) nu se atribuie unui „psihic colectiv” abstract, ci se agregă la nivel macro prin sincronizare afectivă, contagiune socială complexă pe punți largi (Centola, 2018) și intermediere politică în vidul de reprezentare (Mair, 2013; Mudde, 2004).
   - **Criteriul falsificabilității (Popper, 1934/2002)**: ipotezele modelului sunt formulate falsificabil și testate prin grupul de control regional (Estonia, Polonia, Republica Moldova).
   - **Evitarea erorii de categorie (Ryle, 1949)**: conceptele din Stratul C (Umbra colectivă, enantiodromia, Puer Aeternus) nu desemnează entități metafizice autonome, ci tipare psihosociale defensive prin care o comunitate răspunde la imprevizibilitatea instituțională (Stratul A) și uzura alostatică (Stratul B).
4. **Sincronizarea aparatului bibliografic (`BIBLIOGRAPHY_DATA` și `src/App.tsx`)**:
   - Orice autor citat în `paragraphs` sau în `dualRegister` trebuie să aibă anul publicării precizat (ex.: `Mair, 2013`, `Mudde, 2004`, `Popper, 1934/2002`, `Robinson, 1950`, `Laibson, 1997`, `Fehr & Gächter, 2002`, `Reynolds & Seeger, 2005`, `Ryle, 1949`), să fie inclus în `citedAuthorNames` al subcapitolului respectiv și să existe ca intrare completă APA 7th Edition în `BIBLIOGRAPHY_DATA` (`src/data/tablesAndReference.ts`).
   - Pentru evitarea coliziunii onomastice între **William S. Robinson (1950)** și **James A. Robinson** (coautor în `Acemoglu & Robinson, 2012, 2019`), citările primului în proză păstrează prenumele (`William S. Robinson (1950)` sau `Robinson, 1950`), fiind dezambiguizate determinist în `findMatchingBibliographyItems` (`src/App.tsx`).

---

## 5. Prompt-Șablon pentru Generarea Planșelor Vizuale și a Sintezelor Video (`MASTER_STYLE_PROMPT`)

```text
Creează o experiență video în modul Cinematic urmând o rigoare academică strictă (temperatură 0.3: ton analitic, sobru, calm, clinic, fără speculații sau metafore gratuite). Nu menționa și nu afișa niciun fel de date statistice, procente sau scoruri numerice; explică toate ideile exclusiv ca dinamici structurale și cauzale. Structurează prezentarea progresiv, dublând fiecare concept teoretic cu explicația sa practică/empirică, de la definirea cadrului sistemic și a blocajelor până la sinteza și soluția finală.

Regulă vizuală obligatorie: Folosește exclusiv un stil de ilustrație editorială 2D / gravură vectorială curată și diagrame de sistem pe un fundal alb-crem cald texturat (#F6F5EE). Toate liniile, contururile și textul principal vor fi în negru-cărbune (#222426) și nuanțe de gri-ardezie (#6E7376, #8C9BA5). Folosește strict galben-muștar (#E5B822) ca accent pentru concepte-cheie, sinteză și soluții, și roșu-vermilion (#F01E1E) exclusiv pentru tensiuni, crize sau bucle de blocaj. Interzis să folosești alte culori, efecte 3D sau desene de tip whiteboard.
```
