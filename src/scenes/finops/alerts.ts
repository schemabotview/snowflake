import type { Scene } from '@graphlearning/flow'

// §05. Three parts and one gotcha that is identical to tasks — created suspended. Pairing them makes
// it memorable: everything schedulable in Snowflake arrives switched off. The code card is the whole
// object, since an alert is genuinely small.
export const alerts: Scene = {
  id: 'alerts',
  title: 'If this, then that, every so often',
  nodes: [
    {
      id: 'parts',
      label: 'An alert is three things',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'al-cond', label: 'A condition', sub: 'a query, wrapped in EXISTS', pattern: 'service', icon: 'search' },
        { id: 'al-act', label: 'An action', sub: 'send an email, or call a procedure', pattern: 'service', icon: 'bell' },
        { id: 'al-sched', label: 'A schedule', sub: 'how often to evaluate it', pattern: 'service', icon: 'clock' },
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'the whole object',
      label: [
        'CREATE ALERT credit_spike',
        '  WAREHOUSE = wh_ops',
        "  SCHEDULE  = '30 MINUTE'",
        'IF (EXISTS (',
        '  SELECT 1 FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_METERING_HISTORY',
        '  WHERE start_time > DATEADD(hour, -1, CURRENT_TIMESTAMP())',
        '  GROUP BY warehouse_name HAVING sum(credits_used) > 50))',
        'THEN CALL SYSTEM$SEND_EMAIL(\'ops_email\', \'you@co.com\', \'Credit spike\', \'…\');',
        '',
        'ALTER ALERT credit_spike RESUME;   -- created suspended, exactly like a task',
      ].join('\n'),
    },
    {
      id: 'notes',
      label: 'Three things to know',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'nt-susp', label: 'Starts suspended', sub: 'RESUME it, or nothing happens', pattern: 'warn', icon: 'power' },
        { id: 'nt-cost', label: 'The alert is free', sub: 'you pay the warehouse time only', pattern: 'user', icon: 'receipt' },
        { id: 'nt-lag', label: 'Mind the source lag', sub: 'ACCOUNT_USAGE is hours behind', pattern: 'warn', icon: 'clock' },
      ],
    },
  ],
  edges: [
    { source: 'parts', target: 'sql', label: 'the condition is just SQL, so anything you can query, you can alert on' },
    { source: 'sql', target: 'notes', label: 'EXECUTE ALERT is an account privilege, and only ACCOUNTADMIN can grant it' },
  ],
}
