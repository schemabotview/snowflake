# Snowflake — course plan

The full section plot for the ten-course spine, and the instructor-notes inventory it was built
from. `CLAUDE.md` is the operational summary; this is the detail.

**106 sections.** Courses 1-5 (54 sections) are the shippable prefix.

---

## 01 · `platform` — Platform & Architecture (10)

1. `traditional-limits` — the pre-cloud warehouse: storage ceilings, cost, fixed compute, no scaling, aging hardware, scattered copies
2. `what-snowflake-is` — true SaaS: nothing to install, no on-prem option, always current
3. `three-layers` — cloud services (brain) · compute (muscle) · storage (memory)
4. `separation` — storage and compute scale independently: the one idea everything else follows from
5. `query-execution-flow` — a query's path: auth → parse → optimise → warehouse → micro-partitions → result
6. `object-model` — account → database → schema → objects, and the four-part session context
7. `clouds-and-regions` — AWS · Azure · GCP, region choice and what it constrains
8. `editions` — Standard → Enterprise → Business Critical → VPS, and the feature matrix
9. `pricing-shape` — credits per second (60 s minimum), storage per TB, the cloud-services 10% rule
10. `you-are-here` — a Snowsight tour and the map of the remaining eleven courses

## 02 · `warehouses` — Virtual Warehouses & Caching (10)

1. `what-a-warehouse-is` — CPU, memory and temp storage; compute that owns no data
2. `sizes` — XS → 6XL, each size doubling nodes and credits
3. `warehouse-types` — Standard Gen1 · Gen2 · Snowpark-optimized
4. `scale-up` — vertical: a bigger warehouse for a heavier query, and when it does not help
5. `scale-out` — multi-cluster for concurrency; maximized vs auto-scale mode
6. `scaling-policy` — standard vs economy: responsiveness against cost
7. `auto-suspend-resume` — the idle bill, and the 60-second billing minimum
8. `result-cache` — 24 h (31 d max), cloud-services managed, cross-user, exact-match only
9. `local-and-metadata-cache` — SSD cache dropped on suspend/resize; metadata answers `COUNT(*)` with no warehouse
10. `cache-order-and-sizing` — the lookup order, and how to choose an initial size

## 03 · `storage` — Storage, Tables & Views (11)

1. `how-data-is-stored` — reorganised into compressed, encrypted, columnar files on object storage
2. `row-vs-columnar` — OLTP vs OLAP storage and what each is fast at
3. `micro-partitions` — 50-500 MB, automatic, immutable
4. `pruning` — per-partition min/max metadata; horizontal and vertical pruning instead of indexes
5. `data-types` — numeric, string, date/time, boolean, and the TIMESTAMP variants
6. `constraints` — PK/FK/UNIQUE declared but NOT enforced; NOT NULL is
7. `table-types` — permanent · transient · temporary: persistence, Fail-safe, cost, one-way creation
8. `variant-object-array` — the semi-structured types and the 128 MB ceiling
9. `querying-variant` — colon/dot/bracket paths, casting, `PARSE_JSON`, `FLATTEN`, `INFER_SCHEMA`
10. `views-and-materialized-views` — standard vs materialized; MV limits (single table, no joins) and cost
11. `secure-views` — definition hidden, nothing leaked to the query profile, required for sharing

## 04 · `loading` — Loading & Unloading Data (11)

1. `the-ingest-picture` — file → stage → COPY → table
2. `internal-stages` — user `@~` · table `@%t` · named `@stage`
3. `external-stages` — a database object pointing at Azure Blob / S3 / GCS
4. `storage-integration` — delegated auth, no credentials in the DDL (the Azure consent + IAM walk)
5. `file-formats` — CSV · JSON · Avro · ORC · Parquet · XML, and the FILE FORMAT object
6. `snowsql-and-put` — the CLI against the UI; `PUT` / `LIST` / `GET`
7. `copy-into` — the workhorse: `FILES`, `PATTERN`, `FILE_FORMAT`
8. `copy-options` — `ON_ERROR`, `VALIDATION_MODE`, `TRUNCATECOLUMNS`
9. `load-metadata` — the 64-day memory, `LOAD_UNCERTAIN_FILES`, why a re-COPY is a no-op
10. `snowpipe` — serverless micro-batch, the PIPE object, auto-ingest via cloud notifications
11. `unloading` — `COPY INTO <location>`, `GET`, single vs multiple files

## 05 · `transformation` — Streams, Tasks, Dynamic Tables & Procedures (12)

Changing data once it is in, by either route: the declarative pipeline and the procedural one.

1. `cdc-and-the-three-tools` — why continuous transformation, and the three answers Snowflake gives
2. `streams` — an offset, not a copy; `METADATA$ACTION` / `ISUPDATE` / `ROW_ID`
3. `stream-types-and-staleness` — standard (delta) · append-only · insert-only; `STALE_AFTER` and the automatic 14-day extension
4. `tasks` — scheduled SQL: CRON and interval, one statement, created suspended; serverless vs warehouse compute
5. `task-graphs` — root, children, finalizer; the DAG limits
6. `stream-task-merge` — the classic ELT loop, and why MERGE makes it idempotent
7. `dynamic-tables` — target lag, AUTO/incremental/full refresh, the downstream-lag trap, the limits
8. `choosing-a-pipeline` — streams+tasks vs dynamic table vs materialized view
9. `stored-procedures` — where plain SQL stops; create · declare · body · exception; `LET` and the `:` bind prefix
10. `cursors-and-resultsets` — row-by-row against a pointer to a result; `EXECUTE IMMEDIATE`
11. `exceptions` — `SQLCODE` / `SQLERRM` / `SQLSTATE`, built-in and custom
12. `udfs-and-udtfs` — scalar and table functions; SQL, Python, Java, Scala; the procedure-vs-UDF decision

## 06 · `governance` — Access Control & Governance (11)

1. `access-models` — DAC (ownership) · RBAC (roles) · UBAC (direct)
2. `the-four-entities` — user · role · privilege · object
3. `system-roles` — ACCOUNTADMIN · SECURITYADMIN · USERADMIN · SYSADMIN · PUBLIC
4. `custom-roles` — functional over access roles: the hierarchy worth building
5. `grants` — object grants, future grants, secondary roles
6. `masking-policies` — column-level masking at query time; nesting and evaluation order
7. `row-access-policies` — the boolean predicate, mapping tables, rows-then-mask ordering
8. `object-tagging` — classification, governance and cost attribution from one key/value
9. `network-rules-and-policies` — CIDR, ingress/egress, account-level enforcement
10. `information-schema` — per-database, no latency, short retention
11. `account-usage` — account-wide, includes dropped objects, latency against 365-day retention

## 07 · `continuity` — Time Travel, Cloning & Recovery (9)

1. `history-is-free` — immutable partitions are why the past is still queryable
2. `time-travel-queries` — `AT`/`BEFORE` by timestamp, offset, statement
3. `retention` — 1 day vs 90 days by edition and table type; what a long window costs
4. `undrop` — table, schema, database, and name collisions
5. `fail-safe` — the 7 days you cannot query and cannot switch off
6. `zero-copy-clone` — a clone is metadata; what is clonable; what divergence costs
7. `clone-workflows` — a production-shaped dev environment in seconds; clone and swap
8. `recovery-drill` — bad DML → locate the moment → clone → restore
9. `sampling-for-dev` — BERNOULLI vs SYSTEM, seeds, and cheap dev datasets

## 08 · `performance` — Performance & Optimization (10)

1. `reading-the-query-profile` — operators, partitions scanned, spill, queue time
2. `pruning-first` — natural clustering, and why load order decides scan size
3. `clustering-keys` — choosing columns, cardinality, the 3-4 column rule
4. `automatic-clustering` — the background service, its credits, suspend/resume recluster
5. `clustering-depth` — `SYSTEM$CLUSTERING_DEPTH` / `SYSTEM$CLUSTERING_INFORMATION`
6. `search-optimization` — the search access path; point lookups; the qualifying checklist
7. `query-acceleration` — offloading scans to shared compute; scale factor; the eligibility view
8. `right-sizing-and-spill` — local and remote spill as the "too small" signal
9. `materialize-or-cache` — MV vs dynamic table vs result cache
10. `a-tuning-method` — measure → change one thing → re-measure

## 09 · `finops` — Cost, Monitoring & Data Quality (10)

1. `the-two-bills` — compute credits against storage, and which one actually hurts
2. `where-the-credits-go` — `WAREHOUSE_METERING_HISTORY`, `STORAGE_USAGE`, `METERING_HISTORY`
3. `resource-monitors` — account vs warehouse monitors; notify · suspend · suspend immediately
4. `tagging-and-chargeback` — attribution, showback, a warehouse per team
5. `alerts` — condition, action, schedule; created suspended
6. `email-notifications` — the notification integration and `SYSTEM$SEND_EMAIL`
7. `alert-recipes` — long-running queries, credit spikes, failed loads, dropped tables
8. `data-metric-functions` — system DMFs: nulls, duplicates, freshness, volume
9. `custom-dmfs` — your own rules, scheduling, and where results land
10. `the-finops-playbook` — visibility → optimisation → accountability

## 10 · `datacloud` — Sharing, Apps & Cortex AI (12)

Everything that crosses the account boundary: data shared out, tools connecting in, Cortex over both.

1. `sharing-without-copying` — metadata and the services layer, not ETL; provider and consumer; the consumer pays only for compute
2. `the-share-object` — `CREATE SHARE`, grants directly or via a database role, and what is shareable (tables, secure views, dynamic/external/Iceberg tables, UDFs)
3. `secure-views-in-sharing` — what a plain view leaks, and why sharing refuses it
4. `reader-accounts` — consumers who are not Snowflake customers; provider-billed, read-only
5. `marketplace-and-listings` — discover, check region and refresh cadence, Get; private listings, pricing models, usage tracking
6. `cross-cloud-sharing` — the replication behind cross-region and cross-cloud sharing
7. `how-clients-connect` — Snowsight, SnowSQL, drivers; the Python connector and key-pair auth
8. `sql-api` — the REST surface, OAuth 2.0 and JWT
9. `bi-and-dbt` — Power BI and friends; dbt Cloud against dbt Projects on Snowflake
10. `snowpark-and-streamlit` — Python, Java and Scala next to the data; data apps inside the account
11. `cortex-aisql` — LLM functions in SQL (`COMPLETE`, `SUMMARIZE`, `TRANSLATE`, `SENTIMENT`) and Document AI
12. `semantic-views-and-cortex-analyst` — metrics, dimensions and relationships as the layer that makes natural-language BI reliable; Cortex Search and agents

---

## Twelve to ten — what merged where

The first draft ran to twelve courses and 118 sections. Two merges brought it to ten and 106 with
**no topic dropped** — each compressed slot folds into a named surviving section:

| Draft section | Now |
|---|---|
| `pipelines/stream-types` + `staleness` | `transformation/03` |
| `pipelines/tasks` + `serverless-vs-warehouse-tasks` | `transformation/04` |
| `programmability/why-procedural` + `procedure-anatomy` + `variables-and-binds` | `transformation/09` |
| `programmability/udfs-and-udtfs` + `procedure-vs-udf` | `transformation/12` |
| `sharing/sharing-without-copying` + `provider-and-consumer` | `datacloud/01` |
| `sharing/the-share-object` + `shareable-objects` | `datacloud/02` |
| `sharing/marketplace-as-consumer` + `listings-and-monetization` | `datacloud/05` |
| `ecosystem/how-clients-connect` + `python-connector` | `datacloud/07` |
| `ecosystem/bi-tools` + `dbt` | `datacloud/09` |
| `ecosystem/snowpark` + `streamlit-in-snowflake` | `datacloud/10` |
| `programmability/semantic-views` + `ecosystem/cortex-search-analyst-agents` | `datacloud/12` |

Every other section kept its own slot. `semantic-views` moved to `datacloud` rather than staying in
`transformation` because its strongest payoff in the notes is the Cortex Analyst pairing — a
judgment call, and a one-line move if it should sit with the procedural course instead.

---

## Source inventory — `../ITC-snowflake-notes/`

An instructor's set from ITC (Om Sharma). A SOURCE, not a script: nothing ports verbatim, and every
`.tts`/wav is authored fresh. The ten class sessions interleave topics, which is why the arc above
regroups them rather than mirroring them.

| Class | Topics | Lands in |
|---|---|---|
| 1 | traditional-DW pain · SaaS · 3 layers · 3 caches · editions + matrix · trial signup · Snowsight · warehouses (sizes, Gen1/Gen2/Snowpark-opt, scale up/out, maximized vs auto-scale, standard vs economy, 60 s min) · resource monitors | 01, 02, 09 |
| 2 | row vs columnar · micro-partitions · data types · constraints · table types · dynamic tables · views (standard/mat/secure) · zero-copy clone · Time Travel · RBAC (system roles, DAC/RBAC/UBAC, secondary roles, future grants) | 03, 05, 06, 07 |
| 3 | stages (user/table/named/external) · file formats · SnowSQL vs UI · PUT/GET/LIST · `COPY INTO` + options + 64-day metadata · storage integration · Azure external stage | 04 |
| 4 | semi-structured formats · VARIANT/OBJECT/ARRAY · path notation · JSON functions · Snowpipe + Azure auto-ingest wiring · streams · tasks · task graphs | 03, 04, 05 |
| 5 | dynamic tables (target lag, refresh modes, limits) · masking policies · row access policies · object tagging · INFORMATION_SCHEMA vs ACCOUNT_USAGE | 05, 06 |
| 6 | stored procedures / Snowflake Scripting (declare, LET, cursors, RESULTSETs, exceptions) · semantic views · Marketplace · the three caches in depth | 02, 05, 10 |
| 7 | UDFs/UDTFs + proc-vs-UDF · support cases · clustering (natural, keys, automatic, depth) · FinOps framework · secure data sharing | 05, 08, 09, 10 |
| 8 | data sampling · data metric functions · alerts + email notifications · Time Travel & cloning (deeper) · network rules and policies | 06, 07, 09 |
| 9 | Search Optimization Service · Query Acceleration Service · Streamlit in Snowflake · Python connector + key-pair auth · Power BI · dbt Cloud | 08, 10 |
| 10 | Cortex AI (AISQL, Copilot, Document AI, Search, Analyst, Agents) · Snowflake ML · dbt Projects on Snowflake · SQL API with OAuth/JWT | 10 |
| PPTX | traditional-DW challenges · query execution flow · modern capabilities (Iceberg, Hybrid, Interactive tables, Openflow, Snowpark Container Services, Horizon Catalog, Native Apps) | 01, 03 |

### Not in the source, deliberately absent from v1

Snowpipe Streaming · data clean rooms · multi-statement transactions · Openflow and Snowpark
Container Services beyond a mention in `platform`. Candidates for a later append, not silent
inclusions.
