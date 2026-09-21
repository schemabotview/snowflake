import type { Section } from '../types'

export const alertRecipesSection: Section = {
  id: 'alert-recipes',
  title: 'Six alerts worth having',
  scene: 'alert-recipes',
  slide: `## Six worth having on day one

### Protecting the bill
**Credit spike** — an hour well above normal · **long-running query** — still going after 30 minutes · **storage growth** — a table that grew sharply overnight.

### Protecting against silence
**Snowpipe errors** — files arriving and not loading · **task failures**, *and tasks that stopped running at all* · **stale table** — no new rows since yesterday.

The second group matters more. A cost overrun becomes visible eventually; a pipeline that quietly stopped does not, and the damage compounds every day nobody notices.

### One rule
**A noisy alert is worse than none.** People learn to ignore the channel, and then the real one arrives.`,
  narration:
    "Here are six alerts worth having from the first week, in two groups. The first group protects the bill. A credit spike alert: one warehouse consuming far more in an hour than it normally does, read from WAREHOUSE_METERING_HISTORY. A long-running query alert: anything still executing after thirty minutes, from the QUERY_HISTORY table function — which catches both a runaway query and somebody accidentally scanning a fact table without a filter. And a storage growth alert: a table whose size jumped sharply overnight, from TABLE_STORAGE_METRICS, which catches a load that ran twice as well as a retention setting somebody raised. The second group protects against silence, and I'd argue it matters more. Snowpipe errors: files arriving in the stage and failing to load, visible in COPY_HISTORY. Task failures — and just as importantly, tasks that have stopped running at all, which is a different condition and the one people forget to check, because a suspended task generates no failures. And a stale table alert: no new rows since yesterday in a table that should get them hourly. Why does the second group matter more? Because a cost overrun becomes visible eventually — somebody sees the invoice. A pipeline that quietly stopped does not announce itself, and the damage compounds every day nobody notices. A dashboard showing last Tuesday's numbers looks exactly like a dashboard showing today's. One rule to end on, and it's the difference between an alerting setup that works and one that's theatre. A noisy alert is worse than no alert. If something fires every day and nobody acts, people learn to ignore the channel — and then the real one arrives and nobody looks. So alert on thresholds you would genuinely act on, and once a month, delete anything that has been firing without consequence.",
}
