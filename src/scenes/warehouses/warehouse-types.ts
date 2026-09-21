import type { Scene } from '@graphlearning/flow'

// §03. Three types, and the only question that matters is which workload each is for — so they are
// three cards with workload subs rather than a spec table. The bottom card says the part that keeps
// the section short: everything else in this course applies to all three identically.
export const warehouseTypes: Scene = {
  id: 'warehouse-types',
  title: 'Three kinds of warehouse',
  nodes: [
    {
      id: 'types',
      label: 'Pick by the workload',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 't-std', label: 'Standard', sub: 'BI, ELT, ad-hoc — the default', pattern: 'service', icon: 'warehouse' },
        { id: 't-gen2', label: 'Generation 2', sub: 'faster hardware for data engineering', pattern: 'service', icon: 'zap' },
        { id: 't-snowpark', label: 'Snowpark-optimized', sub: 'far more memory per node', pattern: 'service', icon: 'brain' },
      ],
    },
    {
      id: 'when',
      label: 'When the default is wrong',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'wn-ml', label: 'Training a model', sub: 'memory-hungry Python, Java, Scala', pattern: 'user', icon: 'brain' },
        { id: 'wn-heavy', label: 'Heavy transforms', sub: 'long ELT that is worth the newer nodes', pattern: 'user', icon: 'workflow' },
      ],
    },
    {
      id: 'same',
      label: 'The rest is identical',
      sub: 'sizes, scaling, caching, billing',
      pattern: 'external',
      icon: 'circlecheck',
    },
  ],
  edges: [
    { source: 'types', target: 'when', label: 'reach past Standard only when the workload asks for it' },
    { source: 'when', target: 'same', label: 'the choice is narrower than it looks — nothing else in this course changes with the type' },
  ],
}
