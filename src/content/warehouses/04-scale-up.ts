import type { Section } from '../types'

export const scaleUpSection: Section = {
  id: 'scale-up',
  title: 'Scaling up',
  scene: 'scale-up',
  slide: `## Scaling up: a bigger machine for a bigger query

**Scaling up** means resizing one warehouse — more nodes, more memory, more parallelism for a *single* query.

### The signals that say "size up"
- **Spilling** — the query runs out of memory and writes to local disk, or worse, to remote storage
- **Big joins, sorts and aggregations** over a lot of data
- **One slow query**, with nothing queued behind it

### What it does not fix
A **queue**. If twenty users are each waiting their turn, every one of their queries may be small — the warehouse isn't underpowered, it's oversubscribed. That is a concurrency problem, and the answer is more clusters.

### Resizing is cheap to try
\`ALTER WAREHOUSE … SET WAREHOUSE_SIZE = LARGE\` takes effect for the next query. No downtime, no data movement.

> Diagnose first: **slow query → size up · waiting queries → scale out.**`,
  narration:
    "Scaling up means making one warehouse bigger — more nodes, more memory, more parallelism available to a single query. And the question worth being disciplined about is when that's the right move. There are three signals. The first and best is spilling. When a query needs more memory than the warehouse has, Snowflake writes intermediate results to the local SSD, and if it runs out of that, to remote storage. Spilling to local disk slows a query down; spilling to remote slows it down dramatically. Spill is the clearest possible evidence that the machine is too small for the work. The second signal is the shape of the query — large joins, big sorts, aggregations over a lot of rows. That's work that genuinely splits across nodes, so more nodes means proportionally less time. The third is that it's one slow query, with nothing queued behind it. Which brings us to what scaling up does not fix. If twenty people are each waiting their turn, look at their queries before you resize. Every one of them might be small and fast. The warehouse isn't underpowered; it's oversubscribed. Making it bigger gives each query more nodes it doesn't need, while they still wait in line — you'll have doubled the credit burn and changed almost nothing. That's a concurrency problem, and it needs more clusters, which is the next section. The good news is that resizing costs you nothing to try. One ALTER WAREHOUSE statement, and the new size applies from the next query. There's no downtime, no data to move, nothing to rebuild — because, again, the warehouse never held the data. So diagnose, change one thing, and measure the same query again.",
}
