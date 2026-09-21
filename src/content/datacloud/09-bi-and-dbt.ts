import type { Section } from '../types'

export const biAndDbtSection: Section = {
  id: 'bi-and-dbt',
  title: 'BI tools and dbt',
  scene: 'bi-and-dbt',
  slide: `## The two integrations you will meet

### BI tools
Power BI, Tableau, Looker and the rest ship native connectors. **Give BI its own warehouse**, so its credits are attributable and it can be sized and suspended separately.

And **watch the mode**: an import-mode dashboard refreshing hourly is a **scheduled full scan** nobody thinks of as a query — the most common source of "why is BI so expensive".

### dbt, two ways
**dbt Cloud** runs on dbt's infrastructure, with an IDE and its own scheduler, holding credentials to your account.
**dbt Projects on Snowflake** runs dbt **Core** inside your account, scheduled by a task, using the current session — **no credentials stored outside Snowflake**.

> Either way dbt only compiles and orchestrates. Every model is SQL on your warehouses — so the performance and FinOps courses apply unchanged.`,
  narration:
    "Two integrations you will meet in essentially every Snowflake deployment. First, BI tools. Power BI, Tableau, Looker, Sigma — they all ship a native Snowflake connector. You give it a server, a warehouse, a database and a role, and you're connected. Two pieces of advice, both learned the expensive way by somebody. Give your BI tool its own dedicated warehouse. That way its credits are attributable to it, you can size it for dashboard queries specifically, and you can set a short auto-suspend without affecting anybody else. And watch the connection mode. A live-query dashboard runs a query against Snowflake for every interaction, which is usually fine on a well-clustered table. An import-mode dashboard pulls the whole dataset on a refresh schedule — and an import refreshing hourly is a scheduled full scan that nobody on the team thinks of as a query. It shows up in your metering as a mysterious hourly spike, and it's the single most common source of \"why is BI so expensive\". Second, dbt, and there are now two ways to run it. dbt Cloud runs on dbt Labs' infrastructure, with a web IDE and its own scheduler, and it holds credentials to your Snowflake account. dbt Projects on Snowflake runs dbt Core inside your own account, scheduled by a Snowflake task, using the current session's identity — so no Snowflake credentials are stored anywhere outside Snowflake. For security-conscious organisations, that difference is the whole conversation. Note it's dbt Core only; Cloud projects aren't supported there. Either way, the essential fact is the same: dbt compiles and orchestrates, and every model is SQL executing on your warehouses. Which means everything from the performance and cost courses applies to your dbt project unchanged.",
}
