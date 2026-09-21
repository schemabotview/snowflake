import type { Scene } from '@graphlearning/flow'

// §11. The mirror image, and the one surprise is that it fans out into many files by default. That
// is a feature for scale and a nuisance for the person who wanted one spreadsheet, so SINGLE and
// MAX_FILE_SIZE get their own row rather than being buried in an options list.
export const unloading: Scene = {
  id: 'unloading',
  title: 'The same command, pointing the other way',
  nodes: [
    {
      id: 'sql',
      kind: 'code',
      filename: 'COPY INTO a location',
      label: [
        'COPY INTO @az_landing/exports/orders_',
        'FROM (SELECT * FROM orders WHERE order_date >= \'2026-02-01\')',
        '  FILE_FORMAT = (TYPE = PARQUET)',
        '  HEADER = TRUE',
        '  OVERWRITE = TRUE;',
        '',
        'GET @raw_stage/exports/ file:///tmp/;   -- and down to your machine, via a client',
      ].join('\n'),
    },
    {
      id: 'fanout',
      label: 'It writes many files by default',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'fo-why', label: 'One per thread', sub: 'parallel unload, named with a suffix', pattern: 'service', icon: 'boxes' },
        { id: 'fo-single', label: 'SINGLE = TRUE', sub: 'forces exactly one file', pattern: 'user', icon: 'file' },
        { id: 'fo-max', label: 'MAX_FILE_SIZE', sub: 'cap each one instead', pattern: 'user', icon: 'ruler' },
      ],
    },
    {
      id: 'end',
      label: 'And that is the course',
      sub: 'files in, files out, and one command doing both',
      pattern: 'user',
      icon: 'circlecheck',
    },
  ],
  edges: [
    { source: 'sql', target: 'fanout', label: 'the source can be a whole query, not just a table' },
    { source: 'fanout', target: 'end', label: 'SINGLE is convenient and it serialises the unload — do not use it on a huge result' },
  ],
}
