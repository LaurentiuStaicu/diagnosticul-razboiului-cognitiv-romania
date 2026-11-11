import fs from 'node:fs';
import path from 'node:path';
import { ALL_SUBCHAPTER_STEPS } from '../src/data/tablesAndReference.ts';
import { FIGURE_METADATA } from '../src/components/InteractiveFigures.tsx';

const BASE_URL = 'https://laurentiustaicu.github.io/diagnosticul-razboiului-cognitiv-romania';
const outDir = path.join(process.cwd(), 'public', 'share');
fs.mkdirSync(outDir, { recursive: true });

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildShareHtml({ slug, targetHash, title, description, imageRelPath, imageAlt }) {
  const sharePageUrl = `${BASE_URL}/share/${slug}.html`;
  const targetAppUrl = `${BASE_URL}/#${targetHash}`;
  const fullImageUrl = `${BASE_URL}/${imageRelPath.replace(/^\//, '')}`;

  return `<!doctype html>
<html lang="ro">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="author" content="Laurențiu Staicu" />
    <link rel="canonical" href="${sharePageUrl}" />
    <link rel="icon" type="image/svg+xml" href="../favicon.svg" />

    <!-- OpenGraph Social Sharing Cards (Section / Chapter Specific) -->
    <meta property="og:type" content="article" />
    <meta property="og:locale" content="ro_RO" />
    <meta property="og:site_name" content="Diagnosticul războiului cognitiv în România" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${sharePageUrl}" />
    <meta property="og:image" content="${fullImageUrl}" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${escapeHtml(imageAlt)}" />

    <!-- Twitter / X Cards (Section / Chapter Specific) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${fullImageUrl}" />
    <meta name="twitter:image:alt" content="${escapeHtml(imageAlt)}" />

    <meta http-equiv="refresh" content="0; url=${targetAppUrl}" />
    <script>
      window.location.replace(${JSON.stringify(`../#${targetHash}`)});
    </script>
  </head>
  <body style="background:#F6F5EE;color:#222426;font-family:Inter,system-ui,-apple-system,sans-serif;padding:2rem;text-align:center;">
    <p>Redirecționare către secțiunea selectată din monografie...</p>
    <p><a href="../#${targetHash}" style="color:#222426;font-weight:bold;">Deschide ${escapeHtml(title)}</a></p>
  </body>
</html>
`;
}

// 1. Generate share pages for all 19 Subchapter Steps (pasul-1.html .. pasul-19.html)
for (const step of ALL_SUBCHAPTER_STEPS) {
  const figId = step.linkedFigureId || 1;
  const figMeta = FIGURE_METADATA[figId] || FIGURE_METADATA[1];
  const html = buildShareHtml({
    slug: `pasul-${step.stepNumber}`,
    targetHash: `pasul-${step.stepNumber}`,
    title:
      step.stepNumber === 1
        ? 'Introducere · Diagnosticul războiului cognitiv în România (Versiunea 1.0)'
        : `${step.title} (Diagnosticul războiului cognitiv în România)`,
    description: step.summaryThesis,
    imageRelPath: `og/og-fig-${figId}.png`,
    imageAlt: `${step.title} (${figMeta.title})`
  });
  fs.writeFileSync(path.join(outDir, `pasul-${step.stepNumber}.html`), html, 'utf-8');
}

// 2. Generate share pages for the 6 Chapters (capitolul-1.html .. capitolul-6.html)
const CHAPTERS_META = [
  {
    num: 1,
    slug: 'capitolul-1',
    targetHash: 'capitolul-1',
    title: 'Capitolul 1 (Vulnerabilitățile structurale ale societății românești și eroziunea rezilienței endogene)',
    description: 'Arhitectura cauzală pe cele trei straturi: anomalia istorică a formelor fără fond, uzura alostatică cronică și neputința învățată.',
    imageRelPath: 'og/og-fig-1.png',
    imageAlt: 'Capitolul 1 (Arhitectura cauzală pe trei straturi)'
  },
  {
    num: 2,
    slug: 'capitolul-2',
    targetHash: 'capitolul-2',
    title: 'Capitolul 2 (Arhitectura ideologiei putiniste și camuflajul discursiv suveranist)',
    description: 'Rețeaua sistema, Russkii Antimir, starea Bobok și dubla falsificare axiologică a conservatorismului și ortodoxiei.',
    imageRelPath: 'og/og-fig-2.png',
    imageAlt: 'Capitolul 2 (Dubla falsificare axiologică și camuflajul discursiv)'
  },
  {
    num: 3,
    slug: 'capitolul-3',
    targetHash: 'capitolul-3',
    title: 'Capitolul 3 (Mecanismul capturării cognitive și colonizarea deciziei în al șaselea domeniu operațional)',
    description: 'Penetrarea fazei de Orientare din bucla OODA prin control reflexiv de rang secund și semioză binară a anihilării.',
    imageRelPath: 'og/og-fig-3.png',
    imageAlt: 'Capitolul 3 (Deturnarea fazei de Orientare din bucla OODA)'
  },
  {
    num: 4,
    slug: 'capitolul-4',
    targetHash: 'capitolul-4',
    title: 'Capitolul 4 (Polarizarea socială, proiecția Umbrei colective și vulnerabilitatea la manipulare)',
    description: 'Mecanismele de apărare de grup, enantiodromia, conversia funcțională a resurselor latente din Umbră și matricea comportamentală a lui Cipolla.',
    imageRelPath: 'og/og-fig-4.png',
    imageAlt: 'Capitolul 4 (Conversia funcțională a resurselor latente din Umbra colectivă)'
  },
  {
    num: 5,
    slug: 'capitolul-5',
    targetHash: 'capitolul-5',
    title: 'Capitolul 5 (Comportamentul decizional în criză acută: Matricea lui Cipolla și bifurcația neurocognitivă)',
    description: 'Alunecarea în Cadranul III al autosabotajului colectiv și bifurcația între Track A reactiv și Track B deliberativ.',
    imageRelPath: 'og/og-fig-5.png',
    imageAlt: 'Capitolul 5 (Matricea lui Cipolla și bifurcația Track A și Track B)'
  },
  {
    num: 6,
    slug: 'capitolul-6',
    targetHash: 'capitolul-6',
    title: 'Capitolul 6 (Protocolul secvențial de reconstrucție a rezilienței cognitive societale)',
    description: 'Protocolul secvențial în trei faze pe determinanții Lalonde-Dever: Faza I decompresie, Faza II prebunking, Faza III modernitate organică.',
    imageRelPath: 'og/og-fig-7.png',
    imageAlt: 'Capitolul 6 (Protocolul secvențial în trei faze)'
  }
];

for (const chap of CHAPTERS_META) {
  const html = buildShareHtml({
    slug: chap.slug,
    targetHash: chap.targetHash,
    title: `${chap.title} (Diagnosticul războiului cognitiv în România)`,
    description: chap.description,
    imageRelPath: chap.imageRelPath,
    imageAlt: chap.imageAlt
  });
  fs.writeFileSync(path.join(outDir, `${chap.slug}.html`), html, 'utf-8');
}

// 3. Generate share pages for all 7 Interactive Vector Figures (figura-1.html .. figura-7.html)
for (const figId of [1, 2, 3, 4, 5, 6, 7]) {
  const fig = FIGURE_METADATA[figId];
  const html = buildShareHtml({
    slug: `figura-${figId}`,
    targetHash: `figura-${figId}`,
    title: `${fig.title} (Diagnosticul războiului cognitiv în România)`,
    description: fig.caption,
    imageRelPath: `og/og-fig-${figId}.png`,
    imageAlt: `${fig.title} (${fig.subtitle})`
  });
  fs.writeFileSync(path.join(outDir, `figura-${figId}.html`), html, 'utf-8');
}

// 4. Generate share pages for Tabele and Glosar
fs.writeFileSync(
  path.join(outDir, 'tabele.html'),
  buildShareHtml({
    slug: 'tabele',
    targetHash: 'tabele',
    title: 'Tabelele de sinteză (1 și 2) și grupul de control regional (Estonia, Polonia, Moldova) (Diagnosticul războiului cognitiv în România)',
    description:
      'Sinteza matricială a diagnosticului pe Straturile A, B și C (Tabelul 1), protocolul secvențial Lalonde-Dever în 3 faze (Tabelul 2) și comparația cu grupul de control regional.',
    imageRelPath: 'og/og-fig-7.png',
    imageAlt: 'Tabelele de sinteză 1 și 2 și protocolul Lalonde-Dever'
  }),
  'utf-8'
);

fs.writeFileSync(
  path.join(outDir, 'glosar.html'),
  buildShareHtml({
    slug: 'glosar',
    targetHash: 'glosar',
    title: 'Glosar conceptual (50 concepte) și bibliografie integrală (122 lucrări) (Diagnosticul războiului cognitiv în România)',
    description:
      'Aparatul conceptual interdisciplinar (sociologie instituțională, neuroștiințe, semiotică, psihologie analitică) și cele 122 de referințe academice verificate ale monografiei.',
    imageRelPath: 'og/og-fig-1.png',
    imageAlt: 'Glosar conceptual și bibliografie integrală'
  }),
  'utf-8'
);

console.log('Generated static OpenGraph share pages in public/share/:', fs.readdirSync(outDir).length);
