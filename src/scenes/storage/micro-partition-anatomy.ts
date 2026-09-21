import type { Scene } from '@graphlearning/flow'

// §03. The partitions have to be SEEN as a sequence of chunks with their own ranges, because §04's
// pruning is nothing but reading those ranges. Four partitions and an ellipsis are enough; the sub on
// each is the min/max of the clustering-ish column, which is the number that will matter next.
export const microPartitionAnatomy: Scene = {
  id: 'micro-partition-anatomy',
  title: 'One table, thousands of chunks',
  nodes: [
    {
      id: 'table',
      label: 'ORDERS — 200 million rows',
      pattern: 'group',
      cols: 5,
      children: [
        { id: 'mp1', label: 'MP 1', sub: 'order_date 01-01 → 01-04', pattern: 'storage', icon: 'box' },
        { id: 'mp2', label: 'MP 2', sub: 'order_date 01-04 → 01-09', pattern: 'storage', icon: 'box' },
        { id: 'mp3', label: 'MP 3', sub: 'order_date 01-09 → 01-15', pattern: 'storage', icon: 'box' },
        { id: 'mp4', label: 'MP 4', sub: 'order_date 01-15 → 01-21', pattern: 'storage', icon: 'box' },
        { id: 'mpn', label: '…thousands more', sub: 'created as data arrives', pattern: 'external', icon: 'boxes' },
      ],
    },
    {
      id: 'facts',
      label: 'What one micro-partition is',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'f-size', label: '50–500 MB', sub: 'measured uncompressed', pattern: 'service', icon: 'ruler' },
        { id: 'f-auto', label: 'Automatic', sub: 'you never declare or manage one', pattern: 'service', icon: 'gears' },
        { id: 'f-cols', label: 'Columnar inside', sub: 'each column its own run of bytes', pattern: 'service', icon: 'table' },
        { id: 'f-meta', label: 'Self-describing', sub: 'min, max, distinct counts', pattern: 'service', icon: 'braces' },
      ],
    },
    {
      id: 'immutable',
      label: 'And never edited',
      sub: 'an UPDATE writes new partitions',
      pattern: 'warn',
      icon: 'lock',
    },
  ],
  edges: [
    { source: 'table', target: 'facts', label: 'a table is not one file — it is a long sequence of these' },
    { source: 'facts', target: 'immutable', label: 'changing a row rewrites the whole partition that held it, and the old one is simply unreferenced' },
  ],
}
