import type { Scene } from '@graphlearning/flow'

// §03. governance §11 explained what a plain view leaks; this is where that rule becomes a hard
// refusal. The one-table-many-consumers pattern is the reason people care — without CURRENT_ACCOUNT
// you would maintain a view per partner.
export const secureViewsInSharing: Scene = {
  id: 'secure-views-in-sharing',
  title: 'Why sharing insists on SECURE',
  nodes: [
    {
      id: 'refuse',
      label: 'A plain view is refused',
      sub: 'only a SECURE view may enter a share',
      pattern: 'warn',
      icon: 'ban',
    },
    {
      id: 'why',
      label: 'Because of what it would give away',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'wy-ddl', label: 'The definition', sub: 'your filter logic and table names', pattern: 'warn', icon: 'scroll' },
        { id: 'wy-stats', label: 'The statistics', sub: 'how many rows exist beyond the filter', pattern: 'warn', icon: 'barchart' },
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'one view, every partner',
      label: [
        'CREATE SECURE VIEW v_orders AS',
        '  SELECT order_id, sku, total, order_date',
        '  FROM   orders o JOIN partner_map m ON m.partner_id = o.partner_id',
        '  WHERE  m.snowflake_account = CURRENT_ACCOUNT();',
      ].join('\n'),
    },
    {
      id: 'pattern',
      label: 'Each sees their rows',
      sub: 'one view, any number of partners',
      pattern: 'user',
      icon: 'users',
    },
  ],
  edges: [
    { source: 'refuse', target: 'why', label: 'a share crosses an organisational boundary, so the leak is not hypothetical' },
    { source: 'why', target: 'sql', label: 'CURRENT_ACCOUNT() resolves to whoever is querying through the share' },
    { source: 'sql', target: 'pattern', label: 'and the alternative is maintaining one view per partner forever' },
  ],
}
