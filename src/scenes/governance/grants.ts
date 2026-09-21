import type { Scene } from '@graphlearning/flow'

// §05. The USAGE chain is the single most common cause of "I granted SELECT and they still cannot
// see it", so it leads. Future grants get equal billing because without them every new table is a
// silent permission gap nobody notices until a report is empty.
export const grants: Scene = {
  id: 'grants',
  title: 'Three grants to see one table',
  nodes: [
    {
      id: 'chain',
      label: 'Access is a chain, and it breaks at the first gap',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'gr-db', label: 'USAGE on database', sub: 'permission to look inside', pattern: 'service', icon: 'dooropen' },
        { id: 'gr-sch', label: 'USAGE on schema', sub: 'and inside that, too', pattern: 'service', icon: 'dooropen' },
        { id: 'gr-tab', label: 'SELECT on table', sub: 'the one people remember', pattern: 'service', icon: 'table' },
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'now, and forever after',
      label: [
        'GRANT USAGE  ON DATABASE sales            TO ROLE sales_read;',
        'GRANT USAGE  ON SCHEMA   sales.mart       TO ROLE sales_read;',
        'GRANT SELECT ON ALL TABLES IN SCHEMA sales.mart TO ROLE sales_read;',
        '',
        '-- and the one everyone forgets:',
        'GRANT SELECT ON FUTURE TABLES IN SCHEMA sales.mart TO ROLE sales_read;',
      ].join('\n'),
    },
    {
      id: 'future',
      label: 'ALL is a snapshot',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'fu-all', label: 'ON ALL TABLES', sub: 'the ones that exist right now', pattern: 'warn', icon: 'clock' },
        { id: 'fu-fut', label: 'ON FUTURE TABLES', sub: 'and every one created later', pattern: 'service', icon: 'calendar' },
      ],
    },
    {
      id: 'sec',
      label: 'Secondary roles',
      sub: 'USE SECONDARY ROLES ALL',
      pattern: 'user',
      icon: 'layers',
    },
  ],
  edges: [
    { source: 'chain', target: 'sql', label: 'grant SELECT and nothing else, and the table is invisible — no error, it simply is not there' },
    { source: 'sql', target: 'future', label: 'tomorrow’s table is not covered by today’s grant' },
    { source: 'future', target: 'sec', label: 'and a session need not be limited to one role — secondary roles activate the rest alongside the primary' },
  ],
}
