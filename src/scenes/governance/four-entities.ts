import type { Scene } from '@graphlearning/flow'

// §02. The chain read left to right is the whole mental model, and the sentence under it —
// privileges are granted to roles, roles to users, roles to roles — is the one to be able to recite.
// The final card names the consequence people meet first: no active role, no access.
export const fourEntities: Scene = {
  id: 'four-entities',
  title: 'User, role, privilege, object',
  nodes: [
    {
      id: 'chain',
      label: 'The chain, and nothing skips a link',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'fe-user', label: 'USER', sub: 'a person, or a service', pattern: 'user', icon: 'usercheck' },
        { id: 'fe-role', label: 'ROLE', sub: 'the bridge — and the only one', pattern: 'service', icon: 'users' },
        { id: 'fe-priv', label: 'PRIVILEGE', sub: 'SELECT, USAGE, CREATE TABLE…', pattern: 'service', icon: 'key' },
        { id: 'fe-obj', label: 'OBJECT', sub: 'the table, schema or warehouse', pattern: 'storage', icon: 'table' },
      ],
    },
    {
      id: 'roles2roles',
      label: 'Roles hold roles',
      sub: 'which is how a hierarchy inherits',
      pattern: 'service',
      icon: 'tree',
    },
    {
      id: 'active',
      label: 'One role is active at a time',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ac-use', label: 'USE ROLE', sub: 'switches the primary role', pattern: 'user', icon: 'swap' },
        { id: 'ac-sec', label: 'Secondary roles', sub: 'activate the rest alongside it', pattern: 'user', icon: 'layers' },
        { id: 'ac-none', label: 'Wrong role?', sub: 'the object "does not exist"', pattern: 'warn', icon: 'circleslash' },
      ],
    },
  ],
  edges: [
    { source: 'chain', target: 'roles2roles', label: 'privileges are granted to roles, and roles to users — never a privilege to a user' },
    { source: 'roles2roles', target: 'active', label: 'so a user may hold ten roles and still act as only one' },
  ],
}
