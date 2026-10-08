# Drive-in Lab website

Source for the Drive-in Lab research group website, built with
[Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.

## Editing content (no code required)

| What                     | Where                                                      |
|--------------------------|-------------------------------------------------------------|
| Site title, nav, contact | `_config.yml`                                                |
| **Font and colors**      | `_config.yml` → `theme:` block                               |
| Homepage text/stats      | `index.md`                                                    |
| About page               | `about.md`                                                    |
| Contact page             | `contact.md`                                                  |
| People                   | one file per person in `_people/` (see `example-person.md`)  |
| News                     | one file per item in `_news/` (see `example-news-item.md`)    |
| Publications             | one file per paper in `_publications/` (see `example-publication.md`) |
| Photos                   | `assets/images/people/`, `assets/images/news/`                |
| PDFs / downloads         | `assets/files/`                                               |

Each person, news item, and publication is a single Markdown file with a
front-matter block (the part between the `---` lines) for structured
fields like a photo path, email, or links — and ordinary Markdown below
for the free-text body (biography, article text, abstract). Copy the
matching `example-*.md` file to add a new entry; delete the examples once
you have real content.

### Changing the font or colors

Open `_config.yml` and edit the `theme:` block:

```yaml
theme:
  font:
    name: "Ubuntu"
    google_font_url: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
  colors:
    primary: "#0B1F3A"
    accent: "#E8A33D"
    ...
```

To switch the font, pick a new family on [Google Fonts](https://fonts.google.com/),
copy its `<link>` URL into `google_font_url`, and set `name` to match.
Every page re-themes automatically — no CSS editing required.

## Local preview

Requires Ruby. One-time setup:

```sh
gem install bundler
bundle install
```

Then, to preview with live reload at `http://localhost:4000`:

```sh
bundle exec jekyll serve
```

## Publishing to GitHub Pages

This repo builds via **GitHub Actions** (`.github/workflows/jekyll.yml`),
not the legacy branch-based Pages build — this is the current
GitHub-recommended approach and keeps the site building the same way
locally and in CI.

1. Push this repository to GitHub (already set up for
   `drive-in-lab/drive-in-lab.github.io`).
2. One-time only: in the repo's **Settings → Pages**, set **Build and
   deployment → Source** to **"GitHub Actions"** (not "Deploy from a
   branch"). After that, every push to `main` rebuilds and redeploys
   automatically — check the **Actions** tab for build status/errors.
3. This repo is named exactly `drive-in-lab.github.io`, so it's the
   organization's **user/org page**: `baseurl: ""` and
   `url: "https://drive-in-lab.github.io"` in `_config.yml` are already
   correct and shouldn't be changed.

## SEO

- `jekyll-seo-tag` and `jekyll-sitemap` generate meta tags, Open Graph
  tags, and `sitemap.xml` automatically.
- `jekyll-feed` publishes an RSS feed of News at `/news/feed.xml`.
- Structured data (JSON-LD) is included for the organization and for each
  person.
- Set a real `url:` in `_config.yml` before submitting the sitemap to
  Google Search Console.
