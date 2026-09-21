import type { Scene } from '@graphlearning/flow'

// §10. The comparison is the content, so a table — and the limitations row is the one that decides
// most real cases, since "no joins" rules materialized views out of the majority of the marts people
// want to build. The dynamic-table pointer is deliberate: it is the thing they actually wanted.
export const views: Scene = {
  id: 'views',
  title: 'A query with a name, or a table that maintains itself',
  nodes: [
    {
      id: 'cmp',
      label: 'Two kinds of view',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'Standard view', 'Materialized view'],
      values: [
        ['Holds data', 'no — runs on every read', 'yes — results are stored'],
        ['Freshness', 'always current', 'refreshed automatically'],
        ['Costs', 'nothing to keep', 'storage plus refresh credits'],
        ['Joins', 'anything SQL allows', 'not allowed — one table only'],
        ['Aggregates', 'anything', 'a restricted set'],
        ['Edition', 'any', 'Enterprise and above'],
      ],
    },
    {
      id: 'reach',
      label: 'Which to reach for',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'rc-view', label: 'Standard view', sub: 'naming and reusing a query', pattern: 'user', icon: 'scroll' },
        { id: 'rc-mv', label: 'Materialized view', sub: 'one big table, filtered the same way often', pattern: 'user', icon: 'zap' },
      ],
    },
    {
      id: 'dt',
      label: 'Wanted a joined mart?',
      sub: 'that is a dynamic table, later in the arc',
      pattern: 'external',
      icon: 'workflow',
    },
  ],
  edges: [
    { source: 'cmp', target: 'reach', label: 'a materialized view is a cache you pay rent on — worth it only when it is read far more than the base changes' },
    { source: 'reach', target: 'dt', label: 'and the single-table limit rules it out of most marts' },
  ],
}
