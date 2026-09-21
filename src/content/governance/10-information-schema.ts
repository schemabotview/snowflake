import type { Section } from '../types'

export const informationSchemaSection: Section = {
  id: 'information-schema',
  title: 'INFORMATION_SCHEMA',
  scene: 'information-schema',
  slide: `## Metadata, one database at a time

Every database has its **own** \`INFORMATION_SCHEMA\`. Run the same query in the wrong database and it returns nothing — which looks like a bug and isn't.

### Two kinds of thing live in it
**Views** you select from — \`TABLES\`, \`COLUMNS\`, \`VIEWS\`, \`SCHEMATA\`.
**Table functions** you call with parentheses — \`COPY_HISTORY()\`, \`QUERY_HISTORY()\`, \`TASK_HISTORY()\`.

That second kind is why people cannot find \`COPY_HISTORY\` by browsing.

### Its two defining traits
**No latency** — current to the second. **Short memory** — 7 days to 6 months, and dropped objects are simply gone.

> Debugging a load that just ran? \`COPY_HISTORY\` here, not \`ACCOUNT_USAGE\`.`,
  narration:
    "Snowflake describes itself through metadata, and there are two places to look. This section is the first of them. Every database in your account has its own INFORMATION_SCHEMA, created automatically when the database is created. That's the detail people trip over: SALES dot INFORMATION_SCHEMA and ANALYTICS dot INFORMATION_SCHEMA are different schemas describing different databases. Run a query against the wrong one and you get an empty result, which looks like a bug and isn't — you were just asking the wrong database about its tables. Two kinds of object live in there. There are views, which you select from in the ordinary way: TABLES, COLUMNS, VIEWS, SCHEMATA, FILE_FORMATS, and a good many more. These describe the structure of that database. And there are table functions, which are called with parentheses rather than selected from — COPY_HISTORY, QUERY_HISTORY, TASK_HISTORY, WAREHOUSE_METERING_HISTORY. These describe activity rather than structure. The fact that they're functions is why people browse the schema looking for COPY_HISTORY and conclude it doesn't exist. Two traits define INFORMATION_SCHEMA and determine when you use it. The first is that it has no latency. It is current to the second. Whatever just happened is visible now. The second is that it has a short memory: retention runs from seven days to six months depending on which view or function you're using, and dropped objects vanish from it entirely — there's no record that a table you deleted ever existed. So the rule of thumb is: use INFORMATION_SCHEMA for what is happening now, in this database. Debugging a load that just ran, checking whether a task fired ten minutes ago, listing the columns of a table you're about to query. For anything historical, account-wide, or about something that has since been dropped, you want the other place — which is next.",
}
