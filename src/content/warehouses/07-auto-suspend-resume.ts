import type { Section } from '../types'

export const autoSuspendResume: Section = {
  id: 'auto-suspend-resume',
  title: 'Auto-suspend and auto-resume',
  scene: 'a-day-of-billing',
  slide: `## The meter runs only while it runs

**Auto-suspend** stops a warehouse after a set period of inactivity. **Auto-resume** starts it again the moment a query arrives — in seconds, with nothing for the user to do.

### Two billing rules
- Billing is **per second**, but every resume carries a **60-second minimum**
- A **suspended warehouse bills nothing** — this is the biggest cost lever most teams have

### The trade you are actually setting
Suspending also **throws away the local SSD cache**. So:

- **Short auto-suspend** → fewer idle credits, a cold cache on every resume
- **Long auto-suspend** → a warm cache and fast repeat queries, some idle minutes paid for

### Reasonable starting points
A minute or two for **interactive** warehouses; longer for one serving a steady stream of similar queries; short for a warehouse that runs one batch job a night.`,
  narration:
    "Two settings decide how much of the day your warehouse spends on the meter. Auto-suspend stops the warehouse after a chosen period with no activity. Auto-resume starts it again the instant a query arrives — it takes seconds, and the user doesn't do anything or even necessarily notice. Together they mean a warehouse is running only when there's work, which is exactly what you want. Two billing rules sit underneath. First, billing is per second, but each time a warehouse resumes there's a sixty-second minimum. So a warehouse that wakes, answers one two-second query, and goes back to sleep still costs you a minute. That matters if you're tempted to set auto-suspend extremely low on a warehouse that gets sporadic single queries — you can end up paying repeated minimums. Second, and much more importantly: a suspended warehouse costs nothing at all. Not a reduced rate — nothing. This is the single biggest cost lever most teams have, and forgetting to set auto-suspend on a warehouse someone created for a one-off experiment is one of the most common ways to be surprised by a bill. Now the interesting part, because this isn't a free win. Suspending a warehouse also discards its local SSD cache. When it resumes, that cache is empty, and the first queries have to fetch from remote storage again. So you're really setting a trade. Suspend aggressively and you save idle credits but pay in cold-cache latency. Suspend slowly and repeat queries stay fast, but you pay for some idle minutes. As a starting point: a minute or two for interactive warehouses, longer for one serving a steady stream of similar queries where the cache is doing real work, and short for a warehouse that only runs a nightly batch.",
}
