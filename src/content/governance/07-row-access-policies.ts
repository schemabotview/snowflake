import type { Section } from '../types'

export const rowAccessPolicies: Section = {
  id: 'row-access-policies',
  title: 'Row access policies',
  scene: 'row-access',
  slide: `## The same table, fewer rows

Masking decides **which columns**. A row access policy decides **which rows**. Same idea, other axis.

The policy is a **boolean expression** over the row. \`TRUE\` keeps it, \`FALSE\` hides it — and the user is told nothing. A \`count(*)\` just returns a smaller number.

### Use a mapping table
Hard-coding regions into a \`CASE\` means editing the policy every reorganisation. A \`role → region\` table means editing **data**. Keep it beside the protected table, and guard who can write to it.

### Order of evaluation
The **row policy runs first**, then masking applies to what survived.

> The predicate runs on **every query** against the table — keep it simple, and cluster on the column it filters.`,
  narration:
    "Masking decides which columns you can see. A row access policy decides which rows. It's the same idea on the other axis, and the two are designed to work together. A row access policy is a boolean expression over the row's own columns. If it evaluates to TRUE for a given row, you see that row; if FALSE, the row is hidden — and you are told nothing at all. There's no error and no indication that filtering happened. A count star just returns a smaller number. That's the point: two people run an identical query against an identical table and get legitimately different results. Now, the design decision that matters. You can write the logic inline — if the current role is SALES_EMEA then region equals EMEA — and for two regions that's fine. But organisations reorganise, and every reorganisation means editing and re-testing the policy. The better pattern is a mapping table: a small table with two columns, role and region, and a policy that does an EXISTS lookup against it. Now adding a region is inserting a row. Changing who sees what is updating data, not deploying code. Keep that mapping table in the same database as the protected table, and be careful who can write to it — it is now part of your security boundary. Order of evaluation, since both policies can apply to one table: the row access policy runs first, filtering rows, and then masking policies apply to whatever survived. Rows, then columns. Two cautions. The predicate is evaluated on every single query against that table, so keep it simple — avoid user-defined functions and heavy subqueries inside it. And if the policy filters on a column, consider clustering the table on that column, because the policy's filter is doing work on every query and pruning helps it enormously.",
}
