import type { Section } from '../types'

export const streamTaskMerge: Section = {
  id: 'stream-task-merge',
  title: 'The stream–task–MERGE loop',
  scene: 'stream-task-loop',
  slide: `## The loop

The pattern the first half of this course builds to, running forever:

1. Rows land in **RAW** — \`COPY\` or Snowpipe
2. The **stream** now has something to show
3. The **task** wakes, skipping cheaply if the stream is empty
4. **\`MERGE\`** applies inserts, updates and deletes to the target in one statement

### Why this is production-grade
- **Consumed exactly once.** Reading a stream *inside a DML statement* advances its offset. A bare \`SELECT\` does not — which is how you inspect one safely.
- **All or nothing.** If the task fails, the DML rolls back and the offset stays put. The next run picks up the same changes.
- **Safe to re-run.** \`MERGE\` lands the same final state whether it runs once or three times.

> Those three properties are why this is still the default pattern, years after dynamic tables arrived.`,
  narration:
    "Now let's put the pieces together into the pattern you'll actually build. Rows land in a raw table, from a COPY or from Snowpipe. A stream on that raw table now has something to show. A task wakes on its schedule, checks the stream, and skips cheaply if there's nothing there. And when there is something, it runs a MERGE that applies the changes to the target table. MERGE is what makes this one statement instead of three. It matches source rows against target rows on a key, and then: when matched and the action is a real delete, delete; when matched otherwise, update; when not matched and the action is an insert, insert. Three kinds of change, one statement, one pass. Now, three properties make this production-grade rather than merely working, and they're worth understanding because they're not obvious. First, a stream is consumed exactly once — and the trigger for that is specific. Reading a stream inside a DML statement advances its offset. A bare SELECT from the stream does not. That's deliberate and it's useful: you can inspect a stream, see what's pending, run it past a colleague, without consuming anything. Second, it's atomic. If the task fails partway, the DML rolls back and the offset stays exactly where it was. The next run sees the same changes again. You don't get half-applied state and you don't lose changes. Third, it's idempotent. MERGE lands the same final state whether it runs once or three times, because it's expressed as a reconciliation rather than as a set of increments. Put those together and you have a loop you can re-run after a failure without thinking hard, which is why this is still the default pattern years after dynamic tables arrived.",
}
