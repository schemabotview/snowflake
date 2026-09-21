import type { Scene } from '@graphlearning/flow'

// §09. Cost is the section people mis-summarise as "it is expensive", so the board insists on the
// SHAPE: two meters that run independently, a third that is usually free, and a fourth column of
// things billed outside a warehouse. No dollar figures anywhere — they move, and the wav cannot.
export const twoMeters: Scene = {
  id: 'two-meters',
  title: 'Two meters, running independently',
  nodes: [
    {
      id: 'meters',
      label: 'What Snowflake charges for',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'm-compute', label: 'Compute', sub: 'credits, per second a warehouse runs', pattern: 'service', icon: 'gauge' },
        { id: 'm-storage', label: 'Storage', sub: 'per TB per month, compressed', pattern: 'storage', icon: 'database' },
        { id: 'm-services', label: 'Cloud services', sub: 'free until it passes 10% of compute', pattern: 'external', icon: 'brain' },
      ],
    },
    {
      id: 'rules',
      label: 'The rules that decide the bill',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'r-min', label: 'A 60-second floor', sub: 'every resume bills at least a minute', pattern: 'user', icon: 'clock' },
        { id: 'r-double', label: 'Each size doubles', sub: 'one step up burns twice the credits', pattern: 'user', icon: 'layers' },
        { id: 'r-suspend', label: 'Suspended is free', sub: 'the biggest lever most teams have', pattern: 'user', icon: 'power' },
        { id: 'r-edition', label: 'Edition sets the rate', sub: 'and so do cloud and region', pattern: 'user', icon: 'globe' },
      ],
    },
    {
      id: 'outside',
      label: 'Billed separately',
      sub: 'Snowpipe, serverless tasks, clustering',
      pattern: 'warn',
      icon: 'zap',
    },
  ],
  edges: [
    { source: 'meters', target: 'rules', label: 'storage is small and steady — compute is the one you steer' },
    { source: 'rules', target: 'outside', label: 'and a few things bill even with every warehouse suspended' },
  ],
}
