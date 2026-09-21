import type { Scene } from '@graphlearning/flow'

// §08. The driverless path, which is what a serverless function or a mobile back end actually needs.
// Both auth routes get equal billing because the choice is genuinely situational — machine identity
// against acting-on-behalf-of a person.
export const sqlApi: Scene = {
  id: 'sql-api',
  title: 'Snowflake over plain HTTPS',
  nodes: [
    {
      id: 'why',
      label: 'When a driver is the wrong shape',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sa-lambda', label: 'A serverless function', sub: 'no room for a driver', pattern: 'service', icon: 'zap' },
        { id: 'sa-app', label: 'A mobile back end', sub: 'one query, over HTTP', pattern: 'service', icon: 'cloud' },
        { id: 'sa-tool', label: 'Another SaaS', sub: 'that speaks REST and nothing else', pattern: 'service', icon: 'plug' },
      ],
    },
    {
      id: 'req',
      kind: 'code',
      filename: 'a statement is a POST',
      label: [
        'POST /api/v2/statements',
        'Authorization: Bearer <token>',
        '{ "statement": "SELECT count(*) FROM orders",',
        '  "warehouse": "WH_API", "role": "ANALYST", "timeout": 60 }',
        '',
        '-- long queries return a handle; poll GET /statements/<id>',
      ].join('\n'),
    },
    {
      id: 'auth',
      label: 'Two ways to hold the token',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'at-jwt', label: 'JWT, key-pair', sub: 'a machine acting as itself', pattern: 'user', icon: 'key' },
        { id: 'at-oauth', label: 'OAuth 2.0', sub: 'an app acting for a person', pattern: 'user', icon: 'usercheck' },
      ],
    },
    {
      id: 'note',
      label: 'The role decides',
      sub: 'new transport, not new rights',
      pattern: 'user',
      icon: 'shieldcheck',
    },
  ],
  edges: [
    { source: 'why', target: 'req', label: 'no driver, no connection pool, no client library to package' },
    { source: 'req', target: 'auth', label: 'asynchronous by default — submit, get a handle, poll for the result' },
    { source: 'auth', target: 'note', label: 'OAuth scopes can narrow the role further, never widen it' },
  ],
}
