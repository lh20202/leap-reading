# HCRI76000 Reading List Website Package

This package is intended for Codex or another coding agent to build a simple reading-list website.

## Canonical source

Use `readings.json` as the source of truth.

`readings.csv` is included as an editable flat version for spreadsheet review, but the website should preferably consume the JSON because it preserves the week > section > reading hierarchy.

## Website objective

Build a static website that lets me easily browse and access readings for **HCRI76000 Leadership & Management in Health & Humanitarianism**.

The site should organise readings by week and preserve the distinction between:

1. University-provided - Core / main weekly reading
2. University-provided - Additional reading
3. Wider reading from my responses

## Required features

- Show one page or section per week.
- Within each week, display readings grouped by category.
- Display each reading as a card or compact list item.
- For each reading, show:
  - title
  - authors
  - year
  - reading type
  - source / journal / publisher where available
  - citation
  - DOI where available
  - URL where available
  - notes where available
- Make the title clickable when either `url` or `doi_url` is available.
- Prefer `url` over `doi_url` for the primary click target, but show both if both exist.
- If neither URL nor DOI exists, display "No link available".
- Preserve all source URLs exactly as provided.
- Do not invent missing links.
- Add search across title, authors, citation, source and notes.
- Add filters for week, category, reading type and source origin.
- Add a visual marker for readings from `wider_from_my_responses` so they are clearly distinct from university-provided readings.

## Design guidance

Use a clean academic reference-library style. Prioritise usability over visual complexity.

Suggested layout:

- Left sidebar: week navigation and filters.
- Main area: weekly reading sections.
- Reading cards: compact but readable.
- Add an "Open reading" button when a link exists.
- Add a "Copy citation" button if straightforward.

## Data notes

- Some university URLs are institutional library resolver links and may require University of Manchester authentication.
- The original university DOCX had `Loading...` placeholders for Week 7 and Week 8. These readings were recovered from the full CSV export.
- Week 6 has no wider readings from my responses because the Week 6 tasks were not submitted. This is recorded in `metadata.weekly_notes`.

## Files

- `readings.json` - canonical nested data for the website.
- `readings.csv` - flat editable backup.
- `schema.ts` - optional TypeScript types.
- `README.md` - this implementation brief.

## Suggested implementation

Any of the following are fine:

- plain HTML/CSS/JavaScript
- Astro
- Next.js
- Vite + React

For a small personal reading website, plain static HTML or Astro is sufficient. Avoid unnecessary backend infrastructure.

## Data volume

Total readings in this package: 134.
