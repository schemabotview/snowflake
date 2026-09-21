import type { Scene } from '@graphlearning/flow'

// §10. The course closes on a method rather than a fact, because the failure mode in performance work
// is changing four things at once and keeping whichever combination looked fastest. The ladder repeats
// the lookup order from the warehouses course on purpose — same frame, now used for tuning.
export const tuningMethod: Scene = {
  id: 'tuning-method',
  title: 'Measure, change one thing, measure again',
  nodes: [
    {
      id: 'loop',
      label: 'The loop',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'tm-base', label: '1 · Baseline', sub: 'cache off, note the profile', pattern: 'service', icon: 'gauge' },
        { id: 'tm-diag', label: '2 · Diagnose', sub: 'partitions, spill, or queueing', pattern: 'service', icon: 'search' },
        { id: 'tm-one', label: '3 · One change', sub: 'exactly one, and write it down', pattern: 'service', icon: 'pencil' },
        { id: 'tm-again', label: '4 · Measure again', sub: 'same query, same conditions', pattern: 'service', icon: 'repeat' },
      ],
    },
    {
      id: 'ladder',
      label: 'And the order to try things',
      pattern: 'group',
      cols: 5,
      children: [
        { id: 'ld-1', label: 'Write it better', sub: 'bare filters, named columns', pattern: 'user', icon: 'code' },
        { id: 'ld-2', label: 'Prune more', sub: 'load order, then a key', pattern: 'user', icon: 'funnel' },
        { id: 'ld-3', label: 'Size the warehouse', sub: 'if it is spilling', pattern: 'user', icon: 'scale' },
        { id: 'ld-4', label: 'Add clusters', sub: 'if it is queueing', pattern: 'user', icon: 'users' },
        { id: 'ld-5', label: 'Materialize', sub: 'last, and only if read often', pattern: 'user', icon: 'receipt' },
      ],
    },
    {
      id: 'honest',
      label: 'Cache off, always',
      sub: 'or you time the cache',
      pattern: 'warn',
      icon: 'zap',
    },
  ],
  edges: [
    { source: 'loop', target: 'ladder', label: 'change four things at once and you have learned nothing, however much faster it got' },
    { source: 'ladder', target: 'honest', label: 'cheapest and most durable first, rent last — and turn USE_CACHED_RESULT off, or the second run times the cache rather than your change' },
  ],
}
