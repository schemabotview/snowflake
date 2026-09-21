import type { Scene } from '@graphlearning/flow'

// §04. Four constraints decide how people use tasks, and three of them are surprises: one statement
// only, created suspended, and the choice of who supplies compute. The suspended default gets a card
// of its own because "my task never ran" is the most common first experience of this feature.
export const tasks: Scene = {
  id: 'tasks',
  title: 'Scheduled SQL, with four catches',
  nodes: [
    {
      id: 'sql',
      kind: 'code',
      filename: 'a task is a schedule and a statement',
      label: [
        'CREATE TASK refresh_daily',
        "  WAREHOUSE = wh_etl                       -- or omit it entirely for serverless",
        "  SCHEDULE  = 'USING CRON 0 2 * * * Europe/Madrid'",
        '  WHEN SYSTEM$STREAM_HAS_DATA(\'orders_s\')  -- skip the run if nothing changed',
        'AS',
        '  MERGE INTO dim_orders t USING orders_s s ON t.id = s.order_id … ;',
        '',
        'ALTER TASK refresh_daily RESUME;           -- without this, it never runs',
      ].join('\n'),
    },
    {
      id: 'catches',
      label: 'The four things to know',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'ct-one', label: 'One statement', sub: 'need several? call a procedure', pattern: 'warn', icon: 'scroll' },
        { id: 'ct-susp', label: 'Starts suspended', sub: 'RESUME it, or nothing happens', pattern: 'warn', icon: 'power' },
        { id: 'ct-time', label: 'Time, not events', sub: 'a schedule — WHEN only skips runs', pattern: 'warn', icon: 'clock' },
        { id: 'ct-comp', label: 'Two compute models', sub: 'your warehouse, or serverless', pattern: 'service', icon: 'warehouse' },
      ],
    },
    {
      id: 'serverless',
      label: 'Serverless suits it',
      sub: 'no idle warehouse to pay for',
      pattern: 'user',
      icon: 'zap',
    },
  ],
  edges: [
    { source: 'sql', target: 'catches', label: 'CRON with a time zone, or a plain interval like 5 MINUTE' },
    { source: 'catches', target: 'serverless', label: 'a warehouse task that runs for ten seconds a minute still pays the 60-second floor each time' },
  ],
}
