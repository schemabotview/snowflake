import type { Section } from '../types'

export const semanticViewsAndCortexAnalyst: Section = {
  id: 'semantic-views-and-cortex-analyst',
  title: 'Semantic views and Cortex Analyst',
  scene: 'cortex-analyst',
  slide: `## Asking in English, safely

### The semantic view comes first
A schema-level object stating what your business words mean: **metrics** ("revenue", defined exactly once), **dimensions**, and **relationships**. Without it an LLM guesses at your schema — and a plausible wrong number is worse than an error, because nobody checks it.

### What reads that layer
**Cortex Analyst** — a question in, governed SQL out. **Cortex Search** — semantic search over your text, the retrieval half of RAG. **Agents** — both tools plus a plan.

### And RBAC still decides
The model *proposes* SQL; Snowflake decides whether it may run — as the person who asked, under every grant and policy.

> Store it, load it, shape it, run it well, share it — and then let people ask it questions. That is Snowflake.`,
  narration:
    "The last section, and it ties the whole concept together. Natural-language questions over a database have been promised for decades and have mostly disappointed, for one reason: the model doesn't know what your words mean. Ask for revenue and it guesses which column, which filter, whether to exclude refunds. And it will produce a number. That's the danger — not an error, a plausible number, which nobody checks. So the semantic view comes first. It's a schema-level object that states what your business words mean. Metrics: revenue is defined here, once, and that definition is the only one. Dimensions: the ways the business slices things. Relationships: how the tables actually join. It is the shared vocabulary between your data model and anyone — or anything — asking questions of it. Three things read that layer. Cortex Analyst takes a question in English and produces SQL grounded in the semantic view, so revenue means what your finance team says it means. Cortex Search does semantic search over your text, and is the retrieval half of a RAG application. And Cortex Agents combine both with a plan — parse a request, choose tools, query structured data with Analyst and unstructured with Search, evaluate the result, and iterate. And here's the note to end the whole concept on. The model proposes SQL. Snowflake decides whether that SQL may run — as the person who asked, under every grant, every masking policy, every row access policy. Ask about a column your role cannot see, and you get nothing. The newest feature in the product rests entirely on the oldest idea in this concept. Store it in micro-partitions, load it through stages, shape it with streams and tasks, run it well — govern it, recover it, tune it, afford it — share it, and then let people ask it questions. That is Snowflake.",
}
