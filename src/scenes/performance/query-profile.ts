import type { Scene } from '@graphlearning/flow'

// §01. Everything later in the course is a fix; this is the diagnosis, so it comes first and the
// board is a lookup table of the four numbers worth reading. Ordered by how often each is the
// answer — partitions scanned is right far more often than anything else.
export const queryProfile: Scene = {
  id: 'query-profile',
  title: 'Read the profile before you change anything',
  nodes: [
    {
      id: 'numbers',
      label: 'Four numbers, and what each one tells you',
      kind: 'table',
      pattern: 'service',
      headers: ['What you read', 'What it means', 'Where it points'],
      values: [
        ['Partitions scanned / total', 'how much pruning happened', 'clustering, or the filter'],
        ['Bytes spilled to local', 'it ran out of memory', 'a bigger warehouse'],
        ['Bytes spilled to remote', 'it ran out of local disk too', 'urgently a bigger one'],
        ['Queued (provisioning)', 'it waited for compute', 'more clusters, not a bigger one'],
      ],
    },
    {
      id: 'ratio',
      label: 'The ratio to look at first',
      sub: '2 of 40,000 partitions is healthy; 40,000 of 40,000 is a full scan',
      pattern: 'user',
      icon: 'gauge',
    },
    {
      id: 'where',
      label: 'And where to find it',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wh-ui', label: 'Snowsight', sub: 'Query History, then the profile tab', pattern: 'service', icon: 'monitor' },
        { id: 'wh-op', label: 'The slowest operator', sub: 'sorted by percentage of time', pattern: 'service', icon: 'barchart' },
        { id: 'wh-hist', label: 'QUERY_HISTORY', sub: 'the same numbers, as a table', pattern: 'service', icon: 'search' },
      ],
    },
  ],
  edges: [
    { source: 'numbers', target: 'ratio', label: 'a slow query is slow for one of these reasons, and guessing which wastes an afternoon' },
    { source: 'ratio', target: 'where', label: 'every fix in this course is aimed at one of those four rows' },
  ],
}
