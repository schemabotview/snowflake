import type { Scene } from '@graphlearning/flow'

// §08. ON_ERROR is a table because the five values form a scale and the default is the surprising
// end of it. VALIDATION_MODE gets its own card: it is the habit that prevents the whole category of
// problem, and almost nobody discovers it on their own.
export const copyOptions: Scene = {
  id: 'copy-options',
  title: 'What happens when a row is wrong',
  nodes: [
    {
      id: 'onerror',
      label: 'ON_ERROR — a scale, not a switch',
      kind: 'table',
      pattern: 'service',
      headers: ['Value', 'One bad row means'],
      values: [
        ['ABORT_STATEMENT', 'the whole load fails — THE DEFAULT'],
        ['SKIP_FILE', 'that file is skipped, others load'],
        ['SKIP_FILE_5', 'skip the file once it has 5 bad rows'],
        ["SKIP_FILE_5%", 'skip it once 5% of rows are bad'],
        ['CONTINUE', 'drop the row, load the rest'],
      ],
    },
    {
      id: 'dry',
      label: 'Try it without loading',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'dr-err', label: 'RETURN_ERRORS', sub: 'every problem it would hit', pattern: 'user', icon: 'bug' },
        { id: 'dr-rows', label: 'RETURN_10_ROWS', sub: 'parse the first ten and show them', pattern: 'user', icon: 'search' },
        { id: 'dr-all', label: 'All errors', sub: 'RETURN_ALL_ERRORS, earlier loads too', pattern: 'user', icon: 'scroll' },
      ],
    },
    {
      id: 'others',
      label: 'Two more worth knowing',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ot-trunc', label: 'Truncate, not fail', sub: 'TRUNCATECOLUMNS trims to fit', pattern: 'service', icon: 'scissors' },
        { id: 'ot-purge', label: 'PURGE', sub: 'delete the file once it loads', pattern: 'service', icon: 'trash' },
      ],
    },
  ],
  edges: [
    { source: 'onerror', target: 'dry', label: 'the default is strict on purpose — a silent partial load is worse than a failure' },
    { source: 'dry', target: 'others', label: 'VALIDATION_MODE runs the parse and loads nothing at all' },
  ],
}
