import type { Scene } from '@graphlearning/flow'

// §03. THE board of the concept — every later course is a zoom into one of these three rows, so it
// is worth the space. The middle row is three DIFFERENT warehouses on purpose: the muscle is plural
// and heterogeneous, the memory is singular, and that asymmetry is the whole architecture.
export const threeLayers: Scene = {
  id: 'three-layers',
  title: 'Brain, muscle, memory',
  nodes: [
    {
      id: 'services',
      label: 'Cloud services — the brain',
      sub: 'shared by the account · you never size it',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'sv-auth', label: 'Auth & access', sub: 'logins, roles, network policy', pattern: 'service', icon: 'shieldcheck' },
        { id: 'sv-meta', label: 'Metadata', sub: 'min/max, row counts, versions', pattern: 'service', icon: 'braces' },
        { id: 'sv-opt', label: 'Optimizer', sub: 'SQL in, an execution plan out', pattern: 'service', icon: 'brain' },
        { id: 'sv-infra', label: 'Orchestration', sub: 'spins warehouses up and down', pattern: 'service', icon: 'gears' },
      ],
    },
    {
      id: 'compute',
      label: 'Compute — the muscle',
      sub: 'independent MPP clusters, each with its own SSD cache',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wh-etl', label: 'WH_ETL', sub: 'Large · the nightly load', pattern: 'service', icon: 'warehouse' },
        { id: 'wh-bi', label: 'WH_BI', sub: 'X-Small · dashboards at 9am', pattern: 'service', icon: 'warehouse' },
        { id: 'wh-adhoc', label: 'WH_ADHOC', sub: 'Medium · whenever someone asks', pattern: 'service', icon: 'warehouse' },
      ],
    },
    {
      id: 'storage',
      label: 'Storage — the memory',
      sub: 'micro-partitions on Azure Blob, S3, GCS',
      pattern: 'storage',
      icon: 'database',
    },
  ],
  edges: [
    { source: 'services', target: 'compute', label: 'plans the query, then hands it to a warehouse' },
    { source: 'compute', target: 'storage', label: 'every warehouse reads the same immutable, compressed, encrypted copy' },
  ],
}
