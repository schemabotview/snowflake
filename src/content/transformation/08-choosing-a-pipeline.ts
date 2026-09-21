import type { Section } from '../types'

export const choosingAPipeline: Section = {
  id: 'choosing-a-pipeline',
  title: 'Choosing a pipeline',
  scene: 'choosing',
  slide: `## Which one, and when

### Dynamic table — try this first
You write one \`SELECT\` and a freshness target. Joins allowed, multi-step order worked out for you. Give up: exact control of *when*, and any side effect beyond producing the table.

### Streams and tasks — when it cannot express the job
You need precise timing, a call out to something, conditional branching, DDL, or a step that isn't producing a table. More to write and more to operate, and nothing is out of reach.

### Materialized view — a narrow, useful case
One large table, filtered or aggregated the same way, far more often than it changes. **No joins.**

### Procedures — when the logic is genuinely procedural
Loops, conditions, dynamic SQL. Usually called *by* a task rather than used instead of one.

> The question is not which is most powerful. It is **how much scheduling you want to own**.`,
  narration:
    "So which do you reach for? Here's a decision rule that holds up. Start with a dynamic table. You write one SELECT and a freshness target, and you're done. Joins are allowed, unlike a materialized view. Multi-step ordering is handled for you, unlike a task graph. And there's simply less to operate: nothing to resume, nothing to monitor for having silently stopped. What you give up is exact control over when things run, and the ability to do anything other than produce that table. Drop down to streams and tasks when the dynamic table can't express the job. That's a real set of cases, not a rare one. You need something to happen at precisely two in the morning, not merely within an hour of the source changing. You need to call out to an external function or send a notification. You need conditional branching — do this only if that other thing produced rows. You need DDL, or a step whose purpose isn't producing a table at all. All of that is streams and tasks territory, and there's nothing wrong with living there. Materialized views occupy a narrow but genuinely useful slot: one large table, filtered or aggregated the same way, far more often than the underlying data changes. The no-joins limit rules them out of most marts, which is exactly why dynamic tables exist. And procedures? They're not really an alternative to the others — they're what a task calls when one statement isn't enough. You reach for a procedure when the logic is genuinely procedural: loops, conditions, dynamic SQL built from parameters. The framing to keep is this: the question is not which of these is most powerful. It is how much of the scheduling you want to own.",
}
