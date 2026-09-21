import type { Section } from '../types'

export const traditionalLimits: Section = {
  id: 'traditional-limits',
  title: 'The warehouse you had to buy in advance',
  scene: 'coupled-box',
  slide: `## The warehouse you had to buy in advance

A traditional warehouse was **a machine you purchased** — disks and processors, sized once, up front.

### The purchase was the problem
- Storage and compute were **one order, one ceiling, one upgrade**
- You sized for the **busiest hour of the busiest day** — and paid for it at 3am too
- Growing either half meant **buying hardware**, which meant months

### And the symptoms all traced back to it
Disks that filled, queries that crawled, refresh cycles, exports scattered across the business — none of these were separate problems to solve. They were **one design decision**, showing up six different ways.

### Which is the opening for everything that follows
Every Snowflake idea in this concept is downstream of pulling those two halves apart.`,
  narration:
    "Before we look at what Snowflake is, it's worth being precise about the problem it was built for — because almost every design decision in the product is an answer to this one thing. A traditional data warehouse was a machine you bought. Disks for the data, processors and memory to query it, sized once, up front, and delivered as a single unit. And that single unit is where the trouble starts. Because storage and compute arrived as one purchase, they could only grow as one purchase. Data doubles every year, so the disks fill — and the fix is to archive last year's history to tape, where the business cannot query it. The processors are fixed, so a complicated join runs as slowly as the hardware allows, and a report that should take seconds runs overnight. You cannot add a little capacity; you buy the next box, and that is a project measured in months. Meanwhile you sized the whole thing for the busiest hour of the busiest day, so you're paying for that peak at three in the morning when nothing is running. Add the ordinary decay of hardware — patching, failed disks, cooling — and the fact that every team that couldn't get time on the machine took an export and made their own copy, widening the security surface with every extract. Six complaints. But they are not six problems. They are one decision, showing up six different ways: storage and compute were welded together, and neither could move without the other. Pull those two apart, and every one of those symptoms changes character. That is the idea the rest of this concept is built on.",
}
