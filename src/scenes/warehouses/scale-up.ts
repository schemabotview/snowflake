import type { Scene } from '@graphlearning/flow'

// §04. The pair of columns is the argument: the SAME query, two sizes, and the differences are spill
// and wall-clock rather than credits. The warn card at the bottom is the section's real job — people
// reach for a bigger warehouse when the problem is a queue, and it does nothing for that.
export const scaleUp: Scene = {
  id: 'scale-up',
  title: 'Scaling up: a bigger machine for a bigger query',
  nodes: [
    {
      id: 'same',
      label: 'One heavy query, two sizes',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'su-xs', label: 'X-Small', sub: 'runs out of memory, spills to disk', pattern: 'warn', icon: 'harddrive' },
        { id: 'su-l', label: 'Large', sub: 'fits in memory, finishes far sooner', pattern: 'service', icon: 'zap' },
      ],
    },
    {
      id: 'signals',
      label: 'The signals that say "size up"',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sg-spill', label: 'Spilling', sub: 'to local disk, worse to remote', pattern: 'user', icon: 'harddrive' },
        { id: 'sg-big', label: 'Big joins and sorts', sub: 'one query, lots of data', pattern: 'user', icon: 'merge' },
        { id: 'sg-slow', label: 'A single slow query', sub: 'not many queries waiting', pattern: 'user', icon: 'clock' },
      ],
    },
    {
      id: 'not',
      label: 'It will not fix a queue',
      sub: 'that is a concurrency problem',
      pattern: 'warn',
      icon: 'users',
    },
  ],
  edges: [
    { source: 'same', target: 'signals', label: 'same credits per unit of work, and the answer arrives sooner' },
    { source: 'signals', target: 'not', label: 'read the signal first — many users waiting needs more clusters, not a bigger one' },
  ],
}
