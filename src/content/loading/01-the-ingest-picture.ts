import type { Section } from '../types'

export const theIngestPicture: Section = {
  id: 'the-ingest-picture',
  title: 'File, stage, COPY, table',
  scene: 'ingest-picture',
  slide: `## Every load is the same four things

**A file** → **a stage** → **\`COPY INTO\`** → **a table**. Learn those four and the rest of this course is detail.

### The one people get wrong is the stage
A stage is **not** a table and holds no rows. It is a named pointer that carries three facts:

- **A location** — inside Snowflake, or a container you own
- **Credentials** — how Snowflake is permitted to read there
- **A file format** — how to parse what it finds

### Two ways to run it
- **Bulk** — you issue \`COPY INTO\`, on your warehouse, when you choose
- **Continuous** — **Snowpipe** issues it for you, serverless, as files arrive

> Same four boxes either way. Only who presses the button changes.`,
  narration:
    "Getting data in. Every load in Snowflake, however it is triggered, is the same four things: a file, a stage, a COPY command, and a table. If you hold those four in your head, everything else in this course is detail hanging off one of them. The file is whatever you have — a CSV export, a Parquet file from a data lake, JSON from an API. The table is the destination, and it must already exist; COPY will not create it for you. The command in the middle is COPY INTO, and we'll spend three sections on it. The box people get wrong is the second one, so let's be precise. A stage is not a table. It holds no rows, you cannot join to it, and nothing in it is queryable as structured data until it's loaded — although, usefully, you can select from it to preview what's there. A stage is a named pointer that carries three facts: a location, which is either storage Snowflake manages for you or a container in your own cloud account; credentials, meaning how Snowflake is permitted to read that location; and optionally a file format, meaning how to parse whatever it finds. That's it. Three facts with a name. Then there are two ways to drive the load. Bulk loading is you running COPY INTO, on your warehouse, when you decide — nightly, hourly, or by hand. Continuous loading is Snowpipe, where Snowflake watches for new files arriving and runs the COPY for you on serverless compute, usually within about a minute. And here's the thing worth noticing: it's the same four boxes either way. Snowpipe isn't a different mechanism, it's the same COPY wrapped in an object that gets triggered by an event. Only who presses the button changes.",
}
