import type { Scene } from '@graphlearning/flow'

// §06. Two policies, four rows of difference — a table, because the whole point is comparing the
// same attribute across both. The card underneath names the constraint people miss: the policy is
// meaningless in maximized mode, since nothing is ever started or stopped.
export const scalingPolicy: Scene = {
  id: 'scaling-policy',
  title: 'Standard or Economy',
  nodes: [
    {
      id: 'compare',
      label: 'The same warehouse, two temperaments',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'Standard (default)', 'Economy'],
      values: [
        ['Starting a cluster', 'immediately, on queueing', 'only if the load justifies it'],
        ['Stopping a cluster', 'slowly — kept warm', 'quickly — reclaimed sooner'],
        ['Users feel', 'little or no waiting', 'occasional short waits'],
        ['Optimises for', 'responsiveness', 'credits'],
        ['Suits', 'bursty, unpredictable', 'steady, predictable'],
      ],
    },
    {
      id: 'only',
      label: 'Auto-scale mode only',
      sub: 'maximized mode never starts or stops',
      pattern: 'warn',
      icon: 'circleslash',
    },
  ],
  edges: [
    { source: 'compare', target: 'only', label: 'pick by what a queued analyst costs you — and note the setting only bites in auto-scale' },
  ],
}
