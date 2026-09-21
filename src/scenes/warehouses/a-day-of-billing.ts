import type { Scene } from '@graphlearning/flow'

// §07. Billing is a timeline, so the board is one — four moments across a morning, each a card. The
// tension row is the point of the section: auto-suspend saves credits and throws away the local
// cache, and the right setting is wherever those two meet for YOUR workload.
export const aDayOfBilling: Scene = {
  id: 'a-day-of-billing',
  title: 'A morning on the meter',
  nodes: [
    {
      id: 'timeline',
      label: 'WH_BI, auto-suspend set to 60 seconds',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'tl-1', label: '08:59 · asleep', sub: 'suspended, billing nothing', pattern: 'external', icon: 'power' },
        { id: 'tl-2', label: '09:00 · resumes', sub: 'a query arrives, seconds to start', pattern: 'service', icon: 'zap' },
        { id: 'tl-3', label: '09:00–11:00', sub: 'billed per second while it runs', pattern: 'service', icon: 'gauge' },
        { id: 'tl-4', label: '11:01 · idle', sub: 'one quiet minute, then suspended', pattern: 'external', icon: 'clock' },
      ],
    },
    {
      id: 'rules',
      label: 'Two rules that shape the number',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'rl-min', label: 'A 60-second floor', sub: 'every resume bills a minute at least', pattern: 'user', icon: 'clock' },
        { id: 'rl-free', label: 'Suspended is free', sub: 'the compute meter simply stops', pattern: 'user', icon: 'power' },
      ],
    },
    {
      id: 'tension',
      label: 'The trade you are actually setting',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'tn-short', label: 'Suspend quickly', sub: 'fewer credits, a cold cache each time', pattern: 'warn', icon: 'receipt' },
        { id: 'tn-long', label: 'Suspend slowly', sub: 'a warm cache, some idle minutes paid', pattern: 'warn', icon: 'harddrive' },
      ],
    },
  ],
  edges: [
    { source: 'timeline', target: 'rules', label: 'nothing was running for most of the day, and nothing was billed for it' },
    { source: 'rules', target: 'tension', label: 'so why not suspend after one second?' },
  ],
}
