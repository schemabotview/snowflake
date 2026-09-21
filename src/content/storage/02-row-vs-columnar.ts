import type { Section } from '../types'

export const rowVsColumnarSection: Section = {
  id: 'row-vs-columnar',
  title: 'Row storage against columnar',
  scene: 'row-vs-columnar',
  slide: `## Two ways to lay the same table on disk

### Row storage — the transactional default
Whole rows are kept together. Fetching or editing **one record** touches one place on disk. That is exactly what an order-entry system does all day.

### Columnar — what Snowflake does
Whole **columns** are kept together. A query that reads three columns of two hundred million rows reads **three runs of bytes**, not two hundred million scattered records.

### Why columns compress so much better
Neighbouring values in a column are **alike** — the same country codes, dates in order, a handful of statuses. Similar data compresses hard; a mixed-type row does not.

### The cost of the choice
A single-row \`UPDATE\` is cheap in a row store and **rewrites a whole partition** here.

> Neither layout is better. They are shaped for different questions — and Snowflake is shaped for the analytical one.`,
  narration:
    "Why columnar? It's worth understanding properly, because it explains both what Snowflake is brilliant at and what it's poor at. In a traditional transactional database, storage is row-oriented: all the values of one row sit together on disk. That's the right choice when your workload is fetching or changing one record at a time. An order-entry system looks up order twelve thousand, updates its status, and writes it back — one row, one place, done. Analytics asks a completely different question. It says: across two hundred million orders, give me the total by month. That query needs maybe three columns out of thirty. In a row store, those three columns are scattered across every single row, so to read them you effectively read the whole table and throw most of it away. In a columnar store the three columns you asked for are three contiguous runs of bytes, and the other twenty-seven are never touched. Columnar also compresses far better, and the reason is simple: neighbouring values in a column are alike. A country column is the same few codes over and over. A date column is mostly in order. A status column has five distinct values. Similar data compresses hard. A row, by contrast, is a name next to a number next to a date — nothing alike about it. There is a cost, and it's fair to name it. Updating a single row is cheap in a row store and expensive here, because it means rewriting the partition that held it. So Snowflake is not the right place for high-frequency single-row updates. Neither layout is better in the abstract; they're shaped for different questions, and this one is shaped for the analytical question.",
}
