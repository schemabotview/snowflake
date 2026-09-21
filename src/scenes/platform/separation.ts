import type { Scene } from '@graphlearning/flow'

// §04. Deliberately §01 inverted: the same two things, now on separate axes. A fan-in diamond —
// three sizes converging on one copy — because the claim is exactly that the many and the one can
// vary independently. Warehouses are named by WORKLOAD, not by letter, so the picture is concrete.
export const separation: Scene = {
  id: 'separation',
  title: 'One copy of the data, any amount of compute',
  nodes: [
    {
      id: 'scale',
      label: 'Scale compute — add, resize, suspend',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sc-xs', label: 'X-Small', sub: 'a dashboard, all day', pattern: 'service', icon: 'warehouse' },
        { id: 'sc-l', label: 'Large', sub: 'the nightly load, for an hour', pattern: 'service', icon: 'warehouse' },
        { id: 'sc-4xl', label: '4X-Large', sub: 'the month-end rebuild, once', pattern: 'service', icon: 'warehouse' },
      ],
    },
    {
      id: 'one',
      label: 'One copy of the data',
      sub: 'nothing is moved, split or replicated to add compute',
      pattern: 'storage',
      icon: 'database',
    },
    {
      id: 'buys',
      label: 'What that buys',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'b-noqueue', label: 'No contention', sub: 'the load cannot slow the dashboard', pattern: 'user', icon: 'circlecheck' },
        { id: 'b-second', label: 'Pay per second', sub: 'suspended means not billed', pattern: 'user', icon: 'receipt' },
        { id: 'b-resize', label: 'Resize in one command', sub: 'no downtime, no reload', pattern: 'user', icon: 'scale' },
      ],
    },
  ],
  edges: [
    { source: 'scale', target: 'one', label: 'all three at once, against the same tables' },
    { source: 'one', target: 'buys', label: 'so the two bills are genuinely separate' },
  ],
}
