import type { Section } from '../types'

export const resourceMonitorsSection: Section = {
  id: 'resource-monitors',
  title: 'Resource monitors',
  scene: 'resource-monitors',
  slide: `## The one control that can say no

Everything else here reports. A **resource monitor** can actually stop spending: a **credit quota**, a **frequency**, and **triggers** at percentages of that quota.

### Three actions, escalating
**Notify** — an email, nothing stops. **Suspend** — once running queries finish. **Suspend immediately** — and cancel what is running.

### Two scopes
**One account monitor** covering everything, and **many warehouse monitors** — though each warehouse may be assigned to only one.

### The gap to know about
Monitors cover **warehouse credits only**. Snowpipe, serverless tasks and automatic clustering carry on past a suspended account. A monitor is a brake, **not a hard cap**.

> Notify triggers low — 50%, 75%, 90%. Suspend trigger high.`,
  narration:
    "Everything else in this course reports to you. A resource monitor is the one thing that can actually stop money being spent. A monitor has three parts. A credit quota — how many credits it allows. A frequency, over which that quota applies: daily, weekly, monthly, yearly, or never, which means a one-off budget that doesn't reset. And triggers, defined at percentages of the quota, each with an action. There are three actions and they escalate. Notify sends an email and changes nothing — the work carries on. Suspend stops the assigned warehouses, but lets currently running queries finish first, which is polite and means a long-running job isn't killed halfway. Suspend immediately stops the warehouses and cancels whatever is running, which is brutal and occasionally exactly what you want. There are two scopes. You can have one account-level monitor, which watches everything. And you can have many warehouse-level monitors — though each warehouse can be assigned to only one monitor, so you cannot layer them per warehouse. Now the gap, and it's important enough that I'd rather you learn it here than during an incident. Resource monitors cover warehouse credits. They do not cover serverless consumption. Snowpipe keeps loading, serverless tasks keep running, automatic clustering keeps reclustering, all of it billing, past a monitor that has suspended every warehouse in the account. So a monitor is a very useful brake and it is not a hard spending cap, and anyone who tells you the account cannot exceed a number is mistaken. The practical pattern: set notify triggers low — fifty, seventy-five, ninety percent — so you learn about a trend early, and set a suspend trigger high, as a brake you hope never engages.",
}
