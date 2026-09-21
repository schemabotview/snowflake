import type { Section } from '../types'

export const customRolesSection: Section = {
  id: 'custom-roles',
  title: 'Designing your own roles',
  scene: 'custom-roles',
  slide: `## Two layers, and the second one saves you

The instinct is to create a role per job title and grant objects straight to it. That works until the third job title, and then every new schema means editing every role.

### Access roles — one per set of objects
\`SALES_READ\` holds \`SELECT\` on the sales schema. \`SALES_WRITE\` holds the DML. \`FIN_READ\` holds finance. **Privileges touch objects here, and nowhere else.**

### Functional roles — one per job
\`ANALYST\` holds \`SALES_READ\`. \`DATA_ENGINEER\` holds both sales roles. \`FINANCE\` holds \`FIN_READ\`. These hold **no object privileges at all**.

### People hold functional roles
A new analyst is **one grant**, not fifteen. A schema added to the analyst's world is **one grant**, for everyone who holds that job.

> And roll the functional roles up to **SYSADMIN**, so the estate stays administrable when you are on holiday.`,
  narration:
    "Now the pattern worth adopting from the first day, because retrofitting it is miserable. The instinct when you start is to create a role per job title — ANALYST, ENGINEER, FINANCE — and grant object privileges directly to each. That works fine until the third job title and the fourth schema, at which point every new schema means going round and editing every role, and nobody is quite sure who can see what any more. The fix is two layers. The lower layer is access roles. Each one represents a set of objects and a level of access to them: SALES_READ holds SELECT on the sales schema, SALES_WRITE holds insert, update and delete on it, FIN_READ holds select on finance. These roles are named after data, not people. And crucially, this is the only layer where privileges touch objects at all. The upper layer is functional roles, named after jobs: ANALYST, DATA_ENGINEER, FINANCE. These hold no object privileges whatsoever. What they hold is access roles. ANALYST holds SALES_READ. DATA_ENGINEER holds both SALES roles. FINANCE holds FIN_READ. And then users hold functional roles — just the one that matches their job. Look at what that buys you. Onboarding an analyst is a single grant. Adding a new schema to the analyst's world is a single grant, and every analyst gets it at once. Answering \"what can an analyst see\" means reading one role's grants instead of reconstructing it from a dozen. And when somebody changes teams, you revoke one role and grant another. Two conventions to finish. Name them predictably — object then access level — so the list sorts usefully. And grant your functional roles up to SYSADMIN, so an administrator can see and manage the whole estate when you're away.",
}
