import type { Section } from '../types'

export const searchOptimizationSection: Section = {
  id: 'search-optimization',
  title: 'The Search Optimization Service',
  scene: 'search-optimization',
  slide: `## Finding one row in a billion

Clustering organises a table by **ranges**. A point lookup — \`WHERE customer_id = 90210\` — has no range, so clustering cannot help: any partition might hold it.

The **Search Optimization Service** builds a **search access path**: a structure Snowflake maintains that rules partitions out. Probabilistic, like a Bloom filter — **not an index**.

### The shapes it helps
Equality and \`IN\` · substrings (\`LIKE\`, \`RLIKE\`, \`REGEXP\`) · fields inside \`VARIANT\` columns.

### Qualify it honestly — all five
Table is **hundreds of GB** · the filter column has **many distinct values** · the query returns **very few rows** · it runs **often and slowly** · clustering is **not already serving it**.

> Enterprise and above, and maintenance costs credits continuously.`,
  narration:
    "Clustering organises a table by ranges, which is perfect for date filters and useless for a different shape of query: the point lookup. Find the row where customer id equals ninety thousand two hundred and ten. There's no range there. Unless the table happens to be clustered on customer id, that value could be in any partition, so Snowflake reads all of them to find one row. That's what the Search Optimization Service is for. When you enable it on a table, Snowflake builds and maintains an additional structure called a search access path. It's probabilistic — conceptually like a Bloom filter — and it lets the optimizer rule out partitions that definitely do not contain your value, so the scan skips them. It is not an index in the traditional sense; you don't design it, and it doesn't change how the data is stored. It helps three query shapes. Equality and IN predicates, which is the classic point lookup. Substring searches — LIKE, RLIKE, REGEXP. And fields inside VARIANT columns, which is genuinely valuable if you're searching semi-structured data. Now, it is an Enterprise feature, the maintenance service runs continuously as your data changes, and that maintenance costs credits. So qualify it honestly, with five checks. Is the table hundreds of gigabytes? Below that, a scan is cheap enough that the maintenance isn't worth it. Does the filter column have many distinct values? A column with five values can't be selective. Does the query return very few rows — is this genuinely a needle, rather than a report? Does it run often, and is it currently slow? And is clustering already serving it? If the table is clustered on that column, you'd be paying twice for the same benefit. All five should be true.",
}
