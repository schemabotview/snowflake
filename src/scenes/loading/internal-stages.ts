import type { Scene } from '@graphlearning/flow'

// §02. Three stages, and the sigil is the thing to memorise, so it leads each card. The code card is
// the whole workflow in six lines — PUT, LIST, COPY — because the sigils only make sense in use.
// The cost card is there because "internal" reads as free and is not.
export const internalStages: Scene = {
  id: 'internal-stages',
  title: 'Three stages you already have',
  nodes: [
    {
      id: 'three',
      label: 'Internal — Snowflake-managed storage',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'is-user', label: '@~  user stage', sub: 'yours alone, any table', pattern: 'storage', icon: 'usercheck' },
        { id: 'is-table', label: '@%orders  table', sub: 'that one table, shared', pattern: 'storage', icon: 'table' },
        { id: 'is-named', label: '@raw_stage  named', sub: 'a schema object you create', pattern: 'storage', icon: 'folder' },
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'the whole workflow, six lines',
      label: [
        'CREATE STAGE raw_stage;                        -- a named internal stage',
        '',
        'PUT file://./orders.csv @raw_stage;            -- upload (SnowSQL or a driver, not the UI)',
        'LIST @raw_stage;                               -- what is up there?',
        'SELECT $1, $2 FROM @raw_stage/orders.csv;      -- you can query a stage directly',
        'COPY INTO orders FROM @raw_stage;              -- and then load it',
      ].join('\n'),
    },
    {
      id: 'notes',
      label: 'Two things to know',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'nt-cost', label: 'Not free', sub: 'staged files bill as storage', pattern: 'warn', icon: 'receipt' },
        { id: 'nt-nott', label: 'No Time Travel', sub: 'nor Fail-safe on staged files', pattern: 'user', icon: 'history' },
      ],
    },
  ],
  edges: [
    { source: 'three', target: 'sql', label: 'user and table stages exist already — you never create them' },
    { source: 'sql', target: 'notes', label: 'and the files sit there until you remove them' },
  ],
}
