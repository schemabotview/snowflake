import type { Scene } from '@graphlearning/flow'

// §03. Three types is a table. Staleness gets the rest of the board because it is the failure people
// actually hit: a stream that silently stopped being usable while nobody was consuming it, and the
// only cure is recreating it — which means the gap is gone for good.
export const streamTypes: Scene = {
  id: 'stream-types',
  title: 'Three kinds, and the way they die',
  nodes: [
    {
      id: 'kinds',
      label: 'Pick by what you need to see',
      kind: 'table',
      pattern: 'service',
      headers: ['Type', 'Records', 'Use it for'],
      values: [
        ['Standard', 'inserts, updates, deletes', 'keeping a target in step'],
        ['Append-only', 'inserts only', 'event feeds — cheaper and simpler'],
        ['Insert-only', 'inserts only, external tables', 'files appearing in a lake'],
      ],
    },
    {
      id: 'stale',
      label: 'How a stream goes stale',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sl-when', label: 'The offset ages out', sub: 'past the table’s retention window', pattern: 'warn', icon: 'clock' },
        { id: 'sl-then', label: 'Then it is unusable', sub: 'the unconsumed changes are gone', pattern: 'warn', icon: 'skull' },
        { id: 'sl-fix', label: 'Recreate it', sub: 'and accept the gap — there is no repair', pattern: 'warn', icon: 'repeat' },
      ],
    },
    {
      id: 'grace',
      label: 'Snowflake does help',
      sub: 'retention stretches to 14 days',
      pattern: 'user',
      icon: 'shieldcheck',
    },
  ],
  edges: [
    { source: 'kinds', target: 'stale', label: 'append-only is the cheaper choice whenever you genuinely never delete' },
    { source: 'stale', target: 'grace', label: 'consume regularly, and watch STALE_AFTER on anything that matters' },
  ],
}
