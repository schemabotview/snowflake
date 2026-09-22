# snowflake — GraphL concept repo

The **Snowflake** concept app for [GraphL](https://graphl.in). One section = a left **scene**
(react-flow diagram or code snippet) + a right **slide** (markdown) + a **narration** script,
rendered responsively (4K capture · laptop web app · mobile) and captured to video.

> **Status: published, 2026-09-22.** All ten courses — **106 sections, 106 scenes, 106 narration
> wavs (151.5 min)** — live at **[graphl.in/snowflake](https://graphl.in/snowflake/)**. `npm run
> build`, `tsc --noEmit` and `npm run check` are clean. All ten courses are recorded: **157.4 min of
> 4K masters**, with thumbnails and chaptered descriptions. Remaining: upload.

Workspace-wide model, pipeline and conventions: the workspace [`README.md`](../README.md).
Authoring rules specific to this concept: [`CLAUDE.md`](./CLAUDE.md). The full section plot:
[`COURSE-PLAN.md`](./COURSE-PLAN.md).

## The course arc (10 courses, 106 sections planned)

| # | Course | What it covers |
|--:|--------|----------------|
| 1 | **platform** | What Snowflake is, the three layers, the object model, editions and what an account costs. |
| 2 | **warehouses** | Compute: sizes, scale-up vs scale-out, auto-suspend — and the three caches that mean not running it. |
| 3 | **storage** | Micro-partitions and pruning, the table types, VARIANT, and the three kinds of view. |
| 4 | **loading** | File to table: stages, file formats, `COPY INTO` and its options, Snowpipe, and unloading. |
| 5 | **transformation** | Streams, tasks and dynamic tables; Snowflake Scripting, cursors, exceptions, UDFs. |
| 6 | **governance** | The role model, masking and row access policies, tags, network policies, the usage metadata. |
| 7 | **continuity** | Time Travel, UNDROP, Fail-safe, zero-copy cloning and a real recovery drill. |
| 8 | **performance** | Pruning, clustering, search optimization, query acceleration — and how to prove a change worked. |
| 9 | **finops** | The two bills, resource monitors, chargeback, alerts and data-quality metrics. |
| 10 | **datacloud** | Secure sharing, the Marketplace, connectors, dbt, Snowpark, Streamlit and Cortex AI. |

**Courses 1-5 are the shippable prefix** (54 sections). No section's narration references a
neighbouring course by number, so the tail can be authored, reordered or trimmed without touching
audio that already exists.

## Where the content comes from

[`../ITC-snowflake-notes/`](../ITC-snowflake-notes) — an instructor's set from ITC (Om Sharma): ten
class decks, four topic notes, a stage note, three PPTX decks and seven diagrams. It is a **source,
not a script**: the arc regroups ten interleaved teaching sessions into twelve coherent courses, and
every slide, script and wav is authored fresh. Azure is the worked cloud, matching the notes.
`COURSE-PLAN.md` carries the class-by-class inventory.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # must stay clean
npx tsc --noEmit
npm run check      # leaf-card, slide, focus and missing-wav guards
```

The render engine (`@graphlearning/flow`) and the app shell (`@graphlearning/shell`) are consumed as
**published packages**, pinned by version — never as workspace symlinks. `file:../ui-flow` is for
local work only and must never be committed; CI has no sibling checkout.

## Layout

```
src/content/    courses → sections (one file per section) + registry
src/scenes/     hand-authored scenes + registry, one folder per course
src/main.tsx    mounts <ConceptApp> from @graphlearning/shell
src/theme.css   --brand / --brand-hover / --accent-2 — this repo's whole design surface
scripts/        concept.json · titles.json · colab notebook · check-content.mjs
public/audio/<course>/   narration wavs
```
