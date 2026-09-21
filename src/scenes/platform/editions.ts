import type { Scene } from '@graphlearning/flow'

// §08. A feature matrix is a table, not a card grid — the whole point is reading DOWN a column and
// ACROSS a row. Deliberately no prices: rates move, and the wav cannot. The cards under it say what
// the table cannot, which is that an edition is a floor you can raise, not a cage.
export const editions: Scene = {
  id: 'editions',
  title: 'Four editions, one feature ladder',
  nodes: [
    {
      id: 'matrix',
      label: 'What each tier adds',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'Standard', 'Enterprise', 'Business Critical', 'VPS'],
      values: [
        ['Multi-cluster warehouses', '—', '✓', '✓', '✓'],
        ['Time Travel', '1 day', 'up to 90 days', 'up to 90 days', 'up to 90 days'],
        ['Materialized views', '—', '✓', '✓', '✓'],
        ['Search optimization', '—', '✓', '✓', '✓'],
        ['Column & row policies', '—', '✓', '✓', '✓'],
        ['Customer-managed keys', '—', '—', '✓', '✓'],
        ['Failover & failback', '—', '—', '✓', '✓'],
        ['Private connectivity', '—', '—', '✓', '✓'],
        ['Isolated environment', '—', '—', '—', '✓'],
      ],
    },
    {
      id: 'reading',
      label: 'How to read it',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'rd-cum', label: 'Each tier includes', sub: 'everything in the tier before it', pattern: 'user', icon: 'layers' },
        { id: 'rd-rate', label: 'Higher tier, higher rate', sub: 'the same credit simply costs more', pattern: 'user', icon: 'receipt' },
        { id: 'rd-move', label: 'You can move up', sub: 'the edition is a floor, not a cage', pattern: 'user', icon: 'scale' },
      ],
    },
  ],
  edges: [
    { source: 'matrix', target: 'reading', label: 'pick the row your requirement is on, then read left to right' },
  ],
}
