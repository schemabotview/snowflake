import type { Scene } from '@graphlearning/flow'

// §04. The answer to "but our customer is not on Snowflake". The billing arrangement is the whole
// catch and it runs the wrong way round from intuition — the provider pays for the consumer's
// queries — so it gets the warn card and the resource-monitor advice.
export const readerAccounts: Scene = {
  id: 'reader-accounts',
  title: 'Sharing with someone who is not a customer',
  nodes: [
    {
      id: 'problem',
      label: 'Two accounts needed',
      sub: 'most partners have none',
      pattern: 'warn',
      icon: 'circleslash',
    },
    {
      id: 'reader',
      label: 'So you create one for them',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'rd-own', label: 'You own it', sub: 'created from, and managed by, yours', pattern: 'service', icon: 'key' },
        { id: 'rd-read', label: 'Read-only', sub: 'they can query, and nothing more', pattern: 'service', icon: 'lock' },
        { id: 'rd-ui', label: 'A real account', sub: 'Snowsight, drivers, their own BI', pattern: 'service', icon: 'monitor' },
      ],
    },
    {
      id: 'bill',
      label: 'You pay for it',
      sub: 'their compute, your invoice',
      pattern: 'warn',
      icon: 'receipt',
    },
    {
      id: 'guard',
      label: 'Monitor it',
      sub: 'no quota is an open tab',
      pattern: 'warn',
      icon: 'gauge',
    },
  ],
  edges: [
    { source: 'problem', target: 'reader', label: 'the alternative is going back to nightly extracts for that one partner' },
    { source: 'reader', target: 'bill', label: 'there is no contract between them and Snowflake, so there is nobody else to bill' },
    { source: 'bill', target: 'guard', label: 'they cannot see your costs, and they have no reason to write efficient SQL' },
  ],
}
