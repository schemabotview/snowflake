import type { Scene } from '@graphlearning/flow'

// §10. The course closes on the ladder because it explains every cache behaviour seen so far in one
// picture: each rung is a chance to stop, and the cost rises as you fall. The sizing method is
// deliberately three plain steps — the honest answer to "what size should I use" is "measure".
export const lookupOrder: Scene = {
  id: 'lookup-order',
  title: 'Four rungs, and every one is a chance to stop',
  nodes: [
    { id: 'r1', label: '1 · Result cache', sub: 'the whole answer, already computed', pattern: 'external', icon: 'zap' },
    { id: 'r2', label: '2 · Metadata', sub: 'counts, ranges, and which partitions matter', pattern: 'external', icon: 'braces' },
    { id: 'r3', label: '3 · Local SSD cache', sub: 'partitions this warehouse already read', pattern: 'service', icon: 'harddrive' },
    { id: 'r4', label: '4 · Remote storage', sub: 'the real read — the only rung that is slow', pattern: 'storage', icon: 'database' },
    {
      id: 'method',
      label: 'And the way to pick a size',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'me-small', label: 'Start small', sub: 'X-Small until something argues back', pattern: 'user', icon: 'star' },
        { id: 'me-watch', label: 'Watch for spill', sub: 'and for queueing — they differ', pattern: 'user', icon: 'gauge' },
        { id: 'me-again', label: 'Change one thing', sub: 'then measure the same query again', pattern: 'user', icon: 'repeat' },
      ],
    },
  ],
  edges: [
    { source: 'r1', target: 'r2', label: 'miss' },
    { source: 'r2', target: 'r3', label: 'miss — a warehouse is needed now' },
    { source: 'r3', target: 'r4', label: 'miss' },
    { source: 'r4', target: 'method', label: 'so performance work is mostly about falling fewer rungs' },
  ],
}
