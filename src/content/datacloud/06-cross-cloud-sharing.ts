import type { Section } from '../types'

export const crossCloudSharing: Section = {
  id: 'cross-cloud-sharing',
  title: 'Cross-region and cross-cloud',
  scene: 'cross-cloud',
  slide: `## Where "nothing moves" stops being true

**Within one region** a share is pure metadata: instant, free, genuinely one copy.

**Across regions or clouds** it cannot be — a warehouse cannot read another region's storage. So Snowflake **replicates the database** there and shares the replica.

### What that changes
A **real second copy** exists, and you pay storage in both places. **Data transfer** is billed. And there is a **refresh interval**, so the consumer sees the last sync rather than your last commit.

The consumer notices none of it. They mount a share exactly as before.

### Two design consequences
**Choose the region for the audience**, not just the pipeline. And **replicate a narrow mart, not the lot** — cost scales with what you replicate.`,
  narration:
    "Now the limit of the promise we opened with, because it's better to know it than to discover it on an invoice. Within a single region, a share really is pure metadata. The consumer's warehouse reads your micro-partitions in the same region's object storage. Instant, free, and there is genuinely one copy of the data. Across regions, or across cloud providers, that cannot work. A warehouse running in Azure Western Europe cannot read object storage in AWS us-east-one — not slowly, not at all. So Snowflake does the only thing possible: it replicates the database to the other region, and shares the replica there. Three things change, and all three cost money. A real second copy now exists, and you pay storage for it in both regions. Data transfer is billed to get it there and to keep it synchronised. And there's a refresh interval, so the consumer is seeing the state as of the last sync rather than your last commit — the liveness guarantee from section one is softened into a freshness target. The consumer notices none of this, incidentally. They mount a share exactly as before and query it exactly as before. The replication is the provider's problem and the provider's bill. Two design consequences. First, choose your account's region with the audience in mind, not just the pipeline — if most of your consumers are in one region and you are not, you'll be paying replication forever. It's one more reason that sign-up decision is awkward to undo. Second, and more actionable: replicate a narrow mart rather than the whole database. Replication cost scales with what you replicate, so build a curated set of secure views over exactly what partners need, and replicate that.",
}
