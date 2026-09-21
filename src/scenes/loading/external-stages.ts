import type { Scene } from '@graphlearning/flow'

// §03. The picture that matters is the boundary: the files stay in the customer's own container and
// Snowflake holds only a pointer. Everything on the Snowflake side of that line is metadata, which
// is why dropping the stage deletes nothing.
export const externalStages: Scene = {
  id: 'external-stages',
  title: 'Pointing at your own cloud storage',
  nodes: [
    {
      id: 'yours',
      label: 'Your Azure storage account',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'az-c', label: 'Container', sub: 'landing/', pattern: 'external', icon: 'folder' },
        { id: 'az-f1', label: 'orders_01.csv', sub: 'written by your pipeline', pattern: 'external', icon: 'filecode' },
        { id: 'az-f2', label: 'orders_02.csv', sub: 'and the next one, and the next', pattern: 'external', icon: 'filecode' },
      ],
    },
    {
      id: 'stage',
      kind: 'code',
      filename: 'the stage is three facts',
      label: [
        'CREATE STAGE az_landing',
        "  URL = 'azure://acct.blob.core.windows.net/landing/'   -- where",
        '  STORAGE_INTEGRATION = az_int                          -- how it is allowed in',
        '  FILE_FORMAT = my_csv;                                 -- how to read what it finds',
      ].join('\n'),
    },
    {
      id: 'conseq',
      label: 'What that boundary means',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'cq-own', label: 'You own the files', sub: 'lifecycle, tiering, retention', pattern: 'user', icon: 'folder' },
        { id: 'cq-drop', label: 'DROP deletes nothing', sub: 'the pointer goes, the data stays', pattern: 'user', icon: 'trash' },
        { id: 'cq-region', label: 'Keep it local', sub: 'a far region means egress and lag', pattern: 'warn', icon: 'globe' },
      ],
    },
  ],
  edges: [
    { source: 'yours', target: 'stage', label: 'the files never move into Snowflake — a stage is a named pointer at them' },
    { source: 'stage', target: 'conseq', label: 'so the two sides of the line keep their own responsibilities' },
  ],
}
