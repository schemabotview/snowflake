import type { Scene } from '@graphlearning/flow'

// §05. A table for the six formats, because the useful column is "when you meet it" rather than any
// technical property. The code card shows the two that actually get typed, and the closing card is
// the argument for making it an OBJECT instead of repeating options in every COPY.
export const fileFormats: Scene = {
  id: 'file-formats',
  title: 'Six formats, one object',
  nodes: [
    {
      id: 'formats',
      label: 'What Snowflake reads',
      kind: 'table',
      pattern: 'service',
      headers: ['Format', 'Shape', 'Where you meet it'],
      values: [
        ['CSV', 'delimited text', 'exports, finance, everywhere'],
        ['JSON', 'nested, semi-structured', 'APIs, event streams'],
        ['PARQUET', 'columnar, typed', 'data lakes — the best fit'],
        ['AVRO', 'row-wise binary, schema', 'Kafka and Hadoop pipelines'],
        ['ORC', 'columnar binary', 'Hive estates'],
        ['XML', 'tagged documents', 'older enterprise feeds'],
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'define it once',
      label: [
        'CREATE FILE FORMAT my_csv',
        '  TYPE = CSV',
        "  FIELD_DELIMITER = '|'",
        '  SKIP_HEADER = 1',
        "  NULL_IF = ('NULL', 'null', '')",
        '  EMPTY_FIELD_AS_NULL = TRUE;',
        '',
        'CREATE FILE FORMAT my_json TYPE = JSON STRIP_OUTER_ARRAY = TRUE;',
      ].join('\n'),
    },
    {
      id: 'why',
      label: 'Why an object, not options',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wf-once', label: 'Written once', sub: 'not retyped in every COPY', pattern: 'user', icon: 'copy' },
        { id: 'wf-stage', label: 'Attach to a stage', sub: 'then COPY needs no format at all', pattern: 'user', icon: 'folder' },
        { id: 'wf-fix', label: 'Fixed in one place', sub: 'a delimiter change lands everywhere', pattern: 'user', icon: 'wrench' },
      ],
    },
  ],
  edges: [
    { source: 'formats', target: 'sql', label: 'Parquet if you have the choice — typed, columnar, and no delimiter to argue about' },
    { source: 'sql', target: 'why', label: 'a FILE FORMAT is a schema-level object like any other' },
  ],
}
