import type { Section } from '../types'

export const whatAWarehouseIs: Section = {
  id: 'what-a-warehouse-is',
  title: 'What a virtual warehouse is',
  scene: 'warehouse-anatomy',
  slide: `## A warehouse is a cluster, not a database

A **virtual warehouse** is a cluster of compute — processors, memory and local SSD — that Snowflake provisions on demand and bills while it runs.

### It owns nothing
No tables live in a warehouse. Start it, stop it, resize it, drop it: **your data is untouched**, because the data is in the storage layer.

### What needs one
Anything that reads or writes rows — a \`SELECT\` that actually scans, a \`COPY\`, an \`INSERT\`, \`UPDATE\` or \`DELETE\`.

### What does not
- \`SHOW\`, \`DESC\`, and counts or min/max answered from **metadata**
- **DDL** and privilege changes — \`CREATE\`, \`ALTER\`, \`DROP\`, \`GRANT\`
- A query whose answer is already in the **result cache**

> "Warehouse" is a confusing name inherited from the industry. Read it as **compute cluster** every time and the rest of this course is easier.`,
  narration:
    "The word warehouse is unfortunate, because in the rest of the industry a data warehouse means the whole system — the data included. In Snowflake it means something much narrower. A virtual warehouse is a cluster of compute resources: processors, memory, and some fast local SSD. That's it. Snowflake provisions it when you ask, and bills you while it runs. The crucial property is that a warehouse owns no data. Your tables are not inside it. They're in the storage layer, where they stay whatever you do to compute. So you can start a warehouse, stop it, make it four times bigger, or drop it entirely, and not one row is affected. Every time you read the word warehouse in Snowflake, translate it to compute cluster in your head, and a lot of things stop being confusing. Now, what actually needs one? Anything that reads or writes real rows. A SELECT that genuinely has to scan a table. A COPY that loads a file. An INSERT, UPDATE, DELETE or MERGE. Those all need muscle, so they need a warehouse, and if you don't have one set in your session, they simply fail. But a surprising amount of work needs no warehouse at all. SHOW and DESCRIBE come from metadata. So does a plain row count, or the minimum of a column — the cloud services layer already knows those. All your DDL — creating tables, altering them, dropping them — and every GRANT and REVOKE, run without compute. And of course, a query whose answer is already in the result cache returns without waking anything. Three of those we'll come back to in detail, because between them they are the cheapest performance work available to you.",
}
