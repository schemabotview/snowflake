import type { Scene } from '@graphlearning/flow'

// §06. The limit of the "nothing moves" promise, and it deserves saying plainly: within a region it
// is metadata, across regions it is a replicated copy with all the cost and lag that implies. The
// design advice at the end is what people actually need.
export const crossCloud: Scene = {
  id: 'cross-cloud',
  title: 'Where "nothing moves" stops being true',
  nodes: [
    {
      id: 'inside',
      label: 'Inside one region',
      sub: 'pure metadata — instant, and free',
      pattern: 'service',
      icon: 'zap',
    },
    {
      id: 'across',
      label: 'Across regions or clouds',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'cc-repl', label: 'A real copy', sub: 'the database is replicated there', pattern: 'warn', icon: 'copy' },
        { id: 'cc-cost', label: 'Storage and transfer', sub: 'paid in both places', pattern: 'warn', icon: 'receipt' },
        { id: 'cc-lag', label: 'A refresh interval', sub: 'the consumer sees the last sync', pattern: 'warn', icon: 'clock' },
      ],
    },
    {
      id: 'same',
      label: 'They notice nothing',
      sub: 'mounted exactly as before',
      pattern: 'user',
      icon: 'usercheck',
    },
    {
      id: 'design',
      label: 'Pick region by audience',
      sub: 'and replicate a narrow mart',
      pattern: 'user',
      icon: 'globe',
    },
  ],
  edges: [
    { source: 'inside', target: 'across', label: 'the same UI, the same statements, and a completely different mechanism underneath' },
    { source: 'across', target: 'same', label: 'the replication is the provider’s problem, and the provider’s bill' },
    { source: 'same', target: 'design', label: 'which is one more reason the region decision at sign-up is hard to undo' },
  ],
}
