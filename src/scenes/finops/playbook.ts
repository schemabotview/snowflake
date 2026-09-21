import type { Scene } from '@graphlearning/flow'

// §10. The FinOps loop from the notes, and it closes the course because it is the only ordering that
// works: you cannot optimise what you cannot see, and optimisation without accountability quietly
// reverts. The checklist is deliberately the cheap, boring wins.
export const playbook: Scene = {
  id: 'playbook',
  title: 'Visibility, optimisation, accountability',
  nodes: [
    {
      id: 'loop',
      label: 'The loop, and it only works in this order',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'pb-see', label: '1 · Visibility', sub: 'metering views, tags, dashboards', pattern: 'service', icon: 'search' },
        { id: 'pb-opt', label: '2 · Optimisation', sub: 'auto-suspend, right-sizing, pruning', pattern: 'service', icon: 'gauge' },
        { id: 'pb-acct', label: '3 · Accountability', sub: 'monitors, budgets, showback', pattern: 'service', icon: 'users' },
      ],
    },
    {
      id: 'checklist',
      label: 'The boring wins, in order of return',
      pattern: 'group',
      cols: 5,
      children: [
        { id: 'ck-susp', label: 'Auto-suspend', sub: 'on every warehouse, no exceptions', pattern: 'user', icon: 'power' },
        { id: 'ck-size', label: 'Right-size', sub: 'on spill, not on instinct', pattern: 'user', icon: 'scale' },
        { id: 'ck-split', label: 'Split by workload', sub: 'so the numbers mean something', pattern: 'user', icon: 'scissors' },
        { id: 'ck-trans', label: 'Transient staging', sub: 'no Fail-safe on rebuildable data', pattern: 'user', icon: 'boxes' },
        { id: 'ck-mon', label: 'Monitors on', sub: 'notify low, suspend high', pattern: 'user', icon: 'bell' },
      ],
    },
    {
      id: 'end',
      label: 'And it comes back round',
      sub: 'a cost review every month, not every crisis',
      pattern: 'user',
      icon: 'repeat',
    },
  ],
  edges: [
    { source: 'loop', target: 'checklist', label: 'you cannot optimise what you cannot see, and optimisation without accountability quietly reverts' },
    { source: 'checklist', target: 'end', label: 'none of these is clever, and together they beat any single clever thing' },
  ],
}
