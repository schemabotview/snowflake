import type { Section } from '../types'

export const failSafeSection: Section = {
  id: 'fail-safe',
  title: 'Fail-safe',
  scene: 'fail-safe',
  slide: `## Seven days you cannot touch

After Time Travel expires, a permanent table's data sits in **Fail-safe** for a further **7 days**. It is not more Time Travel.

- **Who can use it** — Snowflake support, not you
- **How to reach it** — open a support case
- **How long it takes** — hours to days, and it is best-effort
- **Can you turn it off** — no, not on a permanent table

### What it is actually for
Catastrophe: a Snowflake-side failure, or data loss discovered far too late. It is a **last resort**, not a step in any recovery plan you write.

### And you pay for all seven days
Which is the whole argument for **transient tables**. A staging table rebuilt nightly from files you still have does not deserve seven days of insurance you cannot even invoke yourself.

> If your recovery plan mentions Fail-safe, it is not a plan. Set retention long enough to cover the mistakes you actually make.`,
  narration:
    "Fail-safe is the most misunderstood feature in this area, and the misunderstanding always runs the same direction: people treat it as seven extra days of Time Travel. It isn't, and the difference matters. After Time Travel expires on a permanent table, the data enters Fail-safe for a further seven days. During that period the data still exists — but you cannot reach it. There is no SQL, no clause, no parameter. The only route is opening a support case with Snowflake and asking them to recover it. That takes hours or days, it is best-effort rather than guaranteed, and it is not something you can build into a runbook. You also cannot switch it off on a permanent table. It is fixed at seven days, and you pay storage for all of it. So what is it for? Genuine catastrophe. A failure on Snowflake's side. Data loss discovered months later during an audit. It is the insurance policy underneath the insurance policy, and the right mental model is: it exists, be glad, and never plan around it. Which brings us to the practical consequence, and it's the other half of an argument we started in the storage course. If your recovery plan mentions Fail-safe, it is not a plan. Set your Time Travel retention long enough to cover the mistakes you actually make — and those are usually found within a day or two, not ninety. And for data you could rebuild, use transient tables. A staging table that's reloaded every night from files still sitting in your data lake does not deserve seven days of insurance you cannot personally invoke. Making it transient removes the Fail-safe charge entirely, and you lose nothing you would ever have used.",
}
