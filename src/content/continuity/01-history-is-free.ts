import type { Section } from '../types'

export const historyIsFreeSection: Section = {
  id: 'history-is-free',
  title: 'Why any of this is possible',
  scene: 'history-is-free',
  slide: `## One storage fact, three features

Micro-partitions are **immutable**. An \`UPDATE\` does not edit a file — it writes new partitions and stops referencing the old ones.

So the old ones are **still there**. Unreferenced, not deleted.

### Which gives you
- **Time Travel** — read the table as it was
- **Zero-copy cloning** — a second name pointing at the same files
- **\`UNDROP\`** — the object was only unreferenced, not destroyed

These look like three unrelated features in the documentation. They are **one mechanism wearing three hats**.

### And you pay for it
History is storage, and storage is billed. Everything in this course is free in *effort* and not in *money* — which is why the retention setting matters.`,
  narration:
    "This course is about getting back what you lost, and it rests entirely on one fact you already know from the storage course. Micro-partitions are immutable. When you update a row, Snowflake does not go and edit bytes inside a file. It writes new partitions containing the new version and stops referencing the old ones. Delete works the same way. Which means the old partitions are still there. Not destroyed — unreferenced. The table's current definition simply doesn't point at them any more. And once you see that, three features that look entirely separate in the documentation turn out to be one mechanism wearing three hats. Time Travel is just pointing the query at an older set of partitions. Zero-copy cloning is just creating a second name that points at the same set. And UNDROP works because dropping a table unreferences it rather than shredding it. One storage decision, three capabilities, and none of them needed a backup system, a restore window, or a conversation with whoever administers the tape library. This changes what recovery feels like. In a traditional warehouse, getting yesterday's data back is a project: find the backup, provision somewhere to restore it, wait, extract what you need. Here it is a SELECT with an extra clause. The whole posture changes, from planning for disaster to just fixing the mistake. But there is a cost, and it would be dishonest not to lead with it. History is storage, and storage is billed. Keeping ninety days of every version of a table that changes constantly is genuinely expensive. So everything in this course is free in effort and not in money, which is why the very next thing we look at is the setting that controls how much of it you are buying.",
}
