import type { Section } from '../types'

export const unloadingSection: Section = {
  id: 'unloading',
  title: 'Unloading data',
  scene: 'unloading',
  slide: `## The same command, pointing the other way

\`COPY INTO @stage/path\` rather than \`COPY INTO table\` — Snowflake tells them apart by the \`@\`. The source can be a **whole query**, so filter, join and aggregate on the way out.

### It writes many files by default
One per parallel thread, each suffixed. Right for volume, wrong for the colleague who wanted one spreadsheet.

- **\`SINGLE = TRUE\`** — one file, but it **serialises** the unload
- **\`MAX_FILE_SIZE\`** — cap each file, keep the parallelism
- **\`OVERWRITE\`** — otherwise a re-run refuses to replace existing files

\`GET\` brings the files to your machine — client-side, like \`PUT\`.

> And that is the course: the same four boxes, in reverse.`,
  narration:
    "Unloading is the mirror image, and it uses the same command. COPY INTO a location, rather than COPY INTO a table — Snowflake tells them apart by whether the target starts with an at-sign. The source can be a whole query rather than just a table name, which is more useful than it sounds: you can filter to the rows you need, join to look up descriptions, aggregate to a summary, and unload exactly that. You're not obliged to dump a table and tidy it afterwards. Pick your format on the way out. Parquet if the destination is another data system, CSV if a human or a finance package is going to open it — and remember HEADER equals TRUE for CSV, or you'll hand somebody a file with no column names. Now the one behaviour that surprises everyone. By default, Snowflake writes many files, not one. It unloads in parallel, one file per thread, each with a numeric suffix appended to the prefix you gave. That's exactly right when you're exporting a hundred gigabytes, and exactly wrong when a colleague asked you for a spreadsheet. Two options control it. SINGLE equals TRUE forces exactly one file — convenient, but it serialises the whole unload, so don't do it to a very large result unless you're willing to wait. MAX_FILE_SIZE caps how big each file gets while keeping the parallelism, which is usually the better answer. Also useful: OVERWRITE, because by default Snowflake refuses to write over existing files, which will stop a re-run. To get the files onto your own machine from an internal stage, use GET — and like PUT, it's client-side, so SnowSQL or a driver, not the browser. And that's the loading course. File, stage, COPY, table — and the same four boxes in reverse.",
}
