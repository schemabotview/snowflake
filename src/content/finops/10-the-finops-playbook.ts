import type { Section } from '../types'

export const theFinopsPlaybook: Section = {
  id: 'the-finops-playbook',
  title: 'The FinOps playbook',
  scene: 'playbook',
  slide: `## Visibility, optimisation, accountability

The loop, and it only works in that order. You cannot optimise what you cannot see — and optimisation without accountability quietly reverts.

**1 · Visibility** — metering views, tags on everything that spends, a dashboard somebody looks at.
**2 · Optimisation** — auto-suspend, right-sizing on evidence, pruning, transient tables, sensible retention.
**3 · Accountability** — monitors, showback per team, a cost review **every month rather than every crisis**.

### The boring wins, in order of return
Auto-suspend on **every** warehouse · right-size **on spill**, not instinct · split warehouses by workload · transient tables for anything rebuildable · monitors on, notify low and suspend high.

> None is clever. Together they beat any single clever thing — and they keep working after whoever set them up has moved on.`,
  narration:
    "Let's close the course with the loop, because the ordering is the insight. Visibility, then optimisation, then accountability. Visibility first: the metering views, tags on everything that spends, and a dashboard somebody actually looks at on a regular day rather than during a panic. You cannot optimise what you cannot see, and every account I've heard described as expensive turns out, on inspection, to be an account nobody was looking at. Optimisation second: auto-suspend, right-sizing based on spill rather than on instinct, pruning and clustering where they pay, transient tables for rebuildable data, retention set deliberately. That's most of the previous two courses. Accountability third, and this is the one people skip: resource monitors, showback per team, and a cost review every month rather than every crisis. Because here's what happens without it — you do a big optimisation push, the bill drops thirty percent, everyone is pleased, and eighteen months later it's back where it was. Nobody did anything wrong; the warehouses just accumulated again. Accountability is what makes the improvement stick. And the boring wins, in rough order of return. Auto-suspend on every warehouse, no exceptions — that single setting saves more money in more accounts than anything else here. Right-size on evidence of spill rather than on a feeling. Split warehouses by workload, so your numbers mean something and each can be tuned separately. Use transient tables for anything you could rebuild from source, so you're not paying Fail-safe on it. And turn monitors on, with notify triggers low and a suspend trigger high. None of those is clever. Together they beat any single clever thing, and — the part that matters most — they keep working after the person who set them up has moved on.",
}
