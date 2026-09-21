import type { Scene } from '@graphlearning/flow'

// §07. Everything that connects, grouped by who uses it. Key-pair auth gets its own card because it
// is the right answer for every service account and people default to passwords out of habit — and
// a password in a CI variable is the most common real-world Snowflake credential leak.
export const clients: Scene = {
  id: 'clients',
  title: 'Everything that connects',
  nodes: [
    {
      id: 'ways',
      label: 'Four ways in',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'cl-ui', label: 'Snowsight', sub: 'people, exploring', pattern: 'service', icon: 'monitor' },
        { id: 'cl-cli', label: 'SnowSQL', sub: 'scripts, CI, PUT and GET', pattern: 'service', icon: 'terminal' },
        { id: 'cl-drv', label: 'Drivers', sub: 'Python, JDBC, ODBC, Go, Node', pattern: 'service', icon: 'plug' },
        { id: 'cl-api', label: 'The SQL API', sub: 'plain HTTPS, no driver at all', pattern: 'service', icon: 'cloud' },
      ],
    },
    {
      id: 'py',
      kind: 'code',
      filename: 'the Python connector',
      label: [
        'import snowflake.connector',
        '',
        'con = snowflake.connector.connect(',
        "    account='ab12345.west-europe.azure', user='SVC_ETL',",
        '    private_key=pkb,                  # key-pair, not a password',
        "    warehouse='WH_ETL', database='SALES', schema='MART', role='LOADER')",
        '',
        'for row in con.cursor().execute(\'SELECT count(*) FROM orders\'): print(row)',
      ].join('\n'),
    },
    {
      id: 'auth',
      label: 'For anything automated, use key-pair',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'au-rsa', label: 'An RSA key pair', sub: 'the public half on the user', pattern: 'user', icon: 'key' },
        { id: 'au-nopw', label: 'No password to leak', sub: 'and none to rotate by hand', pattern: 'user', icon: 'shieldcheck' },
        { id: 'au-mfa', label: 'Survives MFA', sub: 'which a service account cannot do', pattern: 'user', icon: 'usercheck' },
      ],
    },
  ],
  edges: [
    { source: 'ways', target: 'py', label: 'the four-part session context travels in the connection, exactly as it does in a worksheet' },
    { source: 'py', target: 'auth', label: 'a password in a CI variable is the most common real credential leak there is' },
  ],
}
