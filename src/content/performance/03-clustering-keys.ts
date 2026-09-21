import type { Section } from '../types'

export const clusteringKeysSection: Section = {
  id: 'clustering-keys',
  title: 'Clustering keys',
  scene: 'clustering-keys',
  slide: `## Choosing a key

A clustering key tells Snowflake which columns to organise the table by. **Three judgements**, in order.

### What is actually filtered
A key only helps queries that filter on it. Start from the query history, not from the schema.

### How many distinct values
The sweet spot is **thousands**. \`country\` at ~200 is too few to prune; a raw timestamp with millions is too many; \`order_date\` is about right.

The trick: cast the timestamp down — \`CLUSTER BY (TO_DATE(created_at), region)\`.

### How many columns
**Three or four at most** — past that, cost rises faster than benefit. Order them **lowest cardinality first**, because columns are compared left to right.`,
  narration:
    "When natural clustering isn't enough — because the table is huge, and the way it's queried doesn't match the way it arrived — you can declare a clustering key. That tells Snowflake which columns to organise the table by. Choosing one is three judgements, in order. First: what is actually filtered? A clustering key only helps queries that filter on those columns. So start from the workload. Look at your query history, find the filters that appear over and over on that table, and cluster on those. Clustering on what seems logically important, rather than on what's queried, is the most common wasted effort here. Second: how many distinct values does the column have? This is where people go wrong in both directions. Too few, like a country column with two hundred values, and each value still spans an enormous number of partitions, so pruning barely narrows anything. Too many, like a timestamp with millions of distinct values, and essentially every partition has its own range, which is just as useless and expensive to maintain. The sweet spot is thousands — a date column on a few years of data is close to ideal. And that gives you the single most useful trick in this section: if your natural candidate is a timestamp, cast it down to a date in the key expression. Cluster by TO_DATE of created-at, and you've reduced millions of distinct values to a few thousand. Third: how many columns? Three or four at most. Beyond that, the cost of maintaining the clustering rises faster than the benefit. And order them with the lowest cardinality first — region, then date, not the other way round — because the columns are compared left to right, and a high-cardinality leading column makes the rest of the key almost irrelevant.",
}
