import type { Scene } from '@graphlearning/flow'

// §04. The two-layer pattern, drawn as two layers. Everyone starts by granting objects straight to
// job-title roles and discovers the combinatorics later; access roles are the fix, and seeing the
// fan-in is more persuasive than reading the rule.
export const customRoles: Scene = {
  id: 'custom-roles',
  title: 'Two layers, and the second one saves you',
  nodes: [
    {
      id: 'access',
      label: 'ACCESS roles — one per set of objects',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ar-read', label: 'SALES_READ', sub: 'SELECT on the sales schema', pattern: 'storage', icon: 'table' },
        { id: 'ar-write', label: 'SALES_WRITE', sub: 'INSERT, UPDATE, DELETE there', pattern: 'storage', icon: 'pencil' },
        { id: 'ar-fin', label: 'FIN_READ', sub: 'SELECT on the finance schema', pattern: 'storage', icon: 'table' },
      ],
    },
    {
      id: 'functional',
      label: 'FUNCTIONAL roles — one per job',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'fr-analyst', label: 'ANALYST', sub: 'holds SALES_READ', pattern: 'service', icon: 'barchart' },
        { id: 'fr-eng', label: 'DATA_ENGINEER', sub: 'holds both SALES roles', pattern: 'service', icon: 'workflow' },
        { id: 'fr-cfo', label: 'FINANCE', sub: 'holds FIN_READ', pattern: 'service', icon: 'receipt' },
      ],
    },
    {
      id: 'people',
      label: 'People hold jobs',
      sub: 'a new analyst is one GRANT',
      pattern: 'user',
      icon: 'users',
    },
    {
      id: 'rollup',
      label: 'Roll up to SYSADMIN',
      sub: 'or no admin can see your tree',
      pattern: 'warn',
      icon: 'tree',
    },
  ],
  edges: [
    { source: 'access', target: 'functional', label: 'privileges touch objects HERE, and only here' },
    { source: 'functional', target: 'people', label: 'a job changes the object set once, for everyone holding that job' },
    { source: 'people', target: 'rollup', label: 'and one convention keeps the whole tree administrable' },
  ],
}
