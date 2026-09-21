import type { Section } from '../types'

export const snowsqlAndPutSection: Section = {
  id: 'snowsql-and-put',
  title: 'SnowSQL, PUT and GET',
  scene: 'snowsql-and-put',
  slide: `## The one thing the browser cannot do

**\`PUT\` reads your local disk**, so it runs in a client — SnowSQL or a driver — never in Snowsight. \`GET\` is the same in reverse.

\`\`\`sql
PUT file:///data/orders*.csv @raw_stage AUTO_COMPRESS = TRUE;
COPY INTO orders FROM @raw_stage FILE_FORMAT = (FORMAT_NAME = my_csv);
GET @raw_stage/rejects.csv file:///tmp/;
\`\`\`

- Wildcards work — \`orders*.csv\` uploads the lot, in parallel
- \`AUTO_COMPRESS\` gzips on the way up, and \`COPY\` decompresses transparently

### Which tool when
**SnowSQL** for scripts, CI, \`PUT\`/\`GET\` and long batches. **Snowsight** for exploring, charts and its small-file upload wizard.

> That wizard *can* load a file for you. It still cannot run \`PUT\`.`,
  narration:
    "There's one asymmetry in Snowflake's interfaces that catches everybody, and it's worth understanding rather than just bumping into. PUT — the command that uploads a local file into an internal stage — reads your local disk. A web page in a browser tab cannot do that. So PUT is a client-side command: it runs in SnowSQL, or through a driver, and it does not run in Snowsight. GET, which pulls files back down, has exactly the same constraint. That's why every Snowflake user eventually installs the command-line client. SnowSQL is a small download from Snowflake's site. You connect with snowsql dash a for your account and dash u for your user, and then you're at a prompt where every SQL statement works exactly as it does in the browser, plus PUT and GET. A typical session looks like this: set your database and schema, PUT your files up to a stage, LIST to confirm they arrived, COPY INTO to load them, and optionally GET to pull back a rejects file. Two useful details. Wildcards work in PUT, so orders-star-dot-csv uploads the whole set, and Snowflake parallelises the upload across several threads. And AUTO_COMPRESS equals TRUE gzips each file on the way up, which is almost always what you want — less to transfer, and COPY decompresses transparently. As for which tool when: SnowSQL for anything scripted, anything in CI, anything involving PUT or GET, and long batches you don't want tied to a browser tab. Snowsight for exploring data, building a quick chart, checking query history. And a fair correction to the rule: Snowsight does have a small-file upload wizard that will create a table from a file for you. It's genuinely handy for a one-off. It still cannot run PUT.",
}
