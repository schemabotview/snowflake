import type { Section } from '../types'

export const pricingShape: Section = {
  id: 'pricing-shape',
  title: 'How the bill is shaped',
  scene: 'two-meters',
  slide: `## Two meters, running independently

### Compute — credits
Billed **per second while a warehouse runs**, with a **60-second minimum** on each resume. Each size up the ladder doubles the burn rate. Suspended warehouses bill nothing.

### Storage — per terabyte, per month
Charged on the **compressed** size, averaged over the month. Small and steady next to compute — and it includes Time Travel and Fail-safe data.

### Cloud services — usually free
Only billed when it exceeds **10% of the day's compute credits**, which normally means never.

### Billed outside a warehouse
Snowpipe, serverless tasks, automatic clustering and cross-region **data egress** all bill on their own — they keep running with every warehouse suspended.

> Rates vary by edition, cloud and region. Check the current pricing page before you budget.`,
  narration:
    "Snowflake's bill has two main meters, and they run independently — which is exactly what you'd expect from an architecture that separates storage from compute. The first meter is compute, measured in credits. A warehouse consumes credits per second while it is running, with a minimum of sixty seconds each time it starts. The size of the warehouse sets the rate, and each step up the ladder doubles it — so a Large burns roughly eight times what an X-Small does for the same wall-clock minute. The crucial half of that sentence is while it is running. A suspended warehouse costs nothing, which is why auto-suspend is the single biggest cost lever most teams have. The second meter is storage, charged per terabyte per month on the compressed size, averaged across the month. In most accounts this is small and steady compared with compute — and note that it includes the historical data kept for Time Travel and Fail-safe, not just your current tables. Then there's the cloud services layer. Normally you don't pay for it at all; it's only billed when it consumes more than ten percent of your daily compute credits, and for ordinary workloads it doesn't come close. Finally, a few things bill outside a warehouse entirely: Snowpipe for continuous loading, serverless tasks, automatic clustering, and data transfer out of a region. These use Snowflake-supplied compute, so they keep on billing even when every warehouse you own is suspended. One caution on numbers. Rates differ by edition, by cloud and by region, and they change. Learn the shape of the bill from this section — and always check the current pricing page before you commit to a budget.",
}
