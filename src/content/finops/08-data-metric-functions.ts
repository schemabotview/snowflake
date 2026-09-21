import type { Section } from '../types'

export const dataMetricFunctions: Section = {
  id: 'data-metric-functions',
  title: 'Data metric functions',
  scene: 'system-dmfs',
  slide: `## Measuring whether the data is any good

**Data metric functions** measure a quality property on a schedule. Snowflake ships a managed set in \`SNOWFLAKE.CORE\`:

- **Volume** — \`ROW_COUNT\`
- **Accuracy** — \`NULL_COUNT\`, \`NULL_PERCENT\`, \`BLANK_COUNT\`
- **Uniqueness** — \`DUPLICATE_COUNT\`, \`UNIQUE_COUNT\`
- **Validity** — \`ACCEPTED_VALUES\` · **Freshness** — \`FRESHNESS\`

### Attach, schedule, read
\`ADD DATA METRIC FUNCTION … ON (column)\`, set a \`DATA_METRIC_SCHEDULE\`, and results land in a view an **alert** then watches.

### Why this sits in a cost course
The same rails: **schedule a measurement, alert on the number.** Cost control and data quality are one operational habit pointed at different columns.`,
  narration:
    "Data quality turns up in a cost course, and that might look like a filing error. It isn't, and the reason is at the end of this section. Data metric functions measure a quality property of a table or a column, on a schedule. Snowflake ships a set of them in the SNOWFLAKE dot CORE schema. They're fully managed — you cannot modify them and you don't have to write them. They group by quality dimension, which is also how you decide which ones a table needs. Volume: ROW_COUNT, answering did anything arrive at all. Accuracy: NULL_COUNT, NULL_PERCENT, BLANK_COUNT — is the thing actually filled in. Uniqueness: DUPLICATE_COUNT and UNIQUE_COUNT, which is how you catch a load that ran twice, and remember from the storage course that Snowflake will not enforce a primary key for you, so this is where that responsibility comes home. Validity: ACCEPTED_VALUES, checking a column only contains values from a list. And freshness: FRESHNESS, how old the newest row is — which is the one that catches a pipeline that stopped. The workflow is three steps. Attach the function to a table or column with ALTER TABLE, ADD DATA METRIC FUNCTION. Give the table a data metric schedule, which can be a CRON expression or can trigger on every change. And read the results, which land in a results view. Then you put an alert on that view. And that's the answer to why this belongs here. It is exactly the same machinery as everything else in the course: schedule a measurement, alert on the number, act on the alert. Cost control and data quality are the same operational habit, pointed at different columns.",
}
