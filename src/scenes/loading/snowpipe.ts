import type { Scene } from '@graphlearning/flow'

// §10. Six moving parts across two clouds, which is exactly why people mis-wire it. Splitting the
// board into "in Azure" and "in Snowflake" makes the handover point — the queue — obvious, and the
// handover is where every broken pipe turns out to be broken.
export const snowpipe: Scene = {
  id: 'snowpipe',
  title: 'A file lands, and nobody presses anything',
  nodes: [
    {
      id: 'azure',
      label: 'In Azure',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sp-blob', label: 'A blob is created', sub: 'your pipeline writes orders_99.csv', pattern: 'external', icon: 'filecode' },
        { id: 'sp-event', label: 'Event subscription', sub: 'on Blob Created', pattern: 'external', icon: 'bell' },
        { id: 'sp-queue', label: 'Storage queue', sub: 'the message waits here', pattern: 'external', icon: 'waves' },
      ],
    },
    {
      id: 'snow',
      label: 'In Snowflake',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sp-notif', label: 'Notification integration', sub: 'reads that queue', pattern: 'service', icon: 'plug' },
        { id: 'sp-pipe', label: 'The PIPE', sub: 'an object wrapping one COPY', pattern: 'service', icon: 'funnel' },
        { id: 'sp-table', label: 'The table', sub: 'rows, within about a minute', pattern: 'storage', icon: 'table' },
      ],
    },
    {
      id: 'econ',
      label: 'How it bills, and when not to',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ec-serv', label: 'Serverless', sub: 'no warehouse of yours runs', pattern: 'user', icon: 'zap' },
        { id: 'ec-file', label: 'Per-file overhead', sub: 'charged per file, plus compute', pattern: 'warn', icon: 'receipt' },
        { id: 'ec-tiny', label: 'Avoid tiny files', sub: 'a few MB each beats thousands of KB', pattern: 'warn', icon: 'boxes' },
      ],
    },
  ],
  edges: [
    { source: 'azure', target: 'snow', label: 'the queue is the handover — and the first place to look when a pipe goes quiet' },
    { source: 'snow', target: 'econ', label: 'a pipe remembers loaded files exactly as COPY does' },
  ],
}
