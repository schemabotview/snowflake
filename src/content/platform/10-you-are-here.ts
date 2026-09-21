import type { Section } from '../types'

export const youAreHere: Section = {
  id: 'you-are-here',
  title: 'You are here',
  scene: 'the-map',
  slide: `## Where the rest of this goes

### What you have now
A warehouse delivered as a service, built as **three independent layers**, whose central trick is that **compute detaches from one managed copy of the data**.

### Next — the machine itself
**Warehouses**: sizes, scaling up against scaling out, auto-suspend, and the three caches that let you skip running anything.

### Then — getting data in and shaping it
**Storage** · **Loading** · **Transformation** — micro-partitions and table types, stages and Snowpipe, streams and tasks.

### Then — running it like a professional
**Governance** · **Continuity** · **Performance** · **FinOps** · **The Data Cloud**.

> Every one of those is a detail of one of the three layers.`,
  narration:
    "Let's take stock, and then look at where the rest of this goes. You now know what Snowflake is: a data warehouse delivered as a service, with no hardware to buy and no software to install. You know it's built as three layers — cloud services that think, virtual warehouses that work, and one managed storage layer underneath them both. You know the central trick, which is that compute detaches from a single copy of the data, and you've seen what that buys: no contention, right-sizing per workload, and two bills that move independently. You know how a query travels through those layers, and how often it finishes before reaching a warehouse at all. And you know how an account is organised, which cloud and region choices bind, what the editions add, and the shape of the bill. Next we stay on the machine itself and go deep on virtual warehouses — the sizes, scaling up against scaling out, multi-cluster behaviour, auto-suspend, and the three caches that let Snowflake answer without doing any work. After that we turn to your data: how storage really works underneath, how to get data in through stages and COPY and Snowpipe, and how to transform it continuously with streams, tasks and dynamic tables. And then the professional half of the subject — controlling who sees what, recovering from mistakes with Time Travel and cloning, making queries fast by making them read less, keeping the bill honest, and finally sharing data with the world outside your account. Every one of those is a detail of one of the three layers. Keep the layers in your head, and the rest has somewhere to attach.",
}
