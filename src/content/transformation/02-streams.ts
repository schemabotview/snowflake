import type { Section } from '../types'

export const streamsSection: Section = {
  id: 'streams',
  title: 'Streams',
  scene: 'streams',
  slide: `## A stream is a bookmark

Not a queue, not a copy, not a log. A stream is **an offset** — a position in a table's history — plus the machinery to show you what has happened since.

### What you get when you query it
The source table's **own columns**, for the changed rows, plus three:

- \`METADATA$ACTION\` — \`INSERT\` or \`DELETE\`
- \`METADATA$ISUPDATE\` — \`TRUE\` when that pair is really an update
- \`METADATA$ROW_ID\` — a stable id for the row over time

### There is no UPDATE action
An update appears as a **DELETE and an INSERT**, both flagged \`ISUPDATE\`. That mirrors the storage layer, where an update rewrites partitions rather than editing rows.

### It costs nothing to keep
No storage, because there is nothing in it. The rows come from the table's own history, which exists anyway.`,
  narration:
    "A stream is the most misunderstood object in Snowflake, so let's be precise. A stream is not a queue. It's not a copy of your changed rows. It's not a log file. A stream is an offset — a bookmark recording a position in the table's history. That's all it stores. When you query a stream, Snowflake works out what has changed in the source table since that bookmark, and shows you those rows, in the same shape as the source table — same column names, same order — plus three extra columns. METADATA dollar ACTION tells you whether the row is an INSERT or a DELETE. METADATA dollar ISUPDATE is TRUE when that insert-and-delete pair is really an update. And METADATA dollar ROW underscore ID is a stable identifier for the row over time, which is useful when you need to track one row through several changes. Notice what's missing from that list: there is no UPDATE action. An update to a row shows up as two records — a DELETE of the old version and an INSERT of the new one, both with ISUPDATE set to TRUE. That feels odd the first time, and it is completely consistent with what you already know about storage: Snowflake doesn't edit rows in place either. An update rewrites partitions. The stream is telling you the truth about what the storage layer did. Two consequences worth holding on to. First, a stream costs nothing to keep. There's no storage charge, because there's nothing in it — the rows come from the table's own history, which exists anyway for Time Travel. You can create streams freely. Second, because it's just an offset, several streams on the same table are entirely independent. Two consumers, two bookmarks, neither affecting the other.",
}
