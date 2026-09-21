import type { Scene } from '@graphlearning/flow'

// §06. The pattern the whole first half of the course exists to produce. The loop is drawn as a
// cycle of four boxes because that is how people hold it in their heads, and the MERGE card explains
// why the loop is safe to re-run — which is the property that makes it production-grade.
export const streamTaskLoop: Scene = {
  id: 'stream-task-loop',
  title: 'The loop',
  nodes: [
    {
      id: 'loop',
      label: 'Four moving parts, running forever',
      pattern: 'group',
      cols: 4,
      children: [
        { id: 'lp-raw', label: '1 · RAW lands', sub: 'COPY or Snowpipe writes rows', pattern: 'storage', icon: 'table' },
        { id: 'lp-str', label: '2 · The stream', sub: 'now has something to show', pattern: 'storage', icon: 'tag' },
        { id: 'lp-task', label: '3 · The task wakes', sub: 'and skips if the stream is empty', pattern: 'service', icon: 'clock' },
        { id: 'lp-tgt', label: '4 · MERGE', sub: 'applies the changes to the target', pattern: 'service', icon: 'merge' },
      ],
    },
    {
      id: 'sql',
      kind: 'code',
      filename: 'the statement in the middle',
      label: [
        'MERGE INTO dim_customer t',
        'USING customers_s s ON t.id = s.id',
        '  WHEN MATCHED AND s.METADATA$ACTION = \'DELETE\'',
        '       AND s.METADATA$ISUPDATE = FALSE THEN DELETE',
        '  WHEN MATCHED THEN UPDATE SET t.name = s.name, t.city = s.city',
        '  WHEN NOT MATCHED AND s.METADATA$ACTION = \'INSERT\'',
        '       THEN INSERT (id, name, city) VALUES (s.id, s.name, s.city);',
      ].join('\n'),
    },
    {
      id: 'why',
      label: 'Why this is production-grade',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'wy-once', label: 'Consumed once', sub: 'the offset advances with the DML', pattern: 'user', icon: 'circlecheck' },
        { id: 'wy-atomic', label: 'All or nothing', sub: 'a failed task leaves the offset put', pattern: 'user', icon: 'shieldcheck' },
        { id: 'wy-idem', label: 'Safe to re-run', sub: 'MERGE lands the same state twice', pattern: 'user', icon: 'repeat' },
      ],
    },
  ],
  edges: [
    { source: 'loop', target: 'sql', label: 'MERGE is what turns three kinds of change into one statement' },
    { source: 'sql', target: 'why', label: 'reading a stream inside a DML is what advances it — a bare SELECT does not' },
  ],
}
