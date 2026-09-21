import type { Section } from '../types'

export const queryExecutionFlow: Section = {
  id: 'query-execution-flow',
  title: 'What happens when you run a query',
  scene: 'query-path',
  slide: `## From SELECT to rows

The same three layers, walked in order. Each step can **end the query early**.

### 1 · Cloud services
Authenticates you, resolves the object names against your role, then checks the **result cache** — same query text, unchanged data, and the answer returns without any compute at all.

### 2 · Plan and prune
The optimizer reads per-partition **metadata** — min/max values, row counts — and skips the partitions that cannot match. Some questions (\`COUNT(*)\`, \`MIN(date)\`) are answered from metadata alone.

### 3 · The warehouse, then storage
What survives pruning runs on your warehouse, which checks its **local SSD cache** first. Storage returns only the **columns** and **partitions** the plan asked for.

> The fastest query is the one that never reaches a warehouse.`,
  narration:
    "Let's follow a single query through those three layers, because the path explains a lot of Snowflake's behaviour that otherwise looks like magic. You submit a SELECT. It arrives at the cloud services layer, which does several things before any compute is involved. It authenticates you and establishes which role you're acting as. It parses the statement and resolves every object name — and if your role can't see one of those objects, you get an error here, with nothing started. Then it checks the result cache. If the exact same query text has been run recently and none of the underlying data has changed, the answer comes straight back. No warehouse, no credits, effectively instant — and that's true even if a colleague ran it, not you. Assume there's no cached result. The optimizer now builds a plan, and this is where the metadata earns its keep. Snowflake keeps statistics for every micro-partition — the minimum and maximum value of each column, the number of rows, and more. So for a query filtered to one month, the planner can look at those ranges and decide that most partitions cannot possibly contain a matching row, and skip them before reading anything. Some queries never get past this step at all: a plain row count, or the minimum of a date column, can be answered from metadata alone, with no running warehouse. Whatever survives goes to your virtual warehouse. It checks its own local solid-state cache first, and fetches from storage only what it doesn't already hold. Storage returns just the columns and just the partitions the plan asked for. Four steps — and two of them can finish the job before any compute wakes up.",
}
