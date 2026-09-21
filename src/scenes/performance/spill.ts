import type { Scene } from '@graphlearning/flow'

// §08. A ladder, because spill IS a ladder — memory, then local disk, then remote — and each rung is
// roughly an order of magnitude worse. Drawing it that way makes "remote spill" read as the alarm it
// is, rather than as one more line in the profile.
export const spill: Scene = {
  id: 'spill',
  title: 'Where the intermediate results go',
  nodes: [
    { id: 'mem', label: 'Memory', sub: 'where a healthy query does its work', pattern: 'service', icon: 'memory' },
    { id: 'local', label: 'Local SSD', sub: 'it ran out of memory — slower', pattern: 'warn', icon: 'harddrive' },
    { id: 'remote', label: 'Remote storage', sub: 'it ran out of SSD too — far slower', pattern: 'warn', icon: 'skull' },
    {
      id: 'fixes',
      label: 'What to do about it',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'fx-size', label: 'Size up', sub: 'more memory per node, and more nodes', pattern: 'user', icon: 'scale' },
        { id: 'fx-less', label: 'Read less', sub: 'fewer columns, a better filter', pattern: 'user', icon: 'funnel' },
        { id: 'fx-shape', label: 'Reshape it', sub: 'filter before the join, not after', pattern: 'user', icon: 'merge' },
      ],
    },
    {
      id: 'vs',
      label: 'Not the same as queueing',
      sub: 'too small, against too few clusters',
      pattern: 'warn',
      icon: 'users',
    },
  ],
  edges: [
    { source: 'mem', target: 'local', label: 'sorts, joins and aggregates need room — when they exceed it, they spill' },
    { source: 'local', target: 'remote', label: 'each rung down is roughly an order of magnitude slower' },
    { source: 'remote', target: 'fixes', label: 'remote spill is the clearest signal in the whole profile' },
    { source: 'fixes', target: 'vs', label: 'sizing up is the quick fix; reading less is the durable one' },
  ],
}
