import type { Section } from '../types'

export const cortexAisqlSection: Section = {
  id: 'cortex-aisql',
  title: 'Cortex AISQL',
  scene: 'cortex-aisql',
  slide: `## An LLM call is just a function

\`SNOWFLAKE.CORTEX.SENTIMENT(body)\` in a select list, beside any other expression. No endpoint, no API key, no data leaving the account — and because it is a scalar function, the result **composes**: group by it, filter on it, join to it.

### Two kinds
**Task-specific** — \`SENTIMENT\`, \`SUMMARIZE\`, \`TRANSLATE\`, \`AI_CLASSIFY\`. No prompt to write.
**Open-ended** — \`COMPLETE\`, where you supply the prompt and pick the model.

### Beyond text
**Document AI** turns PDFs and forms into query-ready columns. Images and audio use the same SQL surface.

### Filter before you infer
Billed **per token**. A summarize over ten million rows because you forgot a \`WHERE\` clause is the expensive version — and a \`WHERE\` clause is the whole fix.`,
  narration:
    "Cortex is Snowflake's AI layer, and the thing that makes it click is realising that an LLM call is just a function. You write SNOWFLAKE dot CORTEX dot SENTIMENT of a column, in the select list, alongside any other expression. There's no endpoint to call, no API key to manage, and the data never leaves your account — which for anyone with a compliance team is the entire reason this is interesting rather than merely convenient. And because it's an ordinary scalar function, the result composes. You can group by the sentiment, filter on the classification, join the summary to another table. The AI output is just a column. There are two kinds. Task-specific functions do one thing without a prompt: SENTIMENT returns a score, SUMMARIZE condenses, TRANSLATE converts between languages, EMBED_TEXT produces a vector, AI_CLASSIFY sorts text into categories you list. And open-ended: COMPLETE, where you supply your own prompt and choose which model runs it, from a selection of frontier and open models. It goes beyond text. Document AI extracts fields from PDFs, forms and scanned documents, turning a pile of unstructured files into query-ready columns — invoices into rows, contracts into fields. Image and audio processing use the same SQL surface. Now the warning, and it is the one that produces a memorable invoice. This is billed per token. A summarize over ten million review bodies because somebody forgot a WHERE clause is an expensive afternoon, and nothing will stop you. So filter first, then infer. Test on a sample. And if you're doing per-row inference on a large table as part of a pipeline, materialize the result rather than recomputing it — the answer for one review does not change.",
}
