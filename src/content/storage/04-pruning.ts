import type { Section } from '../types'

export const pruningSection: Section = {
  id: 'pruning',
  title: 'Pruning — what replaced the index',
  scene: 'pruning',
  slide: `## The cheapest read is the one that never happens

Every micro-partition carries the **min and max of each column**. Before reading anything, the optimizer compares your filter against those ranges.

### Horizontal — skip partitions
Ask for February on a four-year table: every partition whose date range falls outside it **cannot match**, so it is never read.

### Vertical — skip columns
Name two columns and the other thirty are never fetched. This is why \`SELECT *\` is genuinely expensive here.

### What defeats it
- A **function on the filtered column** — \`WHERE YEAR(order_date) = 2026\` hides the value from the ranges
- Data whose **order has nothing to do with how you query it**

> No index did this. The metadata written at load time did.`,
  narration:
    "Here's the payoff for all that metadata. Every micro-partition knows the minimum and maximum value of every column inside it. So before reading a single byte of data, the optimizer can compare your filter against those recorded ranges and decide which partitions cannot possibly contain a matching row. Suppose you have four years of orders and you ask for February this year. Every partition whose order-date range ends before the first of February is eliminated. Every partition whose range starts after the end of February is eliminated. What's left is a small handful that overlap your window, and those are the only ones read. That's horizontal pruning — skipping rows, in bulk, by skipping whole partitions. Then the same trick runs the other way. You named two columns in your SELECT, so the other thirty in that table are never fetched off disk at all. That's vertical pruning, and it's the concrete reason SELECT star is expensive in Snowflake in a way it simply isn't in a row store — you've just asked for every column of every surviving partition. Now, two things defeat pruning, and both are worth remembering because they're the most common cause of a mysteriously slow query. The first is wrapping a function around the filtered column. WHERE YEAR of order-date equals twenty twenty-six hides the raw value from the range comparison, so nothing can be skipped and you scan everything. Write the filter as a plain range instead, and pruning works. The second is data whose physical order has nothing to do with how you query it — if every partition contains a scattering of every month, no partition can be eliminated. That's a clustering problem, and it has its own course later. And notice what did all this: no index. Just numbers written down at load time, on every table, with nothing to maintain.",
}
