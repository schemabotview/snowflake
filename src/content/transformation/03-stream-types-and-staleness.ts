import type { Section } from '../types'

export const streamTypesAndStaleness: Section = {
  id: 'stream-types-and-staleness',
  title: 'Stream types, and how they go stale',
  scene: 'stream-types',
  slide: `## Three kinds, and the way they die

- **Standard** — inserts, updates and deletes. What you want for keeping a target in step.
- **Append-only** — inserts only. Cheaper and simpler when the source never deletes.
- **Insert-only** — inserts on external tables, for files appearing in a lake.

### Staleness is the failure that matters
A stream's offset sits in the source table's **Time Travel window**. Let it age past that window and the stream is **stale**: the unconsumed changes are gone, permanently. There is no repair — you recreate it and accept the gap.

### Snowflake does help
While a stream is unconsumed, retention is **extended to cover the offset** — up to 14 days, governed by \`MAX_DATA_EXTENSION_TIME_IN_DAYS\`.

> Consume on a schedule, and watch \`STALE_AFTER\` on anything that matters.`,
  narration:
    "There are three types of stream. A standard stream — the default — tracks everything: inserts, updates, deletes, and truncates. That's what you want when you're keeping a target table in step with a source. An append-only stream tracks inserts only. Updates and deletes simply don't appear. If your source is genuinely append-only, like an event log, this is the better choice: it's cheaper to maintain and the consuming logic is simpler, because you never have to think about the delete case. An insert-only stream is the external-table equivalent, for files appearing in a data lake. Now the part that actually bites people in production: staleness. A stream's offset points into the source table's Time Travel window. If the stream isn't consumed and the offset falls outside that window, the stream goes stale. And stale is not a warning state — it's terminal. The historical data behind those unconsumed changes is gone, and there is no way to recover them. You drop the stream, recreate it, and accept that whatever changed in the gap was never processed by your pipeline. Snowflake does help, and it's worth knowing how. While a stream has unconsumed changes, Snowflake automatically extends the source table's data retention to cover the stream's offset — by default up to fourteen days, regardless of your edition, governed by a parameter called MAX_DATA_EXTENSION_TIME_IN_DAYS. So a stream on a table with one day of Time Travel doesn't die after one day. But it does die after fourteen. The practical advice: consume your streams on a schedule rather than when someone remembers, and monitor the STALE_AFTER timestamp on any stream whose data you can't afford to lose.",
}
