import type { Scene } from '@graphlearning/flow'

// §10. Two similar things with one real difference — when the query runs — so the board states that
// difference first and shows the code second. The warning card is the important one: row-by-row is
// the instinct people bring from other databases and the wrong instinct here.
export const cursorsResultsets: Scene = {
  id: 'cursors-resultsets',
  title: 'When does the query actually run?',
  nodes: [
    {
      id: 'diff',
      label: 'The only difference that matters',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'df-cur', label: 'CURSOR', sub: 'runs when you OPEN or loop it', pattern: 'service', icon: 'repeat' },
        { id: 'df-res', label: 'RESULTSET', sub: 'runs when you assign the query', pattern: 'service', icon: 'table' },
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'both, side by side',
      label: [
        'DECLARE',
        '  c1  CURSOR    FOR SELECT id, salary FROM employees WHERE dept = ?;',
        '  res RESULTSET DEFAULT (SELECT id, salary FROM employees);',
        'BEGIN',
        '  OPEN c1 USING (10);',
        '  FOR row IN c1 DO                    -- one row at a time',
        '    total := total + row.salary;',
        '  END FOR;',
        '  CLOSE c1;',
        '  RETURN TABLE(res);                  -- hand the whole result back',
        'END;',
      ].join('\n'),
    },
    {
      id: 'warn',
      label: 'Loop last, not first',
      sub: 'set-based SQL beats a cursor',
      pattern: 'warn',
      icon: 'gauge',
    },
  ],
  edges: [
    { source: 'diff', target: 'sql', label: 'a RESULTSET is a pointer, so TABLE() hands the whole thing back to the caller' },
    { source: 'sql', target: 'warn', label: 'cursors are for orchestration — iterating a list of tables to process, never a million rows' },
  ],
}
