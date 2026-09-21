import type { Scene } from '@graphlearning/flow'

// §06. A masking policy is easiest to believe when you see the SAME query returning different values
// to different roles, so the data table does the teaching. The last card is the operational catch:
// the policy attaches to columns, and you must detach it before you can drop it.
export const masking: Scene = {
  id: 'masking',
  title: 'The same query, two answers',
  nodes: [
    {
      id: 'result',
      label: 'SELECT email FROM customers',
      kind: 'table',
      pattern: 'service',
      headers: ['Who is asking', 'What comes back'],
      values: [
        ['ROLE = SUPPORT', 'ada@example.com'],
        ['ROLE = ANALYST', '***MASKED***'],
        ['ROLE = PUBLIC', '***MASKED***'],
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'a policy is a function of the value',
      label: [
        'CREATE MASKING POLICY email_mask AS (val STRING) RETURNS STRING ->',
        "  CASE WHEN CURRENT_ROLE() IN ('SUPPORT') THEN val",
        "       ELSE '***MASKED***' END;",
        '',
        'ALTER TABLE customers MODIFY COLUMN email SET MASKING POLICY email_mask;',
      ].join('\n'),
    },
    {
      id: 'facts',
      label: 'How it behaves',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'mk-run', label: 'At query time', sub: 'the stored value never changes', pattern: 'storage', icon: 'zap' },
        { id: 'mk-every', label: 'Everywhere it appears', sub: 'joins, filters, views, exports', pattern: 'storage', icon: 'copy' },
        { id: 'mk-many', label: 'One policy, many columns', sub: 'reuse it across tables', pattern: 'storage', icon: 'link' },
      ],
    },
    {
      id: 'order',
      label: 'Unset before you drop',
      sub: 'a policy in use cannot be dropped',
      pattern: 'warn',
      icon: 'ban',
    },
  ],
  edges: [
    { source: 'result', target: 'sql', label: 'one column, one policy, and the answer depends on who ran it' },
    { source: 'sql', target: 'facts', label: 'Enterprise edition and above' },
    { source: 'facts', target: 'order', label: 'check POLICY_REFERENCES to find every column it is attached to' },
  ],
}
