import type { Scene } from '@graphlearning/flow'

// §05. The only scene in the repo that is a genuine DAG rather than a spine, because branching IS
// the content — two loads that can run at once, converging on a rollup. The finalizer hangs off the
// end since it runs whatever happened, including failure.
export const taskGraph: Scene = {
  id: 'task-graph',
  title: 'One root, and everything after it',
  nodes: [
    { id: 'root', label: 'ROOT · land raw', sub: 'the only task with a schedule', pattern: 'service', icon: 'clock' },
    { id: 'cust', label: 'Load customers', sub: 'child of the root', pattern: 'service', icon: 'users' },
    { id: 'ord', label: 'Load orders', sub: 'child of the root, runs alongside', pattern: 'service', icon: 'table' },
    { id: 'roll', label: 'Build the rollup', sub: 'waits for BOTH parents', pattern: 'service', icon: 'sigma' },
    { id: 'fin', label: 'FINALIZER · clean up', sub: 'runs even when a branch failed', pattern: 'user', icon: 'circlecheck' },
    {
      id: 'rules',
      label: 'The rules of a graph',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'rl-one', label: 'One schedule', sub: 'only the root has one', pattern: 'storage', icon: 'clock' },
        { id: 'rl-own', label: 'One owner', sub: 'and one database and schema', pattern: 'storage', icon: 'key' },
        { id: 'rl-size', label: 'Up to 1000 tasks', sub: '100 parents or children each', pattern: 'storage', icon: 'boxes' },
        { id: 'rl-fin', label: 'One finalizer', sub: 'per root, and optional', pattern: 'storage', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [
    { source: 'root', target: 'cust', label: 'AFTER' },
    { source: 'root', target: 'ord', label: 'AFTER' },
    { source: 'cust', target: 'roll', label: 'AFTER' },
    { source: 'ord', target: 'roll', label: 'AFTER' },
    { source: 'roll', target: 'fin', label: 'and the finalizer closes the run' },
    { source: 'fin', target: 'rules', label: 'a graph is a DAG — start to finish, never a loop' },
  ],
}
