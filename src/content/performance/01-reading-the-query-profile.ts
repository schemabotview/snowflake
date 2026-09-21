import type { Section } from '../types'

export const readingTheQueryProfile: Section = {
  id: 'reading-the-query-profile',
  title: 'Reading the query profile',
  scene: 'query-profile',
  slide: `## Diagnose before you change anything

Everything else in this course is a **fix**. This is the **diagnosis**, and four numbers carry most of it.

### Partitions scanned, over total
The first thing to look at. 2 of 40,000 is healthy; 40,000 of 40,000 is a full scan. Points at **pruning** — the filter, or the clustering.

### Bytes spilled to local storage
It ran out of memory. Points at a **bigger warehouse**.

### Bytes spilled to remote storage
It ran out of local disk too. The clearest alarm in the whole profile.

### Queued (provisioning) time
It waited for compute. Points at **more clusters**, not a bigger one.

> Snowsight → Query History → the profile tab. The same numbers are columns in \`QUERY_HISTORY\`, so you can find your worst queries with SQL rather than by clicking.`,
  narration:
    "Performance work has a failure mode, and it is guessing. Somebody says a query is slow, someone else doubles the warehouse size, it gets a bit faster, and nobody learns anything — including whether the money was well spent. So this course starts with diagnosis, and the tool is the query profile. Four numbers carry most of the diagnosis. The first, and the one to look at before anything else, is partitions scanned over partitions total. If a query read two partitions out of forty thousand, pruning is working beautifully and your problem is elsewhere. If it read forty thousand out of forty thousand, it scanned the entire table, and no amount of extra compute will fix what is fundamentally reading too much. That number points at pruning — either the way the filter is written, or how the table is clustered. The second is bytes spilled to local storage. That means the query needed more memory than the warehouse had, and started writing intermediate results to the local SSD. It's a slowdown, and it points squarely at a bigger warehouse. The third is bytes spilled to remote storage. That means it exhausted the local SSD as well and is now writing intermediates back to cloud storage. That is the loudest alarm in the profile and it makes queries dramatically slower. The fourth is queued, or provisioning, time. That's the query waiting for compute to become available, and it means nothing about the query itself — it's a concurrency problem, and the answer is more clusters rather than a bigger warehouse. You'll find all of this in Snowsight under Query History, on the profile tab. And the same numbers are available as columns in QUERY_HISTORY, which means you can find your ten worst queries with SQL rather than by clicking around hopefully.",
}
