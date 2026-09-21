import type { Scene } from '@graphlearning/flow'

// §11. The claim that lands is that an LLM call is a scalar function — so it composes with GROUP BY
// and WHERE like anything else. The code card does more work than any description could. Cost gets a
// card because per-row inference over a large table is a genuinely expensive mistake.
export const cortexAisql: Scene = {
  id: 'cortex-aisql',
  title: 'An LLM call is just a function',
  nodes: [
    {
      id: 'sql',
      kind: 'code',
      filename: 'in the SELECT list, like any other function',
      label: [
        'SELECT review_id,',
        '       SNOWFLAKE.CORTEX.SENTIMENT(body)                   AS mood,',
        "       SNOWFLAKE.CORTEX.SUMMARIZE(body)                   AS gist,",
        "       SNOWFLAKE.CORTEX.TRANSLATE(body, 'es', 'en')       AS english,",
        "       AI_CLASSIFY(body, ['delivery','pricing','quality']) AS topic",
        'FROM   reviews',
        "WHERE  created_at > DATEADD(day, -7, CURRENT_DATE());",
      ].join('\n'),
    },
    {
      id: 'kinds',
      label: 'Two kinds of function',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'cf-task', label: 'Task-specific', sub: 'SENTIMENT, SUMMARIZE, TRANSLATE', pattern: 'service', icon: 'sigma' },
        { id: 'cf-open', label: 'Open-ended', sub: 'COMPLETE, with your own prompt', pattern: 'service', icon: 'brain' },
      ],
    },
    {
      id: 'more',
      label: 'And beyond text',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'mr-doc', label: 'Document AI', sub: 'fields out of PDFs and forms', pattern: 'user', icon: 'filecode' },
        { id: 'mr-multi', label: 'Images and audio', sub: 'the same SQL surface', pattern: 'user', icon: 'waves' },
      ],
    },
    {
      id: 'cost',
      label: 'Filter, then infer',
      sub: 'per-row inference adds up fast',
      pattern: 'warn',
      icon: 'receipt',
    },
  ],
  edges: [
    { source: 'sql', target: 'kinds', label: 'no endpoint, no API key, and the data never leaves the account' },
    { source: 'kinds', target: 'more', label: 'so the result composes with GROUP BY, WHERE and everything else' },
    { source: 'more', target: 'cost', label: 'it is billed per token, which a WHERE clause controls and a full scan does not' },
  ],
}
