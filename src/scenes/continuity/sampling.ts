import type { Scene } from '@graphlearning/flow'

// §09. Sampling belongs here because it is the OTHER way to get a dev dataset — clone when you need
// fidelity, sample when you need it small. The two methods differ in what they pick (rows against
// whole partitions), which is also why one is faster and less even than the other.
export const sampling: Scene = {
  id: 'sampling',
  title: 'When a clone is more than you need',
  nodes: [
    {
      id: 'two',
      label: 'Two methods, and they pick different things',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'BERNOULLI (or ROW)', 'SYSTEM (or BLOCK)'],
      values: [
        ['Picks', 'each row, independently', 'whole micro-partitions'],
        ['10% of 10M rows', 'about 1M rows, spread evenly', 'every row of ~10% of partitions'],
        ['Speed', 'slower — it considers each row', 'faster — it skips whole files'],
        ['Evenness', 'statistically even', 'clumped by however data landed'],
        ['Suits', 'smaller tables, fair samples', 'large tables, a quick look'],
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'four ways to ask',
      label: [
        'SELECT * FROM orders SAMPLE (10);                  -- ~10% of rows',
        'SELECT * FROM orders SAMPLE (100 ROWS);            -- a fixed count',
        'SELECT * FROM orders SAMPLE SYSTEM (10);           -- ~10% of partitions',
        'SELECT * FROM orders SAMPLE SYSTEM (10) SEED (42); -- same rows every time',
      ].join('\n'),
    },
    {
      id: 'seed',
      label: 'SEED repeats',
      sub: 'same table and seed, same rows',
      pattern: 'user',
      icon: 'repeat',
    },
    {
      id: 'end',
      label: 'Clone or sample',
      sub: 'fidelity, or size',
      pattern: 'user',
      icon: 'circlecheck',
    },
  ],
  edges: [
    { source: 'two', target: 'sql', label: 'BERNOULLI is the default when you name no method' },
    { source: 'sql', target: 'seed', label: 'SEED is not supported on fixed-size sampling, nor on views' },
    { source: 'seed', target: 'end', label: 'a sampled dev table costs a fraction of the storage and runs on a smaller warehouse — clone for fidelity, sample for size' },
  ],
}
