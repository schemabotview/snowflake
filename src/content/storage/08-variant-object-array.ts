import type { Section } from '../types'

export const variantObjectArray: Section = {
  id: 'variant-object-array',
  title: 'VARIANT, OBJECT and ARRAY',
  scene: 'variant-types',
  slide: `## JSON is a first-class citizen

### Three types
- **VARIANT** — holds a value of *any* type, including an OBJECT or an ARRAY
- **OBJECT** — key–value pairs, like a JSON map
- **ARRAY** — ordered, indexed from **zero**

Each holds up to **128 MB** uncompressed.

### No schema agreed in advance
\`CREATE TABLE events (payload VARIANT)\` accepts today's event shape and next month's. Nothing breaks when a producer adds a field.

### And it is still stored columnar
Snowflake does not keep a VARIANT as text. It **shreds repeated paths into their own sub-columns**, with the same min/max statistics as any other column — so pruning works *inside* your JSON.

> Which is why querying JSON here performs like querying columns, and not like parsing strings.`,
  narration:
    "Snowflake handles semi-structured data natively, and it does it better than you might expect. There are three types. VARIANT is the general one: it can hold a value of any type, including an object or an array — so a whole JSON document goes into a single VARIANT column. OBJECT holds key-value pairs, like a JSON map. ARRAY holds an ordered list, indexed from zero. Each of them can hold up to a hundred and twenty-eight megabytes of uncompressed data, which is far more than any sensible single document. The immediate benefit is that you don't have to agree a schema before you load. Create a table with one VARIANT column and point a COPY at your JSON files, and everything lands — today's event shape, and next month's, after some upstream team adds three fields without telling you. Nothing breaks, nothing is rejected, and no migration is needed. If you've ever had a pipeline fail at two in the morning because a producer added a field, you'll appreciate this. But here's the part that makes it genuinely good rather than merely convenient, and it's why this belongs in the storage course. Snowflake does not store a VARIANT as a blob of text that has to be parsed on every read. As data lands, it looks at the structure and shreds frequently-occurring paths into their own internal sub-columns, stored columnar, with the same minimum and maximum statistics as any ordinary column. Which means partition pruning works inside your JSON. A filter on a field nested three levels down can skip micro-partitions exactly the way a filter on a normal column does. That's why querying JSON in Snowflake performs like querying columns, rather than like parsing strings.",
}
