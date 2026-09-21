import type { Section } from '../types'

export const aTuningMethod: Section = {
  id: 'a-tuning-method',
  title: 'A tuning method',
  scene: 'tuning-method',
  slide: `## Measure, change one thing, measure again

The failure mode is changing four things at once and keeping whichever combination looked fastest — a faster query, no idea why, and three settings you now pay for.

### The loop
**Baseline** with the result cache off → **diagnose** (partitions, spill, or queueing) → **one change**, written down → **measure again**, same conditions.

### The order to try things
Write it better → prune more → size the warehouse *if it is spilling* → add clusters *if it is queueing* → materialize **last**.

Cheapest and most durable first. Rent last.

> \`ALTER SESSION SET USE_CACHED_RESULT = FALSE;\` before you benchmark — otherwise the second run times the cache and you draw a cheerful, wrong conclusion.`,
  narration:
    "Let's close on method rather than on another feature, because the method is what makes the features useful. The failure mode in performance work is familiar: something is slow, so you resize the warehouse, add a clustering key, enable search optimization and rewrite the query, all in the same afternoon. It gets faster. You have no idea which change did it, and you're now paying for three things you may not need. So: the loop. Baseline first — run the query with the result cache turned off, and note the profile numbers. Diagnose second: is it partitions scanned, is it spill, or is it queueing? It is almost always one of those three, and they have different fixes. Then make exactly one change, and write down what it was. Then measure again, same query, same conditions. That's it. It's slower than guessing for the first hour and faster for everything after. And the order to try things, which follows from the whole course. Write it better first: bare filters that don't hide the column from pruning, named columns instead of SELECT star. That's free and it often ends the investigation. Then prune more: fix the load order if you control it, and only then consider a clustering key. Then size the warehouse, if and only if the profile shows spill. Then add clusters, if and only if it shows queueing. And materialize last, and only for things read far more often than they change. Cheapest and most durable first; rent last. One final reminder, because it catches everybody at least once: set USE underscore CACHED underscore RESULT to FALSE before you benchmark anything. Otherwise your second run is timing the cache rather than your change, and you'll draw a very cheerful and completely wrong conclusion.",
}
