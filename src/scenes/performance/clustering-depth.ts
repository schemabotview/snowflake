import type { Scene } from '@graphlearning/flow'

// §05. The number that turns clustering from an opinion into a measurement. A table maps depth to
// meaning because "1 is perfect, higher is worse" is unintuitive until you see the overlap it
// describes. The long SYSTEM$ function names live in the code card — they cannot fit on a card.
export const clusteringDepth: Scene = {
  id: 'clustering-depth',
  title: 'Is it actually clustered?',
  nodes: [
    {
      id: 'idea',
      label: 'Depth is overlap',
      sub: 'partitions sharing a key value',
      pattern: 'storage',
      icon: 'layers',
    },
    {
      id: 'scale',
      label: 'Reading the number',
      kind: 'table',
      pattern: 'service',
      headers: ['Average depth', 'What it means'],
      values: [
        ['1', 'perfect — one partition per value range'],
        ['2 to 4', 'healthy; pruning works well'],
        ['tens', 'poor; most partitions must be read'],
        ['hundreds', 'the key is doing nothing for you'],
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'measure, do not assume',
      label: [
        'SELECT SYSTEM$CLUSTERING_DEPTH(\'orders\');',
        '',
        "-- the fuller picture: depth, overlap histogram, partition count",
        "SELECT SYSTEM$CLUSTERING_INFORMATION('orders', '(order_date, region)');",
      ].join('\n'),
    },
    {
      id: 'use',
      label: 'A before and after',
      sub: 'measure, change one thing, measure',
      pattern: 'user',
      icon: 'repeat',
    },
  ],
  edges: [
    { source: 'idea', target: 'scale', label: 'lower is better, and 1 is the floor — a populated table can never be less' },
    { source: 'scale', target: 'sql', label: 'you can ask about columns that are not the declared key, to test a candidate' },
    { source: 'sql', target: 'use', label: 'this is the one number that makes clustering an experiment rather than a belief' },
  ],
}
