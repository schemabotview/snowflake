import type { Scene } from '@graphlearning/flow'

// §02. The ladder is a table because the doubling is the content — you have to read DOWN the credit
// column to feel it. The row under it carries the counter-intuitive half: doubling the size often
// costs the SAME for a big query and less wall-clock, which is why "bigger is more expensive" is
// only true when the query cannot use the extra nodes.
export const sizeLadder: Scene = {
  id: 'size-ladder',
  title: 'Every step up doubles the machine',
  nodes: [
    {
      id: 'ladder',
      label: 'T-shirt sizes',
      kind: 'table',
      pattern: 'service',
      headers: ['Size', 'Credits / hour', 'Relative compute'],
      values: [
        ['X-Small', '1', '1×'],
        ['Small', '2', '2×'],
        ['Medium', '4', '4×'],
        ['Large', '8', '8×'],
        ['X-Large', '16', '16×'],
        ['…up to 6X-Large', '512', '512×'],
      ],
    },
    {
      id: 'math',
      label: 'The arithmetic people get wrong',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'm-same', label: 'Twice the size', sub: 'half the time, the same credits', pattern: 'user', icon: 'scale' },
        { id: 'm-sooner', label: 'And done sooner', sub: 'so bigger is often not dearer', pattern: 'user', icon: 'zap' },
        { id: 'm-if', label: 'Only if it scales', sub: 'the work must split across nodes', pattern: 'warn', icon: 'circleslash' },
        { id: 'm-small', label: 'Small scans waste it', sub: 'you pay 8× for idle nodes', pattern: 'warn', icon: 'receipt' },
      ],
    },
    {
      id: 'start',
      label: 'Start at X-Small',
      sub: 'move up on evidence, not on hope',
      pattern: 'user',
      icon: 'star',
    },
  ],
  edges: [
    { source: 'ladder', target: 'math', label: 'a Large burns eight times an X-Small for the same minute' },
    { source: 'math', target: 'start', label: 'an X-Small handles tens of gigabytes, which makes the starting point obvious' },
  ],
}
