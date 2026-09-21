import type { Scene } from '@graphlearning/flow'

// §05. The scenario IS the explanation, so the board opens on 9am rather than on a definition. The
// three clusters are one warehouse — worth labouring, because the name "multi-cluster warehouse"
// suggests several warehouses and the billing follows the clusters, not the name.
export const multiCluster: Scene = {
  id: 'multi-cluster',
  title: 'Scaling out: more clusters for more people',
  nodes: [
    {
      id: 'monday',
      label: 'Monday, 9am',
      sub: 'fifty analysts open the same dashboard at once',
      pattern: 'user',
      icon: 'users',
    },
    {
      id: 'clusters',
      label: 'ONE warehouse, up to MAX clusters',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'cl-1', label: 'Cluster 1', sub: 'always running — this is MIN', pattern: 'service', icon: 'warehouse' },
        { id: 'cl-2', label: 'Cluster 2', sub: 'started because queries queued', pattern: 'service', icon: 'warehouse' },
        { id: 'cl-3', label: 'Cluster 3', sub: 'and stopped again by 10am', pattern: 'service', icon: 'warehouse' },
      ],
    },
    {
      id: 'modes',
      label: 'Two ways to set it',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'md-auto', label: 'Auto-scale', sub: 'MIN below MAX — added on demand', pattern: 'user', icon: 'waves' },
        { id: 'md-max', label: 'Maximized', sub: 'MIN equals MAX — all up, always', pattern: 'user', icon: 'layers' },
      ],
    },
    {
      id: 'bill',
      label: 'You pay per cluster',
      sub: 'three running clusters, triple the burn',
      pattern: 'warn',
      icon: 'receipt',
    },
  ],
  edges: [
    { source: 'monday', target: 'clusters', label: 'one cluster would queue them; the size of it would not help' },
    { source: 'clusters', target: 'modes', label: 'same warehouse, same data, same size — just more of it' },
    { source: 'modes', target: 'bill', label: 'and the meter follows the clusters, not the name — a Medium with three up bills like three Mediums' },
  ],
}
