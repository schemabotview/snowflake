import type { Scene } from '@graphlearning/flow'

// §06. Containment IS the content here, so this is nested containers rather than a flow — the
// picture has to show that a schema lives INSIDE a database, not beside it. The code card carries
// the other half: a session is a coordinate in that tree, and "object does not exist" is usually
// three of the four being wrong.
export const objectModel: Scene = {
  id: 'object-model',
  title: 'Everything lives somewhere',
  nodes: [
    {
      id: 'org',
      label: 'ORGANIZATION',
      sub: 'your company, one or many accounts',
      pattern: 'group',
      children: [
        {
          id: 'acct',
          label: 'ACCOUNT',
          sub: 'one cloud, one region, one URL',
          pattern: 'group',
          cols: 2,
          children: [
            {
              id: 'db',
              label: 'DATABASE',
              sub: 'SALES_DB',
              pattern: 'group',
              children: [
                { id: 'sch-raw', label: 'SCHEMA · RAW', sub: 'tables, views, stages, file formats', pattern: 'storage', icon: 'folder' },
                { id: 'sch-mart', label: 'SCHEMA · MART', sub: 'tables, views, tasks, streams', pattern: 'storage', icon: 'folder' },
              ],
            },
            {
              id: 'acctlevel',
              label: 'Account-level objects',
              sub: 'they belong to no database',
              pattern: 'group',
              children: [
                { id: 'a-wh', label: 'Warehouses', sub: 'compute is not stored in a schema', pattern: 'service', icon: 'warehouse' },
                { id: 'a-role', label: 'Roles & users', sub: 'who may touch any of it', pattern: 'user', icon: 'users' },
                { id: 'a-share', label: 'Shares & integrations', sub: 'the account edges', pattern: 'external', icon: 'share' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ctx',
      kind: 'code',
      filename: 'the four-part session context',
      label: [
        'USE ROLE      ANALYST;      -- what you are allowed to do',
        'USE WAREHOUSE WH_BI;        -- what does the computing',
        'USE DATABASE  SALES_DB;     -- where to look',
        'USE SCHEMA    MART;         -- where in there to look',
        '',
        'SELECT * FROM ORDERS;       -- resolves to SALES_DB.MART.ORDERS',
      ].join('\n'),
    },
  ],
  edges: [
    { source: 'org', target: 'ctx', label: 'a session is just a coordinate in that tree' },
  ],
}
