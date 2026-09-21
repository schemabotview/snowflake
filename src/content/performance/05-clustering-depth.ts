import type { Section } from '../types'

export const clusteringDepthSection: Section = {
  id: 'clustering-depth',
  title: 'Clustering depth',
  scene: 'clustering-depth',
  slide: `## Is it actually clustered?

**Clustering depth** is the average number of micro-partitions that overlap at a given value of the key. Lower is better, and **1 is the floor**.

**1** perfect · **2–4** healthy · **tens** poor, most partitions must be read · **hundreds** the key is doing nothing for you.

### Two functions
\`SYSTEM$CLUSTERING_DEPTH('orders')\` returns the number.
\`SYSTEM$CLUSTERING_INFORMATION('orders', '(order_date, region)')\` adds the partition count and an overlap histogram.

### Use it as a before and after
You can ask about **columns that are not the declared key** — so you can test a candidate key *before* committing, and before paying for any reclustering.

> This is the one number that turns clustering from a belief into an experiment.`,
  narration:
    "So you've declared a key and the service is reclustering. Is it working? There's a number for that, and it turns this whole area from opinion into measurement. Clustering depth is the average number of micro-partitions that overlap at a given value of the clustering key. Think about what overlap means: if you filter on a particular date and twenty partitions all have ranges covering that date, the engine must read all twenty. Depth is that count, averaged across the table. Lower is better. One is the floor — a populated table can never be below one — and depth one means every value range lives in exactly one partition, which is as good as it gets. Two to four is healthy and pruning will work well. Tens means poor clustering: most of your partitions have to be read for a typical filter. Hundreds means the key is doing nothing for you at all, and you're paying for reclustering that isn't helping. Two functions give you this. SYSTEM dollar CLUSTERING underscore DEPTH takes a table name and returns the number. SYSTEM dollar CLUSTERING underscore INFORMATION takes a table and optionally a set of columns, and returns a fuller picture: average depth, total partition count, and a histogram of how the overlap is distributed — which tells you whether you have a uniformly mediocre table or a mostly-good one with a bad tail. And here's the part worth remembering. You can ask about columns that are not the declared clustering key. Which means before you commit to a key, before you pay a single credit of reclustering, you can measure what the depth would look like on your candidate columns. Measure, change one thing, measure again.",
}
