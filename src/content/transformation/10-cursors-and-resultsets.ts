import type { Section } from '../types'

export const cursorsAndResultsets: Section = {
  id: 'cursors-and-resultsets',
  title: 'Cursors and resultsets',
  scene: 'cursors-resultsets',
  slide: `## When does the query actually run?

That is the whole difference between the two.

### CURSOR
The query runs when you **\`OPEN\`** it, or when a \`FOR\` loop opens it for you. Which means you can open it **with parameters** at run time — \`OPEN c1 USING (10)\`. Close it when you opened it explicitly.

### RESULTSET
The query runs **when you assign it**. A \`RESULTSET\` is a pointer to results that already exist, so you can hand the whole thing back with \`RETURN TABLE(res)\`, or iterate it with a cursor.

### Loop last, not first
A cursor walks rows one at a time, and a million iterations is a million times slower than the set-based statement that does the same job.

Cursors are for **orchestration** — iterating a list of tables to process, a list of partitions to refresh. Not a list of rows.`,
  narration:
    "Inside a procedure you'll eventually want to work with the rows a query returns, and there are two mechanisms: cursors and resultsets. They look similar and the difference is exactly one thing — when the query actually runs. A cursor's query runs when you open it. You declare the cursor with a query, and nothing happens. Then you OPEN it, or you put it in a FOR loop which opens it for you, and that's when Snowflake executes. The useful consequence is that you can supply parameters at open time: declare a cursor with question marks in it, then OPEN c1 USING and the values. That lets you build a procedure that iterates over a different table or a different department depending on what it was called with. If you opened a cursor explicitly, close it when you're done. A resultset's query runs at the moment you assign it. So by the time you have a resultset variable, the results already exist and the variable is a pointer to them. That gives you two nice options: wrap it in TABLE and return it, so the caller of your procedure receives an actual result set; or iterate over it with a cursor if you need row-by-row access. You can also assign the output of EXECUTE IMMEDIATE to a resultset, which is how you run dynamically-built SQL and get the rows back. Now the warning, and it matters. A cursor processes rows one at a time. If you find yourself looping over a million rows to update each one, stop — a single set-based UPDATE or MERGE does the same job orders of magnitude faster, because it uses the whole warehouse instead of one thread stepping through rows. Cursors are for orchestration: iterating a list of tables to process, or a list of partitions to refresh. Not a list of rows.",
}
