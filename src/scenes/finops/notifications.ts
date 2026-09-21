import type { Scene } from '@graphlearning/flow'

// §06. Short section, one setup ritual, two failure modes — an unverified recipient and an
// unspecified ALLOWED_RECIPIENTS that mails the entire account. Both are the kind of thing you only
// discover in front of colleagues, so they get the cards.
export const notifications: Scene = {
  id: 'notifications',
  title: 'Getting the message out',
  nodes: [
    {
      id: 'sql',
      kind: 'code',
      filename: 'integration, then send',
      label: [
        'CREATE NOTIFICATION INTEGRATION ops_email',
        '  TYPE = EMAIL  ENABLED = TRUE',
        "  ALLOWED_RECIPIENTS = ('you@co.com', 'oncall@co.com');",
        '',
        "CALL SYSTEM$SEND_EMAIL('ops_email', 'you@co.com', 'Subject', 'Body text');",
      ].join('\n'),
    },
    {
      id: 'rules',
      label: 'Four rules',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'nr-verify', label: 'Verified only', sub: 'the address must be a Snowflake user', pattern: 'warn', icon: 'usercheck' },
        { id: 'nr-all', label: 'Omit the list', sub: 'and it mails the whole account', pattern: 'warn', icon: 'users' },
        { id: 'nr-ten', label: 'Ten per account', sub: 'the integration limit', pattern: 'storage', icon: 'ruler' },
        { id: 'nr-from', label: 'From no-reply', sub: 'nobody can answer it', pattern: 'storage', icon: 'ban' },
      ],
    },
    {
      id: 'where',
      label: 'Callable anywhere',
      sub: 'an alert, a task, a procedure',
      pattern: 'user',
      icon: 'plug',
    },
  ],
  edges: [
    { source: 'sql', target: 'rules', label: 'sending to an unverified address fails the procedure — test it before you rely on it' },
    { source: 'rules', target: 'where', label: 'which makes it the ending for every failure branch you write' },
  ],
}
