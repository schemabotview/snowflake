import type { Scene } from '@graphlearning/flow'

// §02. The mechanics, and the list of shareable objects is the genuinely useful part — people assume
// tables only, and dynamic tables plus secure UDFs change what you can offer. The zero-storage card
// repeats §01's claim because it is the one consumers refuse to believe.
export const theShare: Scene = {
  id: 'the-share',
  title: 'Three statements, on the provider side',
  nodes: [
    {
      id: 'sql',
      kind: 'code',
      filename: 'provider',
      label: [
        'CREATE SHARE sales_share;',
        'GRANT USAGE  ON DATABASE sales            TO SHARE sales_share;',
        'GRANT USAGE  ON SCHEMA   sales.mart       TO SHARE sales_share;',
        'GRANT SELECT ON VIEW     sales.mart.v_orders TO SHARE sales_share;',
        '',
        "ALTER SHARE sales_share ADD ACCOUNTS = ('PARTNER_ACCT');",
      ].join('\n'),
    },
    {
      id: 'consumer',
      kind: 'code',
      filename: 'consumer',
      label: [
        'CREATE DATABASE partner_sales FROM SHARE provider_acct.sales_share;',
        'SELECT * FROM partner_sales.mart.v_orders;   -- read-only, and live',
      ].join('\n'),
    },
    {
      id: 'what',
      label: 'What can go in a share',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'wh-tab', label: 'Tables', sub: 'and external and Iceberg tables', pattern: 'storage', icon: 'table' },
        { id: 'wh-dt', label: 'Dynamic tables', sub: 'so a mart can be the product', pattern: 'storage', icon: 'workflow' },
        { id: 'wh-view', label: 'Secure views', sub: 'and secure materialized views', pattern: 'storage', icon: 'shieldcheck' },
        { id: 'wh-udf', label: 'Secure UDFs', sub: 'share logic, not only rows', pattern: 'storage', icon: 'sigma' },
      ],
    },
    {
      id: 'zero',
      label: 'Free to hold',
      sub: 'it is not their storage',
      pattern: 'user',
      icon: 'receipt',
    },
  ],
  edges: [
    { source: 'sql', target: 'consumer', label: 'a share is a named object holding grants, plus the list of accounts it is offered to' },
    { source: 'consumer', target: 'what', label: 'they mount it as a database — read-only, and always current' },
    { source: 'what', target: 'zero', label: 'sharing a secure UDF means shipping a calculation rather than a column' },
  ],
}
