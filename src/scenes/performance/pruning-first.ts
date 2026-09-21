import type { Scene } from '@graphlearning/flow'

// §02. The same table, loaded two ways, with wildly different pruning — that contrast is the entire
// argument for clustering and it lands better as two columns of partition ranges than as prose. The
// closing card is the cheap fix people overlook: load order is free to get right.
export const pruningFirst: Scene = {
  id: 'pruning-first',
  title: 'The same rows, loaded two ways',
  nodes: [
    {
      id: 'cmp',
      label: 'What each partition ends up holding',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'Loaded in date order', 'Loaded at random'],
      values: [
        ['Partition 1 range', 'Jan 1 → Jan 4', 'Jan 2 → Dec 30'],
        ['Partition 2 range', 'Jan 4 → Jan 9', 'Jan 1 → Dec 31'],
        ['Filter: one week', 'reads 2 partitions', 'reads all of them'],
        ['What pruning can do', 'almost everything', 'nothing at all'],
      ],
    },
    {
      id: 'natural',
      label: 'This is natural clustering',
      sub: 'no key declared — just the order the data arrived in',
      pattern: 'storage',
      icon: 'boxes',
    },
    {
      id: 'free',
      label: 'And it is free to get right',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'fr-order', label: 'Load in order', sub: 'by the column you filter on', pattern: 'user', icon: 'sortarrows' },
        { id: 'fr-batch', label: 'Batch by day', sub: 'one day per load keeps ranges tight', pattern: 'user', icon: 'calendar' },
        { id: 'fr-bare', label: 'Keep filters bare', sub: 'a function on the column hides it', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [
    { source: 'cmp', target: 'natural', label: 'identical rows, identical query, and one of them reads a thousand times more' },
    { source: 'natural', target: 'free', label: 'most tables are already well clustered, and nobody had to do anything' },
  ],
}
