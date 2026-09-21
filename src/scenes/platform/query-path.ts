import type { Scene } from '@graphlearning/flow'

// §05. The same three layers as §03, but walked in TIME rather than drawn as a stack — so it is a
// flow, and every edge label is a decision the layer can make to SKIP the next one. The two exits on
// the right of the chain (result cache, metadata answer) are the point: the fastest query never
// reaches a warehouse at all.
export const queryPath: Scene = {
  id: 'query-path',
  title: 'What happens between SELECT and the rows',
  nodes: [
    { id: 'client', label: 'Your client', sub: 'Snowsight, SnowSQL, a driver', pattern: 'user', icon: 'terminal' },
    {
      id: 'brain',
      label: 'Cloud services does the thinking',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'q-auth', label: '1 · Authenticate', sub: 'who are you, in which role', pattern: 'service', icon: 'shieldcheck' },
        { id: 'q-parse', label: '2 · Parse', sub: 'and resolve every object name', pattern: 'service', icon: 'code' },
        { id: 'q-cache', label: '3 · Result cache?', sub: 'same query, unchanged data — done', pattern: 'service', icon: 'zap' },
        { id: 'q-plan', label: '4 · Plan & prune', sub: 'metadata says which partitions matter', pattern: 'service', icon: 'brain' },
      ],
    },
    {
      id: 'muscle',
      label: 'The warehouse',
      sub: 'checks its SSD cache, then fetches',
      pattern: 'service',
      icon: 'warehouse',
    },
    {
      id: 'mem',
      label: 'Storage answers',
      sub: 'only the columns and partitions asked for',
      pattern: 'storage',
      icon: 'database',
    },
  ],
  edges: [
    { source: 'client', target: 'brain', label: 'one SQL string over the wire' },
    { source: 'brain', target: 'muscle', label: 'no cached result — so a warehouse is needed' },
    { source: 'muscle', target: 'mem', label: 'reads only what the pruning survived' },
  ],
}
