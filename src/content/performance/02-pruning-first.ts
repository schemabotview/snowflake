import type { Section } from '../types'

export const pruningFirstSection: Section = {
  id: 'pruning-first',
  title: 'Pruning first',
  scene: 'pruning-first',
  slide: `## The same rows, loaded two ways

Load orders **in date order** and each partition holds a tight range of dates. A query for one week reads **two partitions**. Load the same rows **at random** and every partition spans the whole year — nothing can be ruled out, so it reads **all of them**.

Identical data, identical query, a thousandfold difference. And nobody declared anything: this is **natural clustering**, just the order the data arrived in.

### Which is why most tables are already fine
Data usually lands chronologically and is usually queried by date.

### Three free things, before any feature
- **Load in the order you filter in** — sort before writing, or one day per batch
- **Keep the filter bare** — \`WHERE YEAR(order_date) = 2026\` hides the value from the ranges
- **Name your columns** — \`SELECT *\` defeats vertical pruning`,
  narration:
    "Before reaching for any feature, understand the thing every feature in this course is trying to help: pruning. Picture the same four years of orders, loaded two different ways. In the first, rows arrive in date order, so each micro-partition ends up holding a tight range — this one covers the first to the fourth of January, the next covers the fourth to the ninth. Query one week and the optimizer compares your filter against those ranges and reads two partitions. In the second, the same rows arrive in random order, so every partition contains a scattering of dates from across the whole four years. Every partition's range overlaps your filter. Nothing can be ruled out, and the query reads the entire table. Identical rows, identical query, and a difference of three orders of magnitude — decided entirely by the order in which the data was written. That's called natural clustering, and notice that nobody declared anything. It's a property the data has, or doesn't have, as a consequence of how it was loaded. Which explains something useful: most Snowflake tables never need a clustering key, because data usually arrives chronologically and is usually queried by date, so they're naturally well clustered already. So before you consider any feature, there are three free things. First, load in the order you filter in — sort before writing, or batch one day per load. Second, keep filters bare. Wrapping the column in a function, like YEAR of order date, hides the raw value from the range comparison and defeats pruning entirely; write it as a plain date range instead. Third, name your columns, because SELECT star defeats vertical pruning. None of those cost anything to maintain, and together they solve more slow queries than every paid feature in this course.",
}
