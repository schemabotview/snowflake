import type { Scene } from '@graphlearning/flow'

// §03. The number that decides everything, and it is a per-object setting people never look at. The
// table pairs edition with table type because BOTH constrain it, and the cost card exists because a
// 90-day window on a churning table is a genuinely large bill.
export const retention: Scene = {
  id: 'retention',
  title: 'How far back is "the past"?',
  nodes: [
    {
      id: 'grid',
      label: 'DATA_RETENTION_TIME_IN_DAYS',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'Standard', 'Enterprise and above'],
      values: [
        ['Permanent table', '0 or 1 day', '0 to 90 days'],
        ['Transient table', '0 or 1 day', '0 or 1 day'],
        ['Temporary table', '0 or 1 day', '0 or 1 day'],
        ['Default if unset', '1 day', '1 day'],
      ],
    },
    {
      id: 'where',
      label: 'Set it at any level',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wh-acct', label: 'Account', sub: 'the default everything inherits', pattern: 'storage', icon: 'building' },
        { id: 'wh-db', label: 'Database or schema', sub: 'overrides the account', pattern: 'storage', icon: 'folder' },
        { id: 'wh-tab', label: 'Table', sub: 'overrides everything above it', pattern: 'storage', icon: 'table' },
      ],
    },
    {
      id: 'cost',
      label: 'Retention is storage',
      sub: 'a churning table keeps every version for the window',
      pattern: 'warn',
      icon: 'receipt',
    },
    {
      id: 'zero',
      label: 'Zero disables it',
      sub: 'no Time Travel, and no UNDROP either',
      pattern: 'warn',
      icon: 'ban',
    },
  ],
  edges: [
    { source: 'grid', target: 'where', label: 'the default is one day, which is shorter than most people assume' },
    { source: 'where', target: 'cost', label: 'raise it deliberately, on the tables that deserve it' },
    { source: 'cost', target: 'zero', label: 'and think twice before setting it to nothing to save money' },
  ],
}
