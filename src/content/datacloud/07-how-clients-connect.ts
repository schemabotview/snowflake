import type { Section } from '../types'

export const howClientsConnect: Section = {
  id: 'how-clients-connect',
  title: 'How clients connect',
  scene: 'clients',
  slide: `## Four ways in

**Snowsight** for people exploring · **SnowSQL** for scripts, CI, and the only place \`PUT\`/\`GET\` work · **drivers** for Python, JDBC, ODBC, Go, Node · **the SQL API**, plain HTTPS with no driver.

Whichever you use, the connection carries the **same four-part session context** as a worksheet: role, warehouse, database, schema.

### For anything automated, use key-pair authentication
Attach the **public** half of an RSA pair to the user; the client signs with the private half.

- **No password to leak** into a CI variable or a config file
- **Nothing to rotate** by hand on a forgotten schedule
- **It survives MFA**, which a password-based service account cannot

> A password in a CI environment variable is the most common real Snowflake credential exposure there is.`,
  narration:
    "We've spent nine courses inside Snowflake. This half of the course is about everything that connects to it. There are four ways in. Snowsight, the web interface, for people exploring — writing queries, building a quick chart, reading query history. SnowSQL, the command-line client, for scripts, for CI pipelines, and as we saw in the loading course, it's the only place PUT and GET work because those touch your local disk. Drivers, which exist for Python, JDBC, ODBC, Go, Node, .NET and more, and which is how an application talks to Snowflake. And the SQL API, which is plain HTTPS with no driver at all — that gets its own section next. Whichever you use, the connection carries the same four-part session context we met in the very first course: role, warehouse, database, schema. A connection string is just those four settings plus credentials, which means every confusion about which role is active applies identically to an application. Now the recommendation that matters most in this section. For anything automated — a pipeline, a CI job, an application, any service account — use key-pair authentication rather than a password. You generate an RSA key pair, attach the public half to the Snowflake user, and the client signs with the private half. Three reasons. There's no password to leak into a CI environment variable, a config file, or a screenshot. There's nothing to rotate by hand on a schedule that somebody will forget. And it works with multi-factor authentication enabled on the account, which a password-based service account fundamentally cannot. A password sitting in a CI variable is the most common real-world Snowflake credential exposure there is, and key-pair auth removes the whole category.",
}
