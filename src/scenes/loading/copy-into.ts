import type { Scene } from '@graphlearning/flow'

// §07. COPY has a large grammar and a small core. The code card is the core; the row beneath is the
// three ways to say WHICH files, which is the decision people actually face. The transform card is
// last because it is the capability nobody expects COPY to have.
export const copyInto: Scene = {
  id: 'copy-into',
  title: 'The workhorse',
  nodes: [
    {
      id: 'sql',
      kind: 'code',
      filename: 'COPY INTO, the core of it',
      label: [
        'COPY INTO sales.raw.orders          -- target table',
        'FROM   @raw_stage/2026/02/          -- a stage, and optionally a path within it',
        "PATTERN = '.*orders_.*[.]csv'       -- which files",
        '  FILE_FORMAT = (FORMAT_NAME = my_csv)',
        '  ON_ERROR = SKIP_FILE;',
      ].join('\n'),
    },
    {
      id: 'which',
      label: 'Three ways to say which files',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wh-all', label: 'Everything', sub: 'name the stage and stop', pattern: 'service', icon: 'boxes' },
        { id: 'wh-files', label: 'FILES = (…)', sub: 'an explicit list, up to 1000', pattern: 'service', icon: 'file' },
        { id: 'wh-pat', label: 'PATTERN = …', sub: 'a regex over the whole path', pattern: 'service', icon: 'regex' },
      ],
    },
    {
      id: 'transform',
      kind: 'code',
      filename: 'and it can transform on the way in',
      label: [
        'COPY INTO orders (id, total_eur, loaded_at)',
        'FROM (SELECT $1::INT, $2::NUMBER * 1.09, CURRENT_TIMESTAMP()',
        '      FROM @raw_stage/orders.csv t)',
        '  FILE_FORMAT = (FORMAT_NAME = my_csv);',
      ].join('\n'),
    },
  ],
  edges: [
    { source: 'sql', target: 'which', label: 'the target is always an existing table — COPY never creates one' },
    { source: 'which', target: 'transform', label: 'and a path prefix prunes the listing before any of these are applied' },
  ],
}
