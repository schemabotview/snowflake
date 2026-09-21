import type { Section } from '../types'

export const secureViewsSection: Section = {
  id: 'secure-views',
  title: 'Secure views',
  scene: 'secure-views',
  slide: `## What a plain view gives away

A view that filters rows is **not, by itself, a security boundary**. A standard view leaks twice.

### Leak one — the definition
\`GET_DDL\` returns the view's SQL to anyone who can query it: your filter logic, your column names, your table names.

### Leak two — the statistics
The **query profile** reports rows scanned on the *underlying* tables — so someone can learn how many rows exist beyond their filter without seeing one.

### What \`SECURE\` changes
The definition is **hidden**, the profile is **withheld**, and the optimizer **holds back** — it will not push a predicate down if that could reveal filtered-out rows.

### The price
That last point is a real performance cost. Secure views can be slower; that is the trade you are buying.

> Only a **secure** view can be put into a share.`,
  narration:
    "Here's something that surprises people. A view that filters rows is not, by itself, a security boundary. Suppose you create a view over the customers table that shows only European customers, and you grant someone access to the view but not the table. It feels like they can only see Europe. In fact a standard view leaks twice. The first leak is the definition. Anyone who can query the view can call GET underscore DDL on it and read the SQL — your filter logic, the column names, the underlying table names, all of it. Sometimes that's harmless. Sometimes the filter itself is sensitive: the logic might reveal which customers are flagged, or what the internal segmentation is. The second leak is subtler and more interesting. The query profile shows statistics about the underlying tables — how many rows were scanned, how many partitions were read. So someone querying your European view can learn how many customers exist in total, without ever seeing a single row outside Europe. That's an information leak even though no data left the boundary. Adding the word SECURE to the view definition fixes both. The definition is hidden from everyone but the owner. The profile statistics are withheld. And there's a third effect that matters: the optimizer deliberately holds back. Normally it would push your filter down into the underlying query to read less data — but some of those rewrites can reveal information about rows you filtered out, for example through an error message or a timing difference. A secure view forgoes those optimisations. That's a genuine performance cost, and it's the trade you're buying. Use SECURE when the view is a boundary, and a plain view when it's just a convenience. And note this: only a secure view can be put into a data share, which is why the sharing course depends on this section.",
}
