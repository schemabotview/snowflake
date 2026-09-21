import type { Section } from '../types'

export const editionsSection: Section = {
  id: 'editions',
  title: 'The four editions',
  scene: 'editions',
  slide: `## Four editions, one ladder

Every edition is **cumulative** — each contains everything below it and adds to it.

### Standard
The full warehouse: all core SQL, storage, security basics, and **one day** of Time Travel.

### Enterprise
Where most serious workloads land. Adds **multi-cluster warehouses**, Time Travel **up to 90 days**, materialized views, and **column and row policies**.

### Business Critical
For regulated data: **customer-managed keys**, HIPAA and PCI, **private connectivity**, and **failover** for disaster recovery.

### Virtual Private Snowflake
Everything above, in a **completely isolated environment** with dedicated infrastructure.

> Higher editions raise the **price per credit**, not just the feature list — so the question is which row of the matrix you actually need.`,
  narration:
    "Snowflake comes in four editions, and they form a ladder: each one contains everything in the tier below it and adds to it. Standard is the entry point, and it is not a crippled version — you get the full SQL engine, the architecture we've been describing, encryption, role-based access control and single sign-on. Its main limit is that Time Travel, the ability to query data as it was in the past, is capped at one day. Enterprise is where most serious workloads end up. It adds multi-cluster warehouses, which is how you handle fifty analysts arriving at nine in the morning. It raises Time Travel to as much as ninety days. It adds materialized views, the search optimization service, and — importantly for anyone handling personal data — column-level masking and row access policies. Business Critical is for regulated industries. On top of Enterprise it adds support for HIPAA and PCI workloads, customer-managed encryption keys, private connectivity so traffic never crosses the public internet, and database failover and failback between accounts for genuine disaster recovery. Virtual Private Snowflake, or VPS, is the top tier: everything in Business Critical, but running in a completely separate environment with its own dedicated infrastructure, isolated from all other Snowflake accounts. Two things to keep in mind when choosing. The edition doesn't only unlock features — it also sets what a credit costs, so a higher tier makes every hour of compute more expensive. And you can move up later. So the useful question isn't which edition sounds most impressive; it's which row of that feature matrix you actually have a requirement for.",
}
