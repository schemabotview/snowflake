import type { Scene } from '@graphlearning/flow'

// §07. The pitch that is easy to mis-hear as "a bigger warehouse, automatically". The distinction is
// that it is per-query and borrowed — so a small warehouse handling one monstrous query a day is
// exactly the shape it exists for, and the scale factor is the cost ceiling.
export const queryAcceleration: Scene = {
  id: 'query-acceleration',
  title: 'Borrowing compute, for one query',
  nodes: [
    {
      id: 'problem',
      label: 'The awkward workload',
      sub: 'a small warehouse, and one enormous scan a day',
      pattern: 'warn',
      icon: 'waves',
    },
    {
      id: 'how',
      label: 'What the service does',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'qa-on', label: 'On per warehouse', sub: 'ENABLE_QUERY_ACCELERATION', pattern: 'service', icon: 'power' },
        { id: 'qa-eval', label: 'Judged per query', sub: 'Snowflake decides if it helps', pattern: 'service', icon: 'brain' },
        { id: 'qa-lease', label: 'Work is offloaded', sub: 'to shared serverless compute', pattern: 'service', icon: 'zap' },
      ],
    },
    {
      id: 'fit',
      label: 'What it suits',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ft-scan', label: 'Large scans', sub: 'with a selective filter', pattern: 'user', icon: 'search' },
        { id: 'ft-adhoc', label: 'Ad-hoc analytics', sub: 'unpredictable query sizes', pattern: 'user', icon: 'barchart' },
        { id: 'ft-no', label: 'Not everything', sub: 'few partitions, or a weak filter', pattern: 'warn', icon: 'circleslash' },
      ],
    },
    {
      id: 'cost',
      label: 'Scale factor caps the spend',
      sub: 'a multiple of the warehouse size it may lease',
      pattern: 'user',
      icon: 'ruler',
    },
  ],
  edges: [
    { source: 'problem', target: 'how', label: 'sizing up for the one query means overpaying for the other twenty-three hours' },
    { source: 'how', target: 'fit', label: 'you are billed only while acceleration is actually used' },
    { source: 'fit', target: 'cost', label: 'the eligibility view lists which queries and warehouses would gain most' },
  ],
}
