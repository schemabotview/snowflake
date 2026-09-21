import type { Scene } from '@graphlearning/flow'

// §12. The course closes on the decision table, because procedure-or-function is the question people
// actually arrive with. The row that settles most arguments is the DML one: a UDF cannot change
// anything, which is exactly why it is safe to call inside a query.
export const udfs: Scene = {
  id: 'udfs',
  title: 'Functions, and how they differ from procedures',
  nodes: [
    {
      id: 'two',
      label: 'Two kinds of function',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'tw-udf', label: 'Scalar UDF', sub: 'one value per row', pattern: 'service', icon: 'sigma' },
        { id: 'tw-udtf', label: 'Table UDTF', sub: 'a set of rows, used in FROM', pattern: 'service', icon: 'table' },
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'SQL, and Python, in the same place',
      label: [
        'CREATE FUNCTION net(gross NUMBER, rate NUMBER)',
        '  RETURNS NUMBER AS $$ gross * (1 - rate) $$;   -- one expression, no semicolon',
        '',
        'CREATE FUNCTION slugify(s STRING) RETURNS STRING',
        "  LANGUAGE PYTHON RUNTIME_VERSION = '3.11' HANDLER = 'go'",
        'AS $$',
        'def go(s):',
        "    return s.lower().replace(' ', '-')",
        '$$;',
        '',
        'SELECT net(total, 0.21), slugify(name) FROM orders;',
      ].join('\n'),
    },
    {
      id: 'vs',
      label: 'Function or procedure?',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'UDF', 'Procedure'],
      values: [
        ['Must return', 'yes, always', 'no'],
        ['Called', 'inside a query', 'on its own, with CALL'],
        ['Per statement', 'as many as you like', 'exactly one'],
        ['Can run DML or DDL', 'no', 'yes'],
        ['Result usable in SQL', 'yes', 'not directly'],
      ],
    },
  ],
  edges: [
    { source: 'two', target: 'sql', label: 'a SQL UDF is one expression — no semicolon, no statements' },
    { source: 'sql', target: 'vs', label: 'and the row that settles most arguments is the one about DML' },
  ],
}
