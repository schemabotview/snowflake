import type { Section } from '../types'

export const sqlApiSection: Section = {
  id: 'sql-api',
  title: 'The SQL API',
  scene: 'sql-api',
  slide: `## Snowflake over plain HTTPS

Sometimes a driver is the wrong shape: a **serverless function** with no room to package one, a **mobile back end** that needs one query, another **SaaS tool** that speaks REST and nothing else.

\`POST /api/v2/statements\` with a bearer token, a statement, a warehouse and a role. It is **asynchronous by default** — long queries return a handle you poll.

### Two ways to hold the token
- **JWT with key-pair** — a machine acting as itself. The same keys as the previous section
- **OAuth 2.0** — an application acting **on behalf of a person**, so the query runs as *them*

### It changes the transport, never the privileges
The role in the request still decides what is visible. Masking policies, row access policies and grants all apply exactly as they would in a worksheet. OAuth scopes can **narrow** the role further; nothing can widen it.

> No driver, no connection pool, no client library to package or keep up to date.`,
  narration:
    "Sometimes a driver is simply the wrong shape for the problem. A serverless function with a tight package size limit and no room for a database driver. A mobile application's back end that needs to run one query. Another SaaS product that can call a REST endpoint and cannot do anything else. For all of those, Snowflake has a SQL API: plain HTTPS. You POST to the statements endpoint with a bearer token, and a body containing the statement, the warehouse, the role, and a timeout. You get results back as JSON. It's asynchronous by default, which matters: a long-running query returns a statement handle immediately, and you poll a GET endpoint for the result. So your serverless function doesn't sit there holding a connection open and burning its execution time. There are two ways to authenticate, and the choice is genuinely situational. A JWT signed with a key pair — the same keys from the previous section — is a machine acting as itself. That's right for a pipeline or a back-end service with its own identity. OAuth 2.0 is an application acting on behalf of a person, so the query runs as that individual user, which is what you want when your app has real end users and you need the audit trail to name them. And here's the point to hold on to, because it's easy to worry about the wrong thing. The API changes the transport. It does not change the privilege model at all. The role named in the request still decides what's visible. Masking policies still mask. Row access policies still filter. Grants still apply. OAuth scopes can narrow the role a token may use, but nothing about the API can widen what a role is permitted to see. Everything from the governance course holds, unchanged.",
}
