import type { Section } from '../types'

export const threeLayersSection: Section = {
  id: 'three-layers',
  title: 'The three layers',
  scene: 'three-layers',
  slide: `## Brain, muscle, memory

Snowflake is built as **three independent layers**. Almost everything else in this concept is a detail of one of them.

### Cloud services — the brain
Authentication, roles, metadata, the optimizer, and the machinery that starts and stops compute. **Shared by the whole account** — there is no knob to size it.

### Compute — the muscle
**Virtual warehouses**: independent MPP clusters. Several can run at once, at different sizes, for different jobs, each with its own local SSD cache.

### Storage — the memory
One managed copy of your data as **micro-partitions** on cloud object storage — columnar, compressed, encrypted, immutable.

### Read the asymmetry
The muscle is **plural**; the memory is **singular**. That is the architecture, in one sentence.`,
  narration:
    "Snowflake's architecture is three layers, and they are genuinely independent of each other. Learn these three and most of what follows is detail. At the top is the cloud services layer — the brain. It's the entry point for everything you do. It authenticates you, works out which role you're using and what that role may touch, keeps the metadata about every table and every file underneath it, parses your SQL and turns it into an execution plan, and starts and stops compute clusters on demand. It's shared across the whole account, and you'll notice there's no setting anywhere to size it. That's deliberate. In the middle is the compute layer — the muscle. Compute in Snowflake comes as virtual warehouses, and a warehouse is an independent cluster of processors and memory. The important word is independent. You can have several running at the same time, at different sizes, doing different jobs, and they do not compete with each other. Each keeps a local solid-state cache of the data it has recently read. At the bottom is storage — the memory. All your data lives here, as micro-partitions on the cloud provider's object storage: columnar, compressed, encrypted, and immutable. Snowflake manages the whole layer; you never see a file. Now, the thing worth noticing is the asymmetry between the middle and the bottom. The muscle is plural — many warehouses, of many sizes, coming and going. The memory is singular — one copy of the data that all of them read. A query flows down: the brain plans it, a warehouse runs it, storage supplies the partitions. And because nothing in the middle owns anything at the bottom, you can add or remove muscle all day without touching a byte of the memory.",
}
