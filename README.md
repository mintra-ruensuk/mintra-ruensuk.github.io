# mintra-ruensuk.github.io

Personal portfolio of **Mintra Ruensuk** — Data & AI Engineering Leader, PhD in HCI.

Live at: **[mintra-ruensuk.github.io](https://mintra-ruensuk.github.io)**

---

## About the Site

Dark editorial portfolio built with Jekyll and hosted on GitHub Pages. Features:

- **Bold typographic design** — Syne display font, DM Sans body, JetBrains Mono for code
- **Hamburger overlay nav** — mobile-first, numbered page links
- **Five pages** — Home, Research, Publications, Education, Contact
- **JS-obfuscated email** on the Contact page
- **Scroll-reveal animations** on section entry

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `index.html` | About, Experience, Tech Stack, News |
| `/research/` | `research.md` | PhD research projects |
| `/publications/` | `publications.md` | Academic publications (CHI, IMWUT, etc.) |
| `/schools/` | `schools.md` | Education history with photos |
| `/cv/` | `cv.md` | Contact / obfuscated email |

## Tech Stack

| Layer | Choice |
|---|---|
| Generator | Jekyll (`github-pages` gem) |
| Hosting | GitHub Pages (master branch) |
| CSS | Custom SCSS (`_sass/redesign.scss`) |
| Fonts | Syne · DM Sans · JetBrains Mono (Google Fonts) |
| Plugins | `jekyll-sitemap` |

## Local Development

```bash
bundle install
bundle exec jekyll serve --port 4001
```

Open [http://localhost:4001](http://localhost:4001).

> **Note:** The `github-pages` gem is used for GitHub Pages compatibility. If you need Jekyll 4.x features locally, swap to `gem "jekyll", "~> 4.3"` in the Gemfile — but revert before pushing.

## Project Structure

```
.
├── _includes/
│   ├── head.html           # <head> with fonts & CSS link
│   ├── nav.html            # Numbered nav list (used by both layouts)
│   └── footer-minimal.html
├── _layouts/
│   ├── index.html          # Homepage layout (MR logo, overlay nav, JS)
│   └── static_page.html    # Inner page layout (Research, Pubs, etc.)
├── _sass/
│   └── redesign.scss       # All styles (~1300 lines)
├── assets/css/main.scss    # Entry point — imports redesign.scss
├── index.html              # Home page content
├── research.md
├── publications.md
├── schools.md
└── cv.md                   # Contact page
```

## Deploying

Push to `master` — GitHub Pages rebuilds automatically (~1 min).
