import type { Section } from '../types'

export const sizes: Section = {
  id: 'sizes',
  title: 'Sizes and what they cost',
  scene: 'size-ladder',
  slide: `## Every step up doubles the machine

Warehouses come in t-shirt sizes from **X-Small to 6X-Large**. Each step doubles the nodes — and doubles the credits per hour.

### The arithmetic that surprises people
A Large burns **8× an X-Small per hour**. But if the query genuinely parallelises, it also finishes in **about an eighth of the time** — so the total credits are roughly the same, and you get the answer sooner.

### When bigger really is dearer
- The work **cannot split** across nodes — a small scan, a single-file load
- The warehouse sits **idle** between short queries, burning the bigger rate for nothing

### Where to start
**X-Small**, for almost everything. It handles tens of gigabytes comfortably. Move up when a query spills or takes too long — on evidence, not on instinct.`,
  narration:
    "Warehouses come in t-shirt sizes, from X-Small at the bottom through Small, Medium, Large, X-Large and onwards up to 6X-Large. The rule is simple: each step doubles the number of nodes in the cluster, and doubles the credits per hour. An X-Small costs one credit an hour, a Small two, a Medium four, a Large eight, and so on up the ladder. Now here's the part that catches people out, and it's worth getting straight because it drives a lot of bad decisions. A Large is eight times the hourly rate of an X-Small. That sounds expensive. But if your query genuinely parallelises — if the work can be split across all those nodes — then it also finishes in roughly an eighth of the time. Eight times the rate for an eighth of the duration is the same total credits. You paid about the same and got your answer eight times sooner. So for a big query, a bigger warehouse is often not more expensive at all. The word doing the work in that sentence is parallelises. If the query can't use the extra nodes — a small scan, a load from a single file, a job that's really one long serial step — then the extra nodes sit idle and you genuinely do pay eight times as much for the same elapsed time. The other way to waste it is idle time between short queries, where you're paying the bigger rate for a warehouse that isn't doing anything. Which is why the advice is to start at X-Small. It is more capable than people expect — comfortable with tens of gigabytes. Move up when you have evidence: a query that spills, or one that takes longer than the business can wait. Not on instinct.",
}
