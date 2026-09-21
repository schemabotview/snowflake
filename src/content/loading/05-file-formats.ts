import type { Section } from '../types'

export const fileFormatsSection: Section = {
  id: 'file-formats',
  title: 'File formats',
  scene: 'file-formats',
  slide: `## Six formats, one object

Snowflake reads **CSV, JSON, Parquet, Avro, ORC and XML**. Given the choice, prefer **Parquet** — typed, columnar, and no delimiter to argue about.

\`\`\`sql
CREATE FILE FORMAT my_csv
  TYPE = CSV  FIELD_DELIMITER = '|'  SKIP_HEADER = 1
  NULL_IF = ('NULL', 'null', '')  EMPTY_FIELD_AS_NULL = TRUE;
\`\`\`

### Why an object rather than inline options
Written **once**, not retyped in every \`COPY\`. **Attach it to a stage** and \`COPY\` needs no format clause. When the upstream delimiter changes, you fix **one place**.

### The CSV options that matter
\`SKIP_HEADER\` · \`FIELD_DELIMITER\` · \`FIELD_OPTIONALLY_ENCLOSED_BY\` · \`NULL_IF\` · \`DATE_FORMAT\`

> Most "bad data" failures are really a quoting option or a \`NULL_IF\` that was never set.`,
  narration:
    "Snowflake reads six file formats: CSV, JSON, Parquet, Avro, ORC and XML. A quick word on each. CSV is everywhere and will never go away, and it's the one that causes the most trouble, because it carries no types and everyone disagrees about quoting. JSON is what you get from APIs and event streams, and it lands beautifully in a VARIANT column. Parquet is the best fit if you have the choice — it's typed, columnar and compressed, so Snowflake reads it efficiently and there's no delimiter to argue about. Avro comes from Kafka and Hadoop pipelines, ORC from Hive estates, and XML from older enterprise systems. Now, the format options can be written inline in your COPY command, and for a one-off that's fine. But for anything repeatable, create a FILE FORMAT object. It's a schema-level object like a table or a view: CREATE FILE FORMAT, give it a name, set the options once. Three reasons this pays off. You write the options once instead of retyping them in every COPY, which means they're consistent across every load. You can attach the format to a stage, after which COPY needs no format clause at all. And when the upstream team changes the delimiter — and they will — you fix it in one place rather than hunting through a dozen scripts. For CSV specifically, the options worth knowing are SKIP_HEADER, which is almost always one; FIELD_DELIMITER; FIELD_OPTIONALLY_ENCLOSED_BY, which is how you handle quoted fields containing commas; NULL_IF, which lists the strings to treat as null; DATE_FORMAT; and COMPRESSION. And here's a practical truth: most so-called bad data load failures are really a NULL_IF or a quoting option that was never set correctly.",
}
