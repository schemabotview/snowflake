import type { Scene } from '@graphlearning/flow'

// §11. Three built-in values, two built-in exceptions, one custom-code range. The last card is the
// one that changes behaviour in production: a handler that swallows an error turns a failed task
// into a successful one, and nobody looks at successes.
export const exceptions: Scene = {
  id: 'exceptions',
  title: 'When it goes wrong at two in the morning',
  nodes: [
    {
      id: 'sql',
      kind: 'code',
      filename: 'declare, raise, handle',
      label: [
        'DECLARE',
        '  no_rows EXCEPTION (-20001, \'the source was empty\');',
        'BEGIN',
        '  IF ((SELECT count(*) FROM stage_tbl) = 0) THEN RAISE no_rows; END IF;',
        '  …',
        'EXCEPTION',
        '  WHEN no_rows          THEN RETURN \'skipped: \' || SQLERRM;',
        '  WHEN STATEMENT_ERROR  THEN RETURN SQLCODE || \' \' || SQLERRM;',
        '  WHEN OTHER            THEN RAISE;      -- re-raise what you cannot handle',
        'END;',
      ].join('\n'),
    },
    {
      id: 'three',
      label: 'What a handler can read',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'th-code', label: 'SQLCODE', sub: 'a signed five-digit number', pattern: 'service', icon: 'hash' },
        { id: 'th-msg', label: 'SQLERRM', sub: 'the message text', pattern: 'service', icon: 'scroll' },
        { id: 'th-state', label: 'SQLSTATE', sub: 'the five-character ANSI code', pattern: 'service', icon: 'braces' },
      ],
    },
    {
      id: 'builtin',
      label: 'Two you get for free',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'bi-stmt', label: 'Statement error', sub: 'STATEMENT_ERROR — a statement failed', pattern: 'user', icon: 'bug' },
        { id: 'bi-expr', label: 'Expression error', sub: 'EXPRESSION_ERROR — a type problem', pattern: 'user', icon: 'swap' },
      ],
    },
    {
      id: 'swallow',
      label: 'Never swallow it',
      sub: 'a handled error looks like success',
      pattern: 'warn',
      icon: 'skull',
    },
  ],
  edges: [
    { source: 'sql', target: 'three', label: 'custom codes live between −20999 and −20001' },
    { source: 'three', target: 'builtin', label: 'and WHEN OTHER catches everything you did not name' },
    { source: 'builtin', target: 'swallow', label: 'so log it, or re-raise it — nobody investigates a success' },
  ],
}
