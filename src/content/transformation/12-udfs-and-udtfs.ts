import type { Section } from '../types'

export const udfsAndUdtfs: Section = {
  id: 'udfs-and-udtfs',
  title: 'UDFs, UDTFs, and which to use',
  scene: 'udfs',
  slide: `## Functions, and how they differ from procedures

### Two kinds
- **Scalar UDF** — one value per row, used anywhere an expression goes
- **UDTF** — a set of rows, used in \`FROM\`

Both can be written in **SQL, Python, Java or Scala**. A SQL UDF is exactly **one expression** — no statements, and no trailing semicolon inside the body.

### The row that settles most arguments
A UDF **cannot change anything** — which is precisely why it is safe to call once per row inside a query. A procedure can, which is why it gets a statement to itself.

> And that closes the course: streams, tasks and dynamic tables for *when*; procedures and functions for *what*.`,
  narration:
    "The last piece is user-defined functions. There are two kinds. A scalar UDF returns one value per row, and you use it anywhere an expression is allowed — in a SELECT list, in a WHERE clause, in a GROUP BY. A user-defined table function, a UDTF, returns a set of rows, and you use it in the FROM clause like a table. Both can be written in SQL, Python, Java or Scala. A SQL UDF is the simplest thing imaginable: one expression. Not a statement, not a block — a single expression, and famously, no semicolon at the end of it, which trips people up. A Python UDF gives you a real function body and access to a large set of packages, which is how you do things SQL is bad at: parsing an awkward format, applying a library's algorithm, normalising text. Now the comparison that settles most arguments, between functions and procedures. A function must return a value — that's its entire purpose. A procedure may or may not. A function is called inside a query, and you can call as many as you like in one statement; a procedure is called on its own with CALL, one per statement. A function's return value is directly usable in SQL; a procedure's is not, without extra work. And the row that actually decides it: a function cannot perform DML or DDL. It cannot insert, update, delete or create anything. That restriction is not an oversight — it's exactly why a UDF is safe to call once per row inside a query. A procedure can change things, which is precisely why it gets a statement to itself. And that closes the course. Streams, tasks and dynamic tables decide when work happens. Procedures and functions decide what the work is.",
}
