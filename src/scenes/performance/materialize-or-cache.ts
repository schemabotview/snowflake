import type { Scene } from '@graphlearning/flow'

// §09. Five ways to avoid recomputing, side by side, because in practice people pick one by instinct
// rather than by comparison. The row that decides it is usually "what it costs to keep" — three of
// these are free and two are rent.
export const materializeOrCache: Scene = {
  id: 'materialize-or-cache',
  title: 'Five ways not to compute it again',
  nodes: [
    {
      id: 'cmp',
      label: 'What each one avoids, and what it costs',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'Avoids', 'Costs to keep'],
      values: [
        ['Result cache', 'running the query at all', 'nothing'],
        ['Warehouse cache', 'fetching from remote storage', 'nothing'],
        ['Clustering key', 'reading most partitions', 'reclustering credits'],
        ['Materialized view', 'recomputing one table’s aggregate', 'storage and refreshes'],
        ['Dynamic table', 'recomputing a joined result', 'storage and refreshes'],
      ],
    },
    {
      id: 'order',
      label: 'And the order to try them',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'or-free', label: 'The free two first', sub: 'is the query even cacheable?', pattern: 'user', icon: 'zap' },
        { id: 'or-read', label: 'Then read less', sub: 'pruning, clustering, fewer columns', pattern: 'user', icon: 'funnel' },
        { id: 'or-store', label: 'Then pay rent', sub: 'materialize only what is read often', pattern: 'user', icon: 'receipt' },
      ],
    },
    {
      id: 'rule',
      label: 'The test for paying rent',
      sub: 'read far more often than the source changes',
      pattern: 'user',
      icon: 'scale',
    },
  ],
  edges: [
    { source: 'cmp', target: 'order', label: 'three of these are free and two are rent — that is usually what decides it' },
    { source: 'order', target: 'rule', label: 'a materialization over a table that churns all day costs more than it saves' },
  ],
}
