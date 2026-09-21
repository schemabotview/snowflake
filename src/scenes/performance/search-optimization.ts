import type { Scene } from '@graphlearning/flow'

// §06. Clustering helps ranges; this helps needles. The five-point checklist is from the notes and is
// the honest version of the pitch — the service is expensive and only pays on a narrow shape of
// workload, so the board spends its space on qualification rather than on mechanism.
export const searchOptimization: Scene = {
  id: 'search-optimization',
  title: 'Finding one row in a billion',
  nodes: [
    {
      id: 'gap',
      label: 'Clustering cannot help here',
      sub: 'one key, no range — every partition might hold it',
      pattern: 'warn',
      icon: 'search',
    },
    {
      id: 'what',
      label: 'The search access path',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'so-build', label: 'A second structure', sub: 'built and kept up by Snowflake', pattern: 'service', icon: 'boxes' },
        { id: 'so-probe', label: 'Probabilistic', sub: 'like a Bloom filter, not an index', pattern: 'service', icon: 'sigma' },
        { id: 'so-skip', label: 'It rules partitions out', sub: 'so the scan never reads them', pattern: 'service', icon: 'funnel' },
      ],
    },
    {
      id: 'fits',
      label: 'It helps these query shapes',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'fs-eq', label: 'Equality and IN', sub: 'customer_id = 90210', pattern: 'user', icon: 'hash' },
        { id: 'fs-like', label: 'Substrings', sub: 'LIKE, RLIKE, REGEXP', pattern: 'user', icon: 'regex' },
        { id: 'fs-var', label: 'Fields in VARIANT', sub: 'a path inside your JSON', pattern: 'user', icon: 'braces' },
      ],
    },
    {
      id: 'check',
      label: 'Qualify it honestly',
      kind: 'table',
      pattern: 'service',
      headers: ['Check', 'Because'],
      values: [
        ['Table is hundreds of GB', 'below that, a scan is cheap enough'],
        ['The filter column has many values', 'few values cannot be selective'],
        ['The query returns very few rows', 'this is a needle, not a report'],
        ['It runs often, and slowly', 'maintenance must be earned back'],
        ['Not already served by clustering', 'do not pay twice'],
      ],
    },
  ],
  edges: [
    { source: 'gap', target: 'what', label: 'a clustering key orders the table; a point lookup has no range to order by' },
    { source: 'what', target: 'fits', label: 'Enterprise edition and above, enabled per table and optionally per column' },
    { source: 'fits', target: 'check', label: 'maintenance costs credits continuously, so five things should be true first' },
  ],
}
