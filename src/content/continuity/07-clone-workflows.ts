import type { Section } from '../types'

export const cloneWorkflowsSection: Section = {
  id: 'clone-workflows',
  title: 'What people do with clones',
  scene: 'clone-workflows',
  slide: `## Three workflows this makes possible

### A real development environment
Full-size production data, in seconds, at no storage cost. Not a subset, not last quarter's extract — **the actual data**, so the bug you cannot reproduce in dev finally reproduces.

### Testing a migration
Clone, run the frightening script against the clone, inspect, throw it away. Repeat until the script is boring.

### The SWAP pattern
Rebuild into a clone, verify, then \`ALTER TABLE orders SWAP WITH orders_next\` — an **instant, atomic** exchange of the two names, reversible by running it again.

### One caution
A clone of production **is** production: same rows, same sensitivity, and it belongs under the same policies. Grants do not come with it — check what you have just made readable.`,
  narration:
    "So what do people actually do with cloning? Three things, and the first is the one that changes how teams work. A real development environment. Not a subset of production, not an extract from last quarter, not fabricated test data that never quite behaves like the real thing — the actual production data, cloned in seconds, at no storage cost until you change it. Which means the bug you cannot reproduce in dev finally reproduces, because dev now has the row that causes it. Teams that previously refreshed a dev environment quarterly, because it took a weekend, refresh it every morning. Second: testing a migration. You have a script that rewrites a table, or a schema change you're not sure about. Clone the database, run the frightening thing against the clone, look at the result. If it's wrong, drop the clone and try again. Repeat until the script is boring, then run it on production knowing exactly what it does. Third: a point in time to compare against. Clone the table as it was last Friday and diff it against today to find what moved and when. Then there's a pattern worth knowing by name — the SWAP. You rebuild a table into a clone rather than in place, verify the result properly, and then run ALTER TABLE, SWAP WITH. That exchanges the two names atomically and instantly. Consumers see the old table right up to that moment and the new one immediately after, with no window where the table is half-rebuilt. And because it's a swap, rolling back is running the same statement again. One caution to end on. A clone of production is production. Same rows, same sensitivity, same regulatory obligations. It needs the same masking and row access policies — and since grants don't come with a clone, check who you have just made that data readable to.",
}
