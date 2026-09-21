import type { Scene } from '@graphlearning/flow'

// §03. A real hierarchy drawn as one, because inheritance direction is the content: ACCOUNTADMIN is
// above SECURITYADMIN and SYSADMIN, so it holds everything they do. The warn cards at the bottom are
// the two mistakes every new account makes in its first week.
export const systemRoles: Scene = {
  id: 'system-roles',
  title: 'The five you are given',
  nodes: [
    { id: 'acct', label: 'ACCOUNTADMIN', sub: 'everything — billing, and both branches below', pattern: 'warn', icon: 'skull' },
    { id: 'sec', label: 'SECURITYADMIN', sub: 'MANAGE GRANTS: grant and revoke anywhere', pattern: 'service', icon: 'shieldcheck' },
    { id: 'sys', label: 'SYSADMIN', sub: 'creates databases, schemas, warehouses', pattern: 'service', icon: 'server' },
    { id: 'user', label: 'USERADMIN', sub: 'creates users and roles, and nothing else', pattern: 'service', icon: 'usercheck' },
    { id: 'pub', label: 'PUBLIC', sub: 'held by everyone, automatically', pattern: 'storage', icon: 'globe' },
    {
      id: 'rules',
      label: 'Two mistakes to avoid',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'rl-day', label: 'Do not live in it', sub: 'ACCOUNTADMIN for billing and setup', pattern: 'warn', icon: 'ban' },
        { id: 'rl-pub', label: 'Do not grant to PUBLIC', sub: 'every user in the account gets it', pattern: 'warn', icon: 'globe' },
      ],
    },
  ],
  // sys → pub SKIPS a rank: it routes straight through the USERADMIN card, and a label pill rides the
  // midpoint — so it lands ON that card. Even one word collided. A rank-skipping edge carries NO label.
  edges: [
    { source: 'acct', target: 'sec', label: 'inherits' },
    { source: 'acct', target: 'sys', label: 'inherits' },
    { source: 'sec', target: 'user', label: 'inherits' },
    { source: 'sys', target: 'pub' },
    { source: 'user', target: 'pub', label: 'above' },
    { source: 'pub', target: 'rules', label: 'and two of these are dangerous in ordinary use' },
  ],
}
