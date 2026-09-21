import type { Scene } from '@graphlearning/flow'

// §01. The course's premise in one board: three features that look unrelated in the docs are one
// storage fact wearing three hats. Drawing the fan-out from immutability is the whole argument, and
// it pays off the promise made back in the storage course.
export const historyIsFree: Scene = {
  id: 'history-is-free',
  title: 'Why any of this is possible',
  nodes: [
    {
      id: 'fact',
      label: 'Files never change',
      sub: 'an UPDATE writes new partitions',
      pattern: 'storage',
      icon: 'lock',
    },
    {
      id: 'so',
      label: 'The old ones remain',
      sub: 'unreferenced, not deleted',
      pattern: 'storage',
      icon: 'boxes',
    },
    {
      id: 'three',
      label: 'Which gives you three features for one mechanism',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'th-tt', label: 'Time Travel', sub: 'read the table as it was', pattern: 'service', icon: 'history' },
        { id: 'th-clone', label: 'Zero-copy clone', sub: 'a second name for the same files', pattern: 'service', icon: 'copy' },
        { id: 'th-undrop', label: 'UNDROP', sub: 'the object was only unreferenced', pattern: 'service', icon: 'repeat' },
      ],
    },
    {
      id: 'bill',
      label: 'And you pay for it',
      sub: 'history is storage, and storage is billed',
      pattern: 'warn',
      icon: 'receipt',
    },
  ],
  edges: [
    { source: 'fact', target: 'so', label: 'nothing in Snowflake edits a file — it writes a new one' },
    { source: 'so', target: 'three', label: 'so "the table an hour ago" is not a backup to restore; it is a set of files still on disk' },
    { source: 'three', target: 'bill', label: 'free in effort, not in money' },
  ],
}
