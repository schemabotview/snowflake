import type { Section } from '../types'

export const microPartitions: Section = {
  id: 'micro-partitions',
  title: 'Micro-partitions',
  scene: 'micro-partition-anatomy',
  slide: `## One table, thousands of chunks

A table is not one file. It is a long sequence of **micro-partitions**, created automatically as data arrives.

### What one is
- **50–500 MB** uncompressed — much smaller on disk
- Created by Snowflake; you never declare, name or size one
- **Columnar inside**, and **self-describing** — min, max, row and distinct counts

### And never edited
A micro-partition is **immutable**. An \`UPDATE\` writes **new** partitions and stops referencing the old.

### Why that matters more than it sounds
Old partitions still exist for a while — which is what makes **Time Travel**, **zero-copy cloning** and **streams** possible. Three features, all downstream of immutability.`,
  narration:
    "So what is a micro-partition? A Snowflake table is not one file, and it's not a fixed set of partitions you declared. It's a long sequence of chunks, created automatically as data arrives. Each one holds between fifty and five hundred megabytes of uncompressed data — considerably less on disk after compression — and a large table will have thousands or millions of them. You never create one, never name one, never size one. There's no partitioning scheme to design, which is a genuine relief to anyone who has spent a weekend choosing one in another system. Inside a micro-partition, the data is columnar: each column is its own run of bytes within that chunk. And crucially, each partition is self-describing. Snowflake records, for every column in it, the minimum value, the maximum value, the number of distinct values and the number of rows. That metadata is small, it lives in the cloud services layer, and it's what the next section is entirely about. Now the property that matters most: a micro-partition is immutable. It is written once and never edited. When you update a row, Snowflake does not go and change bytes inside a partition. It writes new partitions containing the updated version, and stops referencing the old ones. Delete works the same way. That sounds like an implementation detail, and it is the opposite of one. Because old partitions continue to exist for a period rather than being destroyed, you can query the table as it was an hour ago. You can make an instant copy of a database that shares those partitions and costs nothing until it diverges. You can track exactly what changed between two points. Time Travel, zero-copy cloning and streams are all downstream of that one design decision.",
}
