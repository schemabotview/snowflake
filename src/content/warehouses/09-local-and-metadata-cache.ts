import type { Section } from '../types'

export const localAndMetadataCache: Section = {
  id: 'local-and-metadata-cache',
  title: 'The local and metadata caches',
  scene: 'two-more-caches',
  slide: `## The other two caches

### Local disk cache — lives in the warehouse
As a warehouse reads micro-partitions, it keeps them on its **local SSD**. Later queries on that warehouse reuse them instead of fetching from remote storage.

- Shared by **all clusters** of that warehouse
- **Destroyed** when the warehouse suspends *or resizes*
- Nothing to configure — it simply warms up as you work

### Metadata cache — lives in cloud services
Per-partition statistics: **min/max per column, row counts, distinct counts**. Always on, account-wide, and **cannot be disabled** — it is how partition pruning works at all.

Some queries are answered from it entirely, with **no warehouse running**:
\`COUNT(*)\` · \`MIN(col)\` / \`MAX(col)\` · \`SHOW\` · \`DESC\`

> A warehouse that has just resumed is a cold one. The first run after a suspend is not a fair measurement of anything.`,
  narration:
    "Beyond the result cache there are two more, and the useful way to tell them apart is by asking who owns them. The first is the local disk cache, and it lives inside the warehouse. Whenever a warehouse reads micro-partitions from remote storage, it keeps a copy on its local SSD. The next query on that same warehouse that needs the same data reads it locally instead of going back to storage — which is much faster, because remote reads are the slow part of almost every query. Three things to know about it. It's shared across all the clusters of a multi-cluster warehouse. It's destroyed when the warehouse suspends — and also when you resize it, which catches people out. And there's nothing to configure; it simply warms up as you work. The practical consequence is that the first query after a resume is slow relative to the second, so a single cold measurement is not evidence of anything. The second is the metadata cache, and it lives in the cloud services layer. It holds statistics about your data rather than the data itself: the minimum and maximum value of each column in each micro-partition, row counts, distinct counts. It's always on, it covers the whole account, and unlike the result cache you cannot switch it off — because this is the mechanism that makes partition pruning possible in the first place. Every well-pruned query you'll ever write depends on it. And it can answer some queries outright. A plain COUNT star, the minimum or maximum of a column, SHOW TABLES, DESCRIBE TABLE — all of those come back from metadata with no warehouse running at all. Try one with everything suspended and watch it return instantly.",
}
