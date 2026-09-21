import type { Section } from '../types'

export const constraintsSection: Section = {
  id: 'constraints',
  title: 'Constraints are documentation',
  scene: 'constraints',
  slide: `## Declared, and mostly not enforced

Snowflake accepts \`PRIMARY KEY\`, \`FOREIGN KEY\` and \`UNIQUE\` — and **enforces none of them**. Insert the same primary key twice and both rows land. **\`NOT NULL\` is the exception.**

### Why
A uniqueness check means a lookup per row. At warehouse scale that cost is enormous — and the data usually comes from a system that already enforced it.

### So why declare them
- They **document the model**, where the model lives
- **BI and modelling tools read them** to infer joins
- \`RELY\` lets the optimizer **trust** the claim and rewrite accordingly

### Uniqueness is now your job
Enforce it where the data lands — a \`MERGE\` on the key, or \`QUALIFY row_number() OVER (…) = 1\`.

> The duplicate your old database refused is the one that turns up in a dashboard here.`,
  narration:
    "This section exists to prevent a specific bad afternoon. Snowflake lets you declare primary keys, foreign keys and unique constraints — and it does not enforce any of them. You can create a table with a primary key, insert the value one, insert the value one again, and both rows will be there. No error, no warning. The single exception is NOT NULL, which is genuinely enforced on every write. Why? Because enforcing a uniqueness constraint means checking every incoming row against everything already in the table. At transactional scale with an index, that's cheap. At warehouse scale, loading millions of rows into a columnar store with no index, it would be enormously expensive — and in practice the data is usually arriving from a system that already enforced it. Snowflake made the trade deliberately: you get the load speed, and you accept responsibility for correctness. So why declare them at all? Three real reasons. First, they document the data model in the place the model actually lives, which is worth a great deal to the next person. Second, BI and data-modelling tools read them — many will infer joins between tables from declared foreign keys, and your dashboards get easier to build. Third, you can add the RELY property, which tells the optimizer it may trust the constraint and rewrite queries accordingly, eliminating joins it can prove are unnecessary. Just be honest with RELY: if you assert uniqueness that isn't true, you'll get wrong results rather than slow ones. And the practical consequence: uniqueness is now your job, at load time. Use a MERGE on the key rather than an INSERT, or deduplicate on the way in with a QUALIFY row-number filter. Because the duplicate your old database refused is the duplicate that turns up in a dashboard here.",
}
