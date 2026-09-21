import type { Scene } from '@graphlearning/flow'

// §04. The governance course sold tagging as classification; this is the other half of the promise.
// The board is a pipeline — tag, join, report — because attribution only works if the tagging
// happened before the spending, which is the thing people learn a quarter too late.
export const chargeback: Scene = {
  id: 'chargeback',
  title: 'Whose credits were those?',
  nodes: [
    {
      id: 'tag',
      label: 'Tag the things that spend',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'tg-wh', label: 'Warehouses', sub: 'cost_center = marketing', pattern: 'service', icon: 'warehouse' },
        { id: 'tg-db', label: 'Databases', sub: 'for the storage half', pattern: 'service', icon: 'database' },
        { id: 'tg-user', label: 'Service users', sub: 'the pipeline that runs at 2am', pattern: 'service', icon: 'usercheck' },
      ],
    },
    {
      id: 'join',
      label: 'Join to the tags',
      sub: 'TAG_REFERENCES, then group',
      pattern: 'storage',
      icon: 'merge',
    },
    {
      id: 'report',
      label: 'And then choose what to do with it',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'rp-show', label: 'Showback', sub: 'here is what your team spent', pattern: 'user', icon: 'barchart' },
        { id: 'rp-charge', label: 'Chargeback', sub: 'and here is the invoice', pattern: 'user', icon: 'receipt' },
      ],
    },
    {
      id: 'design',
      label: 'A warehouse per team',
      sub: 'a shared one cannot be split',
      pattern: 'warn',
      icon: 'scissors',
    },
  ],
  edges: [
    { source: 'tag', target: 'join', label: 'tags are inherited, so tagging a database covers everything created in it later' },
    { source: 'join', target: 'report', label: 'showback changes behaviour on its own, surprisingly often' },
    { source: 'report', target: 'design', label: 'and the biggest attribution decision is a warehouse design decision' },
  ],
}
