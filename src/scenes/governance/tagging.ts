import type { Scene } from '@graphlearning/flow'

// §08. Tags look like a documentation feature and are really three features, so the board is those
// three uses. Tag-based masking is the one that changes how you work: classify once, and protection
// follows the classification instead of being attached column by column.
export const tagging: Scene = {
  id: 'tagging',
  title: 'One key-value, three jobs',
  nodes: [
    {
      id: 'tag',
      label: 'A tag is an object',
      sub: 'a name, and its allowed values',
      pattern: 'storage',
      icon: 'tag',
    },
    {
      id: 'uses',
      label: 'What people actually use them for',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'tg-class', label: 'Classification', sub: 'PII, CONFIDENTIAL, GENERAL_USE', pattern: 'service', icon: 'scanface' },
        { id: 'tg-mask', label: 'Tag-based masking', sub: 'protection follows the label', pattern: 'service', icon: 'shieldcheck' },
        { id: 'tg-cost', label: 'Cost attribution', sub: 'tag a warehouse with its team', pattern: 'service', icon: 'receipt' },
      ],
    },
    {
      id: 'inherit',
      label: 'And they are inherited',
      sub: 'tag a database, and its schemas and tables carry it',
      pattern: 'user',
      icon: 'tree',
    },
    {
      id: 'limits',
      label: 'The limits',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'lm-50', label: '50 tags per object', sub: 'and 1000 allowed values each', pattern: 'warn', icon: 'ruler' },
        { id: 'lm-temp', label: 'Not on temporary', sub: 'nor on transient objects', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [
    { source: 'tag', target: 'uses', label: 'applicable to databases, schemas, tables, columns, views, stages, warehouses and more' },
    { source: 'uses', target: 'inherit', label: 'the second one is the reason to bother: classify once, protect automatically' },
    { source: 'inherit', target: 'limits', label: 'two caps worth knowing before you design a scheme' },
  ],
}
