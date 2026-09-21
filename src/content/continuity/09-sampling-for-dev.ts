import type { Section } from '../types'

export const samplingForDev: Section = {
  id: 'sampling-for-dev',
  title: 'Sampling for development',
  scene: 'sampling',
  slide: `## When a clone is more than you need

A clone gives you **fidelity**. Sometimes you want **size** — something small enough to iterate against on an X-Small.

### Two methods, picking different things
- **\`BERNOULLI\`** (or \`ROW\`) — considers **each row** independently. Statistically even, slower.
- **\`SYSTEM\`** (or \`BLOCK\`) — picks whole **micro-partitions**. Much faster, and clumped by however the data happened to land.

10% of ten million rows: Bernoulli gives about a million rows spread across the table; System gives you *every* row of roughly 10% of the partitions.

### The syntax
\`SAMPLE (10)\` · \`SAMPLE (100 ROWS)\` · \`SAMPLE SYSTEM (10)\` · \`SAMPLE SYSTEM (10) SEED (42)\`

**\`SEED\`** makes it repeatable — same table, same seed, same rows, which is what a test needs. Not supported on fixed-size sampling, or on views.

> Clone for fidelity, sample for size. And that is continuity: the past, a copy of it, and a small one.`,
  narration:
    "Cloning gives you fidelity — every row exactly as production has it. Sometimes what you want is the opposite: something small. A dataset you can iterate against on an X-Small warehouse without waiting, or a fixture for a test that has to run in seconds. That's sampling, and Snowflake has two methods that pick genuinely different things. BERNOULLI, also spelled ROW, considers each row independently with your stated probability. Ten percent means each row has a one-in-ten chance, so you get roughly ten percent of the rows, spread evenly across the whole table. It's statistically sound and it's slower, because the engine has to consider every row to decide. SYSTEM, also spelled BLOCK, works at the micro-partition level. Ten percent means roughly ten percent of the partitions, and you get every row in the ones it picks. That's much faster, because whole files are skipped rather than read — but the sample is clumped by however the data happened to land. If your table is loaded chronologically, a SYSTEM sample may be mostly one time period. So: Bernoulli for a fair sample of a smaller table, System for a quick look at a very large one. The syntax is compact. SAMPLE and a percentage for Bernoulli. SAMPLE and a number followed by ROWS for a fixed count. SAMPLE SYSTEM and a percentage for the block method. And add SEED with a number to make it repeatable — same table, same seed, same rows every time, which is exactly what a test fixture needs. Note that SEED isn't supported on fixed-size sampling or on views. So: clone for fidelity, sample for size. And that's continuity — the past, a copy of it, and a small one.",
}
