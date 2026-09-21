import type { Scene } from '@graphlearning/flow'

// §05. Reference content, so a table — but the useful column is the third one, the gotcha. The
// TIMESTAMP row gets its own card underneath because picking the wrong variant is the one type
// decision here that silently produces wrong answers rather than an error.
export const dataTypes: Scene = {
  id: 'data-types',
  title: 'Fewer types than you are used to',
  nodes: [
    {
      id: 'types',
      label: 'The families',
      kind: 'table',
      pattern: 'service',
      headers: ['Family', 'Write it as', 'Worth knowing'],
      values: [
        ['Numeric', 'NUMBER, DECIMAL, INT', 'all one type — default (38,0)'],
        ['Float', 'FLOAT, DOUBLE, REAL', 'all 64-bit'],
        ['String', 'VARCHAR, STRING, TEXT', 'all one type — max 16 MB'],
        ['Binary', 'BINARY, VARBINARY', 'max 8 MB'],
        ['Logical', 'BOOLEAN', 'TRUE, FALSE or NULL'],
        ['Date & time', 'DATE, TIME, TIMESTAMP_*', 'three timestamp variants'],
        ['Semi-structured', 'VARIANT, OBJECT, ARRAY', 'max 128 MB'],
      ],
    },
    {
      id: 'ts',
      label: 'The one real trap',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ts-ntz', label: 'TIMESTAMP_NTZ', sub: 'no zone — any offset is discarded', pattern: 'warn', icon: 'clock' },
        { id: 'ts-ltz', label: 'TIMESTAMP_LTZ', sub: 'shown in the session’s zone', pattern: 'warn', icon: 'globe' },
        { id: 'ts-tz', label: 'TIMESTAMP_TZ', sub: 'the offset is stored with it', pattern: 'warn', icon: 'globe' },
      ],
    },
  ],
  edges: [
    { source: 'types', target: 'ts', label: 'INT and NUMBER are the same type with different names — the timestamps genuinely differ' },
  ],
}
