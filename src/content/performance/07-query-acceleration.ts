import type { Section } from '../types'

export const queryAccelerationSection: Section = {
  id: 'query-acceleration',
  title: 'The Query Acceleration Service',
  scene: 'query-acceleration',
  slide: `## Borrowing compute, for one query

The awkward workload: a **small warehouse** that copes with everything except one enormous scan a day. Sizing up overpays for the other twenty-three hours.

Query acceleration lets that warehouse **borrow serverless compute** for the parts of a query that benefit, then hand it back. Enabled **per warehouse**, judged **per query**, billed **only while used**.

### What it suits
Large scans with a selective filter; ad-hoc analytics of unpredictable size. Supports \`SELECT\`, \`INSERT\`, \`CTAS\` and \`COPY INTO <table>\`.

### What it will not touch
Too few partitions to parallelise · a filter that is not selective · \`LIMIT\` without \`ORDER BY\` · anything non-deterministic.

> A **scale factor** caps how much it may lease. Set it — and check the eligibility view before enabling anything.`,
  narration:
    "Here's a shape of workload that's genuinely awkward. You have a warehouse that's correctly sized for almost everything it does — an X-Small or a Small, ticking along happily. And once a day, somebody runs an enormous scan that takes forty minutes on it. Sizing the warehouse up fixes that one query and overpays for the other twenty-three hours. The Query Acceleration Service is the answer to exactly that. You enable it as a property on the warehouse. Then, for each query submitted, Snowflake evaluates whether parts of it would benefit from more parallelism — typically large scans with a selective filter, where most rows are read and discarded. If so, it offloads that portion to a shared pool of serverless compute, runs it alongside your warehouse's own work, and hands the resources back when done. You're billed only while acceleration is actually being used. So the small warehouse stays small, and the one monstrous query gets the muscle it needs for the minutes it needs it. It supports SELECT, INSERT, CREATE TABLE AS SELECT, and COPY INTO a table. What won't it touch? Queries with too few partitions to spread around. Filters that aren't selective enough — if you're keeping most of what you read, there's nothing to parallelise usefully. Queries with a LIMIT but no ORDER BY. And anything non-deterministic. Snowflake decides this automatically, so you don't get to force it. The cost control matters. A scale factor caps how much compute the warehouse may lease, expressed as a multiple of its own size — scale factor five on a Medium means it can lease up to five Mediums' worth. Set it deliberately, because without a sensible cap a single runaway query can lease a great deal. And before enabling anything, query the eligibility view: it tells you which queries and which warehouses would actually benefit, so this is a decision you can make with evidence.",
}
