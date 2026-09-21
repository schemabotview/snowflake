import type { Section } from '../types'

export const rightSizingAndSpill: Section = {
  id: 'right-sizing-and-spill',
  title: 'Spill, and right-sizing',
  scene: 'spill',
  slide: `## Where the intermediate results go

A healthy query sorts, joins and aggregates **in memory**. When it runs out it spills, and spill is a ladder — each rung roughly an order of magnitude worse.

**Memory** → **local SSD** (out of memory) → **remote storage** (out of local disk too, and the loudest signal in the profile).

### Three fixes, most durable first
- **Read less** — fewer columns, a better filter
- **Reshape it** — filter *before* the join; an exploding join is the usual cause
- **Size up** — the quick fix, and the one that costs money forever

### Do not confuse it with queueing
**Spill** = the warehouse is too small for the query. **Queueing** = too few clusters for the number of queries. Same symptom, opposite fixes.`,
  narration:
    "Every query needs working space — somewhere to hold the intermediate results of a sort, a join, an aggregation. A healthy query does that in memory. When it runs out of memory, it spills, and spill is a ladder where each rung is roughly an order of magnitude worse than the one above. First it spills to the warehouse's local SSD. That's slower than memory but tolerable, and a small amount of local spill on a big query isn't necessarily a problem. When the local SSD fills up too, it spills to remote storage — writing intermediate results back to cloud object storage and reading them again. That is dramatically slower, and it is the loudest signal in the entire query profile. A query showing significant remote spill is not slightly inefficient; it is in trouble. There are three fixes, and they're worth doing in order of durability rather than order of ease. Read less: name fewer columns, write a better filter, and above all filter before the join rather than after. Reshape the query: by far the most common cause of enormous intermediates is a join that explodes the row count before anything filters it back down — reorder that and the spill often vanishes entirely. And finally, size up: a bigger warehouse has more memory per node and more nodes. That's the quick fix, it genuinely works, and it's the one that costs money every single day thereafter. Lastly, the distinction that decides which tool you reach for, and it's worth repeating from the warehouses course. Spill means the warehouse is too small for the query. Queueing means there are too few clusters for the number of queries. Both look identical from the outside — people are waiting — and the fixes are opposite. Size up for spill. Scale out for queueing. Read the profile and you'll never confuse them.",
}
