import type { Section } from '../types'

export const loadMetadataSection: Section = {
  id: 'load-metadata',
  title: 'The 64-day memory',
  scene: 'load-metadata',
  slide: `## The same COPY, three times

**Day 1** — the file loads, and Snowflake records that it did.
**Day 2** — the same \`COPY\` loads **nothing**. Same name, same checksum.
**Day 65** — the record has expired; the status is *unknown*.

### What is remembered
The **file name and checksum**, per **target table**, for **64 days**.

### Why it is a gift
\`COPY\` is **idempotent** — re-run a half-failed nightly job and nothing doubles.

### Where it bites, and the way out
"Success, and zero rows loaded" is almost always this. **\`FORCE\`** loads the file regardless, duplicates and all; **\`LOAD_UNCERTAIN_FILES\`** covers files past the 64-day line.

> Check \`COPY_HISTORY\` before reaching for \`FORCE\`.`,
  narration:
    "Here's a behaviour that will save you repeatedly, and confuse you utterly once. When COPY loads a file, Snowflake records that it did — the file's name, and a checksum of its contents. The next time a COPY runs against that same target table and encounters that same file, it skips it. Not an error, not a warning: it simply loads nothing and reports success. That record is kept for sixty-four days, and it's held per target table, not per stage. Loading the same file into a different table is a different question, and it will load. Why is this a gift? Because it makes COPY idempotent. Your nightly job fails halfway through and you re-run it — the files that already loaded are skipped, the rest go in, and nothing is duplicated. No deduplication step, no bookkeeping table of your own, no careful checking of what got through before the failure. For anyone who has written that bookkeeping by hand in another system, this is a real luxury. And here's where it bites. The single most common confused question from new Snowflake users is: my COPY said success and loaded zero rows. Almost always, this. The file was already loaded — perhaps by you last week, perhaps by a colleague testing, perhaps by the scheduled job that ran twenty minutes ago. Look at COPY_HISTORY before you assume anything is broken. Two escape hatches. FORCE equals TRUE tells COPY to load the file regardless of what it remembers, which duplicates the rows if they were already there — so use it knowingly. And LOAD_UNCERTAIN_FILES handles the sixty-five-day case: once the record has expired, Snowflake genuinely does not know whether that file was loaded, and by default it will not risk it. That option says load it anyway.",
}
