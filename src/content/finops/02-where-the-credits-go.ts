import type { Section } from '../types'

export const whereTheCreditsGo: Section = {
  id: 'where-the-credits-go',
  title: 'Where the credits went',
  scene: 'where-credits-go',
  slide: `## The views that answer it

All in \`SNOWFLAKE.ACCOUNT_USAGE\`:

- **\`WAREHOUSE_METERING_HISTORY\`** — credits per warehouse, per hour
- **\`METERING_HISTORY\`** — credits per *service*, serverless included
- **\`STORAGE_USAGE\`** — active, Time Travel and Fail-safe bytes
- **\`TABLE_STORAGE_METRICS\`** — the same, per table
- **\`QUERY_HISTORY\`** — which queries burned those hours

### Three questions, in this order
Which meter? → which warehouse or service? → which queries, that hour? Start wide and narrow; the other direction wastes an afternoon on the wrong warehouse.

### Mind the lag
These run **45 minutes to 3 hours** behind. For right-now, use the \`INFORMATION_SCHEMA\` table functions instead.`,
  narration:
    "Visibility means knowing where to look, and in Snowflake that means five views, all in the ACCOUNT_USAGE schema. WAREHOUSE_METERING_HISTORY gives you credits per warehouse, per hour. That's your starting point for compute, and an hourly grain is enough to spot the two in the morning spike that nobody knew about. METERING_HISTORY is the wider one: credits per service, which means it includes all the serverless consumption that never appears as a warehouse. If your compute bill is bigger than the sum of your warehouses, this is the view that explains it. STORAGE_USAGE gives you daily bytes, split into active, Time Travel and Fail-safe — so you can see at a glance whether your storage growth is real data or accumulated history. TABLE_STORAGE_METRICS gives you the same split per table, which is how you find the one staging table quietly holding ninety days of versions. And QUERY_HISTORY tells you which queries consumed the warehouse hours you just identified. There's a method to using them, and the order matters. First, which meter — is this a compute problem or a storage problem? They have completely different fixes and people routinely investigate the wrong one. Second, which warehouse or which service. Third, which queries inside that warehouse, in that hour. Start wide and narrow down. Going the other way — starting from a query somebody complained about — regularly wastes an afternoon on a warehouse that wasn't the problem. One caution, and it's the same one from the governance course. These views lag, from about forty-five minutes to three hours. So an investigation you start during an incident is answering a question about the recent past, not about now. For right-now, you want the INFORMATION_SCHEMA table functions instead.",
}
