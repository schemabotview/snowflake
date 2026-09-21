import type { Scene } from '@graphlearning/flow'

// §05. Both sides of the Marketplace on one board, because the interesting realisation is that
// consuming and providing are the same mechanism. The three checks are the ones people skip and then
// wonder why the listing they picked is unusable.
export const marketplace: Scene = {
  id: 'marketplace',
  title: 'The same mechanism, with a shop front',
  nodes: [
    {
      id: 'consume',
      label: 'As a consumer',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'mc-find', label: 'Find a listing', sub: 'weather, demographics, holidays', pattern: 'service', icon: 'search' },
        { id: 'mc-get', label: 'Press Get', sub: 'it mounts as a database', pattern: 'service', icon: 'dooropen' },
        { id: 'mc-query', label: 'Query it', sub: 'seconds later, joined to your own', pattern: 'service', icon: 'table' },
      ],
    },
    {
      id: 'checks',
      label: 'Three things to check first',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'ck-region', label: 'Your region', sub: 'or it cannot be mounted at all', pattern: 'warn', icon: 'globe' },
        { id: 'ck-fresh', label: 'Refresh cadence', sub: 'daily, monthly — or never again', pattern: 'warn', icon: 'clock' },
        { id: 'ck-price', label: 'Free or paid', sub: 'and on what terms', pattern: 'warn', icon: 'receipt' },
      ],
    },
    {
      id: 'provide',
      label: 'As a provider',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'mp-private', label: 'Private listings', sub: 'to named accounts — most real use', pattern: 'user', icon: 'lock' },
        { id: 'mp-public', label: 'Public listings', sub: 'anyone on Snowflake can request', pattern: 'user', icon: 'globe' },
        { id: 'mp-money', label: 'Monetized', sub: 'one-off, subscription, or usage', pattern: 'user', icon: 'receipt' },
      ],
    },
  ],
  edges: [
    { source: 'consume', target: 'checks', label: 'no ETL, no API key, no pipeline to maintain — the data is simply there' },
    { source: 'checks', target: 'provide', label: 'a listing in the wrong region is not slow; it is unavailable' },
  ],
}
