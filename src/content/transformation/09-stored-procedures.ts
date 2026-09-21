import type { Section } from '../types'

export const storedProcedures: Section = {
  id: 'stored-procedures',
  title: 'Stored procedures',
  scene: 'procedure-anatomy',
  slide: `## Four sections, always in this order

**\`CREATE\`** — name, arguments, return type, language, \`EXECUTE AS\`.
**\`DECLARE\`** — variables, cursors, resultsets, exceptions.
**\`BEGIN\`** — the work: SQL, arithmetic, \`IF\`, loops.
**\`EXCEPTION\`** — what to do when it goes wrong.

A procedure written in SQL is **Snowflake Scripting**; Python, Java, Scala and JavaScript also work.

### Variables, and the colon
Declare with a type, or use \`LET\` in the body. Inside SQL, prefix the variable with a colon — \`:tab\`, not \`tab\`. Forgetting it is the most common Scripting error, and the message blames a missing column.

### \`EXECUTE AS\` is a security decision
**\`CALLER\`** (default) runs with the caller's privileges. **\`OWNER\`** runs with yours — a deliberate boundary that lets someone perform an action without granting them the underlying rights.`,
  narration:
    "A stored procedure is a named block of code you can call, and in Snowflake it has four sections that always appear in the same order. The CREATE section gives it a name, its arguments, its return type, the language, and an EXECUTE AS clause we'll come back to. DECLARE is where you announce variables, cursors, resultsets and exceptions. BEGIN is the body — the actual work, which can be SQL statements, arithmetic, conditionals, loops. And EXCEPTION is where you say what should happen when something fails. Procedures written in SQL are called Snowflake Scripting, and that's the dialect we're looking at. But you can also write a procedure in Python, Java, Scala or JavaScript, which is genuinely useful when the logic is awkward in SQL — calling a library, parsing something irregular. Two details that will save you time. Variables: you declare them in the DECLARE section with a type, or you introduce them in the body with LET. And when you use a variable inside a SQL statement, you must prefix it with a colon. Colon-tab, not tab. Forget the colon and Snowflake looks for a column of that name and tells you it doesn't exist, which is a confusing error for what is a punctuation mistake. It is the single most common Scripting error. Then EXECUTE AS, which looks like syntax and is actually a security decision. EXECUTE AS CALLER, the default, means the procedure runs with the privileges of whoever called it — so it can only do what they could already do. EXECUTE AS OWNER means it runs with your privileges, so it can do things the caller cannot. That's a deliberate and useful boundary: it lets you give someone a controlled way to perform an action without granting them the underlying rights. Just be sure you meant it.",
}
