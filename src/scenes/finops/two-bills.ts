import type { Scene } from '@graphlearning/flow'

// §01. platform §09 gave the shape of the bill; this gives the line items, because the surprises are
// never the warehouses — they are the serverless services nobody switched on deliberately, and the
// history nobody meant to keep. Two columns, because those are the two meters.
export const twoBills: Scene = {
  id: 'two-bills',
  title: 'What is actually on the invoice',
  nodes: [
    {
      id: 'compute',
      label: 'Compute — credits',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'cp-wh', label: 'Warehouses', sub: 'the part everyone expects', pattern: 'service', icon: 'warehouse' },
        { id: 'cp-serv', label: 'Serverless', sub: 'Snowpipe, tasks, reclustering', pattern: 'warn', icon: 'zap' },
        { id: 'cp-cloud', label: 'Cloud services', sub: 'free under 10% of the day', pattern: 'external', icon: 'brain' },
      ],
    },
    {
      id: 'storage',
      label: 'Storage — per TB, per month',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'st-active', label: 'Active data', sub: 'the tables themselves', pattern: 'storage', icon: 'table' },
        { id: 'st-tt', label: 'Time Travel', sub: 'every version, for the window', pattern: 'warn', icon: 'history' },
        { id: 'st-fs', label: 'Fail-safe', sub: 'seven more days you cannot use', pattern: 'warn', icon: 'lock' },
        { id: 'st-stage', label: 'Staged files', sub: 'nobody cleaned up after the load', pattern: 'warn', icon: 'folder' },
      ],
    },
    {
      id: 'lesson',
      label: 'Never the warehouses',
      sub: 'the surprises are in warm red',
      pattern: 'user',
      icon: 'search',
    },
  ],
  edges: [
    { source: 'compute', target: 'storage', label: 'two meters that run independently — and one of them is far easier to steer' },
    { source: 'storage', target: 'lesson', label: 'serverless services nobody switched on deliberately, and history nobody meant to keep' },
  ],
}
