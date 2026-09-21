import type { Section } from '../types'

export const dataTypesSection: Section = {
  id: 'data-types',
  title: 'Data types',
  scene: 'data-types',
  slide: `## Fewer types than you are used to

Several names, one type. \`INT\`, \`BIGINT\` and \`NUMBER\` are the **same** type — \`NUMBER(38,0)\` by default. \`VARCHAR\`, \`STRING\` and \`TEXT\` likewise, max **16 MB**.

### Declaring \`VARCHAR(50)\` buys you nothing
No space is reserved; only the actual characters are stored. It is a **constraint on input**, not an optimisation.

### The one real trap: timestamps
- \`TIMESTAMP_NTZ\` — no zone; any offset you supply is **discarded**
- \`TIMESTAMP_LTZ\` — stored UTC, **shown in the session's zone**
- \`TIMESTAMP_TZ\` — the offset is **stored with the value**

\`DATETIME\` is an alias for \`TIMESTAMP_NTZ\`.

> Choose the variant deliberately. This is the one type decision here that yields wrong answers rather than errors.`,
  narration:
    "Data types in Snowflake are refreshingly few, and the main thing to learn is how many names map to the same type. On the numeric side, INT, INTEGER, BIGINT, SMALLINT, TINYINT, DECIMAL, NUMERIC and NUMBER are all one type. Write any of them and you get NUMBER, with a default precision and scale of thirty-eight and zero. They are not different sizes with different storage. Similarly, FLOAT, FLOAT4, FLOAT8, DOUBLE and REAL are all the same sixty-four-bit floating-point type. On the string side, VARCHAR, STRING, TEXT and CHAR are one type, with a maximum of sixteen megabytes. And here's a useful thing to know: declaring VARCHAR of fifty buys you nothing in storage. Snowflake doesn't reserve space; it stores the characters you actually put there. The length is a constraint on what you'll accept, not an optimisation — so use it when you mean the constraint, and don't agonise over it otherwise. Booleans can be true, false, or null. Binary maxes out at eight megabytes. And the semi-structured types — VARIANT, OBJECT and ARRAY — hold up to a hundred and twenty-eight megabytes each, and we'll spend two whole sections on those shortly. The one place to slow down is timestamps, because there are three variants and picking the wrong one gives you wrong answers rather than errors. TIMESTAMP_NTZ has no time zone: if you supply an offset it's discarded, silently. TIMESTAMP_LTZ stores the moment in UTC and displays it in whatever time zone the session is set to, so two people can see different clock times for the same row. TIMESTAMP_TZ stores the offset along with the value. DATETIME is just an alias for NTZ. Choose deliberately, and write it down for whoever comes next.",
}
