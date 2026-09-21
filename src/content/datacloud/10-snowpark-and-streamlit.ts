import type { Section } from '../types'

export const snowparkAndStreamlit: Section = {
  id: 'snowpark-and-streamlit',
  title: 'Snowpark and Streamlit',
  scene: 'snowpark-streamlit',
  slide: `## Bring the code to the data

### Snowpark
A **DataFrame API** for Python, Java and Scala that **compiles down to SQL**. What you chain is a query plan, not rows in your process memory — nothing is pulled out, and the work runs in the warehouse.

When SQL genuinely is not enough, it also gives you **real Python** in UDFs and procedures, with a package library.

### Streamlit in Snowflake
A data app, written in Python, **living inside the account**. No hosting, no deploy pipeline, no separate service to secure. Governed by the **same RBAC** — the app sees what the viewer's role sees. Give it a small dedicated warehouse, and know that suspending it clears the package cache.

### The point of both
The data never leaves, so neither does the governance.`,
  narration:
    "Snowpark and Streamlit are the same move made twice: bring the code to the data, rather than the data to the code. Snowpark is a DataFrame API for Python, Java and Scala. If you've used pandas or Spark, the shape is familiar — you take a DataFrame, filter it, join it, group it, and chain operations together. The crucial difference from a driver is what's actually happening. A Snowpark DataFrame is not rows in your process memory. It's a query plan. The operations you chain compile down to SQL, and that SQL executes in your warehouse. Nothing is pulled out of Snowflake until you explicitly collect a result. So you can write Python against a billion-row table on a laptop, because the laptop is composing a query rather than holding data. And when SQL genuinely isn't the right tool, Snowpark also gives you real Python inside UDFs and stored procedures, with a substantial package library available — so a calculation that would be painful in SQL can be a Python function that runs next to the data. Streamlit in Snowflake is the same idea for applications. Streamlit is a Python framework for building data apps in very little code, and in Snowflake the app lives inside your account. There's no hosting to arrange, no deploy pipeline, no separate service to secure and patch. And it's governed by the same RBAC: the app sees what the viewer's role permits, so your masking and row access policies apply to the app automatically. Two practical notes: give it a small dedicated warehouse, and know that suspending that warehouse clears its Python package cache, so the first load after a suspend is slow. The point of both is the same. The data never leaves, so neither does the governance.",
}
