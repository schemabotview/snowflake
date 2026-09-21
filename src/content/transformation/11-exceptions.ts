import type { Section } from '../types'

export const exceptionsSection: Section = {
  id: 'exceptions',
  title: 'Exceptions',
  scene: 'exceptions',
  slide: `## When it goes wrong at two in the morning

### What a handler can read
**\`SQLCODE\`** a signed five-digit number · **\`SQLERRM\`** the message · **\`SQLSTATE\`** the ANSI code. Log all three.

### Built in
**\`STATEMENT_ERROR\`** — a statement failed. **\`EXPRESSION_ERROR\`** — a type or expression problem. **\`WHEN OTHER\`** catches the rest.

### Your own
\`DECLARE no_rows EXCEPTION (-20001, 'the source was empty');\` then \`RAISE no_rows\`. Custom codes live between **−20999 and −20001**.

### Never swallow silently
A handler that returns quietly turns a **failed task into a successful one** — and nobody investigates a success. Log it, notify, or \`RAISE\` again.

> The worst pipeline is not the one that fails. It is the one that fails and reports success.`,
  narration:
    "Things fail, and the difference between a pipeline you trust and one you don't is usually how it behaves when they do. When a statement in a Snowflake Scripting block fails, an exception is raised, and Snowflake looks for a handler. Inside a handler you have three values available. SQLCODE is a signed five-digit number identifying the error. SQLERRM is the message text. And SQLSTATE is the five-character ANSI-standard code. Log all three if you're writing to an error table — the message is what a human reads, and the code is what you filter on later. There are two built-in exceptions you can name. STATEMENT_ERROR covers a statement that failed to execute — dropping a table that doesn't exist, for instance. EXPRESSION_ERROR covers type and expression problems, like assigning a string expression to a float. And WHEN OTHER catches everything you didn't name explicitly. You can also declare your own, which is the more interesting case. Declare an exception with a code and a message, then RAISE it wherever the business rule is violated. The codes must be between minus twenty thousand nine hundred and ninety-nine and minus twenty thousand and one — that range is reserved for you. Custom exceptions let a procedure distinguish between the database failing and your data being wrong, which are very different problems for whoever gets paged. And here's the warning worth ending on. An exception handler that quietly returns turns a failed task into a successful one. The task history shows green. The dashboard shows stale data. Nobody investigates a success, so nobody looks for days. If you handle an exception, do something visible: write it to an error table, send a notification, or re-raise it so the task genuinely fails. The worst pipeline is not the one that fails — it's the one that fails and reports success.",
}
