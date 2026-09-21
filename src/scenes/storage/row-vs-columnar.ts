import type { Scene } from '@graphlearning/flow'

// §02. A comparison table, because the two layouts differ attribute by attribute and the reader has
// to go across. The card underneath is the whole reason columnar wins here — analytics reads a few
// columns of very many rows, which is exactly the access pattern a row store is worst at.
export const rowVsColumnar: Scene = {
  id: 'row-vs-columnar',
  title: 'Two ways to lay the same table on disk',
  nodes: [
    {
      id: 'cmp',
      label: 'Row store against column store',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'Row store (OLTP)', 'Columnar (Snowflake)'],
      values: [
        ['Kept together', 'whole rows', 'whole columns'],
        ['Fast at', 'fetch or edit one record', 'scanning a few columns of many rows'],
        ['Compression', 'moderate', 'high — neighbours are alike'],
        ['Single-row update', 'cheap', 'rewrites a partition'],
        ['Needs indexes', 'yes, to avoid scans', 'no — metadata prunes instead'],
        ['Built for', 'transactions', 'analytics'],
      ],
    },
    {
      id: 'why',
      label: 'Why columns win here',
      sub: '3 columns of 200 million rows',
      pattern: 'user',
      icon: 'barchart',
    },
  ],
  edges: [
    { source: 'cmp', target: 'why', label: 'neither is better in general — but a row store must touch every row to reach three of its columns' },
  ],
}
