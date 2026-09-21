import type { Scene } from '@graphlearning/flow'

// §09. Two caches, and the useful axis is WHO OWNS THEM — one lives in a warehouse and dies with it,
// the other lives in cloud services and cannot be switched off. Side-by-side containers make that
// ownership visible in a way a list of bullet points does not.
export const twoMoreCaches: Scene = {
  id: 'two-more-caches',
  title: 'The other two caches',
  nodes: [
    {
      id: 'local',
      label: 'Local disk cache — inside the warehouse',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'lc-what', label: 'Holds', sub: 'micro-partitions it recently read', pattern: 'service', icon: 'harddrive' },
        { id: 'lc-scope', label: 'Scope', sub: 'that warehouse, all its clusters', pattern: 'service', icon: 'warehouse' },
        { id: 'lc-gone', label: 'Lost when', sub: 'the warehouse suspends or resizes', pattern: 'warn', icon: 'power' },
      ],
    },
    {
      id: 'meta',
      label: 'Metadata cache — inside cloud services',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'mc-what', label: 'Holds', sub: 'min/max, row counts, partition stats', pattern: 'storage', icon: 'braces' },
        { id: 'mc-scope', label: 'Scope', sub: 'the whole account, always on', pattern: 'storage', icon: 'globe' },
        { id: 'mc-off', label: 'Cannot be off', sub: 'it is how pruning happens at all', pattern: 'storage', icon: 'lock' },
      ],
    },
    {
      id: 'free',
      kind: 'code',
      filename: 'answered with no warehouse running',
      label: [
        'SELECT count(*) FROM orders;        -- the row count is metadata',
        'SELECT min(order_date) FROM orders; -- so is the column minimum',
        'SHOW TABLES;   DESC TABLE orders;   -- and so is the shape',
      ].join('\n'),
    },
  ],
  edges: [
    { source: 'local', target: 'meta', label: 'one warms up as you work; the other is simply always there' },
    { source: 'meta', target: 'free', label: 'which is why these return instantly, with every warehouse asleep' },
  ],
}
