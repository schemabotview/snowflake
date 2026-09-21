import type { Scene } from '@graphlearning/flow'

// §01. The course map. Four boxes people conflate constantly — a stage is not a table, COPY is not a
// stage — so the board names each and the edge labels say what crosses between them. The bottom row
// previews the only real fork in the course: one command, or a pipe that never stops.
export const ingestPicture: Scene = {
  id: 'ingest-picture',
  title: 'File, stage, COPY, table',
  nodes: [
    {
      id: 'chain',
      label: 'Every load in Snowflake is these four things',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'in-file', label: 'A file', sub: 'CSV, JSON, Parquet, Avro…', pattern: 'external', icon: 'filecode' },
        { id: 'in-stage', label: 'A stage', sub: 'where Snowflake can see it', pattern: 'storage', icon: 'folder' },
        { id: 'in-copy', label: 'COPY INTO', sub: 'the command that reads it', pattern: 'service', icon: 'funnel' },
        { id: 'in-table', label: 'A table', sub: 'micro-partitions, at last', pattern: 'storage', icon: 'table' },
      ],
    },
    {
      id: 'stagewhat',
      label: 'A stage is a pointer, not a table',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sw-where', label: 'A location', sub: 'inside Snowflake, or your own bucket', pattern: 'storage', icon: 'folder' },
        { id: 'sw-auth', label: 'Its credentials', sub: 'how Snowflake is allowed to read it', pattern: 'service', icon: 'key' },
        { id: 'sw-fmt', label: 'A file format', sub: 'how to parse what it finds', pattern: 'service', icon: 'braces' },
      ],
    },
    {
      id: 'modes',
      label: 'Two ways to run it',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'md-bulk', label: 'Bulk', sub: 'you run COPY, on a warehouse', pattern: 'user', icon: 'package' },
        { id: 'md-pipe', label: 'Continuous', sub: 'Snowpipe runs it for you, serverless', pattern: 'user', icon: 'waves' },
      ],
    },
  ],
  edges: [
    { source: 'chain', target: 'stagewhat', label: 'the one people get wrong is the second box' },
    { source: 'stagewhat', target: 'modes', label: 'the same four boxes either way — only who presses the button changes' },
  ],
}
