import type { Scene } from '@graphlearning/flow'

// §02. The SaaS claim is a claim about a LIST — what leaves your hands — so the board is a real
// table rather than cards: the two columns must be read against each other row by row. The card
// under it carries the part the table cannot say, which is that there is no other way to run it.
export const managedForYou: Scene = {
  id: 'managed-for-you',
  title: 'What you stop doing',
  nodes: [
    {
      id: 'split',
      label: 'Who does the work',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'Traditional warehouse', 'Snowflake'],
      values: [
        ['Install & patch', 'your DBAs, on a schedule', 'Snowflake, continuously'],
        ['Indexes & tuning', 'hand-built and maintained', 'micro-partitions, automatic'],
        ['Capacity planning', 'guess a year ahead', 'resize in one command'],
        ['Upgrades', 'a project, with downtime', 'you are already on the new version'],
        ['Availability', 'your problem', 'across availability zones'],
      ],
    },
    {
      id: 'shape',
      label: 'So what do you get?',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 's-account', label: 'An account', sub: 'not an installation — you sign up', pattern: 'user', icon: 'usercheck' },
        { id: 's-sql', label: 'A SQL endpoint', sub: 'browser, CLI, driver, REST', pattern: 'service', icon: 'terminal' },
        { id: 's-bill', label: 'A bill', sub: 'for what you actually ran', pattern: 'service', icon: 'receipt' },
      ],
    },
    {
      id: 'nopremise',
      label: 'No on-prem build',
      sub: 'public cloud only — by design',
      pattern: 'warn',
      icon: 'ban',
    },
  ],
  edges: [
    { source: 'split', target: 'shape', label: 'everything on the right of that table is gone from your job' },
    { source: 'shape', target: 'nopremise', label: 'and that is the trade — you cannot take it in-house' },
  ],
}
