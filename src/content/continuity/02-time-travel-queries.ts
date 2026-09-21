import type { Section } from '../types'

export const timeTravelQueries: Section = {
  id: 'time-travel-queries',
  title: 'Querying the past',
  scene: 'time-travel',
  slide: `## Three ways to name a moment

- **\`AT(TIMESTAMP => …)\`** — a wall-clock moment
- **\`AT(OFFSET => -60*5)\`** — relative, in seconds back from now
- **\`BEFORE(STATEMENT => '<query_id>')\`** — the state **just before** a given statement ran

### The third one is the one you will use
You rarely know the second something went wrong. You can always find the **query id** in \`QUERY_HISTORY\`. And you want \`BEFORE\`, not \`AT\` — the state that statement *destroyed*.

### It is an ordinary table expression
Nothing is restored by reading. So you can:

- **Diff** the past against the present — \`MINUS\` in both directions
- **Join** an old version to a current one
- \`CREATE TABLE … AS SELECT\` from it, to keep what you found

> \`AT\` is inclusive of the moment; \`BEFORE\` is exclusive. When recovering from a bad statement, \`BEFORE\` is almost always what you mean.`,
  narration:
    "Querying the past is a clause on an ordinary SELECT, and there are three ways to say which past you mean. The first is a timestamp: AT, TIMESTAMP, and a moment. Use that when you know the wall-clock time — before the nightly job at two, or at nine this morning when the report was still right. The second is an offset in seconds: AT, OFFSET, minus sixty times five for five minutes ago. Handy for quick checks, and it reads well when you're working interactively. The third is the one you'll actually use in anger: BEFORE, STATEMENT, and a query id. That gives you the table exactly as it stood immediately before that statement executed. And the reason it's the useful one is practical — you almost never know the exact second something went wrong, but you can always find the offending statement in QUERY_HISTORY and copy its id. Note BEFORE rather than AT there. AT that statement includes its effects; BEFORE gives you the state it destroyed, which is what you're after. Now the part people underuse. Reading the past restores nothing. It's just a table expression, so everything you can do with a table, you can do with a past version of it. Diff it against the present with MINUS in both directions, and you get exactly the rows that changed. Join yesterday's version to today's on the key and compare columns. Count both and see how many rows the bad statement touched. Create a new table from it to keep what you found. That's worth doing before you change anything, because understanding what happened is usually more valuable than reflexively restoring — and unlike a backup restore, looking costs you nothing but a few credits.",
}
