import type { Scene } from '@graphlearning/flow'

// §07. The pitch is a subtraction: everything on the left of the board is work you stop doing. The
// limits row is honest rather than grudging — incremental refresh is the whole economic argument,
// and the constructs that break it are exactly the ones people reach for in a mart.
export const dynamicTables: Scene = {
  id: 'dynamic-tables',
  title: 'Declare the result, not the steps',
  nodes: [
    {
      id: 'gone',
      label: 'What you stop writing',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'gn-str', label: 'No streams', sub: 'nothing to create or consume', pattern: 'external', icon: 'ban' },
        { id: 'gn-task', label: 'No tasks', sub: 'no schedule, no RESUME', pattern: 'external', icon: 'ban' },
        { id: 'gn-merge', label: 'No MERGE', sub: 'and no dependency order to keep', pattern: 'external', icon: 'ban' },
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'the whole pipeline',
      label: [
        'CREATE DYNAMIC TABLE customer_orders',
        "  TARGET_LAG = '5 minutes'",
        '  WAREHOUSE  = wh_etl',
        'AS',
        '  SELECT c.id, c.name, count(o.id) AS orders, sum(o.total) AS spend',
        '  FROM   customers c LEFT JOIN orders o ON o.customer_id = c.id',
        '  GROUP BY 1, 2;',
      ].join('\n'),
    },
    {
      id: 'refresh',
      label: 'How it keeps up',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'rf-inc', label: 'Incremental', sub: 'computes only what changed', pattern: 'service', icon: 'zap' },
        { id: 'rf-full', label: 'Full', sub: 'reruns the query, replaces the lot', pattern: 'service', icon: 'repeat' },
        { id: 'rf-auto', label: 'AUTO picks', sub: 'and quietly falls back to full', pattern: 'warn', icon: 'gauge' },
      ],
    },
    {
      id: 'limits',
      label: 'What breaks incremental',
      sub: 'UNION, PIVOT, RANDOM, CURRENT_DATE',
      pattern: 'warn',
      icon: 'circleslash',
    },
  ],
  edges: [
    { source: 'gone', target: 'sql', label: 'you write the SELECT you wanted all along, and one number' },
    { source: 'sql', target: 'refresh', label: 'TARGET_LAG is a promise about freshness, not a schedule you set' },
    { source: 'refresh', target: 'limits', label: 'a silent fall back to full refresh is how a cheap pipeline becomes an expensive one — and every lag set to DOWNSTREAM means nothing ever refreshes' },
  ],
}
