import type { Section } from '../types'

export const recoveryDrill: Section = {
  id: 'recovery-drill',
  title: 'A recovery drill',
  scene: 'recovery-drill',
  slide: `## A bad MERGE, and the five minutes after it

**1 · Stop the bleeding.** \`ALTER TASK … SUSPEND\` — the next run would apply the same damage again.

**2 · Find the statement.** \`QUERY_HISTORY\`, filtered on the text. Take the query id.

**3 · Look before you touch.** \`SELECT … BEFORE(STATEMENT => '<id>')\`. Count it, diff it, understand what happened.

**4 · Clone the good state.** \`CREATE TABLE orders_good CLONE orders BEFORE(STATEMENT => '<id>')\`. Production is still untouched.

**5 · Verify, then swap.** Compare counts and spot-check rows. Only then \`SWAP WITH\`.

### Why a clone rather than an UPDATE
Every step up to the last is **read-only**, and the last one is **reversible**. At 2am, reversible beats clever.`,
  narration:
    "Let's put the whole course to work. It's two in the morning, a MERGE ran with a broken join condition, and your orders table now has three million rows where it should have four hundred thousand. Five steps. Step one: stop the bleeding. Suspend the task. Whatever ran once is scheduled to run again, and applying the same damage on top of damaged data makes everything harder. This is the step people skip in a panic, and it's the cheapest one. Step two: find the statement. Query QUERY_HISTORY, filter on the text of the MERGE, order by start time, and take the query id of the bad run. Step three, and this is the step that separates a calm recovery from a worse incident: look before you touch anything. Select from the table BEFORE that statement. Count the rows. Diff it against the current state. Work out what actually happened — because if you restore first and investigate later, you've destroyed the evidence, and you may find the real problem was upstream and is about to happen again. Step four: clone the good state. CREATE TABLE orders_good CLONE orders BEFORE STATEMENT, that query id. That takes seconds, costs nothing, and production is still completely untouched. Step five: verify against the clone. Row counts, a few known records, whatever check would have caught this in the first place. And only then, ALTER TABLE orders SWAP WITH orders_good. Now, why a clone and a swap rather than just deleting the bad rows? Two reasons. Everything up to the final statement is read-only, so if your diagnosis is wrong you've lost nothing. And the final statement is reversible — swap again and you're back. At two in the morning, reversible beats clever every single time.",
}
