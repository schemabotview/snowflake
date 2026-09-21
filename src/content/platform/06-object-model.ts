import type { Section } from '../types'

export const objectModelSection: Section = {
  id: 'object-model',
  title: 'The object model and your session',
  scene: 'object-model',
  slide: `## Everything lives somewhere

### The containment tree
**Organization → account → database → schema → objects.** Tables, views, stages, file formats, streams and tasks are all *schema-level*: they have a three-part name, \`DATABASE.SCHEMA.OBJECT\`.

### Except the things that are not
**Warehouses, users, roles, shares and integrations are account-level.** Compute is not stored inside a database — which is exactly what you would expect once storage and compute are separate.

### A session is a coordinate
Four settings decide what an unqualified name means: **role · warehouse · database · schema**.

- Wrong **role** → the object "does not exist"
- No **warehouse** → the query cannot run
- Wrong **database or schema** → a different table, or none

> Most beginner errors in Snowflake are one of those four being wrong.`,
  narration:
    "Snowflake objects live in a containment tree, and knowing it saves you a surprising amount of confusion. At the top is the organization — your company, which may hold several accounts. An account is the thing you log into: one cloud, one region, one URL. Inside an account you create databases; inside a database, schemas; and inside a schema live the objects you work with day to day — tables, views, stages, file formats, streams, tasks and the rest. Those are called schema-level objects, and each has a three-part name: database, dot, schema, dot, object. But not everything sits in that tree. Warehouses are not inside a database. Neither are users, roles, shares or integrations. They're account-level objects, and if you think about it, that follows directly from separating storage and compute: a warehouse isn't made of data, so it has no business living inside a database. Now for the part that trips everyone up at the start. Your session has four settings — a role, a warehouse, a database and a schema — and together they decide what happens when you type an unqualified table name. Use the wrong role and the object appears not to exist, because Snowflake will not tell you about something you have no privilege to see. Forget the warehouse and the query can't run at all, because there's nothing to run it on. Point at the wrong database or schema and you'll either get an error or, worse, quietly query a different table with the same name. When something inexplicable happens in your first week, check those four before you check anything else. Most of the time, that's the whole bug.",
}
