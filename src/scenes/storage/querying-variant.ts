import type { Scene } from '@graphlearning/flow'

// §09. Pure syntax, so the code card IS the scene and everything else is a caption. The cast line is
// the one to slow down on: a path expression returns VARIANT, so comparisons and joins silently
// misbehave until you cast. The function row is a menu, not a lesson.
export const queryingVariant: Scene = {
  id: 'querying-variant',
  title: 'Reaching into a VARIANT',
  nodes: [
    {
      id: 'sql',
      kind: 'code',
      filename: 'paths, casts and FLATTEN',
      label: [
        "-- payload = { \"user\": { \"id\": 42, \"city\": \"Madrid\" }, \"items\": [ {...}, {...} ] }",
        '',
        'SELECT payload:user.city               AS city,      -- colon to enter, dot to descend',
        "       payload['user']['id']           AS id_variant, -- brackets do the same",
        '       payload:user.id::INT            AS id,         -- :: casts out of VARIANT',
        '       payload:missing.key             AS absent      -- a missing path is NULL, not an error',
        'FROM   events;',
        '',
        '-- one row per element of the items array',
        'SELECT e.payload:user.id::INT AS id, i.value:sku::STRING AS sku',
        'FROM   events e, LATERAL FLATTEN(input => e.payload:items) i;',
      ].join('\n'),
    },
    {
      id: 'rules',
      label: 'Two rules that save hours',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'r-cast', label: 'Always cast', sub: 'uncast values compare as VARIANT', pattern: 'warn', icon: 'swap' },
        { id: 'r-null', label: 'Missing is NULL', sub: 'typos fail silently, not loudly', pattern: 'warn', icon: 'circleslash' },
      ],
    },
    {
      id: 'fns',
      label: 'The functions you will reach for',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'fn-parse', label: 'PARSE_JSON', sub: 'string into a VARIANT', pattern: 'service', icon: 'braces' },
        { id: 'fn-try', label: 'TRY_PARSE_JSON', sub: 'the same, NULL on bad input', pattern: 'service', icon: 'shieldcheck' },
        { id: 'fn-flat', label: 'FLATTEN', sub: 'array or object into rows', pattern: 'service', icon: 'layers' },
        { id: 'fn-infer', label: 'INFER_SCHEMA', sub: 'columns from staged files', pattern: 'service', icon: 'search' },
      ],
    },
  ],
  edges: [
    { source: 'sql', target: 'rules', label: 'the syntax is small; the two ways it goes wrong are both quiet' },
    { source: 'rules', target: 'fns', label: 'and a handful of functions cover the rest' },
  ],
}
