import type { Scene } from '@graphlearning/flow'

// §09. The system functions cover generic quality; the interesting failures are business rules, and
// those only you can write. Deliberately shows a rule that is a plain COUNT of violations, because
// the interface is just "return a NUMBER" and people expect something more ceremonious.
export const customDmfs: Scene = {
  id: 'custom-dmfs',
  title: 'Your rules, on the same rails',
  nodes: [
    {
      id: 'gap',
      label: 'The good rules',
      sub: 'are business rules, so yours',
      pattern: 'warn',
      icon: 'bug',
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'a rule is a query that returns a number',
      label: [
        'CREATE DATA METRIC FUNCTION negative_totals(t TABLE(total NUMBER))',
        '  RETURNS NUMBER AS',
        "  $$ SELECT count(*) FROM t WHERE total < 0 $$;",
        '',
        'ALTER TABLE orders ADD DATA METRIC FUNCTION negative_totals ON (total);',
        "ALTER TABLE orders SET DATA_METRIC_SCHEDULE = 'USING CRON 0 6 * * * UTC';",
      ].join('\n'),
    },
    {
      id: 'rules',
      label: 'What makes a good one',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'cd-zero', label: 'Zero is healthy', sub: 'count the violations, not the rows', pattern: 'user', icon: 'sigma' },
        { id: 'cd-cheap', label: 'Keep it cheap', sub: 'it runs on a schedule, forever', pattern: 'user', icon: 'gauge' },
        { id: 'cd-act', label: 'Alert on it', sub: 'a metric nobody watches is a cost', pattern: 'warn', icon: 'bell' },
      ],
    },
  ],
  edges: [
    { source: 'gap', target: 'sql', label: 'the interface is small: take a table argument, return a NUMBER' },
    { source: 'sql', target: 'rules', label: 'results go to the same view the system functions write to' },
  ],
}
