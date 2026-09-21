import type { Scene } from '@graphlearning/flow'

// §01. The definition matters less than the NEGATIVE space around it, so the board spends its third
// row on what runs with no warehouse at all. That list is the first practical consequence of the
// three-layer split and it surprises people who arrive from a database where everything needs the
// server.
export const warehouseAnatomy: Scene = {
  id: 'warehouse-anatomy',
  title: 'A warehouse is a cluster, not a database',
  nodes: [
    {
      id: 'parts',
      label: 'What a running warehouse is made of',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'p-cpu', label: 'Processors', sub: 'parallel workers across the nodes', pattern: 'service', icon: 'cpu' },
        { id: 'p-mem', label: 'Memory', sub: 'joins, sorts and aggregates', pattern: 'service', icon: 'memory' },
        { id: 'p-ssd', label: 'Local SSD', sub: 'a cache, and room to spill', pattern: 'service', icon: 'harddrive' },
      ],
    },
    {
      id: 'nodata',
      label: 'It holds no data',
      sub: 'start, stop or resize it — tables never move',
      pattern: 'user',
      icon: 'power',
    },
    {
      id: 'without',
      label: 'And plenty runs without one',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'w-meta', label: 'SHOW and DESC', sub: 'answered from metadata', pattern: 'external', icon: 'search' },
        { id: 'w-ddl', label: 'DDL and GRANT', sub: 'CREATE, ALTER, DROP, privileges', pattern: 'external', icon: 'key' },
        { id: 'w-cache', label: 'A cached result', sub: 'the same query, unchanged data', pattern: 'external', icon: 'zap' },
      ],
    },
  ],
  edges: [
    { source: 'parts', target: 'nodata', label: 'compute, and nothing else — the data stays in the storage layer' },
    { source: 'nodata', target: 'without', label: 'so some work never needs a warehouse at all' },
  ],
}
