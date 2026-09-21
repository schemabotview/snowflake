import type { Section } from '../types'

export const warehouseTypesSection: Section = {
  id: 'warehouse-types',
  title: 'Standard, Gen2 and Snowpark-optimized',
  scene: 'warehouse-types',
  slide: `## Three kinds, one of which you will mostly use

### Standard
The general-purpose warehouse: BI, ELT, ad-hoc SQL. **This is the default and usually the right answer.**

### Generation 2
Newer underlying hardware with software optimisations, aimed at **data-engineering workloads** — heavy, long-running transformation rather than short dashboard queries.

### Snowpark-optimized
Substantially **more memory per node**. Built for memory-hungry work: training models, and Python, Java or Scala running inside Snowflake.

### Everything else is the same
Sizes, scaling up, multi-cluster, caching, auto-suspend and billing behave **identically** across all three — so nothing else in this course changes with the type.

> Choose Standard unless you have a named reason not to.`,
  narration:
    "There are three types of warehouse, and the good news is that the choice is narrower than it first looks. The first is Standard. This is the general-purpose warehouse and it's what you get when you don't specify anything. It suits traditional analytical work: running queries, doing transformations, backing business-intelligence tools. For most teams, most of the time, this is the whole answer. The second is Generation 2, usually written Gen2. These run on newer underlying hardware with additional software optimisation, and Snowflake positions them at data-engineering workloads — the heavy, long-running transformation jobs rather than the short dashboard queries. If your bottleneck is a nightly pipeline rather than an analyst waiting, it's worth measuring one against a Standard of the same size. The third is Snowpark-optimized. The distinguishing feature is memory: these nodes have considerably more of it than a Standard node of the same size. That matters for memory-hungry work — training machine-learning models, or running substantial Python, Java or Scala inside Snowflake rather than pulling data out to do it elsewhere. If you try that on a Standard warehouse and hit memory errors, this is the type you want. Here's the part that keeps this section short. Everything else in this course applies identically to all three. The sizes are the same ladder. Scaling up works the same way. Multi-cluster works the same way. The caches, auto-suspend, the sixty-second minimum, the billing model — all identical. The type changes what the nodes are made of; it doesn't change how you operate them. So the practical rule is: use Standard unless you have a specific, named reason to use one of the others.",
}
