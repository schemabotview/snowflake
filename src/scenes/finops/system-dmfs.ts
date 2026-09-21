import type { Scene } from '@graphlearning/flow'

// §08. Data quality arrives in a cost course because the same machinery carries it — schedule a
// measurement, alert on the result. The grid is by quality dimension rather than alphabetical,
// because that is how you decide which ones a table needs.
export const systemDmfs: Scene = {
  id: 'system-dmfs',
  title: 'Measuring whether the data is any good',
  nodes: [
    {
      id: 'built',
      label: 'Built in, in SNOWFLAKE.CORE',
      kind: 'table',
      pattern: 'service',
      headers: ['Dimension', 'Functions', 'Answers'],
      values: [
        ['Volume', 'ROW_COUNT', 'did anything arrive at all?'],
        ['Accuracy', 'NULL_COUNT, NULL_PERCENT, BLANK_COUNT', 'is it filled in?'],
        ['Uniqueness', 'DUPLICATE_COUNT, UNIQUE_COUNT', 'did the load run twice?'],
        ['Validity', 'ACCEPTED_VALUES', 'is it one of the allowed values?'],
        ['Freshness', 'FRESHNESS', 'how old is the newest row?'],
      ],
    },
    {
      id: 'attach',
      label: 'Attach, schedule, read',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'dm-attach', label: 'Attach to a column', sub: 'ALTER TABLE … ADD DATA METRIC', pattern: 'storage', icon: 'link' },
        { id: 'dm-sched', label: 'Give it a schedule', sub: 'a CRON, or on every change', pattern: 'storage', icon: 'clock' },
        { id: 'dm-read', label: 'Results land in a view', sub: 'and an alert watches that', pattern: 'storage', icon: 'barchart' },
      ],
    },
    {
      id: 'why',
      label: 'Why it sits here',
      sub: 'the same schedule-and-alert rails',
      pattern: 'user',
      icon: 'gauge',
    },
  ],
  edges: [
    { source: 'built', target: 'attach', label: 'fully managed — you cannot modify them, and you do not have to write them' },
    { source: 'attach', target: 'why', label: 'they can watch tables, views, dynamic tables and Iceberg tables' },
  ],
}
