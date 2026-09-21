import type { Section } from '../types'

export const theShareObject: Section = {
  id: 'the-share-object',
  title: 'The share object',
  scene: 'the-share',
  slide: `## Three statements on each side

**Provider:** \`CREATE SHARE\`, grant \`USAGE\` on the database and schema and \`SELECT\` on the objects, then \`ALTER SHARE … ADD ACCOUNTS\`.
**Consumer:** \`CREATE DATABASE … FROM SHARE provider.share_name\`, and query it.

That grant chain is the one from the governance course. A share is not a special mechanism — it is grants pointed at an **account** instead of a role.

### What can go in a share
**Tables**, including external and Iceberg · **dynamic tables**, so a maintained mart can be the product · **secure views** and secure materialized views · **secure UDFs**, sharing a *calculation* rather than the columns behind it.

### For anything real, use a database role
Grant into a database role, then grant that role to the share — the contents become one versionable object rather than scattered grants.`,
  narration:
    "The mechanics are short. On the provider side, three kinds of statement. Create the share, which is a named account-level object. Grant into it — and notice this is exactly the grant chain from the governance course: usage on the database, usage on the schema, select on the objects. A share is not a special mechanism; it's the ordinary privilege system, pointed at an account instead of a role. Then alter the share to add the consumer accounts it's offered to. On the consumer side, one statement: create a database from the share, naming the provider's account and the share. That mounts it. From then on it behaves like any other database — it appears in their object browser, they query it with ordinary SQL, they join it to their own tables. Read-only, and always current. What can you put in a share? More than people expect. Tables, obviously, including external tables and Iceberg tables. Dynamic tables, which is genuinely interesting because it means the thing you share can be a maintained, joined, aggregated mart rather than raw rows — Snowflake keeps it fresh and your consumer just reads it. Secure views and secure materialized views. And secure user-defined functions, which means you can share a calculation rather than the columns it's computed from — your partner gets the risk score without ever seeing the inputs. One piece of practice for anything beyond a demo: grant the privileges to a database role, and then grant that database role to the share. The contents of your share become a single named object you can version and reason about, rather than a scattered pile of individual grants nobody can audit.",
}
