import type { Scene } from '@graphlearning/flow'

// §02. Pure reference, so a table — and the third column is latency, because a cost question asked
// of a view with three hours of lag gets a confidently wrong answer. The names are long, which is
// exactly why they live in a table node and not on cards.
export const whereCreditsGo: Scene = {
  id: 'where-credits-go',
  title: 'The views that answer "where did it go?"',
  nodes: [
    {
      id: 'views',
      label: 'SNOWFLAKE.ACCOUNT_USAGE',
      kind: 'table',
      pattern: 'service',
      headers: ['View', 'Answers', 'Lag'],
      values: [
        ['WAREHOUSE_METERING_HISTORY', 'credits per warehouse, per hour', '~3 h'],
        ['METERING_HISTORY', 'credits per service, serverless too', '~3 h'],
        ['STORAGE_USAGE', 'active, Time Travel and Fail-safe bytes', '~2 h'],
        ['TABLE_STORAGE_METRICS', 'the same, per table', '~90 min'],
        ['QUERY_HISTORY', 'which queries burned the warehouse time', '~45 min'],
      ],
    },
    {
      id: 'method',
      label: 'The three questions, in order',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'mt-what', label: 'Which meter', sub: 'compute, or storage?', pattern: 'user', icon: 'gauge' },
        { id: 'mt-who', label: 'Which warehouse', sub: 'or which service, if serverless', pattern: 'user', icon: 'warehouse' },
        { id: 'mt-query', label: 'Which queries', sub: 'inside that warehouse, that hour', pattern: 'user', icon: 'search' },
      ],
    },
    {
      id: 'lag',
      label: 'Mind the lag',
      sub: 'none of this shows you the last hour',
      pattern: 'warn',
      icon: 'clock',
    },
  ],
  edges: [
    { source: 'views', target: 'method', label: 'start wide and narrow down — the opposite order wastes an afternoon on the wrong warehouse' },
    { source: 'method', target: 'lag', label: 'and a cost question asked of a lagging view gets a confidently wrong answer' },
  ],
}
