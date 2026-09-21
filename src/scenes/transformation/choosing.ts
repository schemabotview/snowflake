import type { Scene } from '@graphlearning/flow'

// §08. The decision table the first half of the course has been building toward. Deliberately
// includes materialized views from the storage course, because in practice that is the fourth option
// people weigh — and its single-table limit is what pushes most marts to dynamic tables.
export const choosing: Scene = {
  id: 'choosing',
  title: 'Which one, and when',
  nodes: [
    {
      id: 'cmp',
      label: 'The same job, four ways',
      kind: 'table',
      pattern: 'service',
      headers: ['', 'Streams + tasks', 'Dynamic table', 'Materialized view'],
      values: [
        ['You write', 'stream, task, MERGE', 'one SELECT + a lag', 'one SELECT'],
        ['Joins', 'anything', 'anything', 'none — one table'],
        ['Control of timing', 'exact', 'a target, not a schedule', 'none'],
        ['Multi-step order', 'yours to declare', 'worked out for you', 'not applicable'],
        ['Side effects', 'anything — calls, DDL', 'none, it is declarative', 'none'],
        ['Reach for it when', 'the logic is procedural', 'you want a fresh mart', 'one big table, filtered'],
      ],
    },
    {
      id: 'rule',
      label: 'A default worth having',
      sub: 'try a dynamic table first',
      pattern: 'user',
      icon: 'star',
    },
  ],
  edges: [
    { source: 'cmp', target: 'rule', label: 'the question is not which is most powerful, but how much scheduling you want to own — so start declarative and drop to streams and tasks when it cannot express the job' },
  ],
}
