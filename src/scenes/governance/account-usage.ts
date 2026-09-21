import type { Scene } from '@graphlearning/flow'

// §11. The comparison table people look up repeatedly, and then the audit views — because "who
// touched what" is the question governance actually has to answer, and ACCESS_HISTORY is the only
// place it is answered.
export const accountUsage: Scene = {
  id: 'account-usage',
  title: 'Two places to look, and when to use each',
  nodes: [
    {
      id: 'cmp',
      label: 'SNOWFLAKE.ACCOUNT_USAGE against INFORMATION_SCHEMA',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'ACCOUNT_USAGE', 'INFORMATION_SCHEMA'],
      values: [
        ['Scope', 'the whole account', 'one database'],
        ['Latency', '45 minutes to 3 hours', 'none — live'],
        ['History kept', '365 days', '7 days to 6 months'],
        ['Dropped objects', 'still listed', 'gone'],
        ['Use it for', 'audit, cost, trends', 'right now, this database'],
      ],
    },
    {
      id: 'audit',
      label: 'The views governance actually needs',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'au-access', label: 'ACCESS_HISTORY', sub: 'which columns a query read', pattern: 'storage', icon: 'fingerprint' },
        { id: 'au-login', label: 'LOGIN_HISTORY', sub: 'who signed in, and who failed', pattern: 'storage', icon: 'dooropen' },
        { id: 'au-grants', label: 'GRANTS_TO_ROLES', sub: 'who can do what, today', pattern: 'storage', icon: 'key' },
      ],
    },
    {
      id: 'end',
      label: 'Answerable at last',
      sub: 'who read this column, and when',
      pattern: 'user',
      icon: 'shieldcheck',
    },
  ],
  edges: [
    { source: 'cmp', target: 'audit', label: 'the latency is the catch — ACCOUNT_USAGE will not tell you what happened five minutes ago' },
    { source: 'audit', target: 'end', label: 'ACCESS_HISTORY records column-level reads, which is what an auditor asks for' },
  ],
}
