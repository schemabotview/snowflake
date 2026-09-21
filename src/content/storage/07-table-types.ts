import type { Section } from '../types'

export const tableTypesSection: Section = {
  id: 'table-types',
  title: 'Permanent, transient and temporary tables',
  scene: 'table-types',
  slide: `## What you give up as you go right

The three table types do not differ in features. They differ in **how much history Snowflake keeps for you — and bills you for**.

### Permanent — the default
Time Travel **up to 90 days**, then **7 days of Fail-safe**. The most protection, the most storage.

### Transient
No Fail-safe, Time Travel of at most **1 day**. Right for data you could rebuild: staging, intermediate ELT output, anything reproducible from source.

### Temporary
Exists only for **the session that created it**, then vanishes with its data.

### Two traps
The type is **fixed at \`CREATE\`**, and a temporary table **shadows a permanent one** of the same name for that whole session.

> Transient is inherited: every table in a transient schema is transient, whatever you write.`,
  narration:
    "Snowflake has three table types, and the difference between them is not features — it's how much history Snowflake keeps for you, and therefore how much storage you pay for. Permanent is the default; create a table without saying otherwise and this is what you get. It lives until you drop it, it supports Time Travel for as much as ninety days depending on your edition, and after that it has seven days of Fail-safe, which is Snowflake's own disaster-recovery copy. Maximum protection, maximum storage cost. Transient is the middle option. It also lives until you drop it — it isn't temporary in the session sense — but it has no Fail-safe at all, and Time Travel of at most one day. That makes it right for data you could rebuild if you lost it: staging tables, intermediate ELT output, anything reproducible from source. If a table is loaded fresh every night from files you still have, paying seven days of Fail-safe on it is simply waste. Temporary tables exist only for the session that created them. Close the connection and the table and its data are gone. No Fail-safe, minimal Time Travel, cheapest of all — right for scratch work inside one script. Two traps. First, the type is fixed at creation. You cannot convert a transient table to permanent or the other way round; you create a new one and copy. So decide up front. Second, and this one really does cost people an afternoon: a temporary table can have the same name as a permanent table in the same schema, and for the rest of that session every query silently hits the temporary one. And note that transient is inherited — every table created in a transient schema is transient, whatever you write in the DDL.",
}
