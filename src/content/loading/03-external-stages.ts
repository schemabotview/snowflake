import type { Section } from '../types'

export const externalStagesSection: Section = {
  id: 'external-stages',
  title: 'External stages',
  scene: 'external-stages',
  slide: `## Pointing at your own cloud storage

An external stage names a location in **your** container or bucket. The files never move into Snowflake — the stage is a pointer carrying three facts: **a URL**, **a storage integration**, and **a file format**.

### What the boundary means
- **You own the files** — lifecycle, tiering and retention stay yours
- **\`DROP STAGE\` deletes nothing** — the pointer goes, the data stays
- **Keep the storage in the account's region** — otherwise egress charges and a slower read

### Why this is the normal choice
Your data is usually in cloud storage already. An external stage reads it **where it is**, instead of making you keep a second copy in Snowflake-managed storage — two copies, two bills, and a synchronisation problem.`,
  narration:
    "An external stage points at storage you own — a container in your Azure storage account, an S3 bucket, a GCS bucket. And the essential thing to understand is where the boundary sits. The files do not move into Snowflake. They stay exactly where your pipeline wrote them. The stage is a named pointer with three parts: the URL of the location, a storage integration that says how Snowflake is allowed to read it, and optionally a file format. That's the same three facts as any stage — just with the location on your side of the line. Three consequences follow from that boundary, and they're all worth knowing. First, you keep ownership of the files, which means your lifecycle rules, your storage tiers, your retention policy — Snowflake has no opinion about any of it. Second, dropping the stage deletes nothing. You're removing a pointer, not data. That's reassuring when you're tidying up, and occasionally confusing when someone expects a cleanup to have freed space. Third, keep that storage in the same cloud region as your Snowflake account. If your account is in Western Europe and your container is in East US, every load pays cross-region data transfer and every read is slower. That's a decision made once, at sign-up, and awkward to change afterwards. Why is this the normal choice in real deployments? Because your data is usually already in cloud storage. Some pipeline is writing files to a container for other reasons. An external stage lets Snowflake read them where they are, rather than forcing you to copy everything into Snowflake-managed storage first — which would mean two copies, two bills, and a synchronisation problem.",
}
