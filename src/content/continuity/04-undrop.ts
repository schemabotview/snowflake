import type { Section } from '../types'

export const undropSection: Section = {
  id: 'undrop',
  title: 'UNDROP',
  scene: 'undrop',
  slide: `## The best command in the product

\`\`\`sql
DROP TABLE orders;     -- wrong window, wrong database
UNDROP TABLE orders;   -- and it is back, with its history intact
\`\`\`

Three levels: **\`TABLE\`**, **\`SCHEMA\`** (restoring everything in it) and **\`DATABASE\`**.

### Why it works
Dropping **unreferences** the object rather than destroying it. Inside the retention window, everything is still on disk.

### The one catch
Create a *new* object with that name and \`UNDROP\` fails — it will not overwrite something that exists. **Rename the new one first.** So resist the urge to rebuild.

> Retention **0** means no \`UNDROP\`. And \`SHOW TABLES HISTORY\` lists what is still recoverable.`,
  narration:
    "This is the command that changes how people feel about Snowflake, and it is one word. You drop a table. Wrong window, wrong database, the name was similar to the one you meant. In most database systems that is the start of an incident: find the backup, work out how stale it is, provision somewhere to restore it, explain to somebody. In Snowflake you type UNDROP TABLE and the name, and it's back — with its data and its history intact. It works at three levels. UNDROP TABLE for one table. UNDROP SCHEMA, which restores the schema and everything that was inside it. And UNDROP DATABASE, for the truly memorable afternoon. And the reason it works is exactly what we said at the start of the course: dropping an object unreferences it rather than destroying it. As long as you're inside the retention window, all the partitions are still sitting there. There is one catch, and it's the one people hit, because the natural reaction to dropping a table is to recreate it. If you create a new object with that name, UNDROP fails — it will not overwrite something that exists. The fix is to rename the new one out of the way, undrop the original, and then reconcile whatever went into the replacement. So if you've just dropped something important, resist the urge to rebuild it; undrop first. Two more details. UNDROP restores the most recent dropped object of that name, so if you dropped and recreated the same table several times, you get the latest one back; SHOW TABLES HISTORY lists what's recoverable and when each will pass out of reach. And the limit: retention set to zero means no UNDROP at all. That table is genuinely gone.",
}
