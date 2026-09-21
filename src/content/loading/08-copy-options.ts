import type { Section } from '../types'

export const copyOptionsSection: Section = {
  id: 'copy-options',
  title: 'Errors and validation',
  scene: 'copy-options',
  slide: `## What happens when a row is wrong

### \`ON_ERROR\` is a scale, not a switch
- **\`ABORT_STATEMENT\`** — *the default*. One bad row fails the whole load
- **\`SKIP_FILE\`** — abandon that file, load the others
- **\`SKIP_FILE_5\`** / **\`SKIP_FILE_5%\`** — tolerate a few, then abandon it
- **\`CONTINUE\`** — drop the bad rows, load the rest

The strict default is deliberate: a **silent partial load is worse than a failure**, because nobody investigates a success.

### Try it before you mean it
\`VALIDATION_MODE\` parses and loads **nothing** — \`RETURN_ERRORS\`, \`RETURN_10_ROWS\`, \`RETURN_ALL_ERRORS\`.

### Two more
\`TRUNCATECOLUMNS\` trims over-long strings instead of failing. \`PURGE\` deletes each file once it loads.

> On a new feed, validate first. Every time.`,
  narration:
    "Real files have bad rows, and how COPY reacts is entirely up to you. ON_ERROR is the setting, and it's a scale rather than a switch. The default is ABORT_STATEMENT: one bad row anywhere and the entire load fails, changing nothing. That feels harsh, and it's deliberate. A silent partial load is worse than a failure, because nobody investigates a success — you'd have three quarters of your data and a report that looks plausible. Next along the scale is SKIP_FILE: the file containing the bad row is abandoned entirely, but the other files in the same COPY still load. Then SKIP_FILE_n, and SKIP_FILE_n percent, which let you tolerate a few problems and abandon the file only past a threshold — five bad rows, or five percent. And at the permissive end, CONTINUE, which drops the offending rows and loads everything else. CONTINUE is right when you're ingesting messy third-party data and some loss is acceptable. It is wrong for financial data, and you should be able to say out loud why you chose it. Now the option that prevents most of this trouble, and that almost nobody discovers on their own: VALIDATION_MODE. Set it and COPY parses the files and loads nothing at all. RETURN_ERRORS gives you every problem it would have hit. RETURN_10_ROWS shows you the first ten parsed rows so you can eyeball whether the columns landed where you expect. On any new feed, run with VALIDATION_MODE first, every time — thirty seconds that saves an hour. Two more worth knowing. TRUNCATECOLUMNS trims over-long strings to fit the column rather than failing, which is sometimes what you want and sometimes data loss, so decide deliberately. And PURGE deletes each file from the stage once it has loaded successfully, which keeps your staging storage from growing forever.",
}
