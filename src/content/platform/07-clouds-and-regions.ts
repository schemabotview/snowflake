import type { Section } from '../types'

export const cloudsAndRegionsSection: Section = {
  id: 'clouds-and-regions',
  title: 'Clouds and regions',
  scene: 'clouds-and-regions',
  slide: `## One cloud, one region, one account

Snowflake runs on **AWS, Azure and GCP**. The product is the same on all three — what differs is what sits underneath and what it costs.

### What the choice binds
- **Residency** — your data physically sits in that region, which is what compliance asks about
- **Rate** — a credit costs different amounts by cloud and by region
- **Availability** — not every feature has reached every region
- **Reach** — sharing to an account in another region means **replicating** the data there first

### Practical advice
Put the account **next to the data it will read** — object storage in the same region avoids egress charges and a round trip on every load.

> Cloud and region are set when the account is created. Changing later means a new account and a migration.`,
  narration:
    "Snowflake doesn't run its own data centres. It runs on the three big public clouds — Amazon Web Services, Microsoft Azure and Google Cloud — and underneath your tables is that provider's object storage: S3, Azure Blob Storage, or Google Cloud Storage. The Snowflake you use is the same on all three. The SQL is the same, the architecture is the same, the interface is the same. What differs is what sits beneath it, and four things that follow from your choice. First, residency. Your data physically lives in the region you picked, and that is the question auditors and regulators actually ask. Second, price. A credit does not cost the same on every cloud or in every region, and neither does a terabyte of storage. Third, availability of features. Snowflake rolls capabilities out progressively, so a newer service may not have reached your region yet — worth checking before you design around one. And fourth, reach. If you want to share data with an account in a different region or on a different cloud, that isn't a setting you flip; the data has to be replicated there first, which is real work and real cost. One piece of practical advice. Put your account next to the data it's going to read. If your files land in Azure Blob Storage in Western Europe, an account in that same region means no cross-region egress charges and no long round trip on every load. And do think about it before you sign up, because cloud and region are fixed when the account is created. Changing your mind later means a new account and a migration, not a configuration change.",
}
