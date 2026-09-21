import type { Section } from '../types'

export const zeroCopyCloneSection: Section = {
  id: 'zero-copy-clone',
  title: 'Zero-copy cloning',
  scene: 'zero-copy-clone',
  slide: `## Two names, one set of files

\`CREATE TABLE orders_dev CLONE orders;\`

At that moment: **metadata only**. A second name pointing at the same micro-partitions. A terabyte takes about as long as one row, and **nothing is duplicated**.

### Then they diverge
Write to either side and that side gets new partitions. You are billed only for the **delta**.

### What can be cloned
Databases and schemas with everything inside, permanent and transient tables — and also stages, file formats, sequences, tasks and streams.

### It composes with Time Travel
\`CLONE orders BEFORE(STATEMENT => '…')\` clones the table **as it was**. That line is most of the next two sections.

> Grants are **not** cloned. The clone is a new object with a new owner.`,
  narration:
    "Zero-copy cloning is the feature that most reliably makes people stop and check they heard it right. CREATE TABLE something CLONE something-else. At the moment you run it, nothing is copied. Snowflake creates a new object whose metadata points at exactly the same micro-partitions as the original. That's it. Which means cloning a terabyte table takes about as long as cloning a table with one row — seconds — and it adds no storage, because there is no second copy of anything. The two are fully independent from that first second. Write to the clone and Snowflake writes new partitions for the clone; the original is untouched. Write to the original and the same in reverse. And you're billed for exactly that divergence: the partitions that now belong to only one of them. So a clone is free at birth and grows a bill in proportion to how much you actually change. What can you clone? Tables, permanent and transient. Schemas, and everything inside them. Whole databases, which is the one that surprises people — an entire production database, cloned in seconds. And also stages, file formats, sequences, tasks and streams, so a cloned database arrives with its pipeline objects. The notable exceptions are external tables and the contents of internal stages. Two things to remember. First, it composes with Time Travel: you can clone a table as it was at a point in the past, with the AT or BEFORE clause on the CLONE statement. That single line is most of the next two sections. Second, and this catches people: grants are not cloned by default. The clone is a new object with a new owner, so whoever needs access to it will need granting — which is a small annoyance and, for a clone of production data, an entirely sensible default.",
}
