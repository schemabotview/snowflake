import type { Scene } from '@graphlearning/flow'

// §01. The section is about a TRANSFORMATION, so the board is a flow: rows in, four things done to
// them, files you never see out. The last card matters more than it looks — "no indexes, no
// statistics to refresh, no vacuum" is the list of chores that do not exist here, and people arriving
// from Postgres or Oracle keep looking for them.
export const intoMicroPartitions: Scene = {
  id: 'into-micro-partitions',
  title: 'What happens to a row you load',
  nodes: [
    { id: 'rows', label: 'You load rows', sub: 'a CSV, a Parquet file, an INSERT', pattern: 'user', icon: 'filecode' },
    {
      id: 'work',
      label: 'Snowflake reorganises them',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'w-col', label: 'Columnar', sub: 'each column stored together', pattern: 'service', icon: 'table' },
        { id: 'w-zip', label: 'Compressed', sub: 'per column, by what it holds', pattern: 'service', icon: 'package' },
        { id: 'w-enc', label: 'Encrypted', sub: 'AES-256, always, no setting', pattern: 'service', icon: 'lock' },
        { id: 'w-stat', label: 'Measured', sub: 'min, max and counts recorded', pattern: 'service', icon: 'ruler' },
      ],
    },
    {
      id: 'files',
      label: 'Micro-partitions',
      sub: 'immutable files on cloud object storage',
      pattern: 'storage',
      icon: 'database',
    },
    {
      id: 'gone',
      label: 'And the chores are gone',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'g-idx', label: 'No indexes', sub: 'nothing to design or rebuild', pattern: 'external', icon: 'ban' },
        { id: 'g-stats', label: 'No stats job', sub: 'they are written as data lands', pattern: 'external', icon: 'ban' },
        { id: 'g-vac', label: 'No vacuum', sub: 'no reorg, no partition maintenance', pattern: 'external', icon: 'ban' },
      ],
    },
  ],
  edges: [
    { source: 'rows', target: 'work', label: 'whatever you loaded, it is not kept in that shape' },
    { source: 'work', target: 'files', label: 'written once and never edited — this is the fact the rest of the concept leans on' },
    { source: 'files', target: 'gone', label: 'you never see a file, and there is nothing to tune' },
  ],
}
