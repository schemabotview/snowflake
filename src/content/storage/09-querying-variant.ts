import type { Section } from '../types'

export const queryingVariantSection: Section = {
  id: 'querying-variant',
  title: 'Reaching into a VARIANT',
  scene: 'querying-variant',
  slide: `## Paths, casts and FLATTEN

### Getting at a value
**Colon** enters, **dot** descends, **brackets** do either and take array positions:
\`payload:user.city\` · \`payload['user']['id']\` · \`payload:items[0]\`

### Always cast on the way out
A path returns **VARIANT**, not a string or a number. Write \`payload:user.id::INT\` — uncast, comparisons and joins misbehave and strings arrive with their quotes.

### A missing path is NULL, not an error
Misspell a key and you get a column of nulls and no complaint. Unexpectedly empty field? **Suspect the spelling first.**

### Arrays become rows
\`LATERAL FLATTEN(input => payload:items)\` emits one row per element; \`value\` is that element.

> \`PARSE_JSON\` · \`TRY_PARSE_JSON\` · \`FLATTEN\` · \`INFER_SCHEMA\``,
  narration:
    "Now the syntax, which is small — there are really only a few things to learn. To reach into a VARIANT, use a colon to enter it and a dot to go deeper. So payload colon user dot city walks into the payload column, into the user object, and gets the city. You can use square brackets instead, with the key in quotes, and brackets are what you need for array positions — payload colon items, bracket zero, is the first element. Now the single most important habit: cast on the way out. A path expression returns a VARIANT, not a string and not a number. It looks like a string when you print it, but it will come back with its quotes still attached, and comparisons, joins and sorts against it behave in ways that will waste your afternoon. So write double-colon INT, or double-colon STRING, every time you pull a value out for real use. Get into that habit early and you'll avoid a whole category of confusing bug. The second thing to know: a path that doesn't exist returns NULL rather than raising an error. That's deliberate and it's usually what you want, because documents have optional fields. But it also means a misspelled key gives you a column full of nulls and no complaint at all. When a field comes back unexpectedly empty, check the spelling before you check the data. Then there's FLATTEN, which is how you deal with arrays. LATERAL FLATTEN over an array emits one row per element, and inside it you refer to each element as value. That turns a document with five line items into five rows, which is what you need to aggregate them. And a few functions: PARSE_JSON turns a string into a VARIANT, TRY_PARSE_JSON does the same but returns null instead of failing on bad input, and INFER_SCHEMA reads staged files and tells you the columns it found.",
}
