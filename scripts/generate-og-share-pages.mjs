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

    <!-- OpenGraph Social Sharing Cards (Section / Act Specific) -->
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

    <!-- Twitter / X Cards (Section / Act Specific) -->
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
  const figId = step.linkedFigureId || (step.actNumber === 1 ? 1 : step.actNumber === 2 ? 3 : step.actNumber === 3 ? 6 : 7);
  const figMeta = FIGURE_METADATA[figId] || FIGURE_METADATA[1];
  const html = buildShareHtml({
    slug: `pasul-${step.stepNumber}`,
    targetHash: `pasul-${step.stepNumber}`,
    title: `${step.title} (Diagnosticul războiului cognitiv în România)`,
    description: step.summaryThesis,
    imageRelPath: `og/og-fig-${figId}.png`,
    imageAlt: `${step.title} (${figMeta.title})`
  });
  fs.writeFileSync(path.join(outDir, `pasul-${step.stepNumber}.html`), html, 'utf-8');
}

// 2. Generate share pages for the 4 Logical Acts (actul-1.html .. actul-4.html)
const ACTS_META = [
  {
    act: 1,
    title: 'Actul I (Cadrul macro și rădăcina sistemică, Diagnosticul războiului cognitiv în România)',
    description:
      'Introducere și Capitolul 1 (Arhitectura cauzală ascendentă pe Straturile A, B și C, barca lui Coleman-Hedström, determinanții Lalonde-Dever și anomalia formelor fără fond).',
    imageRelPath: 'og/og-act-1.png',
    imageAlt: 'Actul I (Arhitectura cauzală pe trei straturi a vulnerabilității societale endogene)'
  },
  {
    act: 2,
    title: 'Actul II (Anatomia tensiunii și capturarea buclei OODA, Diagnosticul războiului cognitiv în România)',
    description:
      'Capitolele 2 și 3 (Rețeaua sistema, Antilumea putinistă, starea Bobok, dubla falsificare axiologică, controlul reflexiv de rang secund și deturnarea fazei de Orientare din bucla OODA).',
    imageRelPath: 'og/og-act-2.png',
    imageAlt: 'Actul II (Mecanismul cibernetic și semiotic al capturării cognitive în bucla OODA)'
  },
  {
    act: 3,
    title: 'Actul III (Dinamica forțelor, Umbra colectivă și bifurcația Track A și Track B, Diagnosticul războiului cognitiv în România)',
    description:
      'Capitolele 4 și 5 (Conversia resurselor din Umbra colectivă, matricea comportamentală a lui Carlo M. Cipolla și bifurcarea neurocognitivă în criză acută între Track A reactiv și Track B deliberativ).',
    imageRelPath: 'og/og-act-3.png',
    imageAlt: 'Actul III (Bifurcarea procesării neurocognitive sub presiunea crizei acute)'
  },
  {
    act: 4,
    title: 'Actul IV (Protocolul secvențial în trei faze și modernitatea organică, Diagnosticul războiului cognitiv în România)',
    description:
      'Capitolul 6 (Ordinea cauzală obligatorie a reconstrucției rezilienței pe determinanții Lalonde-Dever, Faza I decompresie alostatică, Faza II prebunking și validare morală, Faza III guvernanță policentrică Ostrom și individuare colectivă).',
    imageRelPath: 'og/og-act-4.png',
    imageAlt: 'Actul IV (Protocolul secvențial în trei faze al reconstrucției rezilienței societale)'
  }
];

for (const actItem of ACTS_META) {
  const html = buildShareHtml({
    slug: `actul-${actItem.act}`,
    targetHash: `actul-${actItem.act}`,
    title: actItem.title,
    description: actItem.description,
    imageRelPath: actItem.imageRelPath,
    imageAlt: actItem.imageAlt
  });
  fs.writeFileSync(path.join(outDir, `actul-${actItem.act}.html`), html, 'utf-8');
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
