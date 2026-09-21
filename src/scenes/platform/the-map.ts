import type { Scene } from '@graphlearning/flow'

// §10. The closing map. Ten flat cards would be a wall, so the courses are grouped into the three
// questions the rest of the concept answers — and the band titles are the questions, not category
// nouns. The first band is the one just finished, which is why it reads as a recap and not a promise.
export const theMap: Scene = {
  id: 'the-map',
  title: 'Where the rest of this goes',
  nodes: [
    {
      id: 'b1',
      label: 'The machine itself',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'm-platform', label: '1 · Platform', sub: 'the three layers — this course', pattern: 'user', icon: 'layers' },
        { id: 'm-wh', label: '2 · Warehouses', sub: 'sizing, scaling, and three caches', pattern: 'user', icon: 'warehouse' },
      ],
    },
    {
      id: 'b2',
      label: 'Getting data in and shaping it',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'm-storage', label: '3 · Storage', sub: 'micro-partitions, tables, views', pattern: 'service', icon: 'database' },
        { id: 'm-loading', label: '4 · Loading', sub: 'stages, COPY, Snowpipe', pattern: 'service', icon: 'funnel' },
        { id: 'm-transform', label: '5 · Transformation', sub: 'streams, tasks, procedures', pattern: 'service', icon: 'workflow' },
      ],
    },
    {
      id: 'b3',
      label: 'Running it like a professional',
      pattern: 'group',
      cols: 5,
      children: [
        { id: 'm-gov', label: '6 · Governance', sub: 'roles, masking, policies', pattern: 'storage', icon: 'shieldcheck' },
        { id: 'm-cont', label: '7 · Continuity', sub: 'Time Travel, cloning', pattern: 'storage', icon: 'history' },
        { id: 'm-perf', label: '8 · Performance', sub: 'pruning, clustering', pattern: 'storage', icon: 'zap' },
        { id: 'm-fin', label: '9 · FinOps', sub: 'monitors, alerts, quality', pattern: 'storage', icon: 'receipt' },
        { id: 'm-cloud', label: '10 · Data Cloud', sub: 'sharing, apps, Cortex', pattern: 'storage', icon: 'share' },
      ],
    },
  ],
  edges: [
    { source: 'b1', target: 'b2', label: 'you know what it is — next, what you put in it' },
    { source: 'b2', target: 'b3', label: 'then everything that keeps it fast, safe and affordable' },
  ],
}
