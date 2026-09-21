import type { Section } from '../types'

export const cacheOrderAndSizing: Section = {
  id: 'cache-order-and-sizing',
  title: 'The lookup order, and choosing a size',
  scene: 'lookup-order',
  slide: `## Four rungs, and every one is a chance to stop

Every query falls down this ladder, and stops at the first rung that can answer it.

1. **Result cache** — the whole answer, already computed. No warehouse, no credits.
2. **Metadata** — counts and ranges, plus *which partitions can be skipped*. Still no warehouse for some queries.
3. **Local SSD cache** — partitions this warehouse already read.
4. **Remote storage** — the real read, and the only genuinely slow rung.

> Almost all performance work is making queries fall fewer rungs.

### And the method for picking a size
- **Start at X-Small.** It is more capable than it sounds.
- **Read the signal.** Spilling → size up. Queries queueing → scale out. They are different problems.
- **Change one thing, then measure the same query again** — with the result cache turned off.`,
  narration:
    "Let's put the whole course into one picture. Every query you run falls down a ladder of four rungs, and it stops at the first one that can answer it. Rung one is the result cache. If this exact query has been run recently against unchanged data, the answer comes straight back from cloud services — no warehouse, no credits, milliseconds. Rung two is metadata. Even if there's no cached result, the statistics may answer the question outright, as with a row count or a column minimum. And for everything else, metadata still does essential work here: it tells the optimizer which micro-partitions cannot possibly match, so they're never read. Rung three is the warehouse's own local SSD cache. Whatever data survived pruning, the warehouse checks whether it already holds it before going further. Rung four is remote storage — the actual read from the cloud provider's object store. This is the only genuinely slow rung, and it's where the time in a slow query almost always goes. Keep that ladder in mind, because nearly all performance work in Snowflake amounts to the same thing: making queries fall fewer rungs. And finally, the honest answer to the question everyone asks — what size should I use? Start at X-Small; it handles more than people expect. Then read the signal before you change anything. A query spilling to disk means size up. Queries waiting in line means scale out. Those are different problems with different fixes, and confusing them is the most common mistake in this whole area. Then change one thing, and measure the same query again with the result cache turned off. Next we go a layer down, into storage — what a micro-partition actually is, and why pruning is the thing worth optimising for.",
}
