import type { Section } from '../types'

export const customDmfs: Section = {
  id: 'custom-dmfs',
  title: 'Custom data metric functions',
  scene: 'custom-dmfs',
  slide: `## Your rules, on the same rails

System functions cover the generic failures. The interesting ones are **business rules**, and only you can write those: a negative order total, an order with no customer, a currency that is not in your list.

### The interface is small
\`CREATE DATA METRIC FUNCTION\`, take a **table argument**, return a **\`NUMBER\`**. That is the whole contract — a rule is just a query that counts violations.

Attach and schedule it exactly like a system one, and the results land in the same view.

### What makes a good one
- **Zero is healthy.** Count the *violations*, not the rows — so every metric reads the same way and one alert covers them all
- **Keep it cheap.** It runs on a schedule, forever
- **Alert on it.** A metric nobody watches is a cost with no benefit

> The measurement is the easy half. Deciding who gets woken up, and what they are expected to do, is the half that makes it worth having.`,
  narration:
    "The system functions cover generic failures — nulls, duplicates, staleness. But the failures that actually hurt are usually specific to your business. An order with a negative total. An order line with no matching order. A currency code that isn't one of the five you trade in. A customer record where the country and the tax region disagree. Nobody can ship a built-in function for those, so you write them. The interface is refreshingly small. CREATE DATA METRIC FUNCTION, declare a table argument, and return a NUMBER. That's the entire contract. A rule is just a query that counts violations. Write a select that counts rows where total is less than zero, and you have a data metric function. Then you attach it and schedule it exactly like a system one, with ALTER TABLE, and the results land in the same results view as the built-ins — which means one alert covers both. Three things make a good one. First, arrange it so zero is healthy. Count the violations, not the compliant rows. That way every metric in your account reads the same direction and a single alert condition — anything greater than zero — covers all of them. Second, keep it cheap. This runs on a schedule, forever, on a warehouse you pay for. A metric that does a full scan of a billion-row table every fifteen minutes is a cost centre, not a quality measure. Third, alert on it. A metric that's measured and never watched is pure cost with no benefit. And that's the honest note to end on. The measurement is the easy half. Deciding who gets woken up when it's non-zero, and what they're expected to do about it, is the half that makes it worth having.",
}
