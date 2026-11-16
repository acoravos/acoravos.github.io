# andreacoravos.com: draft site (al-folio)

Draft built Nov 15, 2026 from the brand brief, the old andreacoravos.com, and Google Scholar.

## What's here

| Page | File | Status |
| --- | --- | --- |
| Home | `_pages/about.md` | Draft bio + "now" list + news + selected papers |
| Eras | `_pages/eras.md` | Draft chapters. Edit names and dates. |
| Research | `_bibliography/papers.bib` | 22 papers, from Crossref DOIs + Scholar. 5 marked `selected={true}` for the home page. |
| Writing | `_config.yml` → `external_sources` | Pulls new posts from blog.andreacoravos.com automatically. Add the Substack feed when ready. |
| Projects | `_projects/*.md` | Building: HumanFirst, Astera handbooks, Ummo, CODE@HBS, device security. Making: photography, comics, gatherings (placeholders). |
| Talks & press | `_pages/talks.md` | Podcasts + coverage. Broken links from the old site fixed. |
| News | `_news/*.md` | Pillar (2026), Astera (2025), ICON (2024) |

## TODOs before going live

1. Replace `assets/img/prof_pic.jpg` with your photo (same file name).
2. Fill in the three "making" projects (photos in `assets/img/`).
3. Check the Eras page wording and dates.
4. Add your Substack feed URL in `_config.yml` (search for TODO).
5. Optional: add a public contact email in `_data/socials.yml`.
6. The Astera handbook dates are approximate (2025). Fix them in `_config.yml` if you know the months.

## Put it on GitHub (one-time)

1. Create an empty repo on GitHub, e.g. `andreacoravos.com`.
2. Unzip this folder on your Mac.
3. In Terminal, from inside the folder:
   - `git init`
   - `git add .`
   - `git commit -m "First draft of new site"`
   - `git branch -M main`
   - `git remote add origin https://github.com/acoravos/<repo-name>.git`
   - `git push -u origin main`
4. In the repo on GitHub, open Settings → Actions → General. Set workflow permissions to "Read and write".
5. Wait for the "Deploy site" action to finish (Actions tab).
6. Open Settings → Pages. Set the source to the `gh-pages` branch.

## Preview on your Mac

The easiest way is to open this folder in Claude Code and ask it to run the site locally. It needs Docker or Ruby. Run `docker compose up`, then open http://localhost:8080.

## Switching the domain (last step, after you like the preview)

1. The `CNAME` file already says `andreacoravos.com`.
2. In GitHub → Settings → Pages, enter `andreacoravos.com` as the custom domain and tick "Enforce HTTPS".
3. At your domain registrar, point the DNS to GitHub Pages. GitHub's custom-domain docs list the exact records.
4. Then submit the site in Google Search Console. This also fixes the old indexing warning.
