import type { Section } from '../types'

export const objectTagging: Section = {
  id: 'object-tagging',
  title: 'Object tagging',
  scene: 'tagging',
  slide: `## One key-value, three jobs

A **tag** is a schema-level object — a name and a set of allowed values — applied to databases, schemas, tables, columns, views, stages or warehouses.

### Classification
\`DATA_CLASSIFICATION = PII\` on the columns holding personal data. "Where is our PII" becomes a query.

### Tag-based masking — the reason to bother
Attach the masking policy **to the tag**, not to each column. Every column tagged \`PII\` is protected automatically, **including next year's**. Classify once; protection follows the label.

### Cost attribution
Tag warehouses with the owning team, then group credit usage by tag. This is where FinOps begins.

> Tags are **inherited** down the hierarchy. Limits: 50 tags per object, 1000 values per tag, and none on temporary or transient objects.`,
  narration:
    "Object tagging looks like a documentation feature, and it's really three features. A tag is a schema-level object with a name and optionally a set of allowed values, and you apply it to other objects — databases, schemas, tables, columns, views, stages, warehouses, functions. The first job is classification. Tag every column holding personal data with DATA_CLASSIFICATION equals PII. Now the question \"where is our personal data\" has an answer you can query, rather than being an archaeology project every time a regulator asks. The second job is the one that justifies the whole feature, and it's called tag-based masking. Instead of attaching a masking policy to each column individually, you attach it to the tag. Every column carrying that tag is protected automatically — including columns created next year by somebody who has never heard of your policy. That inverts the usual failure mode. Normally protection has to be remembered for each new column; here, classification carries protection with it. Classify once, and the security follows the label. The third job is cost. Tag warehouses with the team or project that owns them, then group credit usage by tag, and you can finally answer who spent what. That's the foundation the FinOps course builds on. Two mechanical points. Tags are inherited down the object hierarchy: tag a database and its schemas and tables carry it, which means you can set a broad default and override it where needed. And the limits: fifty tags on any one object, a thousand allowed values per tag, and tags cannot be applied to temporary or transient objects — which is worth knowing before you design a scheme that assumes universal coverage.",
}
