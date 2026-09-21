import type { Scene } from '@graphlearning/flow'

// §07. Three types, five attributes — a table. The two cards after it are the traps: the type cannot
// be changed after creation, and a temporary table silently shadows a permanent one of the same name
// for the rest of the session, which is a genuinely nasty afternoon.
export const tableTypes: Scene = {
  id: 'table-types',
  title: 'Permanent, transient, temporary',
  nodes: [
    {
      id: 'cmp',
      label: 'What you give up as you go right',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'Permanent', 'Transient', 'Temporary'],
      values: [
        ['Lives until', 'you drop it', 'you drop it', 'the session ends'],
        ['Time Travel', 'up to 90 days', '0 or 1 day', '0 or 1 day'],
        ['Fail-safe', '7 days', 'none', 'none'],
        ['Storage cost', 'highest', 'lower', 'lowest'],
        ['Reach for it', 'anything that matters', 'reproducible staging', 'scratch in one session'],
      ],
    },
    {
      id: 'traps',
      label: 'Two things that catch people',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'tr-conv', label: 'No conversion', sub: 'the type is fixed at CREATE', pattern: 'warn', icon: 'ban' },
        { id: 'tr-shadow', label: 'Temp tables shadow', sub: 'same name wins for that session', pattern: 'warn', icon: 'copy' },
      ],
    },
    {
      id: 'inherit',
      label: 'Transient is catching',
      sub: 'every table in a transient schema is transient too',
      pattern: 'user',
      icon: 'tree',
    },
  ],
  edges: [
    { source: 'cmp', target: 'traps', label: 'the difference is not features — it is how much history Snowflake keeps for you, and bills you for' },
    { source: 'traps', target: 'inherit', label: 'and the setting is inherited downward' },
  ],
}
