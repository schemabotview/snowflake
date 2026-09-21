import type { Section } from '../types'

export const automaticClusteringSection: Section = {
  id: 'automatic-clustering',
  title: 'Automatic clustering',
  scene: 'automatic-clustering',
  slide: `## Snowflake does the reclustering

Declaring a key does not sort the table. **Automatic Clustering** does, over time — a background service that rewrites partitions when it judges the table will benefit. No warehouse, no schedule, and no control over when.

### It bills, serverless and continuously
Every rewritten partition costs compute *and* new storage. On a table written to all day, the service can spend more than the queries save.

### When it earns its keep
Hundreds of GB and up · the **same filter constantly**, not ad-hoc · appended in batches rather than rewritten · **read far more than written**.

### The control you do have
\`SUSPEND RECLUSTER\` before a bulk load, \`RESUME\` after.

> Watch \`AUTOMATIC_CLUSTERING_HISTORY\` for the first fortnight. That number is the verdict.`,
  narration:
    "Here's something that surprises people: declaring a clustering key does not sort your table. It registers an intention. The actual work is done by a separate background service called Automatic Clustering, and it's worth understanding because it's the part that costs money. The service watches your clustered tables, assesses how well clustered they currently are, and when it judges a table will benefit, it rewrites partitions to improve that. It runs in the background on Snowflake-supplied compute. You don't provide a warehouse, you don't schedule anything, and there's no job to monitor. The flip side is that you have very little control over when it happens. And it bills. Serverless, and continuously. Every partition it rewrites costs compute to do the rewriting, plus new storage for the new partitions. On a table that's being written to all day, the service can find itself in a losing race — constantly reclustering data that's constantly being disordered again — and spend considerably more than the queries it's helping ever save. So when does it earn its keep? Four conditions, and you want most of them. The table should be large — hundreds of gigabytes and up, because below that a scan is cheap enough not to bother. Queries should filter the same way repeatedly, rather than being ad-hoc and different each time. Writes should be batched appends rather than continuous rewrites. And the table should be read far more often than it's written. The one control you do have is worth using: suspend reclustering before a large load and resume afterwards. Reclustering a table you're about to rewrite is pure waste. And after you enable it, watch the credits in AUTOMATIC_CLUSTERING_HISTORY for a fortnight. That number, against your query improvements, is the only honest verdict.",
}
