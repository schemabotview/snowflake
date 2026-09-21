import type { Section } from '../types'

export const copyIntoSection: Section = {
  id: 'copy-into',
  title: 'COPY INTO',
  scene: 'copy-into',
  slide: `## The workhorse

\`\`\`sql
COPY INTO sales.raw.orders
FROM   @raw_stage/2026/02/
PATTERN = '.*orders_.*[.]csv'
  FILE_FORMAT = (FORMAT_NAME = my_csv)  ON_ERROR = SKIP_FILE;
\`\`\`

The target **must already exist** — \`COPY\` never creates a table.

### Three ways to say which files
**Name the stage** and stop · **\`FILES = (…)\`**, up to 1000 names · **\`PATTERN\`**, a regex over the whole path.

A **path prefix** narrows the listing *before* either is applied — on a stage with a million files, that is seconds against minutes.

### It can transform on the way in
Select from the stage instead of naming it: cast, reorder, compute, add \`CURRENT_TIMESTAMP()\`. **Projection and expressions only** — no joins, no aggregates.`,
  narration:
    "COPY INTO is the command that does the actual work, and it has a large grammar around a small core. The core is this: COPY INTO a table, FROM a stage, with a file format. The target table must already exist — COPY will never create one for you, which surprises people coming from tools that infer a schema. Then there are three ways to say which files you mean. The simplest is to name the stage and stop: Snowflake loads everything in it that hasn't already been loaded into that table. Second, FILES equals a list of explicit names — useful when you know exactly which ones you want, up to a thousand of them. Third, PATTERN equals a regular expression, matched against the whole path, which is what you want for something like all files whose name starts with orders and ends in dot csv. There's a fourth thing worth knowing that isn't really a selector: a path prefix on the stage itself. Writing at-stage slash twenty-twenty-six slash oh-two narrows the listing before any pattern is applied. On a stage holding a million files that's the difference between a load that starts in seconds and one that spends minutes just enumerating. If you control the layout, partition your paths by date and use them. And the capability nobody expects: COPY can transform on the way in. Instead of naming the stage directly, you select from it — casting columns to the types you want, reordering them, multiplying a currency, adding a CURRENT_TIMESTAMP as a load-time column, dropping columns you don't need. It's projection, casting and simple expressions only: no joins, no aggregates, no window functions. But that's enough to land clean, typed data rather than a pile of strings you tidy up afterwards.",
}
