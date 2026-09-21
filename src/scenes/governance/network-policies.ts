import type { Scene } from '@graphlearning/flow'

// §09. Two objects and one attachment point, which is the whole feature — but the lockout warning is
// the reason this section exists. Applying a policy that excludes your own address locks the account
// out, and the recovery is a support case.
export const networkPolicies: Scene = {
  id: 'network-policies',
  title: 'A firewall in front of the account',
  nodes: [
    {
      id: 'rule',
      label: 'A network RULE is a list',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'nr-type', label: 'TYPE = IPV4', sub: 'or a private-link identifier', pattern: 'storage', icon: 'router' },
        { id: 'nr-mode', label: 'MODE = INGRESS', sub: 'traffic coming in', pattern: 'storage', icon: 'dooropen' },
        { id: 'nr-val', label: 'VALUE_LIST', sub: "CIDR ranges — '10.2.0.0/24'", pattern: 'storage', icon: 'hash' },
      ],
    },
    {
      id: 'policy',
      label: 'A POLICY holds rules',
      sub: 'an allowed list, a blocked list',
      pattern: 'service',
      icon: 'shieldcheck',
    },
    {
      id: 'apply',
      label: 'And it attaches at two levels',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ap-acct', label: 'The account', sub: 'everyone, including you', pattern: 'service', icon: 'building' },
        { id: 'ap-user', label: 'One user', sub: 'a service account, pinned to a host', pattern: 'service', icon: 'usercheck' },
      ],
    },
    {
      id: 'lock',
      label: 'You can lock yourself out',
      sub: 'include your own address before you apply it',
      pattern: 'warn',
      icon: 'skull',
    },
  ],
  edges: [
    { source: 'rule', target: 'policy', label: 'a /24 is 256 addresses — the smaller the number after the slash, the wider the range' },
    { source: 'policy', target: 'apply', label: 'a user-level policy is the tighter and usually better one' },
    { source: 'apply', target: 'lock', label: 'an account-level policy takes effect immediately, and recovery is a support case' },
  ],
}
