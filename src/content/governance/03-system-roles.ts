import type { Section } from '../types'

export const systemRolesSection: Section = {
  id: 'system-roles',
  title: 'The five system roles',
  scene: 'system-roles',
  slide: `## The five you are given

- **ACCOUNTADMIN** — everything: billing, account settings, and it **inherits both branches below**
- **SECURITYADMIN** — \`MANAGE GRANTS\`, so it can grant or revoke on **any** object. Inherits USERADMIN
- **USERADMIN** — creates users and roles, and nothing else
- **SYSADMIN** — creates databases, schemas and warehouses. The working admin role
- **PUBLIC** — held automatically by **every user**

### Two mistakes to avoid
**Do not work as ACCOUNTADMIN.** Billing and setup only, granted to as few people as possible, with MFA on every one.

**Do not grant anything interesting to PUBLIC** — including that service account somebody created in a hurry.

> Grant your custom roles **up to SYSADMIN**, or you end up with objects no administrator can manage.`,
  narration:
    "Snowflake gives you five roles in every account, and they form a hierarchy. At the top is ACCOUNTADMIN. It can do everything: billing, account parameters, creating other accounts in an organisation. Importantly, it inherits both of the branches below it, so it holds everything SECURITYADMIN and SYSADMIN hold. SECURITYADMIN has the MANAGE GRANTS privilege, which means it can grant and revoke privileges on any object in the account, regardless of who owns it. It also inherits USERADMIN. USERADMIN is narrower: it creates and manages users and roles, and nothing else. It cannot see your data, which is exactly right for whoever runs your identity provisioning. SYSADMIN is the working administrator role. It can create databases, schemas and warehouses, and in most well-run accounts it's the role that owns the actual data estate. And PUBLIC is held automatically by every user in the account, whether you granted it or not. Two mistakes to avoid, and both are common. First: do not do your day-to-day work as ACCOUNTADMIN. It's tempting because everything works, and that is the problem — a mistake made in ACCOUNTADMIN can affect billing, security and the entire account. Use it for setup and billing, grant it to as few people as you can, and require multi-factor authentication on every one of them. Second: do not grant anything interesting to PUBLIC. It's easy to do accidentally when you're getting something working, and it silently gives every user in the account access, including that service account somebody created in a hurry last year. And one convention worth adopting: grant your custom roles up to SYSADMIN. If you don't, you end up with objects that no administrator can see or manage, and eventually somebody leaves and nobody can touch them.",
}
