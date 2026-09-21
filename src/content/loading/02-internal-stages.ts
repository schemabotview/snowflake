import type { Section } from '../types'

export const internalStagesSection: Section = {
  id: 'internal-stages',
  title: 'Internal stages',
  scene: 'internal-stages',
  slide: `## Three stages you already have

Internal stages live in storage Snowflake manages. Two of the three exist without you creating anything.

- **\`@~\`** — your **user stage**. Private to you, loads into any table
- **\`@%orders\`** — the **table stage**. Shared, but that one table only
- **\`@raw_stage\`** — a **named stage** you create: a schema object with its own privileges, and it can carry a file format

Use a named stage for anything repeatable.

### Two things to know
Staged files **cost storage** like anything else — clean them up, or use \`PURGE\`. And they carry **no Time Travel and no Fail-safe**, so a stage is not a backup.

> You can \`SELECT $1, $2 FROM @raw_stage/orders.csv\` before loading — the fastest way to see what you are about to inherit.`,
  narration:
    "Internal stages are locations inside storage that Snowflake manages for you — physically it's still S3 or Blob Storage underneath, but you don't see a bucket and you don't hold any credentials. There are three kinds, and pleasingly, two of them already exist. The user stage is written at-tilde. Every user gets one automatically, it's private to you, and files there can be loaded into any table. It's the right place for one-off work — you've been handed a spreadsheet and you want it in a table this afternoon. The table stage is written at-percent followed by the table name. Every table has one, created with it. Anyone with privileges on the table can use it, but files there can only be loaded into that one table. It's convenient when the files and the table have an obvious one-to-one relationship. A named stage is the third kind, and this one you create: CREATE STAGE, and it becomes a schema-level object like a table or a view. That means you can grant privileges on it specifically, you can attach a default file format to it so COPY doesn't need one, and it shows up in your DDL alongside everything else. For anything repeatable — any real pipeline — use a named stage. Two practical notes. Files sitting in an internal stage cost you storage, exactly like table data does. They don't clean themselves up, so either remove them or use the PURGE option on COPY to delete each file once it has loaded successfully. And staged files have no Time Travel and no Fail-safe, so a stage is not a backup of anything. One last tip that saves a lot of guessing: you can select directly from a stage before you load. Select dollar-one, dollar-two from at-stage slash the file name shows you the raw columns as Snowflake will see them.",
}
