import type { Scene } from '@graphlearning/flow'

// §07. Same shape as §06 on purpose — the pair is "which columns" and "which rows", and the symmetry
// is worth feeling. The mapping-table version is shown rather than a hard-coded CASE, because that
// is the form that survives contact with a real org chart.
export const rowAccess: Scene = {
  id: 'row-access',
  title: 'The same table, fewer rows',
  nodes: [
    {
      id: 'result',
      label: 'SELECT count(*) FROM orders',
      kind: 'table',
      pattern: 'service',
      headers: ['Who is asking', 'Rows they can see'],
      values: [
        ['ROLE = GLOBAL_SALES', '4,102,887'],
        ['ROLE = SALES_EMEA', '961,204'],
        ['ROLE = SALES_APAC', '744,019'],
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'a predicate, usually driven by a mapping table',
      label: [
        'CREATE ROW ACCESS POLICY region_rap AS (region STRING) RETURNS BOOLEAN ->',
        "  CURRENT_ROLE() = 'GLOBAL_SALES'",
        '  OR EXISTS (SELECT 1 FROM role_region_map m',
        '             WHERE m.role = CURRENT_ROLE() AND m.region = region);',
        '',
        'ALTER TABLE orders ADD ROW ACCESS POLICY region_rap ON (region);',
      ].join('\n'),
    },
    {
      id: 'order',
      label: 'Rows, then columns',
      sub: 'filter first, then mask what is left',
      pattern: 'user',
      icon: 'funnel',
    },
    {
      id: 'perf',
      label: 'Cluster on that column',
      sub: 'the predicate runs per query',
      pattern: 'warn',
      icon: 'gauge',
    },
  ],
  edges: [
    { source: 'result', target: 'sql', label: 'TRUE keeps the row, FALSE hides it — and the user is told nothing' },
    { source: 'sql', target: 'order', label: 'a mapping table survives a reorganisation; a hard-coded CASE does not' },
    { source: 'order', target: 'perf', label: 'keep the expression simple, and remember it is evaluated per row' },
  ],
}
