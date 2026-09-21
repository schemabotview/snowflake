import type { Scene } from '@graphlearning/flow'

// §01. The claim is hard to believe, so the board contrasts the old loop against the new one and
// lets the asymmetry do the work. The economics row is the part people ask about immediately: who
// pays, and the answer is pleasingly clean.
export const sharingWithoutCopying: Scene = {
  id: 'sharing-without-copying',
  title: 'Nothing moves',
  nodes: [
    {
      id: 'old',
      label: 'How you used to send data',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'ol-extract', label: 'Extract nightly', sub: 'a job somebody maintains', pattern: 'warn', icon: 'funnel' },
        { id: 'ol-ftp', label: 'Transfer it', sub: 'SFTP, a bucket, an email', pattern: 'warn', icon: 'share' },
        { id: 'ol-load', label: 'They load it', sub: 'a job they maintain', pattern: 'warn', icon: 'table' },
        { id: 'ol-stale', label: 'And it is stale', sub: 'always one cycle behind', pattern: 'warn', icon: 'clock' },
      ],
    },
    {
      id: 'new',
      label: 'What a share is instead',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'nw-meta', label: 'Metadata only', sub: 'a grant, in the services layer', pattern: 'service', icon: 'link' },
        { id: 'nw-live', label: 'Live', sub: 'they see your commit immediately', pattern: 'service', icon: 'zap' },
        { id: 'nw-revoke', label: 'Revocable', sub: 'one statement, and access is gone', pattern: 'service', icon: 'lock' },
      ],
    },
    {
      id: 'money',
      label: 'And the economics are clean',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'mn-store', label: 'Provider pays storage', sub: 'there is only one copy to pay for', pattern: 'user', icon: 'database' },
        { id: 'mn-comp', label: 'Consumer pays compute', sub: 'their warehouse, their queries', pattern: 'user', icon: 'warehouse' },
      ],
    },
  ],
  edges: [
    { source: 'old', target: 'new', label: 'two pipelines, two teams, and a copy of your data on somebody else’s disk' },
    { source: 'new', target: 'money', label: 'the consumer sees your tables; no bytes are duplicated or transferred' },
  ],
}
