import type { Section } from '../types'

export const retentionSection: Section = {
  id: 'retention',
  title: 'Retention',
  scene: 'retention',
  slide: `## How far back is "the past"?

\`DATA_RETENTION_TIME_IN_DAYS\` is the setting, and it defaults to **1 day** — shorter than most people assume.

- **Standard edition** — 0 or 1 day, on any table
- **Enterprise and above** — up to **90 days** on permanent tables
- **Transient and temporary** — 0 or 1 day, whatever the edition

### Set it at any level
Account → database → schema → table. The lowest one set wins, so you can default the account low and raise it on the tables that deserve it.

### Retention is storage
Every version of every row, kept for the window. On a table that churns, a 90-day window can cost **more than the table itself**. Raise it deliberately, not everywhere.

### Zero is a real choice, with a real consequence
It disables Time Travel — and **\`UNDROP\` with it**. Fine for a staging table rebuilt nightly; an unpleasant surprise anywhere else.`,
  narration:
    "How far back can you go? One setting decides it, and it is per object: DATA_RETENTION_TIME_IN_DAYS. The default is one day. That's worth saying twice, because people assume Snowflake is holding weeks of history for them and it usually isn't. What you can set it to depends on two things. On Standard edition, the answer is zero or one day, full stop. On Enterprise and above, a permanent table can go up to ninety days. And regardless of edition, transient and temporary tables are capped at one day, because they have no Fail-safe either — that's the whole point of them. You can set retention at the account, the database, the schema or the table, and the most specific setting wins. The useful pattern is to keep the account default modest and raise it deliberately on the tables where history is genuinely valuable: your dimension tables, anything a regulator might ask about, anything hard to reconstruct. Because here's the cost side. Retention is storage. Keeping ninety days of history on a table that's fully rewritten every night means keeping roughly ninety copies of it. On a large, churning table that can cost more than the table itself, and it appears on your bill as storage with no obvious label saying why it grew. So think of raising retention as buying insurance, and price it. Finally, zero. Setting retention to zero is a legitimate choice for a staging table you rebuild from files every night — you genuinely don't need its history. But know what goes with it: zero disables Time Travel, and it disables UNDROP too. Drop that table by accident and it is simply gone. Worth knowing before somebody sets it account-wide to save money.",
}
