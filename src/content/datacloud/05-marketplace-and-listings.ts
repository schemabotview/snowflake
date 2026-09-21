import type { Section } from '../types'

export const marketplaceAndListings: Section = {
  id: 'marketplace-and-listings',
  title: 'The Marketplace and listings',
  scene: 'marketplace',
  slide: `## The same mechanism, with a shop front

### As a consumer
Find a listing — weather, demographics, exchange rates, public holidays — press **Get**, and it mounts as a database. Seconds later you are joining it to your own tables. No ETL, no API key, no copy going stale.

**Check three things first:** your **region** (elsewhere, it cannot be mounted at all) · the **refresh cadence** · **free or paid**, and on what terms.

### As a provider
**Private listings** to named accounts — most real-world use, and how you supply twenty customers properly. **Public listings** anyone can request. **Monetized** — one-off, subscription or usage, billed through Snowflake.

> A listing is a share with metadata: a title, documentation, sample queries, terms, and a way to be found.`,
  narration:
    "The Marketplace is the same sharing mechanism with a shop front on it, and the realisation worth having is that consuming and providing are not different features. Start as a consumer. You browse the Marketplace inside Snowsight and find a dataset — weather history, demographics, exchange rates, public holidays, company registries, all the reference data that every analytics team ends up rebuilding badly. You press Get. It mounts as a database in your account. Seconds later you're joining it to your own tables. There's no ETL to write, no API key to rotate, no scheduled job to monitor, and no copy quietly going stale. If the provider updates it, you have the update. Three things to check before you commit to one, because each of these has caught people. Region availability: a listing that isn't published in your region cannot be mounted, full stop — and that's not a performance issue, it's a hard no. Refresh cadence: some listings update daily, some monthly, and some were published once in 2023 and abandoned. And whether it's free or paid, and on what terms. Now as a provider. Private listings are offered to specific named accounts, and this is most real-world use — it's sharing, with a product page, documentation, sample queries and terms attached. If you supply data to twenty customers, private listings are how you do it properly rather than with twenty hand-built shares. Public listings are discoverable by anyone on Snowflake and they request access. And listings can be monetized: one-off, subscription, or usage-based, with Snowflake handling the billing. For a company whose product is data, that's a distribution channel where the delivery mechanism costs you nothing to operate.",
}
