import type { Scene } from '@graphlearning/flow'

// §09. Two integrations that matter commercially. The BI warning is the one that produces surprise
// bills — an import-mode dashboard refreshing hourly is a scheduled full scan nobody thinks of as a
// query. The dbt split is simply the fact people most often get wrong.
export const biAndDbt: Scene = {
  id: 'bi-and-dbt',
  title: 'The two integrations you will meet',
  nodes: [
    {
      id: 'bi',
      label: 'BI tools',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'bi-conn', label: 'A native connector', sub: 'Power BI, Tableau, Looker…', pattern: 'service', icon: 'barchart' },
        { id: 'bi-wh', label: 'Its own warehouse', sub: 'so the credits are attributable', pattern: 'service', icon: 'warehouse' },
        { id: 'bi-mode', label: 'Watch the mode', sub: 'live query, or scheduled import', pattern: 'warn', icon: 'clock' },
      ],
    },
    {
      id: 'dbt',
      label: 'dbt, two ways',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'dbt Cloud', 'dbt Projects on Snowflake'],
      values: [
        ['Runs where', "dbt's infrastructure", 'inside your account'],
        ['Flavour', 'Cloud, with an IDE', 'dbt Core only'],
        ['Scheduling', 'built in', 'a Snowflake task'],
        ['Credentials', 'held by dbt', 'the current session — none stored'],
        ['Git', 'any provider', 'OAuth for github.com'],
      ],
    },
    {
      id: 'same',
      label: 'The SQL runs here',
      sub: 'dbt compiles and orchestrates',
      pattern: 'user',
      icon: 'workflow',
    },
  ],
  edges: [
    { source: 'bi', target: 'dbt', label: 'an import-mode dashboard refreshing hourly is a scheduled full scan nobody calls a query' },
    { source: 'dbt', target: 'same', label: 'projects in Snowflake keep the credentials and the data in one place' },
  ],
}
