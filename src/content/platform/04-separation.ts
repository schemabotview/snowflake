import type { Section } from '../types'

export const separationSection: Section = {
  id: 'separation',
  title: 'Separating storage from compute',
  scene: 'separation',
  slide: `## The one idea everything follows from

Storage and compute are **separate, independently scaled resources**. Take this one away and most of Snowflake stops making sense.

### What it changes in practice
- **No contention** — the nightly load and the morning dashboard run at once, on different warehouses, against the same tables
- **Right-size per workload** — an X-Small for a dashboard, a 4X-Large for the month-end rebuild
- **Resize without moving data** — one command, no downtime, no reload, no rebalancing

### Why it also changes the bill
Compute is billed **per second while it runs**; storage is billed **per terabyte per month**. Suspend a warehouse and one meter stops while the other carries on — impossible when the two were one machine.

### The follow-on features
Time Travel, zero-copy cloning and secure sharing all exist because compute is detachable from a single managed copy of the data.`,
  narration:
    "If you remember one thing from this course, make it this one. In Snowflake, storage and compute are separate resources that scale independently — and almost every feature you'll meet later is a consequence of that. Start with what it does to contention. In the old model, the nightly load and the morning dashboard were the same machine's problem, so they queued behind each other, and somebody had to schedule around somebody else. Here they run on two different warehouses, at the same moment, reading the same tables, and neither notices the other. Then there's sizing. Because compute is detached, you size it per job rather than per company. A dashboard that runs all day is happy on an X-Small. The month-end rebuild takes a four-X-Large for an hour and then goes away. You are not choosing one size for everything any more. And resizing is a single command — nothing is moved, nothing is redistributed, no downtime, because the data was never inside the compute in the first place. It also changes the shape of the bill. Compute is billed per second while a warehouse is actually running; storage is billed per terabyte per month. Those two meters run independently, so suspending compute stops one of them dead while the other continues. That was simply not expressible when the two halves were one purchase. Finally, keep this in mind as a lens. When we get to querying the past, to making an instant copy of a database, or to handing live data to another company without sending them a file — every one of those works because there is one managed copy of the data, and compute is something you attach to it.",
}
