import type { Scene } from '@graphlearning/flow'

// §06. The instinct is that a clone of a terabyte costs a terabyte, so the board leads with the two
// names pointing at one set of files. Divergence is the honest footnote: the clone is free at birth
// and grows a bill as it is written to.
export const zeroCopyClone: Scene = {
  id: 'zero-copy-clone',
  title: 'Two names, one set of files',
  nodes: [
    {
      id: 'moment',
      label: 'At the moment you clone',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'zc-meta', label: 'Metadata only', sub: 'a new name pointing at the same files', pattern: 'storage', icon: 'copy' },
        { id: 'zc-fast', label: 'Seconds', sub: 'a terabyte takes about as long as a row', pattern: 'storage', icon: 'zap' },
        { id: 'zc-free', label: 'No extra storage', sub: 'nothing has been duplicated', pattern: 'storage', icon: 'receipt' },
      ],
    },
    {
      id: 'after',
      label: 'And then they diverge',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'af-write', label: 'Write to either', sub: 'new partitions, for that side only', pattern: 'service', icon: 'pencil' },
        { id: 'af-bill', label: 'You pay the delta', sub: 'only what has actually changed', pattern: 'service', icon: 'gauge' },
      ],
    },
    {
      id: 'what',
      label: 'What can be cloned',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'wt-db', label: 'Databases', sub: 'and everything inside', pattern: 'user', icon: 'database' },
        { id: 'wt-sch', label: 'Schemas', sub: 'and their tables', pattern: 'user', icon: 'folder' },
        { id: 'wt-tab', label: 'Tables', sub: 'permanent and transient', pattern: 'user', icon: 'table' },
        { id: 'wt-other', label: 'And more', sub: 'stages, file formats, tasks, streams', pattern: 'user', icon: 'boxes' },
      ],
    },
    {
      id: 'past',
      label: 'Clone the past, too',
      sub: 'CLONE … AT(OFFSET => -3600)',
      pattern: 'service',
      icon: 'history',
    },
  ],
  edges: [
    { source: 'moment', target: 'after', label: 'the clone is independent from the first second — changing one never touches the other' },
    { source: 'after', target: 'what', label: 'so a clone is free at birth and grows a bill as you write to it' },
    { source: 'what', target: 'past', label: 'external tables and internal stages are the notable exceptions' },
  ],
}
