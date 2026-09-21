import type { Section } from '../types'

export const snowpipeSection: Section = {
  id: 'snowpipe',
  title: 'Snowpipe',
  scene: 'snowpipe',
  slide: `## A file lands, and nobody presses anything

A **pipe** wraps one \`COPY\` statement and fires when a file arrives — on **serverless compute**, so none of your warehouses start.

### The wiring, on Azure
**In Azure:** a blob is created → an **event subscription** on *Blob Created* → a **storage queue**.
**In Snowflake:** a **notification integration** reads that queue → the **pipe** runs its \`COPY\` → rows, typically within a minute.

> The queue is the handover, and where broken pipes are broken. \`SYSTEM$PIPE_STATUS\` says what it is waiting for.

### How it bills, and the sizing rule
Serverless compute **plus a per-file overhead** — which makes thousands of tiny files genuinely expensive. Aim for files around **100 MB**, batching upstream if you must.

A pipe remembers loaded files exactly as \`COPY\` does.`,
  narration:
    "Bulk loading means somebody runs COPY. Snowpipe means nobody does. A pipe is a first-class Snowflake object that wraps a single COPY statement, and Snowflake executes it when a new file turns up. It runs on serverless compute, which means none of your warehouses start — Snowflake supplies the resources and bills you for them. Let's walk the wiring, on Azure, because there are six moving parts and this is where people mis-connect things. On the Azure side: your pipeline writes a blob into a container. An event subscription on that storage account, listening for the Blob Created event, sends a message. That message lands in a storage queue. On the Snowflake side: a notification integration is configured to read that queue. When it sees a message, it tells the pipe, and the pipe runs its COPY against the new file. Rows are typically queryable within about a minute. The queue is the handover point between the two clouds, and it is where essentially every broken pipe turns out to be broken — a missing role assignment, or an event subscription pointed at the wrong queue. Snowflake has a helper for this: SYSTEM dollar PIPE underscore STATUS tells you what the pipe thinks it's waiting for, and whether it's received anything at all. Now the economics, because they drive a design decision. Snowpipe bills per second of serverless compute, plus a small overhead per file processed. That per-file overhead is the whole cost story. Ingesting ten thousand tiny files costs dramatically more than ingesting the same total volume as a hundred larger ones, and it's slower too. So aim for files around a hundred megabytes, and if your upstream produces kilobyte files, batch them before they land. And finally, reassuringly: a pipe remembers loaded files exactly as COPY does, so it will not load one twice.",
}
