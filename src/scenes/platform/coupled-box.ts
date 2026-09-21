import type { Scene } from '@graphlearning/flow'

// §01. The opening argument in one board. Six complaints in a grid would say nothing on their own,
// so the welded box sits ABOVE them and the root cause BELOW: every pain in the middle row is a
// symptom of the same purchase. §04 `separation` is deliberately this board inverted.
export const coupledBox: Scene = {
  id: 'coupled-box',
  title: 'One box, bought for peak',
  nodes: [
    {
      id: 'box',
      label: 'The warehouse you bought',
      pattern: 'group',
      flow: 'LR',
      // The gap between two side-by-side children is narrow, and the label pill is sized to its text —
      // anything longer than a word or two here lands ON the cards instead of between them.
      edges: [{ source: 'disks', target: 'cpu', label: 'one unit', bidirectional: true }],
      children: [
        { id: 'disks', label: 'Disks', sub: 'the storage you sized up front', pattern: 'storage', icon: 'harddrive' },
        { id: 'cpu', label: 'CPU & memory', sub: 'the compute you sized with it', pattern: 'service', icon: 'cpu' },
      ],
    },
    {
      id: 'costs',
      label: 'What that cost you',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'c-full', label: 'Disks fill up', sub: 'old data goes to tape, not to SQL', pattern: 'warn', icon: 'database' },
        { id: 'c-peak', label: 'You pay for peak', sub: 'idle at 3am, billed all the same', pattern: 'warn', icon: 'receipt' },
        { id: 'c-slow', label: 'Queries crawl', sub: 'a fixed machine, however big the join', pattern: 'warn', icon: 'clock' },
        { id: 'c-grow', label: 'It cannot grow', sub: 'the only fix is a months-long refresh', pattern: 'warn', icon: 'scale' },
        { id: 'c-age', label: 'Hardware ages', sub: 'patching, disk failures, cooling', pattern: 'warn', icon: 'wrench' },
        { id: 'c-copy', label: 'Copies everywhere', sub: 'every export widens the attack surface', pattern: 'warn', icon: 'copy' },
      ],
    },
    {
      id: 'root',
      label: 'One purchase',
      sub: 'one ceiling — neither half could move alone',
      pattern: 'user',
      icon: 'lock',
    },
  ],
  edges: [
    { source: 'box', target: 'costs', label: 'buy them together and you are stuck with both' },
    { source: 'costs', target: 'root', label: 'six symptoms, one cause' },
  ],
}
