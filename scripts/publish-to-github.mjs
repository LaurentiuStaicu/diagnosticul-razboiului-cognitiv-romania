import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';

dotenv.config();

const GITHUB_TOKEN = (process.env.GITHUB_TOKEN || '').trim();
const OWNER = 'LaurentiuStaicu';
const REPO = process.env.GITHUB_REPO_NAME || 'diagnosticul-razboiului-cognitiv-romania';
const BRANCH = 'main';
const PAGES_BRANCH = 'gh-pages';

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

function collectDistFiles(dir, baseDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(baseDir, fullPath).split(path.sep).join('/');
    if (entry.isDirectory()) {
      files.push(...collectDistFiles(fullPath, baseDir));
    } else if (entry.isFile()) {
      files.push({ fullPath, relPath });
    }
  }
  return files;
}

async function uploadFilesToBranch(owner, repo, branchName, files, commitMessage, parentSha) {
  const treeItems = [];
  for (const file of files) {
    const buffer = fs.readFileSync(file.fullPath);
    const base64Content = buffer.toString('base64');
    const blobRes = await ghRequest(`/repos/${owner}/${repo}/git/blobs`, {
      method: 'POST',
      body: JSON.stringify({
        content: base64Content,
        encoding: 'base64'
      })
    });
    if (!blobRes.ok) {
      throw new Error(`Eroare la încărcarea fișierului ${file.relPath}: ${JSON.stringify(blobRes.data)}`);
    }
    treeItems.push({
      path: file.relPath,
      mode: '100644',
      type: 'blob',
      sha: blobRes.data.sha
    });
  }

  // Add .nojekyll on gh-pages branch
  if (branchName === PAGES_BRANCH) {
    const noJekyllBlob = await ghRequest(`/repos/${owner}/${repo}/git/blobs`, {
      method: 'POST',
      body: JSON.stringify({
        content: '',
        encoding: 'utf-8'
      })
    });
    if (noJekyllBlob.ok) {
      treeItems.push({
        path: '.nojekyll',
        mode: '100644',
        type: 'blob',
        sha: noJekyllBlob.data.sha
      });
    }
  }

  const treeRes = await ghRequest(`/repos/${owner}/${repo}/git/trees`, {
    method: 'POST',
    body: JSON.stringify({
      tree: treeItems
    })
  });
  if (!treeRes.ok) {
    throw new Error(`Eroare creare arbore Git (${branchName}): ${JSON.stringify(treeRes.data)}`);
  }

  const commitRes = await ghRequest(`/repos/${owner}/${repo}/git/commits`, {
    method: 'POST',
    body: JSON.stringify({
      message: commitMessage,
      tree: treeRes.data.sha,
      parents: parentSha ? [parentSha] : []
    })
  });
  if (!commitRes.ok) {
    throw new Error(`Eroare creare commit (${branchName}): ${JSON.stringify(commitRes.data)}`);
  }

  // Check if ref exists
  const refCheck = await ghRequest(`/repos/${owner}/${repo}/git/ref/heads/${branchName}`);
  if (refCheck.ok) {
    const updateRefRes = await ghRequest(`/repos/${owner}/${repo}/git/refs/heads/${branchName}`, {
      method: 'PATCH',
      body: JSON.stringify({
        sha: commitRes.data.sha,
        force: true
      })
    });
    if (!updateRefRes.ok) {
      throw new Error(`Eroare actualizare referință ${branchName}: ${JSON.stringify(updateRefRes.data)}`);
    }
  } else {
    const createRefRes = await ghRequest(`/repos/${owner}/${repo}/git/refs`, {
      method: 'POST',
      body: JSON.stringify({
        ref: `refs/heads/${branchName}`,
        sha: commitRes.data.sha
      })
    });
    if (!createRefRes.ok) {
      throw new Error(`Eroare creare referință ${branchName}: ${JSON.stringify(createRefRes.data)}`);
    }
  }

  return commitRes.data.sha;
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
    await new Promise((r) => setTimeout(r, 2500));
  }

  let refRes = await ghRequest(`/repos/${authenticatedOwner}/${REPO}/git/ref/heads/${BRANCH}`);
  const latestCommitSha = refRes.ok ? refRes.data.object.sha : null;

  const commitMessage =
    process.env.COMMIT_MESSAGE ||
    'Revizie aprofundată de claritate, coerență logică și proprietate a limbajului (Capitolele 1–6, Tabele și Glosar)';

  const workspaceRoot = process.cwd();
  const allSourceFiles = collectFiles(workspaceRoot);
  console.log(`3. Încărcare ${allSourceFiles.length} fișiere sursă pe ramura ${BRANCH}...`);
  const mainCommitSha = await uploadFilesToBranch(
    authenticatedOwner,
    REPO,
    BRANCH,
    allSourceFiles,
    commitMessage,
    latestCommitSha
  );
  console.log(`   -> Commit creat pe ${BRANCH}: ${mainCommitSha}`);

  const distDir = path.join(workspaceRoot, 'dist');
  if (fs.existsSync(distDir)) {
    const pagesRefRes = await ghRequest(`/repos/${authenticatedOwner}/${REPO}/git/ref/heads/${PAGES_BRANCH}`);
    const latestPagesSha = pagesRefRes.ok ? pagesRefRes.data.object.sha : null;
    const distFiles = collectDistFiles(distDir);
    console.log(`4. Încărcare ${distFiles.length} fișiere compilate (dist) pe ramura ${PAGES_BRANCH}...`);
    const pagesCommitSha = await uploadFilesToBranch(
      authenticatedOwner,
      REPO,
      PAGES_BRANCH,
      distFiles,
      `Publicare build static GitHub Pages (${commitMessage})`,
      latestPagesSha
    );
    console.log(`   -> Commit creat pe ${PAGES_BRANCH}: ${pagesCommitSha}`);
  }

  console.log(`5. Configurare GitHub Pages din ramura ${PAGES_BRANCH}...`);
  const pagesGet = await ghRequest(`/repos/${authenticatedOwner}/${REPO}/pages`);
  if (!pagesGet.ok && pagesGet.status === 404) {
    await ghRequest(`/repos/${authenticatedOwner}/${REPO}/pages`, {
      method: 'POST',
      body: JSON.stringify({
        build_type: 'legacy',
        source: {
          branch: PAGES_BRANCH,
          path: '/'
        }
      })
    });
  } else {
    await ghRequest(`/repos/${authenticatedOwner}/${REPO}/pages`, {
      method: 'PUT',
      body: JSON.stringify({
        build_type: 'legacy',
        source: {
          branch: PAGES_BRANCH,
          path: '/'
        }
      })
    });
  }

  // Trigger a pages build
  await ghRequest(`/repos/${authenticatedOwner}/${REPO}/pages/builds`, {
    method: 'POST'
  });

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
