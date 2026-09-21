# CLAUDE.md — snowflake (lean operational pointers)

The **Snowflake** concept app of GraphL. Workspace-wide invariants, content model, and working
agreement live in the workspace [`CLAUDE.md`](../CLAUDE.md) — read that first; this file is
Snowflake-specific.

## Status

**AUTHORING (2026-09-21)** — the ten-course spine is declared. **Courses 01-07 are authored:
`platform` · `warehouses` · `storage` · `loading` · `transformation` · `governance` · `continuity`
— 74 sections, 74 scenes, 0 wavs.** Courses 08-10 are empty. `npm run build`, `tsc --noEmit` and
`npm run check` are clean, every slide models under 1000 px, and every `icon:` is registered. Not
deployed and not listed in `ui-graphl/catalog.json`.

**Audio:** `scripts/colab_generate_audio.ipynb` is retargeted to this repo. Regenerate and commit
`scripts/audio-manifest.json` (`npm run gen:audio`) whenever narration changes — the notebook only
sees committed text, and it commits each wav back from the Colab VM.

**Courses 01-05 are the shippable prefix and can go as soon as they have audio** — one Colab pass
per course over its `narration` fields. Nothing later is referenced by anything already written.

## What this is

A standalone concept app: its own scenes + courses. The render engine is the **`@graphlearning/flow`**
package and the app shell is **`@graphlearning/shell`** — both pinned by version, so an engine change
never lands here until this repo upgrades and re-verifies.
Each **section** = `(scene, slide, narration)`; the left scene is a react-flow diagram or a code
snippet, the right slide is markdown. One section = one slide = one video segment.

This concept is **code-heavy** — SQL carries much of the teaching — so many sections will ride a
`kind: 'code'` card rather than a diagram, the same way `../databricks-data-engineer` does. It also
leans on `kind: 'table'` for the comparison boards this subject is full of (stage types, table types,
INFORMATION_SCHEMA vs ACCOUNT_USAGE, scaling policies).

## Course arc — the ten-course spine (106 sections planned)

| # | id | Title | Secs | Notes source |
|--:|----|-------|-----:|--------------|
| 1 | `platform` | Platform & Architecture | 10 | Class 1, PPT |
| 2 | `warehouses` | Virtual Warehouses & Caching | 10 | Class 1, 6 |
| 3 | `storage` | Storage, Tables & Views | 11 | Class 2, 4 |
| 4 | `loading` | Loading & Unloading Data | 11 | Class 3, 4 |
| 5 | `transformation` | Streams, Tasks, Dynamic Tables & Procedures | 12 | Class 4, 5, 6, 7 |
| 6 | `governance` | Access Control & Governance | 11 | Class 2, 5, 8 |
| 7 | `continuity` | Time Travel, Cloning & Recovery | 9 | Class 2, 8 |
| 8 | `performance` | Performance & Optimization | 10 | Class 7, 9 |
| 9 | `finops` | Cost, Monitoring & Data Quality | 10 | Class 7, 8 |
| 10 | `datacloud` | Sharing, Apps & Cortex AI | 12 | Class 6, 7, 9, 10 |

Two of these courses are **merges**, made when the twelve-course draft was compressed to ten — no
topic was dropped, and `COURSE-PLAN.md` carries the audit of where each one landed:
- **`transformation`** = pipelines + programmability. Both answer "how do I change data once it is
  in?" — declaratively (streams, tasks, dynamic tables) or procedurally (Snowflake Scripting, UDFs).
- **`datacloud`** = sharing + ecosystem. Snowflake's own framing: everything that crosses the account
  boundary — data shared out, tools and clients connecting in, Cortex on top.

The per-section plot lives in [`COURSE-PLAN.md`](./COURSE-PLAN.md) and, per course, in the header
comment of `src/content/<course>/index.ts`.

**Ships as a prefix.** Courses 1-5 are the spine everything later assumes (54 sections) and can go
live before 6-10 exist. That only holds because of the rule below.

**No course cross-references by number.** Unlike `../data-warehousing`, whose ported narration names
its neighbours ("recall module two") and is therefore frozen into its order, this narration is
authored fresh and must refer to neighbours by NAME ("when we looked at micro-partitions") or not at
all. Until a course's wavs exist, its order is still free; after that, section ids are pinned by the
wav filenames.

**`datacloud` (10) is the optional tail.** Trimming its AI half from v1 was discussed and deferred,
not decided — it is last precisely so the call can be made late, and nothing before it points
forward. `semantic-views` sits in it (next to Cortex Analyst, which is what makes a semantic view
pay off) rather than in `transformation`; that placement is a judgment call, not a constraint.

## Where the content comes from

`../ITC-snowflake-notes/` — an instructor's set from ITC (Om Sharma): ten class decks
(`Snowflake OM Class 1-10.pdf`), four topic notes (why Snowflake · architecture · table types ·
editions & pricing), a stage note, three PPTX decks and seven diagram images. The class-by-class
topic inventory is in [`COURSE-PLAN.md`](./COURSE-PLAN.md).

**They are a SOURCE, not a script.** Nothing ports verbatim: the arc above regroups the ten teaching
sessions into twelve coherent courses (the sessions interleave topics — Class 8 alone covers
sampling, DMFs, alerts, Time Travel and network policies), and every `.md` / `.slide` / `.tts` and
every wav is authored fresh, the `../apache-spark` way.

Three rules this source imposes:

1. **Azure is the worked cloud.** The notes walk storage integration and Snowpipe auto-ingest on
   Azure (storage account → container → queue → event subscription → notification integration).
   Diagrams stay cloud-neutral where the idea is cloud-neutral; where one cloud must be named, it is
   Azure. `../aws` already owns the AWS story.
2. **No volatile numbers in narration.** A wav cannot be edited. Credit prices, $/TB and edition
   pricing change — the notes say so themselves — so they belong on the slide (editable) and never
   in the spoken script. Architectural constants are fine and expected: 50-500 MB micro-partitions,
   24 h result cache (31 d max), 64-day load metadata, 7-day Fail-safe, 1 vs 90-day Time Travel,
   60-second billing minimum, 128 MB VARIANT.
3. **Cite nothing the notes do not cover, in v1.** Snowpipe Streaming, data clean rooms and
   multi-statement transactions are real Snowflake but absent from this source; they are candidate
   additions, not silent inclusions.

## Overlap policy — what belongs to a sibling repo

| Belongs to | Stays out of here |
|---|---|
| `../data-warehousing` | dimensional modeling, facts/dims, SCDs, star vs snowflake **schema** |
| `../sql` | SQL fundamentals — joins, windows, grouping |
| `../databricks-data-engineer` | the lakehouse/Delta framing of the same jobs |
| `../apache-spark` | distributed execution theory |

Note 1 of the ITC set is a Snowflake-vs-Databricks comparison. That is **positioning** for
`platform` §02, not a Databricks lesson.

## Layout

```
src/scenes/          scenes + registry, one folder per course
src/content/         courses → sections + registry
src/main.tsx         mounts <ConceptApp> — the whole app; the router, section view,
                     slide panel, catalog and narration are @graphlearning/shell
src/theme.css        this repo's three brand tokens — its entire design surface
scripts/             concept.json (publishing identity) · titles.json · colab notebook ·
                     check-content.mjs. The record/capture/thumb TOOLS are
                     @graphlearning/shell bins (npm run record · thumb · gen:desc · …)
public/audio/<course>/   narration wavs
```

## Palette note

`--brand` is Snowflake blue `#29b5e8`. It is COOL, so the slide's `###` counter tone is warm amber
`#f5a742` — the same inversion `../sql` and `../data-warehousing` use. In the catalog it sits beside
dw `#5b8cff`, sql `#34e0d0` and python `#4b8bbe`; keep scene accents off those three hues.

## Build & verify

- `npm install` → `npm run dev`; `npm run build` must stay clean.
- `npm run check` gates four silent failures — ones that build green and break only on screen:
  fixed 210×96 leaf cards · non-fitting slides · a `focus:` naming no node in its scene · **a
  section with no wav** (it narrates silence and records a silent segment). Run it with build +
  `tsc --noEmit` every slice; neither of those catches a broken frame.
  The wav guard is **gated per course** on that course having at least one wav: a course still being
  written has none, and ten known-missing files on every run just trains you to ignore the output.
  The moment a course gets its first wav, every section in it is required to have one — which is the
  failure it exists to catch (a renamed section id, or one file that never came back from Colab).
  It does NOT carry the `icon:` registry guard the older repos have — see the comment at the top of
  `scripts/check-content.mjs` for why (and note that guard is what makes `npm run check` throw
  ENOENT in `../data-warehousing`, `../sql` and `../linux`).
- **`node .tmp/check-icons.mjs`** fills that gap, by reading the engine SOURCE at `../ui-flow`. It
  lives in `.tmp` precisely because it needs a sibling checkout that CI does not have. Run it after
  authoring scenes: an unregistered `icon:` is silent, and draws the pattern's default glyph instead
  (course 05 shipped a finalizer card wearing a database icon until this caught it).
- No test runner. Bar for a change: **build clean + visually correct** at the relevant route.
- Adding a scene: define in `src/scenes/<course>/`, register in that folder's `index.ts`.
- Adding content: add a `Section` under `src/content/<course>/`, list it in that folder's `index.ts`.

## Scene shape — the pane is near-square

Inherited from `../data-warehousing`, which paid for the lesson: a top-level `flow: 'LR'` renders as
a thin strip with dead space above and below. **The shape that fills this pane is a VERTICAL spine of
WIDE rows** — top level TB (the default), each container going wide via `cols` or its own inner
`flow: 'LR'`. Keep boards roughly inside 0.62-1.9 aspect.

Three authoring rules:
- **An edge label between two SIDE-BY-SIDE nodes must be a word or two.** The pill is sized to its
  text and centred on the path, so in the narrow gap inside an `LR` container a long label lands on
  the cards instead of between them. Vertical edges in the top-level spine have room for a sentence;
  horizontal ones inside a container do not.
- **An edge that SKIPS A RANK must carry NO label at all.** In a branching scene an edge from row 1
  to row 3 routes past whatever sits in row 2, and its label pill rides the midpoint — landing on
  that node. Shortening does not help: in `governance/system-roles` even the single word "above"
  sat on the USERADMIN card. Only edges between ADJACENT rows can be labelled, and only those in the
  top-level spine can carry a sentence.
- **The card carries the claim; the EDGE LABEL carries the explanation.** A label is ~24 chars over
  two wrapped lines, a `sub` ~40; an unbreakable token caps at 14 in a label, 20 in a sub —
  `TIMESTAMP_NTZ` and `SYSTEM$CLUSTERING_DEPTH` will not fit a label.
- **When a scene draws the rows, the slide must not repeat them.** The slide keeps the claim, the
  scene keeps the data. A slide may say LESS than the wav, only never something different.

**Slide height: aim under ~1000, not under the 1100 guard.** `npm run check` models the 4K pane
(~1080 design px), so a slide at 1090 passes and is correct for capture — but it CLIPS in a laptop
browser window, which is where review happens. `.tmp/measure-slides.mjs` (gitignored) prints every
slide's modelled height using the guard's own model:

```
node .tmp/measure-slides.mjs
```

The usual fix is not deleting content. In order of preference: **cut a code fence the scene already
draws** (that is the house rule anyway, and fences are the most expensive thing on a slide), fold a
one-sentence `###` section into its neighbour, or drop a "next up" teaser the narration already
speaks.

## Working agreement

Per the workspace [`CLAUDE.md`](../CLAUDE.md): **author the whole course — scenes, slides and
narration — then verify it and hand over a dev-server URL.** Review happens on the rendered frames in
Chrome. No approval gates, no ASCII sketches.

The bar that does not move: `npm run build` + `tsc --noEmit` + `npm run check` clean, AND every new
section looked at in the browser. A guard passing is not the same as a frame being right — the first
defect in course 01 (an edge label wide enough to cover the cards it ran between) passed all three.
