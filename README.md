# Diagnosticul războiului cognitiv în România (Versiunea 1.0)

Ediție digitală interactivă a monografiei științifice *„Diagnosticul războiului cognitiv în România (Arhitectura instituțională, neurocognitivă și culturală a vulnerabilității și rezilienței societale în fața operațiunilor informaționale ruse și a ideologiei putiniste, Versiunea 1.0)”*.

## Arhitectura aplicației

1. **Copertă editorială (Landing Page cu un singur buton de acces)**:
   - Prezintă titlul, subtitlul, sinteza cauzală pe cele trei straturi (Stratul A instituțional, Stratul B neurocognitiv și semiotic, Stratul C inconștientul cultural și dinamica arhetipală), planșa sinoptică vectorială 2D și un singur buton principal (`Deschide pagina interactivă a monografiei`) care deschide platforma de studiu.
2. **Explorare pas cu pas (Cele 19 secțiuni integrale și Prezentarea în 4 Acte)**:
   - Textul integral al Introducerii și al Capitolelor 1–6 (subcapitolele `1.1`–`6.3`), descompunerea în oglindă pe două registre (*Teoretic / Conceptual* și *Practic / Empiric*), citări academice interactive în text și modul dedicat de prezentare progresivă în 4 acte logice.
3. **Laboratorul celor 7 diagrame vectoriale 2D (`Figurile 1–7`)**:
   - Reproduceri vectoriale interactive SVG ale tuturor celor 7 modele cibernetice și cauzale din monografie.
4. **Tabelele de sinteză (`Tabelul 1` și `Tabelul 2`) și Grupul de control regional**:
   - Matricele complete din Capitolele 5 și 6 și analiza comparativă România — Estonia, Polonia, Republica Moldova.
5. **Glosar conceptual, Bibliografie integrală (122 lucrări) și Documentul PDF original**.

---

## Instrucțiuni de publicare pe GitHub și GitHub Pages

Proiectul este preconfigurat pentru **GitHub Pages** (`base: './'` în `vite.config.ts` și fluxul automat GitHub Actions în `.github/workflows/deploy.yml`).

### Pasul 1 (Încărcarea codului în depozitul dvs. GitHub)
Dacă exportați proiectul din Google AI Studio direct în GitHub sau îl clonați local:

```bash
git init
git add .
git commit -m "Publicare monografie interactiva Diagnosticul razboiului cognitiv in Romania"
git branch -M main
git remote add origin https://github.com/<UTILIZATORUL_DVS>/<NUME_REPO>.git
git push -u origin main
```

### Pasul 2 (Activarea GitHub Pages din interfața GitHub)
1. Deschideți depozitul dvs. pe GitHub.
2. Accesați **Settings** $\rightarrow$ **Pages** (în meniul din stânga).
3. La secțiunea **Build and deployment** $\rightarrow$ **Source**, selectați **GitHub Actions**.
4. Fluxul `.github/workflows/deploy.yml` va rula automat la fiecare `push` pe ramura `main` (sau poate fi pornit manual din fila **Actions** $\rightarrow$ **Deploy to GitHub Pages** $\rightarrow$ **Run workflow**) și va publica aplicația la adresa:
   `https://<UTILIZATORUL_DVS>.github.io/<NUME_REPO>/`

### Rulare și verificare locală

```bash
npm install
npm run dev
# Pentru generarea pachetului static de producție (în directorul ./dist):
npm run build
```
