import type { Scene } from '@graphlearning/flow'

// §03. The only control that actually stops spending, so the board is its anatomy and its three
// actions in escalating order. The gap card matters more than the rest: monitors cover WAREHOUSE
// credits only, which is exactly the half that does not produce the surprise bills.
export const resourceMonitors: Scene = {
  id: 'resource-monitors',
  title: 'The one control that can say no',
  nodes: [
    {
      id: 'parts',
      label: 'What a monitor is',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'rm-quota', label: 'A credit quota', sub: 'how many, per interval', pattern: 'service', icon: 'gauge' },
        { id: 'rm-freq', label: 'A frequency', sub: 'daily, weekly, monthly, never', pattern: 'service', icon: 'calendar' },
        { id: 'rm-trig', label: 'Triggers', sub: 'at percentages of the quota', pattern: 'service', icon: 'bell' },
      ],
    },
    {
      id: 'actions',
      label: 'Three actions, escalating',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ac-notify', label: 'Notify', sub: 'an email, and nothing stops', pattern: 'user', icon: 'bell' },
        { id: 'ac-susp', label: 'Suspend', sub: 'after running queries finish', pattern: 'warn', icon: 'power' },
        { id: 'ac-now', label: 'Suspend immediately', sub: 'and cancel what is running', pattern: 'warn', icon: 'skull' },
      ],
    },
    {
      id: 'scope',
      label: 'Two scopes',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'sc-acct', label: 'Account monitor', sub: 'one only, covering everything', pattern: 'storage', icon: 'building' },
        { id: 'sc-wh', label: 'Warehouse monitor', sub: 'many — one warehouse, one monitor', pattern: 'storage', icon: 'warehouse' },
      ],
    },
    {
      id: 'gap',
      label: 'The gap to know about',
      sub: 'monitors cover warehouse credits, not serverless',
      pattern: 'warn',
      icon: 'circleslash',
    },
  ],
  edges: [
    { source: 'parts', target: 'actions', label: 'a quota with no trigger does nothing at all' },
    { source: 'actions', target: 'scope', label: 'set notify triggers low and a suspend trigger high — the first is information, the second is a brake' },
    { source: 'scope', target: 'gap', label: 'so Snowpipe, tasks and reclustering run on past a suspended account' },
  ],
}
