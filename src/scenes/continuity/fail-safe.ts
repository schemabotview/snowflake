import type { Scene } from '@graphlearning/flow'

// §05. Fail-safe is misunderstood in one specific direction — people treat it as seven extra days of
// Time Travel. The board is therefore a contrast table: same data, completely different access
// model. And it is billed, which is the other half of the transient-table argument.
export const failSafe: Scene = {
  id: 'fail-safe',
  title: 'Seven days you cannot touch',
  nodes: [
    {
      id: 'cmp',
      label: 'Fail-safe is not more Time Travel',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'Time Travel', 'Fail-safe'],
      values: [
        ['Who uses it', 'you, with SQL', 'Snowflake support only'],
        ['How long', '0 to 90 days', 'a fixed 7 days after that'],
        ['How to access', 'AT, BEFORE, CLONE, UNDROP', 'open a support case'],
        ['How fast', 'immediate', 'hours to days'],
        ['Can you disable it', 'yes, set 0 days', 'no, not on a permanent table'],
      ],
    },
    {
      id: 'meaning',
      label: 'What it is actually for',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'mn-disaster', label: 'Catastrophe', sub: 'not a mistaken DELETE on Tuesday', pattern: 'user', icon: 'skull' },
        { id: 'mn-last', label: 'A last resort', sub: 'never part of a recovery plan', pattern: 'user', icon: 'shieldcheck' },
      ],
    },
    {
      id: 'cost',
      label: 'You pay for all seven',
      sub: 'the argument for transient tables',
      pattern: 'warn',
      icon: 'receipt',
    },
  ],
  edges: [
    { source: 'cmp', target: 'meaning', label: 'same underlying data, and an access model with nothing in common' },
    { source: 'meaning', target: 'cost', label: 'a staging table you rebuild nightly does not deserve seven days of insurance' },
  ],
}
