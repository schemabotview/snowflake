import type { Section } from '../types'

export const alertsSection: Section = {
  id: 'alerts',
  title: 'Alerts',
  scene: 'alerts',
  slide: `## If this, then that, every so often

An alert is **a condition**, **an action** and **a schedule**. The condition is a query wrapped in \`EXISTS\`; the action is usually an email or a procedure call.

Because the condition is just SQL, **anything you can query, you can alert on** — credits, query duration, row counts, task failures, your own tables.

### Three things to know
- **It is created suspended.** \`ALTER ALERT … RESUME\`, exactly like a task. The most common first surprise.
- **The alert itself is free.** You pay for the warehouse time spent evaluating the condition and running the action.
- **Mind the source lag.** An alert over \`ACCOUNT_USAGE\` inherits its hours of latency — it cannot tell you about the last hour.

### Privileges
\`EXECUTE ALERT\` is an account-level privilege that **only ACCOUNTADMIN can grant**, plus \`CREATE ALERT\` on the schema and \`USAGE\` on the warehouse.`,
  narration:
    "Monitors stop spending. Alerts tell you things, and they're more general than that sounds. An alert has three parts. A condition, which is a query wrapped in an EXISTS — if the query returns anything, the condition is true. An action, which is what to do about it: send an email, call a stored procedure, insert into a log table. And a schedule, which is how often to evaluate the condition — an interval in minutes, or a CRON expression. And because the condition is just SQL, anything you can query you can alert on. Credit consumption, query duration, the row count of a table, whether a task has failed, whether your own business data looks wrong. That generality is the feature. Three things to know. First, and you'll recognise it: an alert is created suspended. You must RESUME it. Exactly the same gotcha as tasks, and for the same reason, which does at least make it memorable — everything schedulable in Snowflake arrives switched off. Second, the alert mechanism itself is free. What you pay for is the warehouse time spent evaluating the condition and executing the action. So a cheap condition on a sensible schedule costs very little; an expensive condition every minute does not. Third, and this one catches people: an alert built on ACCOUNT_USAGE inherits that schema's latency. If the view is three hours behind, your alert is three hours behind, however often it runs. For anything that needs to be timely, build the condition on INFORMATION_SCHEMA table functions instead. On privileges: EXECUTE ALERT is an account-level privilege that only ACCOUNTADMIN can grant, and you'll also need CREATE ALERT on the schema and USAGE on the warehouse that runs it.",
}
