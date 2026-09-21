import type { Section } from '../types'

export const resultCacheSection: Section = {
  id: 'result-cache',
  title: 'The result cache',
  scene: 'result-cache',
  slide: `## The query that never runs

If the exact same query has been run recently and nothing underneath it has changed, **cloud services returns the stored result** — no warehouse, no credits, milliseconds.

### Four conditions, all required
- **Identical query text**, character for character — even a different alias or an extra space misses
- **Untouched data** — any DML on an underlying table invalidates it
- **Deterministic** — no \`RANDOM()\`, no \`CURRENT_TIMESTAMP\`, no external functions
- **Sufficient privileges** — you must be entitled to the rows the result contains

### How long it lives, and who it serves
**24 hours**, each reuse resetting the clock, up to 31 days. It belongs to the **account** — a colleague's run can serve yours.

> Benchmarking? \`ALTER SESSION SET USE_CACHED_RESULT = FALSE;\` — otherwise your second run times the cache.`,
  narration:
    "The cheapest query is the one that never runs, and Snowflake has a mechanism for exactly that: the result cache. When you submit a query, cloud services checks whether that same query has been run recently and whether the answer is still valid. If it is, you get the stored result straight back. No warehouse starts, no credits are consumed, and it returns in milliseconds. Four conditions have to hold, and each one explains a miss you'll eventually be puzzled by. First, the query text must be identical. Snowflake normalises case and leading or trailing whitespace, but beyond that it's a literal comparison — rename an alias, add a space in the middle, reorder the columns, and it's a different query. Second, the underlying data must be unchanged. Any insert, update, delete or load against a table the query touched invalidates the cached result immediately. Third, the query has to be deterministic. Anything with RANDOM, or CURRENT_TIMESTAMP, or an external function, cannot be cached, because the right answer may legitimately differ. Fourth, you need the privileges to see the data in that result — Snowflake won't hand you a cached answer computed by someone who could see more than you can. The result lives for twenty-four hours, and every time it's reused the clock resets, up to a maximum life of thirty-one days. And it is shared across the whole account: if a colleague ran the report this morning and nothing has changed, your run of it is free. One practical warning. When you're benchmarking, run ALTER SESSION SET USE underscore CACHED underscore RESULT equals FALSE first. Otherwise your second measurement is timing the cache, not your query, and you'll draw a very cheerful and completely wrong conclusion.",
}
