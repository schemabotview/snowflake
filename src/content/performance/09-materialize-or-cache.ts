import type { Section } from '../types'

export const materializeOrCache: Section = {
  id: 'materialize-or-cache',
  title: 'Materialize, or cache',
  scene: 'materialize-or-cache',
  slide: `## Five ways not to compute it again

- **Result cache** — avoids running the query at all. **Free.**
- **Warehouse cache** — avoids fetching from remote storage. **Free.**
- **Clustering key** — avoids reading most partitions. Costs reclustering.
- **Materialized view** — avoids recomputing one table's aggregate. Costs storage + refreshes.
- **Dynamic table** — avoids recomputing a joined result. Costs storage + refreshes.

Three are free, two are **rent**. That is usually what decides it.

### The order to try them
**The free two** (is it even cacheable?) → **read less** (pruning, clustering, fewer columns) → **pay rent**.

### The test for paying rent
Read **far more often** than the source changes. A materialization over a table that churns all day is a refresh treadmill.`,
  narration:
    "Stepping back: there are five distinct ways to avoid computing something again, and in practice people pick one by instinct rather than by comparison. Lined up, the choice gets much easier. The result cache avoids running the query at all, and costs nothing to keep. The warehouse's local disk cache avoids fetching from remote storage, and also costs nothing. A clustering key avoids reading most of the partitions, and costs reclustering credits. A materialized view avoids recomputing an aggregate over one table, and costs storage plus refresh credits. A dynamic table avoids recomputing a joined result, and costs the same two things. So three of the five are free and two are rent, and that distinction is usually what should decide it. Which suggests an order. Start with the free two: is this query even cacheable? Identical text, unchanged underlying data, no non-deterministic functions. If a dashboard runs the same query four hundred times a day and it isn't hitting the result cache, find out why — that's the cheapest win available anywhere in Snowflake. Then read less: pruning, clustering, naming your columns. Still free to maintain, and it makes every query on that table faster rather than one. Only then pay rent, and only for things read far more often than their sources change. That's the test. A materialized view over a table that's rewritten all day is a refresh treadmill — every change triggers work, and you can easily spend more on refreshes than you ever saved on reads. Read-heavy and write-light is the shape that pays. If your data changes constantly and is read occasionally, materializing it is exactly the wrong move.",
}
