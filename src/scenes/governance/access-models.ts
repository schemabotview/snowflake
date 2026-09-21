import type { Scene } from '@graphlearning/flow'

// §01. Three models, and the point is that Snowflake runs the first two AT ONCE — which is why a
// role with every privilege still cannot drop an object it does not own, and why "grant it to the
// role" sometimes is not enough. UBAC is here for completeness and flagged as the one to avoid.
export const accessModels: Scene = {
  id: 'access-models',
  title: 'Two models, running at the same time',
  nodes: [
    {
      id: 'models',
      label: 'How a database can decide who may do what',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'am-dac', label: 'DAC', sub: 'every object has an owner', pattern: 'service', icon: 'key' },
        { id: 'am-rbac', label: 'RBAC', sub: 'privileges go to roles, roles to users', pattern: 'service', icon: 'users' },
        { id: 'am-ubac', label: 'UBAC', sub: 'privileges straight to a user', pattern: 'warn', icon: 'usercheck' },
      ],
    },
    {
      id: 'both',
      label: 'Snowflake does both at once',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'bo-own', label: 'Ownership', sub: 'the role that created it holds it', pattern: 'storage', icon: 'key' },
        { id: 'bo-grant', label: 'Grants', sub: 'everything else is granted in', pattern: 'storage', icon: 'link' },
      ],
    },
    {
      id: 'surprise',
      label: 'Hence this',
      sub: 'every grant, and still cannot DROP',
      pattern: 'warn',
      icon: 'ban',
    },
  ],
  edges: [
    { source: 'models', target: 'both', label: 'grant to a USER and the access vanishes with them — always grant to a role' },
    { source: 'both', target: 'surprise', label: 'some things only the OWNER may do, however generous the grants' },
  ],
}
