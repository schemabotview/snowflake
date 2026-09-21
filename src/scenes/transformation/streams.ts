import type { Scene } from '@graphlearning/flow'

// §02. The single most misunderstood object in Snowflake — people picture a queue or a copy of the
// rows. The board insists on the real thing: a bookmark, plus three columns bolted onto the source's
// own shape. The "costs nothing" card is not a footnote; it is why the misunderstanding matters.
export const streams: Scene = {
  id: 'streams',
  title: 'A stream is a bookmark',
  nodes: [
    {
      id: 'what',
      label: 'What a stream actually holds',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'wh-is', label: 'An offset', sub: 'a position in the table history', pattern: 'storage', icon: 'tag' },
        { id: 'wh-isnot', label: 'Not a copy', sub: 'no rows are stored anywhere', pattern: 'warn', icon: 'ban' },
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'the source shape, plus three columns',
      label: [
        'CREATE STREAM orders_s ON TABLE orders;',
        '',
        'SELECT order_id, total,',
        '       METADATA$ACTION,      -- INSERT or DELETE',
        '       METADATA$ISUPDATE,    -- TRUE when the pair is really an update',
        '       METADATA$ROW_ID       -- a stable id for the row over time',
        'FROM   orders_s;',
      ].join('\n'),
    },
    {
      id: 'update',
      label: 'An update is a pair',
      sub: 'DELETE + INSERT, both flagged ISUPDATE',
      pattern: 'user',
      icon: 'swap',
    },
    {
      id: 'cost',
      label: 'Free to keep',
      sub: 'no storage — there is nothing in it',
      pattern: 'user',
      icon: 'receipt',
    },
  ],
  edges: [
    { source: 'what', target: 'sql', label: 'querying it returns the source table’s own columns, as of the changes since the offset' },
    { source: 'sql', target: 'update', label: 'there is no UPDATE action — Snowflake has none at the storage layer either' },
    { source: 'update', target: 'cost', label: 'the rows come from the table’s own history, which already exists' },
  ],
}
