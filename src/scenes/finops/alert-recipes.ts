import type { Scene } from '@graphlearning/flow'

// §07. Six alerts worth having on day one, organised by what they protect: money, freshness,
// silence. The third column is the trap — every one of these can be built badly, and a noisy alert
// is worse than none because people learn to ignore the channel.
export const alertRecipes: Scene = {
  id: 'alert-recipes',
  title: 'Six worth having on day one',
  nodes: [
    {
      id: 'money',
      label: 'Protecting the bill',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'rc-spike', label: 'Credit spike', sub: 'an hour well above the norm', pattern: 'service', icon: 'receipt' },
        { id: 'rc-long', label: 'Long-running query', sub: 'still going after 30 minutes', pattern: 'service', icon: 'clock' },
        { id: 'rc-grow', label: 'Storage growth', sub: 'a table that doubled overnight', pattern: 'service', icon: 'database' },
      ],
    },
    {
      id: 'silence',
      label: 'Protecting against silence',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'rc-pipe', label: 'Snowpipe errors', sub: 'files arriving and not loading', pattern: 'service', icon: 'funnel' },
        { id: 'rc-task', label: 'Task failures', sub: 'and tasks that stopped running', pattern: 'service', icon: 'workflow' },
        { id: 'rc-stale', label: 'Stale table', sub: 'no rows since yesterday', pattern: 'service', icon: 'history' },
      ],
    },
    {
      id: 'trap',
      label: 'Noisy beats nothing?',
      sub: 'no — people stop looking',
      pattern: 'warn',
      icon: 'bell',
    },
  ],
  edges: [
    { source: 'money', target: 'silence', label: 'the first three tell you something cost too much; the next three tell you nothing happened at all' },
    { source: 'silence', target: 'trap', label: 'alert on a threshold you would actually act on, and review the ones that fire every day' },
  ],
}
