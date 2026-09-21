import type { Scene } from '@graphlearning/flow'

// §12. The last scene in the concept, so its final band is the whole arc rather than one more
// feature. The semantic view leads because it is the honest answer to why natural-language BI fails
// elsewhere — and it closes the loop back to RBAC, which still decides what any of it can see.
export const cortexAnalyst: Scene = {
  id: 'cortex-analyst',
  title: 'Asking in English, safely',
  nodes: [
    {
      id: 'layer',
      label: 'The semantic view comes first',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sv-metric', label: 'Metrics', sub: 'what "revenue" means, exactly once', pattern: 'service', icon: 'sigma' },
        { id: 'sv-dim', label: 'Dimensions', sub: 'the ways you slice it', pattern: 'service', icon: 'boxes' },
        { id: 'sv-rel', label: 'Relationships', sub: 'how the tables join', pattern: 'service', icon: 'merge' },
      ],
    },
    {
      id: 'tools',
      label: 'What reads that layer',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'tl-analyst', label: 'Cortex Analyst', sub: 'a question in, governed SQL out', pattern: 'service', icon: 'brain' },
        { id: 'tl-search', label: 'Cortex Search', sub: 'semantic search over your text', pattern: 'service', icon: 'search' },
        { id: 'tl-agents', label: 'Agents', sub: 'both tools, plus a plan', pattern: 'service', icon: 'workflow' },
      ],
    },
    {
      id: 'rbac',
      label: 'RBAC still decides',
      sub: 'it runs as the person who asked',
      pattern: 'user',
      icon: 'shieldcheck',
    },
    {
      id: 'arc',
      label: 'Which is the whole arc',
      pattern: 'group',
      cols: 5,
      children: [
        { id: 'ar-store', label: 'Store it', sub: 'micro-partitions, one copy', pattern: 'user', icon: 'database' },
        { id: 'ar-load', label: 'Load it', sub: 'stages, COPY, Snowpipe', pattern: 'user', icon: 'funnel' },
        { id: 'ar-shape', label: 'Shape it', sub: 'streams, tasks, dynamic tables', pattern: 'user', icon: 'workflow' },
        { id: 'ar-run', label: 'Run it well', sub: 'govern, recover, tune, afford', pattern: 'user', icon: 'gauge' },
        { id: 'ar-share', label: 'Share it', sub: 'and let people ask it questions', pattern: 'user', icon: 'share' },
      ],
    },
  ],
  edges: [
    { source: 'layer', target: 'tools', label: 'without it an LLM guesses at your schema, and a plausible wrong number is worse than an error' },
    { source: 'tools', target: 'rbac', label: 'the model proposes SQL; Snowflake decides whether that SQL may run' },
    { source: 'rbac', target: 'arc', label: 'so the newest feature in the product rests on the oldest idea in this concept' },
  ],
}
