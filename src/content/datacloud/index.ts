import type { Course } from '../types'

// datacloud — course 10 of the ten-course Snowflake spine. Everything that crosses the account
// boundary: sharing data out without copying it, the Marketplace built on that, the clients and
// tools that connect in, and Cortex. Snowflake's own framing of "the Data Cloud".
// PLANNED: 12 sections. Authored one reviewed slice at a time — as each section lands, add
// its import above and list it in `sections` below, in order:
//   01 sharing-without-copying · 02 the-share-object · 03 secure-views-in-sharing
//   04 reader-accounts · 05 marketplace-and-listings · 06 cross-cloud-sharing
//   07 how-clients-connect · 08 sql-api · 09 bi-and-dbt · 10 snowpark-and-streamlit
//   11 cortex-aisql · 12 semantic-views-and-cortex-analyst
export const datacloud: Course = {
  id: 'datacloud',
  title: 'Sharing, Apps & Cortex AI',
  sections: [],
}
