import type { Scene } from '@graphlearning/flow'

// §03. Choosing a key is three judgements, and cardinality is the one people get wrong in both
// directions at once. The expression trick — casting a timestamp down to a date — is the single
// most useful thing in the section, so it gets the code card.
export const clusteringKeys: Scene = {
  id: 'clustering-keys',
  title: 'Choosing a clustering key',
  nodes: [
    {
      id: 'three',
      label: 'Three judgements, in this order',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ck-filter', label: 'What is filtered', sub: 'the column in your WHERE clauses', pattern: 'service', icon: 'funnel' },
        { id: 'ck-card', label: 'How many values', sub: 'enough to prune, few enough to group', pattern: 'service', icon: 'hash' },
        { id: 'ck-few', label: 'How many columns', sub: 'three or four at most', pattern: 'service', icon: 'ruler' },
      ],
    },
    {
      id: 'card',
      label: 'Cardinality, both ways wrong',
      kind: 'table',
      pattern: 'service',
      headers: ['Column', 'Distinct values', 'Verdict'],
      values: [
        ['country', '~200', 'too few — barely prunes'],
        ['order_date (date)', '~1,500', 'about right'],
        ['created_at (timestamp)', 'millions', 'too many — every partition differs'],
        ['order_id', 'one per row', 'useless as a key'],
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'the trick worth knowing',
      label: [
        '-- a timestamp has too many distinct values; cast it down',
        'ALTER TABLE orders CLUSTER BY (TO_DATE(created_at), region);',
      ].join('\n'),
    },
    {
      id: 'order',
      label: 'Order matters',
      sub: 'lowest cardinality first — region, then date',
      pattern: 'user',
      icon: 'sortarrows',
    },
  ],
  edges: [
    { source: 'three', target: 'card', label: 'a key only helps the queries that filter on it, so start from the workload' },
    { source: 'card', target: 'sql', label: 'the sweet spot is thousands of distinct values, not two and not millions' },
    { source: 'sql', target: 'order', label: 'and columns are compared left to right' },
  ],
}
