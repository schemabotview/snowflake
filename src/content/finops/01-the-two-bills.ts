import type { Section } from '../types'

export const theTwoBills: Section = {
  id: 'the-two-bills',
  title: 'What is actually on the invoice',
  scene: 'two-bills',
  slide: `## Two meters, and the line items under each

### Compute — credits
**Warehouses** — the part everyone expects. **Serverless** — Snowpipe, serverless tasks, automatic clustering, MV refreshes, search optimization, query acceleration. **Cloud services** — free under 10% of the day.

### Storage — per TB, per month
**Active data** · **Time Travel** (every version, for the window) · **Fail-safe** (seven more days you cannot use) · **staged files** nobody cleaned up.

### The surprises are never the warehouses
Warehouse credits are visible, so somebody notices. The unpleasant line items are the **serverless services nobody switched on deliberately** and the **history nobody meant to keep**.

> Snowflake's pricing is not complicated. It is unevenly visible.`,
  narration:
    "We looked at the shape of the bill back in the first course: compute in credits, storage per terabyte per month. Now the line items, because that's where the surprises live. On the compute side there are three groups. Warehouses — the part everyone expects and everyone watches, because it's right there in the interface. Then serverless: Snowpipe, serverless tasks, automatic clustering, materialized view refreshes, search optimization maintenance, query acceleration. All of those consume Snowflake-supplied compute, none of them appear as a warehouse, and every one keeps running when every warehouse you own is suspended. And cloud services, which is normally free — you only pay when it exceeds ten percent of your daily compute credits. On the storage side, four groups. Active data, which is the tables themselves. Time Travel, which is every version of every row for as long as your retention window says. Fail-safe, which is seven further days you cannot query and cannot switch off on a permanent table. And staged files, which is whatever anyone ever uploaded to a stage and never cleaned up — that one grows quietly for years. Here's the pattern worth internalising. The surprises are almost never the warehouses. Warehouse credits are visible: there's a page showing them, somebody notices. The unpleasant line items are the serverless services nobody switched on deliberately — somebody enabled automatic clustering on a churning table six months ago — and the history nobody meant to keep, because the account default retention was raised once and never revisited. Snowflake's pricing is not complicated. It is just unevenly visible. Which is why this course starts with visibility, and why the next section is entirely about where to look.",
}
