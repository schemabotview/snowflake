import type { Scene } from '@graphlearning/flow'

// §04. The reason this exists is the alternative: credentials pasted into DDL that anyone with
// GET_DDL can read, and that expire. The board is the four-step consent dance because every one of
// those steps is somewhere people get stuck, and the order is not guessable.
export const storageIntegration: Scene = {
  id: 'storage-integration',
  title: 'Access without credentials',
  nodes: [
    {
      id: 'bad',
      label: 'The alternative',
      sub: 'a SAS token pasted into the DDL',
      pattern: 'warn',
      icon: 'skull',
    },
    {
      id: 'create',
      kind: 'code',
      filename: 'declare what Snowflake may touch',
      label: [
        'CREATE STORAGE INTEGRATION az_int',
        '  TYPE = EXTERNAL_STAGE',
        "  STORAGE_PROVIDER = 'AZURE'",
        '  ENABLED = TRUE',
        "  AZURE_TENANT_ID = '<tenant>'",
        "  STORAGE_ALLOWED_LOCATIONS = ('azure://acct.blob.core.windows.net/landing/');",
      ].join('\n'),
    },
    {
      id: 'dance',
      label: 'Then four steps, in this order',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'st-desc', label: '1 · DESC it', sub: 'read the consent URL and app name', pattern: 'service', icon: 'search' },
        { id: 'st-consent', label: '2 · Consent', sub: 'visit the URL, accept in Entra ID', pattern: 'service', icon: 'usercheck' },
        { id: 'st-iam', label: '3 · Assign a role', sub: 'Storage Blob Data Contributor', pattern: 'service', icon: 'key' },
        { id: 'st-stage', label: '4 · Create the stage', sub: 'naming the integration', pattern: 'service', icon: 'folder' },
      ],
    },
    {
      id: 'win',
      label: 'One object, many stages',
      sub: 'granted once, audited centrally, no secret in any DDL',
      pattern: 'user',
      icon: 'shieldcheck',
    },
  ],
  edges: [
    { source: 'bad', target: 'create', label: 'readable by anyone with GET_DDL, and it expires — so instead you declare locations and let Snowflake prove who it is' },
    { source: 'create', target: 'dance', label: 'creating it grants nothing yet — Azure has to agree' },
    { source: 'dance', target: 'win', label: 'and every stage afterwards just names the integration' },
  ],
}
