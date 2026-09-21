import type { Scene } from '@graphlearning/flow'

// §04. The service is easy to turn on and easy to be surprised by, so the board is honest about the
// bill: it is serverless and continuous, and a table churning all day can cost more to recluster
// than the queries save. The decision row is what people actually need.
export const automaticClustering: Scene = {
  id: 'automatic-clustering',
  title: 'Snowflake does the reclustering',
  nodes: [
    {
      id: 'how',
      label: 'What the service does',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ac-watch', label: 'It watches', sub: 'how well clustered the table is', pattern: 'service', icon: 'search' },
        { id: 'ac-rewrite', label: 'It rewrites', sub: 'partitions, in the background', pattern: 'service', icon: 'repeat' },
        { id: 'ac-none', label: 'You do nothing', sub: 'no warehouse, no schedule, no job', pattern: 'service', icon: 'zap' },
      ],
    },
    {
      id: 'bill',
      label: 'And it bills',
      sub: 'serverless, and continuous',
      pattern: 'warn',
      icon: 'receipt',
    },
    {
      id: 'when',
      label: 'When it earns its keep',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'Worth it', 'Not worth it'],
      values: [
        ['Table size', 'hundreds of GB and up', 'anything a scan handles'],
        ['Query pattern', 'the same filter, constantly', 'ad-hoc, always different'],
        ['Write pattern', 'appends, batched', 'rewritten all day'],
        ['Read : write', 'read far more than written', 'written more than read'],
      ],
    },
    {
      id: 'control',
      label: 'You can pause it',
      sub: 'SUSPEND RECLUSTER during a big load, then RESUME',
      pattern: 'user',
      icon: 'power',
    },
  ],
  edges: [
    { source: 'how', target: 'bill', label: 'declaring a key does not sort the table — this service does, over time, and every rewritten partition costs compute and new storage' },
    { source: 'bill', target: 'when', label: 'so the question is whether the reads it speeds up are worth the rewrites' },
    { source: 'when', target: 'control', label: 'and reclustering during a bulk load is pure waste' },
  ],
}
