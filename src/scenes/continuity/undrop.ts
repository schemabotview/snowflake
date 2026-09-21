import type { Scene } from '@graphlearning/flow'

// §04. A tiny feature with an outsized emotional payoff, so the board is deliberately the story of a
// bad afternoon. The name-collision rule is the only subtlety and it is exactly the thing people hit
// when they "fix" the mistake by recreating the table first.
export const undrop: Scene = {
  id: 'undrop',
  title: 'The best command in the product',
  nodes: [
    {
      id: 'story',
      label: 'Three seconds, start to finish',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ud-drop', label: 'DROP TABLE orders', sub: 'wrong window, wrong database', pattern: 'warn', icon: 'trash' },
        { id: 'ud-panic', label: 'The pause', sub: 'in another system this is the incident', pattern: 'warn', icon: 'skull' },
        { id: 'ud-undrop', label: 'UNDROP TABLE orders', sub: 'and it is back, with its history', pattern: 'service', icon: 'repeat' },
      ],
    },
    {
      id: 'scope',
      label: 'It works at three levels',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sc-tab', label: 'UNDROP TABLE', sub: 'one table', pattern: 'storage', icon: 'table' },
        { id: 'sc-sch', label: 'UNDROP SCHEMA', sub: 'and everything that was in it', pattern: 'storage', icon: 'folder' },
        { id: 'sc-db', label: 'UNDROP DATABASE', sub: 'the whole thing', pattern: 'storage', icon: 'database' },
      ],
    },
    {
      id: 'catch',
      label: 'The one catch',
      sub: 'a new table of that name blocks it',
      pattern: 'warn',
      icon: 'swap',
    },
  ],
  edges: [
    { source: 'story', target: 'scope', label: 'the object was only unreferenced, and it is inside the retention window' },
    { source: 'scope', target: 'catch', label: 'each restores the most recent dropped object of that name' },
  ],
}
