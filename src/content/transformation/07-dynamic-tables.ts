import type { Section } from '../types'

export const dynamicTablesSection: Section = {
  id: 'dynamic-tables',
  title: 'Dynamic tables',
  scene: 'dynamic-tables',
  slide: `## Declare the result, not the steps

Write the \`SELECT\` you wanted, add a **\`TARGET_LAG\`**, and stop. No stream, no task, no \`MERGE\`, no dependency order to maintain.

### TARGET_LAG is a promise, not a schedule
"At most five minutes behind the source." Snowflake decides when to refresh in order to keep that promise — including refreshing a chain of dynamic tables in the right order.

### Two refresh modes
- **Incremental** — works out what changed and merges only that. What you want.
- **Full** — reruns the query and replaces everything.
- **\`AUTO\`** chooses, and will **fall back to full silently**.

### What breaks incremental
\`UNION\`, \`PIVOT\`, \`MINUS\`, \`INTERSECT\`, and non-deterministic functions like \`RANDOM()\` or \`CURRENT_TIMESTAMP\`.

> A pipeline that quietly switched to full refresh is the main way dynamic tables get expensive. Check the refresh history rather than assuming.`,
  narration:
    "Dynamic tables are the declarative option, and the pitch is a subtraction: look at everything you stop writing. No stream to create. No task to schedule and remember to resume. No MERGE with its three WHEN branches. And on a multi-step pipeline, no dependency graph to maintain — if you have three dynamic tables stacked on each other, Snowflake works out the order. What you write instead is the SELECT you wanted all along, plus one setting: TARGET_LAG. And it's worth being precise about what target lag means, because it is not a schedule. Saying five minutes does not mean refresh every five minutes. It's a promise about freshness: this table will never be more than five minutes behind its sources. Snowflake decides when to actually refresh in order to keep that promise, and if the source hasn't changed, it may not refresh at all. There are two refresh modes. Incremental analyses the query, works out what changed since last time, and merges just that — which is what makes dynamic tables economical. Full refresh reruns the entire query and replaces the result. You can set the mode explicitly, or use AUTO and let Snowflake choose. Here's the thing to watch. AUTO will fall back to full refresh silently when your query uses something incremental can't handle — UNION, PIVOT, MINUS, INTERSECT, or a non-deterministic function like RANDOM or CURRENT_TIMESTAMP. Your pipeline still works. It just costs dramatically more, because every refresh is recomputing everything. This is the main way dynamic tables get expensive, and nothing will tell you unless you look. Check the refresh history and confirm you're getting incremental refreshes, rather than assuming. One more trap: you can set a downstream table's lag to DOWNSTREAM so it inherits from its consumer — but if every table in the chain says DOWNSTREAM, nothing ever refreshes at all.",
}
