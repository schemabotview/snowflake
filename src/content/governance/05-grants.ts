import type { Section } from '../types'

export const grantsSection: Section = {
  id: 'grants',
  title: 'Grants, future grants and secondary roles',
  scene: 'grants',
  slide: `## Three grants to see one table

Access is a **chain**, and it breaks silently at the first gap:

**\`USAGE\` on the database** → **\`USAGE\` on the schema** → **\`SELECT\` on the table**

Grant only the \`SELECT\` and the table is invisible. No error — it simply "does not exist". This is the most common permissions bug there is.

### \`ALL\` is a snapshot; \`FUTURE\` is a standing order
\`GRANT SELECT ON ALL TABLES IN SCHEMA …\` covers the tables that exist **right now**. Every table created tomorrow is outside it.

\`GRANT SELECT ON FUTURE TABLES IN SCHEMA …\` covers everything created later. **Use both** — the first for what exists, the second for what comes next.

### Secondary roles
\`USE SECONDARY ROLES ALL\` activates every role you hold alongside your primary one, so a query can reach across two teams' data without inventing a combined role.

> \`SHOW GRANTS TO ROLE …\` and \`SHOW GRANTS ON …\` are how you check. Read them before you guess.`,
  narration:
    "Granting access is simple in principle and has one trap that everyone falls into exactly once. To let someone read a table, you need three grants, not one. USAGE on the database, so they may look inside it. USAGE on the schema, likewise. And SELECT on the table itself. If you grant only the SELECT — which is the obvious thing to do — the table remains completely invisible. No permission error. The object simply does not exist as far as that role is concerned, because the role cannot even see the schema that contains it. That is the single most common permissions bug in Snowflake, and now you know what it looks like. Next, the difference between ALL and FUTURE, which matters more than it sounds. GRANT SELECT ON ALL TABLES IN SCHEMA is a snapshot: it grants on the tables that exist at the moment you run it. A table created tomorrow by your pipeline is not covered, and nobody finds out until a report comes back empty. GRANT SELECT ON FUTURE TABLES IN SCHEMA is a standing order that applies to everything created from now on. You want both: the ALL grant for what's already there, the FUTURE grant for what's coming. Future grants can be defined at the schema level or the database level, and a schema-level one takes precedence when both apply. Finally, secondary roles. Normally a session acts with one primary role. USE SECONDARY ROLES ALL activates every role granted to you alongside it, so a query can join across two teams' data without somebody having to invent a combined role for the purpose. It's genuinely useful for analysts who legitimately span domains. And when you're unsure what's granted, don't guess — SHOW GRANTS TO ROLE tells you what a role holds, and SHOW GRANTS ON tells you who holds an object.",
}
