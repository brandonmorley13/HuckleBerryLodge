# Huckle Berry Lodge — coded site

Framework-free static HTML/CSS/JS build of the 10-page marketing site
("Warm Alpine" design system). No build step — every file here is shipped
as-is.

## Structure

```
site/
  index.html            Home
  the-cabin/index.html
  gallery/index.html
  rates/index.html
  book/index.html        (Check Availability)
  reviews/index.html
  explore/index.html
  about/index.html
  faq/index.html
  contact/index.html
  assets/css/styles.css  shared design-token stylesheet
  assets/js/main.js      nav toggle, FAQ accordion, gallery filters
```

Every page links to every other page by relative path, so the whole
folder can be dropped onto any static host (GitHub Pages, Netlify,
Vercel, S3 + CloudFront, etc.) and browsed on its own.

## Wix integration

This folder is **not** synced by Wix's git integration (only `src/backend`,
`src/pages`, and `src/public` are). It's a separate static deploy that the
Wix site embeds:

1. Deploy `site/` to a static host and note its URL. Currently deployed
   to GitHub Pages at <https://brandonmorley13.github.io/HuckleBerryLodge/>,
   served from this repo's `gh-pages` branch, which holds the contents of
   `site/` at its root plus a `.nojekyll` marker. To redeploy after
   changing `site/`, copy its contents onto `gh-pages` and push.
2. In the Wix Studio editor, add one full-bleed "Embed a Site" iframe to
   the Home page inside a single `100vh` / zero-padding section (this
   can't be done via git — it's a one-time manual placement), with the
   element ID `staticSiteFrameV1`. Studio requires every element to live
   in a section; that one section holding one full-fill iframe is the
   entire Wix page.
3. Update `STATIC_SITE_URL` in `src/pages/Home.c1dmp.js` to the deployed
   URL and push.

Placeholder gradient blocks (`.placeholder-photo`) stand in for real
photography throughout — swap in real images once they're shot, matching
the golden/blue-hour, level-horizon direction from the design brief.

## Regenerating pages

The 10 HTML files share identical header/footer markup, so they were
generated from one Python script rather than hand-copied ten times. That
script isn't part of the shipped site — if the page templates need to
change, either hand-edit the HTML files directly, or ask for the
generator.
