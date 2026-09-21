import type { Scene } from '@graphlearning/flow'

// §04. The payoff board. Colour does the teaching: one partition lit as `service`, three greyed as
// `external`, so "skipped" is visible before a word is read. Vertical pruning gets its own row
// because people learn the row version and then keep writing SELECT *.
export const pruning: Scene = {
  id: 'pruning',
  title: 'The cheapest read is the one that never happens',
  nodes: [
    {
      id: 'q',
      kind: 'code',
      filename: 'one month of a four-year table',
      label: [
        "SELECT order_id, total",
        "FROM   orders",
        "WHERE  order_date BETWEEN '2026-02-01' AND '2026-02-28';",
      ].join('\n'),
    },
    {
      id: 'horiz',
      label: 'Horizontal — skip partitions',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'h1', label: 'Jan partitions', sub: 'max is before February — skip', pattern: 'external', icon: 'circleslash' },
        { id: 'h2', label: 'Feb partitions', sub: 'range overlaps — read these', pattern: 'service', icon: 'circlecheck' },
        { id: 'h3', label: 'Mar partitions', sub: 'min is after February — skip', pattern: 'external', icon: 'circleslash' },
        { id: 'h4', label: '2023–2025', sub: 'nowhere near — skip', pattern: 'external', icon: 'circleslash' },
      ],
    },
    {
      id: 'vert',
      label: 'Vertical — skip columns',
      sub: 'the other thirty are never read',
      pattern: 'service',
      icon: 'table',
    },
    {
      id: 'noidx',
      label: 'No index did this',
      sub: 'the min/max written at load time',
      pattern: 'user',
      icon: 'key',
    },
  ],
  edges: [
    { source: 'q', target: 'horiz', label: 'the optimizer compares the filter against every partition’s recorded range' },
    { source: 'horiz', target: 'vert', label: 'and then does the same trick the other way' },
    { source: 'vert', target: 'noidx', label: 'which is why SELECT * is expensive here in a way it is not in a row store' },
  ],
}
