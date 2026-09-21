import type { Section } from '../types'

export const storageIntegrationSection: Section = {
  id: 'storage-integration',
  title: 'Storage integrations',
  scene: 'storage-integration',
  slide: `## Access without credentials

The alternative is a **SAS token pasted into the stage DDL** — readable by anyone with \`GET_DDL\`, and expiring at the worst moment.

### What a storage integration is
An **account-level object** naming which locations Snowflake may touch. Snowflake gets an identity in your tenant; you grant *that identity* access on the Azure side.

### Four steps, in this order
1. **\`DESC INTEGRATION\`** — read the consent URL and app name
2. **Visit the URL** and accept — this creates the service principal
3. **Assign it** *Storage Blob Data Contributor* on the storage account
4. **Create the stage**, naming the integration

### Worth the ceremony
One object, many stages. Auditable and revocable in Azure, and **no secret in any DDL**.`,
  narration:
    "To read your container, Snowflake needs permission. The naive way is to paste a SAS token or an access key directly into the stage definition. Don't. That credential is then readable by anyone who can run GET underscore DDL on the stage, it sits in your version control if you script your DDL, and it expires at the least convenient possible moment. The right way is a storage integration. It's an account-level object that declares which storage locations Snowflake is allowed to touch. Rather than holding your secret, Snowflake gets an identity in your cloud tenant, and you grant that identity access on the cloud side — so the permission lives in Azure's own access control, where your security team can see and revoke it. The setup is a four-step dance and the order isn't guessable, so it's worth committing to memory. First, create the integration, specifying the provider, your tenant ID, and the allowed locations — then run DESC INTEGRATION on it. That output gives you two things: a consent URL, and the name of the application Snowflake wants to create. Second, visit that consent URL in a browser and accept. That's what actually creates the service principal in your Entra ID directory; until you do it, nothing exists on the Azure side. Third, in the Azure portal, go to the storage account's access control and assign that service principal a role — Storage Blob Data Contributor gives it read and write, which is what you need for both loading and unloading. Fourth, create the stage, naming the integration instead of any credential. Worth the ceremony because you do it once per storage account, not once per stage, and no secret ever appears in a piece of SQL. And note: creating the integration grants nothing by itself. Azure has to agree, and steps two and three are that agreement.",
}
