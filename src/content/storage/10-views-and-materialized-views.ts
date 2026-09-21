import type { Section } from '../types'

export const viewsAndMaterializedViews: Section = {
  id: 'views-and-materialized-views',
  title: 'Views and materialized views',
  scene: 'views',
  slide: `## A query with a name, or a table that maintains itself

### A standard view
Stores **no data** — the query runs on every read. Always current, free to keep, and can do anything SQL can do.

### A materialized view
Stores the **results** and refreshes them automatically. Reads are fast because the work is already done.

### What it costs, and what it forbids
Storage for the results plus **credits for every refresh** — and **one table only**, no joins, a restricted set of aggregates, Enterprise edition and above.

### Choosing
Reach for an MV when **one large table** is filtered the same way far more often than it changes. Otherwise a standard view is free and always right.

> Wanted a pre-joined mart? That is a **dynamic table**, later in the arc.`,
  narration:
    "Two ways to give a query a name, and they are very different things. A standard view stores no data at all. It's a saved query with a name: when someone selects from it, the underlying query runs, against the current data. That means it's always fresh, it costs nothing to keep, and it can do anything SQL can do — joins, window functions, subqueries, whatever you like. The main reason to create one is to stop five people writing the same eighty lines slightly differently. A materialized view is a different animal. It stores the results of its query as real data, and Snowflake keeps those results up to date automatically as the base table changes. Reading from it is fast because the work has already been done. That sounds strictly better, so here's what it costs. You pay storage for the materialised results, and you pay credits for every background refresh — and if the base table changes constantly, that refresh cost can quietly exceed what you saved on reads. There are hard limitations too. A materialized view can query exactly one table. No joins at all, not even a self-join. Only a restricted set of aggregate and window functions is supported. And it's an Enterprise-edition feature. So the decision rule is fairly narrow. Reach for a materialized view when you have one large table that gets filtered or aggregated the same way, far more often than the underlying data changes — a pre-aggregated daily summary over a big fact table is the classic fit. For everything else, a standard view is free and always correct. And if what you actually wanted was a pre-joined mart kept fresh automatically, that's a dynamic table, which we'll get to in the transformation course.",
}
