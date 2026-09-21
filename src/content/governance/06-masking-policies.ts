import type { Section } from '../types'

export const maskingPolicies: Section = {
  id: 'masking-policies',
  title: 'Masking policies',
  scene: 'masking',
  slide: `## The same query, two answers

A **masking policy** is a function of the column's value, evaluated **at query time**. The same \`SELECT email FROM customers\` returns the real address to SUPPORT and \`***MASKED***\` to everyone else.

### What that means in practice
- The **stored value never changes**. Nothing is transformed on the way in.
- It applies **everywhere the column appears** — joins, filters, views, unloads.
- **One policy serves many columns**, across many tables. Write the rule once.

### Partial masking is usually the right answer
Return the last four digits, or the domain of an email. Support staff can do their job; nobody sees the whole value.

### Operationally
A policy that is attached to a column **cannot be dropped**. Unset it first, and use \`POLICY_REFERENCES\` to find everywhere it is attached.

> Enterprise edition and above.`,
  narration:
    "A masking policy is column-level security, and the way it works is neat: it's a function of the column's value, evaluated at query time. You write a policy that takes the value and returns something — the real value if the current role is allowed to see it, a masked string otherwise. Then you attach the policy to a column. From that moment, the same query returns different answers to different people. Somebody in support sees the real email address. An analyst sees asterisks. Neither of them did anything different, and neither can tell there's a policy unless they look for one. Three things to be clear about. First, the stored value never changes. Masking is not encryption and not transformation-on-load. The real data is in the table; what changes is what comes back out. Which means if you grant somebody the right role later, they see the real values immediately, with no reprocessing. Second, it applies everywhere the column appears — in a join, in a WHERE clause, through a view, in an unload to a file. You cannot get round it by wrapping the column in something. Third, one policy can serve many columns across many tables. Write the rule for email addresses once, attach it to every email column you have, and change it in one place when the rule changes. A practical note on design: think about partial masking rather than all-or-nothing. Returning the last four digits of a card number, or just the domain of an email address, often lets support staff do their job while nobody sees the whole value. That's usually a better answer than a binary choice. And one operational catch: a policy that's attached to a column cannot be dropped. You have to unset it from every column first, and the POLICY_REFERENCES view in ACCOUNT_USAGE is how you find where it's attached.",
}
