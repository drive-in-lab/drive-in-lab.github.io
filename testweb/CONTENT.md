# Editing content

This site's day-to-day content lives in plain files under `src/content/` —
no database, no admin panel. Edit a file, commit, push to `main`, and GitHub
Actions rebuilds and redeploys the site automatically (usually within a
couple of minutes).

## Adding a news post

Create a new `.mdx` file under `src/content/posts/`. The frontmatter controls
the news card and article details:

```md
---
slug: "short-url-slug"
title: "News title"
date: "2026-08-20"
excerpt: "One-sentence summary for the News page."
author: "Drive-In Lab"
tag: "Conference"
eventDate: "20–22 October 2026"
location: "Gothenburg, Sweden"
externalUrl: "https://example.com/"
---
```

Write the article below the frontmatter using Markdown. The post appears
automatically under `#/news` and at `#/news/short-url-slug`.

## Editing the team

Open `src/content/team.js` and edit the list — each entry is:

```js
{
  name: 'Full Name',
  role: 'Job title',
  bio: 'One or two sentences.',
  photo: 'https://www.jyu.fi/path/to/profile-photo.jpg',
  email: 'name@jyu.fi',
  phone: '+358 ...',
  profile: 'https://www.jyu.fi/en/people/profile-slug',
}
```

Add or remove entries by adding/removing one of these blocks. Add a new
team member's photo to `public/team/` and reference it as
`photo: '/team/their-file.jpg'`.

## Editing research areas, projects, facilities, publications

Same pattern, plain data files:

- `src/content/research.js` — research themes + publications list
- `src/content/projects.js` — project details and objectives
- `src/content/facilities.js` — laboratory capabilities

Add, remove, or edit entries directly; the pages update automatically.

## Editing contact details

`src/pages/Contact.jsx` contains the project contact, lab address, and official
JYU links.

## Previewing changes before publishing

```
npm install   # first time only
npm run dev   # starts a local preview at http://localhost:5173
```

Edit content while `npm run dev` is running and the browser updates live.

## Publishing

Push to the `main` branch (or merge a PR into it). The
`.github/workflows/deploy.yml` workflow builds the site and publishes it to
GitHub Pages automatically — no manual build/deploy step needed.
