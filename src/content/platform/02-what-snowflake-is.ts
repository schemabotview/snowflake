import type { Section } from '../types'

export const whatSnowflakeIs: Section = {
  id: 'what-snowflake-is',
  title: 'A warehouse delivered as a service',
  scene: 'managed-for-you',
  slide: `## A warehouse delivered as a service

Snowflake is a **cloud data warehouse delivered as SaaS**. You do not install it, size it, patch it or tune it — you sign up and get an account.

### What actually changes hands
- **Infrastructure** — chosen, provisioned and replaced by Snowflake
- **Maintenance** — patching and upgrades happen underneath you, with no downtime window
- **Tuning** — no indexes to build; the storage format and its statistics do that work

### What you are left holding
Your data, your SQL, your roles — and a bill for the compute you actually ran.

### The trade
There is **no on-premises Snowflake**. It runs on public cloud or not at all — which is exactly why it can be upgraded continuously and sized on demand.`,
  narration:
    "So what is Snowflake? The short answer is a cloud data warehouse delivered as software-as-a-service. But that phrase gets used so loosely that it's worth spelling out what it means concretely, in terms of the work that leaves your hands. In a traditional warehouse, somebody chooses the hardware, installs the software, applies patches on a schedule, plans a maintenance window for every upgrade, builds and rebuilds indexes, and guesses a year ahead at how much capacity to buy. With Snowflake, none of those are tasks in your job. There is no software to install, because you reach it through a browser, a command-line client, or a driver. There is nothing to patch, because the service is upgraded underneath you, continuously, with no window to schedule. There are no indexes to build — the storage format keeps statistics about itself, and the optimizer uses them. And there is no capacity to plan, because you resize compute with a single command and it takes effect immediately. What you get instead is an account. Inside it you have your data, your SQL, your users and roles — and a bill for the compute you actually ran. That's the whole surface. Now, there is a trade here and it's worth naming it. Snowflake cannot be installed in your own data centre. There is no on-premises build, and there never has been; it runs on public cloud infrastructure or it doesn't run. If your requirement is that the software lives on hardware you own, this is the wrong product. But that constraint is precisely what buys everything else: one version of the service, upgraded continuously, with compute that appears and disappears on demand.",
}
