import type { Section } from '../types'

export const accountUsageSection: Section = {
  id: 'account-usage',
  title: 'ACCOUNT_USAGE, and proving it',
  scene: 'account-usage',
  slide: `## Two places to look, and when to use each

\`SNOWFLAKE.ACCOUNT_USAGE\` is the other half: **account-wide**, **365 days** of history, and it still lists **dropped objects**. The price is **latency** — 45 minutes to 3 hours.

**Right now, this database** → \`INFORMATION_SCHEMA\`. **Audit, cost, trends** → \`ACCOUNT_USAGE\`.

### The views governance actually needs
- **\`ACCESS_HISTORY\`** — which **columns** each query read, and who ran it
- **\`LOGIN_HISTORY\`** — who signed in, from where, and who failed
- **\`GRANTS_TO_ROLES\`** — who can do what, right now
- **\`POLICY_REFERENCES\`** — everywhere a policy is attached

> Governance is not the policies you wrote. It is being able to answer **who saw this column, and when**.`,
  narration:
    "The other place to look is the ACCOUNT_USAGE schema, inside the shared SNOWFLAKE database. It mirrors much of INFORMATION_SCHEMA and differs in four ways, all of which matter. Its scope is the whole account, not one database — one query covers everything. It keeps a year of history rather than days or months. It still lists dropped objects, so you can answer questions about a table somebody deleted last quarter. And it costs you latency: depending on the view, data appears somewhere between forty-five minutes and three hours after the event. So the choice between the two is simple. If the question is about right now, in this database, use INFORMATION_SCHEMA. If it's about audit, cost, trends, or anything historical, use ACCOUNT_USAGE — and don't be alarmed when this morning's query isn't there yet. Now, the views that make governance real rather than aspirational. ACCESS_HISTORY is the important one. It records, for every query, which columns were actually read, and who ran it. Column-level read history is precisely what an auditor asks for, and there is no other way to produce it. LOGIN_HISTORY shows who signed in, from where, and — often more interesting — who tried and failed. GRANTS_TO_ROLES and GRANTS_TO_USERS let you answer \"who can do what\" as a query rather than by reading your own DDL and hoping it's current. And POLICY_REFERENCES lists every object your masking and row access policies are attached to, which is how you verify that the protection you designed is actually applied where you think. Here's the thought to end the course on. Governance is not the set of policies you wrote. It's your ability to answer, on a Tuesday afternoon, who saw this column and when. The policies are how you restrict. These views are how you prove it.",
}
