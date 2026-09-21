import type { Scene } from '@graphlearning/flow'

// §07. The interesting content is not the list of three logos, it is what the CHOICE binds — so the
// clouds are one compact row and the consequences get the space. `warn` on the two that surprise
// people: a region is not a global namespace, and crossing one is a replication job, not a setting.
export const cloudsAndRegions: Scene = {
  id: 'clouds-and-regions',
  title: 'An account lives in one region of one cloud',
  nodes: [
    {
      id: 'clouds',
      label: 'Snowflake runs on all three',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'cl-aws', label: 'AWS', sub: 'S3 underneath', pattern: 'external', icon: 'cloud' },
        { id: 'cl-azure', label: 'Azure', sub: 'Blob Storage underneath', pattern: 'external', icon: 'cloud' },
        { id: 'cl-gcp', label: 'GCP', sub: 'Cloud Storage underneath', pattern: 'external', icon: 'cloud' },
      ],
    },
    {
      id: 'pick',
      label: 'You pick one pair',
      sub: 'cloud + region, fixed at sign-up',
      pattern: 'user',
      icon: 'globe',
    },
    {
      id: 'binds',
      label: 'And that choice binds four things',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'bd-resid', label: 'Where data sits', sub: 'residency and compliance follow it', pattern: 'service', icon: 'building' },
        { id: 'bd-price', label: 'What a credit costs', sub: 'rates differ by cloud and region', pattern: 'service', icon: 'receipt' },
        { id: 'bd-feature', label: 'Feature reach', sub: 'not every region has every service', pattern: 'warn', icon: 'circleslash' },
        { id: 'bd-share', label: 'Who you can share with', sub: 'crossing a region means replication', pattern: 'warn', icon: 'share' },
      ],
    },
  ],
  edges: [
    { source: 'clouds', target: 'pick', label: 'the same Snowflake on any of them' },
    { source: 'pick', target: 'binds', label: 'a decision that is awkward to undo later' },
  ],
}
