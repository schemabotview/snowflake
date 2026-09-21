import type { Scene } from '@graphlearning/flow'

// §08. Three types and one surprising fact. The fact is the last row and is the reason this is a
// storage section at all: a VARIANT is not a blob of text, it is shredded into sub-columns, which is
// why querying JSON here performs like querying columns rather than like parsing strings.
export const variantTypes: Scene = {
  id: 'variant-types',
  title: 'JSON is a first-class citizen',
  nodes: [
    {
      id: 'three',
      label: 'Three semi-structured types',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'v-variant', label: 'VARIANT', sub: 'holds a value of any type', pattern: 'storage', icon: 'braces' },
        { id: 'v-object', label: 'OBJECT', sub: 'key–value pairs, like a JSON map', pattern: 'storage', icon: 'braces' },
        { id: 'v-array', label: 'ARRAY', sub: 'ordered, indexed from zero', pattern: 'storage', icon: 'boxes' },
      ],
    },
    {
      id: 'load',
      kind: 'code',
      filename: 'no schema needed first',
      label: [
        'CREATE TABLE events (payload VARIANT);',
        '',
        "COPY INTO events FROM @stage/events/",
        "  FILE_FORMAT = (TYPE = JSON);   -- every shape of event lands, today's and next month's",
      ].join('\n'),
    },
    {
      id: 'stored',
      label: 'And still stored columnar',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 's-shred', label: 'Paths get columns', sub: 'repeated keys become sub-columns', pattern: 'service', icon: 'table' },
        { id: 's-prune', label: 'So pruning works', sub: 'min/max on those sub-columns too', pattern: 'service', icon: 'funnel' },
        { id: 's-cap', label: 'Up to 128 MB', sub: 'per VARIANT value, uncompressed', pattern: 'warn', icon: 'ruler' },
      ],
    },
  ],
  edges: [
    { source: 'three', target: 'load', label: 'a column typed VARIANT accepts whatever arrives, with no schema agreed in advance' },
    { source: 'load', target: 'stored', label: 'and Snowflake does not keep it as text' },
  ],
}
