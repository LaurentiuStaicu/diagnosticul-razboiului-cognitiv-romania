import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config();

const GITHUB_TOKEN = (process.env.GITHUB_TOKEN || '').trim();
const OWNER = 'LaurentiuStaicu';
const REPO = process.env.GITHUB_REPO_NAME || 'diagnosticul-razboiului-cognitiv-romania';
const BRANCH = 'main';

if (!GITHUB_TOKEN || GITHUB_TOKEN === 'MY_GITHUB_TOKEN') {
  console.error(
    'EROARE: Variabila GITHUB_TOKEN nu este configurată în panoul Secrets din Google AI Studio.'
  );
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'Content-Type': 'application/json',
  'User-Agent': 'AI-Studio-GitHub-Publisher'
};

async function ghRequest(url, options = {}) {
  const res = await fetch(`https://api.github.com${url}`, {
    ...options,
    headers: { ...headers, ...(options.headers || {}) }
  });
  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  return { ok: res.ok, status: res.status, data };
}

function collectFiles(dir, baseDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  const ignoredDirs = new Set(['node_modules', 'dist', '.git', '.aistudio']);
  const ignoredFiles = new Set(['.env', 'package-lock.json']);

  for (const entry of entries) {
    if (ignoredDirs.has(entry.name) || ignoredFiles.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(baseDir, fullPath).split(path.sep).join('/');
    if (entry.isDirectory()) {
      files.push(...collectFiles(fullPath, baseDir));
    } else if (entry.isFile()) {
      files.push({ fullPath, relPath });
    }
  }
  return files;
}

async function main() {
  console.log(`1. Verificare autentificare GitHub...`);
  const userRes = await ghRequest('/user');
  if (!userRes.ok) {
    console.error(`Eroare autentificare GitHub (${userRes.status}):`, userRes.data);
    process.exit(1);
  }
  const authenticatedOwner = userRes.data.login || OWNER;
  console.log(`Autentificat cu succes ca: ${authenticatedOwner}`);

  console.log(`2. Verificare / creare depozit ${authenticatedOwner}/${REPO}...`);
  const repoCheck = await ghRequest(`/repos/${authenticatedOwner}/${REPO}`);
  if (!repoCheck.ok && repoCheck.status === 404) {
    const createRes = await ghRequest('/user/repos', {
      method: 'POST',
      body: JSON.stringify({
        name: REPO,
        description:
          'Diagnosticul războiului cognitiv în România (Versiunea 1.0) — Platformă interactivă',
        homepage: `https://${authenticatedOwner.toLowerCase()}.github.io/${REPO}/`,
        private: false,
        auto_init: true
      })
    });
    if (!createRes.ok) {
      console.error(`Nu s-a putut crea depozitul (${createRes.status}):`, createRes.data);
      process.exit(1);
    }
    console.log(`Depozitul https://github.com/${authenticatedOwner}/${REPO} a fost creat.`);
    // Wait briefly for GitHub initial commit provisioning
    await new Promise((r) => setTimeout(r, 2500));
  } else if (repoCheck.ok) {
    console.log(`Depozitul https://github.com/${authenticatedOwner}/${REPO} există deja.`);
  } else {
    console.error(`Eroare la verificarea depozitului (${repoCheck.status}):`, repoCheck.data);
    process.exit(1);
  }

  // Ensure repository has at least one commit if it was empty
  let refRes = await ghRequest(`/repos/${authenticatedOwner}/${REPO}/git/ref/heads/${BRANCH}`);
  if (!refRes.ok) {
    await ghRequest(`/repos/${authenticatedOwner}/${REPO}/contents/README.md`, {
      method: 'PUT',
      body: JSON.stringify({
        message: 'Initial commit',
        content: Buffer.from('# Diagnosticul războiului cognitiv în România\n').toString('base64'),
        branch: BRANCH
      })
    });
    refRes = await ghRequest(`/repos/${authenticatedOwner}/${REPO}/git/ref/heads/${BRANCH}`);
  }

  const latestCommitSha = refRes.data.object.sha;
  console.log(`Ultimul commit pe ${BRANCH}: ${latestCommitSha}`);

  const workspaceRoot = process.cwd();
  const allFiles = collectFiles(workspaceRoot);
  console.log(`3. Încărcare ${allFiles.length} fișiere în GitHub Git Data API...`);

  const treeItems = [];
  for (const file of allFiles) {
    const buffer = fs.readFileSync(file.fullPath);
    const base64Content = buffer.toString('base64');
    const blobRes = await ghRequest(`/repos/${authenticatedOwner}/${REPO}/git/blobs`, {
      method: 'POST',
      body: JSON.stringify({
        content: base64Content,
        encoding: 'base64'
      })
    });
    if (!blobRes.ok) {
      console.error(`Eroare la încărcarea fișierului ${file.relPath}:`, blobRes.data);
      process.exit(1);
    }
    treeItems.push({
      path: file.relPath,
      mode: '100644',
      type: 'blob',
      sha: blobRes.data.sha
    });
  }

  console.log(`4. Creare arbore Git și commit pe ramura ${BRANCH}...`);
  const treeRes = await ghRequest(`/repos/${authenticatedOwner}/${REPO}/git/trees`, {
    method: 'POST',
    body: JSON.stringify({
      tree: treeItems
    })
  });
  if (!treeRes.ok) {
    console.error(`Eroare creare arbore Git:`, treeRes.data);
    process.exit(1);
  }

  const commitRes = await ghRequest(`/repos/${authenticatedOwner}/${REPO}/git/commits`, {
    method: 'POST',
    body: JSON.stringify({
      message:
        'Publicare monografie interactivă Diagnosticul războiului cognitiv în România (Versiunea 1.0)',
      tree: treeRes.data.sha,
      parents: [latestCommitSha]
    })
  });
  if (!commitRes.ok) {
    console.error(`Eroare creare commit:`, commitRes.data);
    process.exit(1);
  }

  const updateRefRes = await ghRequest(
    `/repos/${authenticatedOwner}/${REPO}/git/refs/heads/${BRANCH}`,
    {
      method: 'PATCH',
      body: JSON.stringify({
        sha: commitRes.data.sha,
        force: true
      })
    }
  );
  if (!updateRefRes.ok) {
    console.error(`Eroare actualizare referință ${BRANCH}:`, updateRefRes.data);
    process.exit(1);
  }

  console.log(`5. Activare GitHub Pages (build_type: workflow)...`);
  const pagesRes = await ghRequest(`/repos/${authenticatedOwner}/${REPO}/pages`, {
    method: 'POST',
    body: JSON.stringify({
      build_type: 'workflow'
    })
  });
  if (!pagesRes.ok && pagesRes.status !== 409) {
    await ghRequest(`/repos/${authenticatedOwner}/${REPO}/pages`, {
      method: 'PUT',
      body: JSON.stringify({
        build_type: 'workflow'
      })
    });
  }

  console.log(`=====================================================`);
  console.log(`PUBLICARE FINALIZATĂ CU SUCCES!`);
  console.log(`Depozit GitHub: https://github.com/${authenticatedOwner}/${REPO}`);
  console.log(
    `URL GitHub Pages: https://${authenticatedOwner.toLowerCase()}.github.io/${REPO}/`
  );
  console.log(`=====================================================`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
