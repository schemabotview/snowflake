import type { Section } from '../types'

export const scalingPolicySection: Section = {
  id: 'scaling-policy',
  title: 'Standard or Economy',
  scene: 'scaling-policy',
  slide: `## The scaling policy

With auto-scale on, the **scaling policy** decides how eagerly Snowflake starts clusters and how quickly it gives them back.

### Standard — the default
Starts a cluster **as soon as queries queue**, and keeps clusters warm for a while before shutting them down. Prioritises the person waiting.

### Economy
Starts a cluster **only when the load justifies the credits**, and reclaims idle clusters **sooner**. Prioritises the bill — some queries wait a little longer.

### Choosing
- **Bursty, unpredictable, user-facing** → Standard
- **Steady, predictable, tolerant of a short wait** → Economy

> Meaningless in **maximized** mode — every cluster is already running, so there is nothing to start or stop.`,
  narration:
    "Once a warehouse is in auto-scale mode, there's a second setting that decides its temperament: the scaling policy. There are two, Standard and Economy, and the difference is how eager Snowflake is to spend credits on your behalf. Standard is the default, and it favours the person waiting. The moment queries start queueing, Snowflake begins starting another cluster. And when the load drops, it's relatively slow to shut clusters down — it keeps them warm for a while in case the work comes back. That means minimal queueing and good responsiveness, at the cost of some clusters running a little longer than strictly necessary. Economy favours the bill. It only starts an additional cluster when it estimates there's enough work to keep that cluster busy for a meaningful stretch — so a short burst of queueing may just be allowed to queue. And it shuts idle clusters down faster, reclaiming the credits sooner. The trade is real: users may occasionally wait a bit longer. How do you choose? Think about who's on the other end. If the workload is bursty, unpredictable and someone is watching a dashboard spinner, choose Standard — an analyst's time is worth more than the credits. If the workload is steady and predictable, or it's a background job where nobody is waiting on a screen, Economy is the more sensible default and will save you money over a month. One thing to keep in mind: the scaling policy only applies in auto-scale mode. In maximized mode, where the minimum and maximum cluster counts are equal, every cluster is running for the whole time the warehouse is up, so there is nothing to start or stop and the setting has no effect at all.",
}
