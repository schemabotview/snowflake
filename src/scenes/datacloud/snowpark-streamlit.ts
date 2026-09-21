import type { Scene } from '@graphlearning/flow'

// §10. Both are the same move — bring the code to the data — so they share a board. The DataFrame
// point is the one that matters technically: Snowpark is not a driver that pulls rows out, it
// compiles to SQL that runs where the data already is.
export const snowparkStreamlit: Scene = {
  id: 'snowpark-streamlit',
  title: 'Bring the code to the data',
  nodes: [
    {
      id: 'snowpark',
      label: 'Snowpark — Python, Java, Scala',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'sp-df', label: 'A DataFrame API', sub: 'that compiles down to SQL', pattern: 'service', icon: 'table' },
        { id: 'sp-lazy', label: 'Nothing is pulled out', sub: 'the work runs in the warehouse', pattern: 'service', icon: 'zap' },
        { id: 'sp-udf', label: 'And real Python too', sub: 'UDFs and procedures, with packages', pattern: 'service', icon: 'code' },
      ],
    },
    {
      id: 'streamlit',
      label: 'Streamlit in Snowflake',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'st-app', label: 'An app in the account', sub: 'no hosting, no deploy pipeline', pattern: 'service', icon: 'monitor' },
        { id: 'st-rbac', label: 'Governed by RBAC', sub: 'the same roles and grants', pattern: 'service', icon: 'shieldcheck' },
        { id: 'st-wh', label: 'Runs on a warehouse', sub: 'small and dedicated is right', pattern: 'warn', icon: 'warehouse' },
      ],
    },
    {
      id: 'why',
      label: 'The point of both',
      sub: 'the data never leaves, so neither does the governance',
      pattern: 'user',
      icon: 'lock',
    },
  ],
  edges: [
    { source: 'snowpark', target: 'streamlit', label: 'a DataFrame here is a query plan, not rows in your process memory' },
    { source: 'streamlit', target: 'why', label: 'suspending the app’s warehouse clears its package cache, so the first load after is slow' },
  ],
}
