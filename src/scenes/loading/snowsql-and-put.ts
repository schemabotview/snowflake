import type { Scene } from '@graphlearning/flow'

// §06. The section exists because of one asymmetry: PUT is a client-side command and therefore
// cannot run in the browser. That single fact sends every beginner to the CLI, so the board leads
// with it rather than with a tour of SnowSQL.
export const snowsqlAndPut: Scene = {
  id: 'snowsql-and-put',
  title: 'The one thing the browser cannot do',
  nodes: [
    {
      id: 'why',
      label: 'PUT reads local disk',
      sub: 'so it cannot run in the browser',
      pattern: 'warn',
      icon: 'monitor',
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'a SnowSQL session, end to end',
      label: [
        '$ snowsql -a <account> -u <user>',
        '',
        'USE SCHEMA sales.raw;',
        'PUT file:///data/orders*.csv @raw_stage AUTO_COMPRESS = TRUE;',
        'LIST @raw_stage;',
        'COPY INTO orders FROM @raw_stage FILE_FORMAT = (FORMAT_NAME = my_csv);',
        'GET @raw_stage/rejects.csv file:///tmp/;',
      ].join('\n'),
    },
    {
      id: 'cmp',
      label: 'And when to prefer each',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'cm-cli', label: 'SnowSQL', sub: 'scripts, CI, PUT and GET, batches', pattern: 'service', icon: 'terminal' },
        { id: 'cm-ui', label: 'Snowsight', sub: 'exploring, charts, small file uploads', pattern: 'service', icon: 'monitor' },
      ],
    },
  ],
  edges: [
    { source: 'why', target: 'sql', label: 'the browser can upload a small file for you, but it cannot run PUT' },
    { source: 'sql', target: 'cmp', label: 'AUTO_COMPRESS gzips on the way up, which is usually what you want' },
  ],
}
