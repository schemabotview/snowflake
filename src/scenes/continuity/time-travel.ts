import type { Scene } from '@graphlearning/flow'

// §02. Three ways to name a moment, and the third is the one that saves you — you rarely know the
// timestamp, but you can always find the query id. The code card carries all three because the
// syntax is the deliverable here.
export const timeTravel: Scene = {
  id: 'time-travel',
  title: 'Three ways to name a moment',
  nodes: [
    {
      id: 'sql',
      kind: 'code',
      filename: 'AT and BEFORE',
      label: [
        "-- a wall-clock moment",
        "SELECT * FROM orders AT(TIMESTAMP => '2026-02-14 09:20:00'::timestamp_tz);",
        '',
        '-- relative: five minutes ago',
        'SELECT * FROM orders AT(OFFSET => -60*5);',
        '',
        '-- the one you will actually use: just before that statement ran',
        "SELECT * FROM orders BEFORE(STATEMENT => '01b2c3d4-0000-...');",
      ].join('\n'),
    },
    {
      id: 'why',
      label: 'Why STATEMENT is the useful one',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wy-know', label: 'You know the query', sub: 'the bad one is in QUERY_HISTORY', pattern: 'user', icon: 'search' },
        { id: 'wy-exact', label: 'Not the clock', sub: 'nobody noted the second it ran', pattern: 'user', icon: 'clock' },
        { id: 'wy-before', label: 'BEFORE, not AT', sub: 'the state it destroyed', pattern: 'user', icon: 'history' },
      ],
    },
    {
      id: 'uses',
      label: 'An ordinary expression',
      sub: 'join it, diff it, CTAS from it',
      pattern: 'service',
      icon: 'table',
    },
  ],
  edges: [
    { source: 'sql', target: 'why', label: 'the same table, as it stood at a chosen moment' },
    { source: 'why', target: 'uses', label: 'nothing is restored yet — you are only reading' },
  ],
}
