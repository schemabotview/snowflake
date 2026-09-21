import type { Scene } from '@graphlearning/flow'

// §08. The four conditions are the section — a result cache that "sometimes works" is just a
// mystery, and each condition explains a real miss people hit. The code card makes the exact-match
// rule concrete: two queries that any human would call identical, and only one of them hits.
export const resultCache: Scene = {
  id: 'result-cache',
  title: 'The query that never runs',
  nodes: [
    {
      id: 'hit',
      label: 'Answered instantly',
      sub: 'by cloud services — no credits',
      pattern: 'service',
      icon: 'zap',
    },
    {
      id: 'conds',
      label: 'Four conditions, all required',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'cd-text', label: 'Identical text', sub: 'character for character, aliases too', pattern: 'user', icon: 'code' },
        { id: 'cd-data', label: 'Untouched data', sub: 'any DML on the table clears it', pattern: 'user', icon: 'database' },
        { id: 'cd-det', label: 'Deterministic', sub: 'no RANDOM, no CURRENT_TIMESTAMP', pattern: 'user', icon: 'sigma' },
        { id: 'cd-priv', label: 'Same privileges', sub: 'you must be able to see the rows', pattern: 'user', icon: 'shieldcheck' },
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'two queries, one cache hit',
      label: [
        'SELECT count(*) FROM orders;   -- runs, and the result is cached',
        'SELECT count(*) FROM orders;   -- hit: identical text, data unchanged',
        'SELECT COUNT(*) FROM orders;   -- also a hit: case is normalised',
        'SELECT count(*) FROM  orders;  -- MISS: the extra space is a new query',
        '',
        'ALTER SESSION SET USE_CACHED_RESULT = FALSE;  -- for honest benchmarks',
      ].join('\n'),
    },
    {
      id: 'life',
      label: 'It lives 24 hours',
      sub: 'each reuse resets the clock',
      pattern: 'external',
      icon: 'clock',
    },
  ],
  edges: [
    { source: 'hit', target: 'conds', label: 'the fastest possible query — but only when all four hold' },
    { source: 'conds', target: 'sql', label: 'and "identical" is stricter than it sounds' },
    { source: 'sql', target: 'life', label: 'up to 31 days — and shared across the account, so a colleague\'s run can serve yours' },
  ],
}
