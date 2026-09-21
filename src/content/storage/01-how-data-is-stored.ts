import type { Section } from '../types'

export const howDataIsStored: Section = {
  id: 'how-data-is-stored',
  title: 'What happens to a row you load',
  scene: 'into-micro-partitions',
  slide: `## Snowflake does not keep what you gave it

Whatever you load — CSV, Parquet, an \`INSERT\` — Snowflake **reorganises it** into its own format and stores that on cloud object storage.

### Four things happen on the way in
- **Columnar** — each column's values stored together
- **Compressed** — per column, by what it holds
- **Encrypted** — AES-256, always, nothing to configure
- **Measured** — min, max and counts recorded per chunk

### The result: micro-partitions
Immutable files you never see, never name and never manage.

### And the chores are gone
No indexes to design. No statistics job. No vacuum, no reorg, no partition maintenance.

> Arriving from Postgres or Oracle, the instinct is to hunt for those knobs. They are not hidden — they do not exist.`,
  narration:
    "Let's go a layer down, into storage — because almost every performance and cost behaviour you'll meet later is explained by what happens here. The first thing to understand is that Snowflake does not keep the data in the shape you handed it over. You load a CSV, or a Parquet file, or you run an INSERT. What gets stored is not that. Snowflake reorganises the rows into its own internal format and writes that to the cloud provider's object storage. Four things happen on the way in. It's rearranged into columnar form, so all the values of one column sit together rather than each row sitting together. It's compressed, column by column, with a scheme chosen for what that column actually holds — a column of country codes compresses very differently from a column of timestamps. It's encrypted with AES-256, always, with no setting to forget. And it's measured: Snowflake records the minimum and maximum value of each column, the number of rows, the number of distinct values, for every chunk it writes. What comes out the other side is a set of micro-partitions: immutable files that you never see, never name, and never manage. And that last part has a consequence worth dwelling on. There are no indexes to design or rebuild. There's no statistics job to schedule, because the statistics are written as the data lands. There's no vacuum, no reorganisation, no partition maintenance. If you're arriving from Postgres or Oracle or SQL Server, your instinct will be to go looking for those knobs, and you'll assume they're hidden somewhere in the interface. They're not hidden. They genuinely do not exist, and the next few sections are about what replaced them.",
}
