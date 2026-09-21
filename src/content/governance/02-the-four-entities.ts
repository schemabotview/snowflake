import type { Section } from '../types'

export const theFourEntities: Section = {
  id: 'the-four-entities',
  title: 'User, role, privilege, object',
  scene: 'four-entities',
  slide: `## The chain, and nothing skips a link

**USER** → holds → **ROLE** → is granted → **PRIVILEGE** → on → **OBJECT**

- A **user** is a person or a service that can connect
- A **privilege** is one permitted operation: \`SELECT\`, \`USAGE\`, \`CREATE TABLE\`
- An **object** is whatever it applies to: a table, a schema, a warehouse
- A **role** is the only bridge between the two ends

### Roles are granted to roles
Which is how a hierarchy works: grant \`SALES_READ\` to \`ANALYST\`, and \`ANALYST\` inherits everything \`SALES_READ\` can do.

### One primary role at a time
\`USE ROLE\` switches it. \`USE SECONDARY ROLES ALL\` activates the others alongside — useful when a query needs to reach across two teams' data.

> Wrong role active? The object **"does not exist."** Snowflake will not admit to the existence of something you may not see — which is good security and a confusing first week.`,
  narration:
    "Four entities, one chain, and nothing skips a link. A user is an identity that can connect to Snowflake — a person, or a service account for an application. A privilege is a single permitted operation: SELECT on this table, USAGE on that schema, CREATE TABLE in this one. An object is the thing the privilege applies to — a table, a view, a schema, a database, a warehouse, a stage. And a role is the bridge. Privileges are granted to roles. Roles are granted to users. That's the whole model, and the sentence worth being able to recite is: privileges to roles, roles to users, never a privilege to a user. Roles can also be granted to other roles, and this is what makes a hierarchy possible. If you grant the role SALES_READ to the role ANALYST, then anyone with ANALYST inherits everything SALES_READ can do. Build that up in layers and you get a structure where one grant at the top gives a whole class of people a whole set of access. Now, an important detail about how a session works. A user may hold ten roles, but only one is the primary role at any moment. USE ROLE switches it. That means the same query, run by the same person, can succeed or fail depending on which role they happen to be using — which is the source of an enormous amount of early confusion. There is a way to widen it: USE SECONDARY ROLES ALL activates every role granted to you alongside your primary one, which is useful when a query needs to reach across two teams' data. And the behaviour to prepare yourself for: if your active role cannot see an object, Snowflake reports that the object does not exist. Not permission denied — does not exist. That's deliberate, because saying permission denied confirms the object is there. It's good security and a confusing first week.",
}
