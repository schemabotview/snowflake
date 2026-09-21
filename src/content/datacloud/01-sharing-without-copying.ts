import type { Section } from '../types'

export const sharingWithoutCopyingSection: Section = {
  id: 'sharing-without-copying',
  title: 'Sharing without copying',
  scene: 'sharing-without-copying',
  slide: `## Nothing moves

The old way: extract nightly, transfer, they load, and it is **always one cycle stale**. Two pipelines, two teams, and a copy of your data on somebody else's disk.

### A share is metadata
A grant in the **cloud services layer**. The consumer's warehouse reads your micro-partitions directly — no bytes duplicated, none transferred.

**Live** — they see your commit immediately · **revocable** — one statement · **read-only**.

### The economics are clean
**The provider pays storage**, because there is only one copy. **The consumer pays compute** — their warehouse, their queries. Shared data never counts against their storage bill.

> An account stops being an island and becomes a node in a network of data.`,
  narration:
    "Here's how you used to send data to a partner, and it will be familiar. A job extracts the rows each night. Something transfers the file — SFTP, a bucket, occasionally an email. A job on their side loads it. Two pipelines, maintained by two teams who do not talk to each other, and the data is always at least one cycle stale. And at the end of it there's a copy of your data sitting on somebody else's disk, which you cannot recall and cannot audit. Secure data sharing removes all of that. A share is metadata — a set of grants recorded in the cloud services layer. When a consumer queries shared data, their warehouse reads your micro-partitions directly. Nothing is copied. Nothing is transferred. There is one copy of the data, and it is yours. Three consequences follow, and each is a real change rather than a convenience. It's live: you commit a change and the consumer's next query sees it. Not tomorrow — now. It's revocable: one statement and the access is gone, with no copies left behind anywhere. And it's read-only, so a consumer can never modify what you shared. The economics are pleasingly clean too. The provider pays for storage, which is straightforward because there's only one copy to pay for. The consumer pays for compute — their own warehouse running their own queries. And shared data does not count towards the consumer's storage bill at all, which people find hard to believe the first time. So mounting a hundred-terabyte share costs them nothing until they query it. In a real sense this is the feature the company is named for: your account stops being an island and becomes a node in a network of data.",
}
