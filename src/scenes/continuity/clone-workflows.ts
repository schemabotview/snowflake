import type { Scene } from '@graphlearning/flow'

// §07. Three workflows that are genuinely new capabilities rather than conveniences — especially the
// first, since "a full-size dev environment" is normally a budget conversation. The warn card is the
// governance trap: a clone of production data is production data.
export const cloneWorkflows: Scene = {
  id: 'clone-workflows',
  title: 'What people actually do with it',
  nodes: [
    {
      id: 'uses',
      label: 'Three workflows this makes possible',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'cw-dev', label: 'A real dev copy', sub: 'full-size production data, in seconds', pattern: 'service', icon: 'boxes' },
        { id: 'cw-test', label: 'Test a migration', sub: 'run the scary script on the clone', pattern: 'service', icon: 'wrench' },
        { id: 'cw-point', label: 'A point in time', sub: 'clone last Friday, and compare', pattern: 'service', icon: 'history' },
      ],
    },
    {
      id: 'swap',
      kind: 'code',
      filename: 'the pattern worth knowing',
      label: [
        '-- rebuild into a clone, then switch the two names atomically',
        'CREATE TABLE orders_next CLONE orders;',
        '…rebuild, verify, compare counts…',
        'ALTER TABLE orders SWAP WITH orders_next;   -- instant, and reversible',
      ].join('\n'),
    },
    {
      id: 'care',
      label: 'A clone is production',
      sub: 'same rows, same sensitivity',
      pattern: 'warn',
      icon: 'shieldcheck',
    },
  ],
  edges: [
    { source: 'uses', target: 'swap', label: 'none of these needed a copy, a restore window, or a conversation about budget' },
    { source: 'swap', target: 'care', label: 'SWAP exchanges the names, so rolling back is the same statement again — and note that grants do NOT come with a clone' },
  ],
}
