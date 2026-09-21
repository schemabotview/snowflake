import type { Scene } from '@graphlearning/flow'

// §11. Two leaks, both non-obvious: GET_DDL hands over the definition, and the query profile leaks
// row counts of tables the reader cannot see. Showing the leak first makes the performance cost of
// SECURE read as a price rather than a penalty.
export const secureViews: Scene = {
  id: 'secure-views',
  title: 'What a plain view gives away',
  nodes: [
    {
      id: 'leaks',
      label: 'A standard view leaks twice',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'lk-ddl', label: 'Its definition', sub: 'GET_DDL shows the underlying SQL', pattern: 'warn', icon: 'scroll' },
        { id: 'lk-prof', label: 'Its statistics', sub: 'the profile shows rows scanned', pattern: 'warn', icon: 'barchart' },
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'one keyword',
      label: [
        'CREATE SECURE VIEW eu_customers AS',
        '  SELECT id, name, country FROM customers WHERE region = \'EU\';',
      ].join('\n'),
    },
    {
      id: 'gives',
      label: 'What SECURE changes',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sv-hide', label: 'Definition hidden', sub: 'unless you own it', pattern: 'service', icon: 'lock' },
        { id: 'sv-prof', label: 'Profile withheld', sub: 'no row counts, no scan sizes', pattern: 'service', icon: 'shieldcheck' },
        { id: 'sv-opt', label: 'Optimizer holds back', sub: 'it will not push a filter that leaks', pattern: 'warn', icon: 'gauge' },
      ],
    },
    {
      id: 'share',
      label: 'Required for sharing',
      sub: 'only a secure view can go into a share',
      pattern: 'user',
      icon: 'share',
    },
  ],
  edges: [
    { source: 'leaks', target: 'sql', label: 'a view that filters rows is not, by itself, a security boundary' },
    { source: 'sql', target: 'gives', label: 'and the third line is the price you pay for the first two' },
    { source: 'gives', target: 'share', label: 'which is why the sharing course insists on it' },
  ],
}
