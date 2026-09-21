import type { Scene } from '@graphlearning/flow'

// §09. The behaviour is invisible and saves people constantly, until the day it confuses them
// utterly. A timeline is the only honest shape for it: the same COPY, three times, at three points
// in the file's life, with a different outcome each time.
export const loadMetadata: Scene = {
  id: 'load-metadata',
  title: 'The same COPY, three times',
  nodes: [
    {
      id: 'story',
      label: 'One file, one table, the same command',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'lm-1', label: 'Day 1 · loads', sub: 'and the file is recorded as done', pattern: 'service', icon: 'circlecheck' },
        { id: 'lm-2', label: 'Day 2 · skipped', sub: 'same name, same checksum — nothing', pattern: 'external', icon: 'circleslash' },
        { id: 'lm-3', label: 'Day 65 · unknown', sub: 'the record has expired', pattern: 'warn', icon: 'clock' },
      ],
    },
    {
      id: 'why',
      label: 'What Snowflake remembers',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wm-name', label: 'The file name', sub: 'and its ETag or checksum', pattern: 'storage', icon: 'fingerprint' },
        { id: 'wm-64', label: 'For 64 days', sub: 'per target table, not per stage', pattern: 'storage', icon: 'calendar' },
        { id: 'wm-idem', label: 'Re-running is safe', sub: 'and why a re-run loads nothing', pattern: 'storage', icon: 'repeat' },
      ],
    },
    {
      id: 'override',
      label: 'When you mean it anyway',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ov-force', label: 'FORCE = TRUE', sub: 'load it again, duplicates and all', pattern: 'warn', icon: 'zap' },
        { id: 'ov-unc', label: 'Uncertain files', sub: 'LOAD_UNCERTAIN_FILES = TRUE', pattern: 'warn', icon: 'history' },
      ],
    },
  ],
  edges: [
    { source: 'story', target: 'why', label: 'COPY is idempotent by design, and the memory is what makes it so' },
    { source: 'why', target: 'override', label: 'which is a gift until the day you actually want the file loaded twice' },
  ],
}
