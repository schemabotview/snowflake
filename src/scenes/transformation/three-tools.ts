import type { Scene } from '@graphlearning/flow'

// §01. The course map. The framing that matters is the middle row: all three answers are just SQL
// that Snowflake runs on your behalf, differing only in how much of the WHEN you hand over. That is
// the axis §08 later makes people choose along.
export const threeTools: Scene = {
  id: 'three-tools',
  title: 'Data keeps arriving. Now what?',
  nodes: [
    {
      id: 'problem',
      label: 'The nightly rebuild',
      sub: 'recompute everything to reflect one day',
      pattern: 'warn',
      icon: 'repeat',
    },
    {
      id: 'tools',
      label: 'Three answers, in rising order of how much you hand over',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'tl-proc', label: 'Procedures', sub: 'you write the logic and the loop', pattern: 'service', icon: 'code' },
        { id: 'tl-st', label: 'Streams + tasks', sub: 'you declare the steps and order', pattern: 'service', icon: 'workflow' },
        { id: 'tl-dt', label: 'Dynamic tables', sub: 'you declare the result and a lag', pattern: 'service', icon: 'waves' },
      ],
    },
    {
      id: 'same',
      label: 'All three are just SQL',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sm-noetl', label: 'No ETL tool', sub: 'nothing to install beside it', pattern: 'user', icon: 'circlecheck' },
        { id: 'sm-wh', label: 'Your compute', sub: 'a warehouse, or serverless', pattern: 'user', icon: 'warehouse' },
        { id: 'sm-gov', label: 'Your governance', sub: 'the same roles and grants', pattern: 'user', icon: 'shieldcheck' },
      ],
    },
  ],
  edges: [
    { source: 'problem', target: 'tools', label: 'the aim is to touch only what changed, and to do it without a person pressing anything' },
    { source: 'tools', target: 'same', label: 'the difference is how much of the WHEN you hand to Snowflake' },
  ],
}
