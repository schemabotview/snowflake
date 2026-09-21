import type { Section } from '../types'

export const cdcAndTheThreeTools: Section = {
  id: 'cdc-and-the-three-tools',
  title: 'Three ways to transform continuously',
  scene: 'three-tools',
  slide: `## Data keeps arriving. Now what?

Rebuilding everything nightly to reflect one day of change is the habit worth breaking. Snowflake offers three answers, and they differ in **how much of the *when* you hand over**.

### Procedures
You write the logic *and* the loop. Full control, and full responsibility.

### Streams and tasks
You declare the steps and their order. Snowflake runs them on your schedule.

### Dynamic tables
You declare the **result** and a freshness target. Snowflake works out the rest.

### All three are just SQL
No ETL tool to install, no second system to secure. Your warehouses, your roles, your grants.`,
  narration:
    "Data does not arrive once. Files land through the night, an application writes new orders all day, a partner drops a feed every hour. So the question this course answers is: how do you keep everything downstream in step, without rebuilding the world every night? That nightly rebuild is the habit worth breaking. It's wasteful — recomputing four years of history to reflect one day of change — and it's slow, which pushes your data freshness out to a day whether the business wants that or not. Snowflake gives you three answers, and the useful way to see them is as a scale of how much of the decision-making you hand over. At one end are stored procedures. You write the logic, the loop, the error handling, the whole thing. Maximum control, and maximum responsibility — appropriate when the job is genuinely procedural. In the middle are streams and tasks. A stream tells you what changed since you last looked; a task runs a statement on a schedule. You declare the steps and the order between them, and Snowflake runs them. This is the classic pattern and it's still the right answer for a lot of work. At the far end are dynamic tables. You declare the result you want — just a SELECT — and how fresh it needs to be. Snowflake figures out what changed, in what order, and when to refresh. You write no stream, no task, no MERGE. And here's what all three have in common, which is genuinely unusual: they are just SQL, running inside Snowflake. There's no separate orchestration tool to install, no second system to secure and monitor and pay for. The same warehouses run them, the same roles govern them, the same query history records them.",
}
