import type { Scene } from '@graphlearning/flow'

// §10. Two things to convey: it is per-database (so the same query in the wrong database returns
// nothing and looks broken), and half of it is table FUNCTIONS rather than views, which is why
// people cannot find COPY_HISTORY by browsing.
export const informationSchema: Scene = {
  id: 'information-schema',
  title: 'Metadata, one database at a time',
  nodes: [
    {
      id: 'where',
      label: 'One per database',
      sub: 'and they are not the same schema',
      pattern: 'storage',
      icon: 'folder',
    },
    {
      id: 'kinds',
      label: 'Two kinds of thing live in it',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'is-views', label: 'Views', sub: 'TABLES, COLUMNS, VIEWS, SCHEMATA', pattern: 'service', icon: 'table' },
        { id: 'is-fns', label: 'Table functions', sub: 'called with (), not selected from', pattern: 'service', icon: 'sigma' },
      ],
    },
    {
      id: 'fns',
      label: 'The functions worth knowing',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'fn-copy', label: 'COPY_HISTORY', sub: 'loads, 14 days', pattern: 'storage', icon: 'funnel' },
        { id: 'fn-query', label: 'QUERY_HISTORY', sub: 'recent queries', pattern: 'storage', icon: 'search' },
        { id: 'fn-task', label: 'TASK_HISTORY', sub: 'runs, and the next schedule', pattern: 'storage', icon: 'clock' },
        { id: 'fn-meter', label: 'Metering', sub: 'warehouse credits, 6 months', pattern: 'storage', icon: 'gauge' },
      ],
    },
    {
      id: 'traits',
      label: 'Live, but forgetful',
      sub: 'dropped objects are simply gone',
      pattern: 'user',
      icon: 'zap',
    },
  ],
  edges: [
    { source: 'where', target: 'kinds', label: 'run the same query in the wrong database and it returns nothing, which looks like a bug' },
    { source: 'kinds', target: 'fns', label: 'the functions are why people cannot find COPY_HISTORY by browsing' },
    { source: 'fns', target: 'traits', label: 'and everything here is live rather than collected' },
  ],
}
