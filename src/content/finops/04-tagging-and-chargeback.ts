import type { Section } from '../types'

export const taggingAndChargeback: Section = {
  id: 'tagging-and-chargeback',
  title: 'Tagging and chargeback',
  scene: 'chargeback',
  slide: `## Whose credits were those?

The governance course used tags to classify data. This is the other half of the promise.

### Tag the things that spend
**Warehouses** with a cost centre, **databases** for the storage half, **service users** for the 2am pipeline. Tags are **inherited**, so tagging a database covers everything created in it later.

### Join tags to metering
\`TAG_REFERENCES\` against the metering views, grouped by tag value. "What did marketing spend" becomes a query.

### Showback or chargeback
Showback alone changes behaviour surprisingly often.

### The real decision is a warehouse design decision
A warehouse shared by four teams **cannot be attributed**, whatever you tag it.

> Tag before the spending. Metering history cannot be retagged.`,
  narration:
    "In the governance course we used tags to classify data — this column holds personal data, protect it. This is the other half of what tags are for. Tag the things that spend money. Warehouses with a cost centre or a team name. Databases, for the storage half of the bill. Service users, so the pipeline that runs at two in the morning belongs to somebody. And remember tags are inherited down the object hierarchy, so tagging a database means everything created inside it later carries the tag automatically — which matters, because the alternative is remembering to tag every new object forever. Then you join. TAG_REFERENCES tells you which objects carry which tag values; join that to the metering views and group by the tag. Suddenly \"what did marketing spend last month\" is a query rather than an argument. What you do with that number is a choice. Showback means telling each team what they consumed, with no money changing hands. Chargeback means actually billing it to their budget. Showback alone changes behaviour surprisingly often — people who have never seen a number for their own consumption tend to find some easy savings within a fortnight, without anyone mandating anything. But here's the thing that actually determines whether any of this works, and it's not a tagging decision. It's a warehouse design decision. A warehouse shared by four teams cannot be attributed, no matter how carefully you tag it — the credits are genuinely mixed. If you want per-team numbers, you need per-team warehouses. That happens to be good practice anyway, because it gives you per-team auto-suspend settings and per-team sizing. And one thing to get right early: tag before the spending happens. Metering history that has already been written cannot be retagged retrospectively.",
}
