import type { Scene } from '@graphlearning/flow'

// §08. Everything in the course, used once, in order. The board is the runbook — five steps, and the
// third is the one people skip: verify against the clone BEFORE touching production. Deliberately
// ends on SWAP rather than on an UPDATE, because the reversible option is the right one at 2am.
export const recoveryDrill: Scene = {
  id: 'recovery-drill',
  title: 'A bad MERGE, and the five minutes after it',
  nodes: [
    {
      id: 'steps',
      label: 'The runbook',
      pattern: 'group',
      cols: 5,
      children: [
        { id: 'rd-1', label: '1 · Stop', sub: 'suspend the task before it runs again', pattern: 'warn', icon: 'power' },
        { id: 'rd-2', label: '2 · Find it', sub: 'the query id, in QUERY_HISTORY', pattern: 'service', icon: 'search' },
        { id: 'rd-3', label: '3 · Look', sub: 'BEFORE(STATEMENT) — read, do not write', pattern: 'service', icon: 'history' },
        { id: 'rd-4', label: '4 · Clone it', sub: 'the good state, as its own table', pattern: 'service', icon: 'copy' },
        { id: 'rd-5', label: '5 · Verify, then swap', sub: 'counts and spot checks first', pattern: 'user', icon: 'circlecheck' },
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'the whole recovery',
      label: [
        "ALTER TASK load_orders SUSPEND;",
        '',
        'SELECT query_id, query_text, start_time FROM TABLE(INFORMATION_SCHEMA.QUERY_HISTORY())',
        "WHERE query_text ILIKE '%MERGE INTO orders%' ORDER BY start_time DESC;",
        '',
        "CREATE TABLE orders_good CLONE orders BEFORE(STATEMENT => '<query_id>');",
        'SELECT count(*) FROM orders_good;   -- and compare, before you touch anything',
        '',
        'ALTER TABLE orders SWAP WITH orders_good;',
      ].join('\n'),
    },
    {
      id: 'why',
      label: 'Why a clone, not an UPDATE',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'wy-safe', label: 'Production is untouched', sub: 'until the very last statement', pattern: 'user', icon: 'shieldcheck' },
        { id: 'wy-back', label: 'And it is reversible', sub: 'SWAP again to undo the undo', pattern: 'user', icon: 'repeat' },
      ],
    },
  ],
  edges: [
    { source: 'steps', target: 'sql', label: 'suspending first matters — the next scheduled run would apply the same damage again' },
    { source: 'sql', target: 'why', label: 'the fix is one statement, and every step before it was read-only' },
  ],
}
