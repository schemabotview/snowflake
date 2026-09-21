import type { Section } from '../types'

export const readerAccountsSection: Section = {
  id: 'reader-accounts',
  title: 'Reader accounts',
  scene: 'reader-accounts',
  slide: `## Sharing with someone who is not a customer

Data sharing needs **two Snowflake accounts**, and most partners do not have one. Telling a customer to buy Snowflake before they can receive your data is not a conversation that goes well.

### So you create one for them
A **reader account**: created from yours, owned by you, managed by you. **Read-only** — they query the share and nothing else — but a real account, with Snowsight, drivers and their own BI tool. They sign nothing with Snowflake.

### And you pay for their queries
Their compute lands on **your** invoice, because there is nobody else to bill. That runs opposite to every other arrangement here.

> A reader account with no resource monitor is an **open tab**, held by someone who cannot see your costs. Create it, share into it, and put a credit quota on it in the same sitting.`,
  narration:
    "Secure data sharing requires two Snowflake accounts, and that's a real limitation, because most of your partners and customers don't have one. Telling them to become a Snowflake customer before they can receive the data you want to give them is not a conversation that ends well. Reader accounts solve this. You create one from your own account. It's owned by you, managed by you, and it belongs to you rather than to them. Your partner gets credentials and a real Snowflake experience: they can log into Snowsight, connect a BI tool, use a driver, write queries. What they can't do is anything else — a reader account is read-only. No creating tables, no loading data, no sharing onwards. They can query what you shared with them, and that's the whole surface. They also sign nothing with Snowflake. There's no contract, no procurement, no negotiation on their side, which is exactly why this works for getting data to a customer quickly. Now the catch, and it runs the opposite way from everything else we've discussed. In normal sharing, the consumer pays for their own compute. In a reader account, there is no contract with the consumer, so there's nobody to bill — and their compute lands on your invoice. Think about what that means. Someone who cannot see your costs, has no budget exposure, and probably isn't a SQL expert is running queries on your tab. A reader account without a resource monitor is an open bar. So the discipline is simple: when you create a reader account, create its warehouse, assign a resource monitor with a credit quota, and set a suspend trigger — all in the same sitting, before you send anyone the credentials.",
}
