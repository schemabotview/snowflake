import type { Section } from '../types'

export const scaleOut: Section = {
  id: 'scale-out',
  title: 'Scaling out with multi-cluster',
  scene: 'multi-cluster',
  slide: `## Scaling out: more clusters for more people

A **multi-cluster warehouse** is still *one* warehouse, with one name and one size — Snowflake just runs **several clusters of that size** behind it and spreads the queries across them.

### Set two numbers
\`MIN_CLUSTER_COUNT\` and \`MAX_CLUSTER_COUNT\`.

- **Auto-scale** — MIN below MAX. Clusters start when queries queue, and shut down when the rush passes.
- **Maximized** — MIN equals MAX. Every cluster runs the whole time the warehouse is up.

### What it fixes
**Queueing.** Fifty analysts at 9am get spread across clusters instead of forming a line.

### What it costs
You pay **per running cluster**. A Medium with three clusters up bills like three Mediums for that period.

> Enterprise edition and above. Larger sizes cap the maximum cluster count.`,
  narration:
    "Scaling out is the other axis, and it solves the problem scaling up can't. Picture Monday at nine, and fifty analysts all opening the same dashboard. Each query is small. The warehouse is perfectly capable of running any one of them quickly — it just can't run fifty at once, so the rest queue. Making that warehouse bigger doesn't help, because no individual query needed more power. What you need is more of the same warehouse. That's a multi-cluster warehouse. It's important to understand that it is still one warehouse — one name, one size, one set of privileges. Behind that name Snowflake runs several clusters of that size and spreads incoming queries across them. You configure it with two numbers: a minimum cluster count and a maximum. If the minimum is lower than the maximum, you're in auto-scale mode: Snowflake starts extra clusters when queries begin queueing and shuts them down again when the rush passes. If the minimum equals the maximum, you're in maximized mode, and every cluster runs for as long as the warehouse is up — which you'd choose when you know the load is there and you don't want anyone waiting for a cluster to start. Two practical notes. First, billing follows the clusters, not the name. A Medium warehouse with three clusters running bills like three Mediums for that period. Auto-scale exists precisely so you're not paying for the third cluster at two in the afternoon. Second, multi-cluster is an Enterprise-edition feature and above, and the maximum number of clusters you can set depends on the warehouse size — bigger sizes allow fewer clusters.",
}
