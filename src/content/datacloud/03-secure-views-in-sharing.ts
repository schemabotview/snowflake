import type { Section } from '../types'

export const secureViewsInSharingSection: Section = {
  id: 'secure-views-in-sharing',
  title: 'Secure views in sharing',
  scene: 'secure-views-in-sharing',
  slide: `## Why sharing insists on SECURE

A plain view **cannot be added to a share**. Snowflake refuses, because a share crosses an organisational boundary and the two leaks from the governance course become real: **the definition** (your filter logic and table names) and **the statistics** (how many rows exist beyond the filter).

### The pattern that makes sharing scale
Inside a secure view, \`CURRENT_ACCOUNT()\` resolves to **whoever is querying through the share**. Join to a small \`account → partner\` mapping table and filter on it, and **one view** serves every consumer, each seeing only their own rows.

The alternative is a view per partner, forever — and one of them will eventually have the wrong filter.

> Row access policies work on shared objects too, and compose with this. Either way the filtering happens on the **provider's** side, where it belongs.`,
  narration:
    "Back in the governance course we said a plain view is not a security boundary, because it leaks its definition through GET_DDL and leaks row counts through the query profile. In sharing, that stops being advice and becomes a hard rule: Snowflake will not let you add a plain view to a share. It refuses. And that's right, because a share crosses an organisational boundary — the person on the other end works for a different company, and both of those leaks are genuinely sensitive. Your filter logic might reveal how you segment customers. The row statistics tell them how much data exists beyond what they can see. So every view in a share must be declared SECURE. Now, the pattern that makes this genuinely powerful, and it's worth writing down. Inside a secure view you can call CURRENT_ACCOUNT, which resolves to the Snowflake account of whoever is querying — meaning the consumer, coming through the share. So you build a small mapping table of partner accounts to partner identifiers, join to it in the view, and filter on CURRENT_ACCOUNT. One view. Every consumer of that share sees only their own rows. Compare that with the alternative: a separate view per partner, created by hand, maintained forever, and one of them will eventually have the wrong filter — which you'll discover when a partner mentions seeing something interesting about a competitor. With this pattern, adding a partner is inserting a row into the mapping table. Row access policies also work on shared objects and compose with this approach. Either way, the important property is the same: the filtering happens on the provider's side, under the provider's control, and the consumer has no way to reach around it.",
}
