import type { Section } from '../types'

export const accessModelsSection: Section = {
  id: 'access-models',
  title: 'Two access models, at once',
  scene: 'access-models',
  slide: `## Two models, running at the same time

### DAC — discretionary access control
Every object has an **owner**: the role that created it. The owner can grant access to others, and some things **only the owner may do**.

### RBAC — role-based access control
Privileges are granted to **roles**, and roles to users. Nothing is granted to a person directly.

Snowflake runs **both**. Ownership decides one set of questions; grants decide the rest.

### Which explains a surprise
A role can hold every privilege on a table and still be unable to \`DROP\` it — because dropping is an owner's right, not a grantable one.

### UBAC exists. Avoid it.
Privileges can be granted straight to a user. Do not: the access is invisible in your role model and **vanishes when the person leaves**, taking the pipeline they owned with it.`,
  narration:
    "Access control in Snowflake is two models working together, and knowing which is which saves a lot of confusion. The first is discretionary access control, DAC. Every object in Snowflake has an owner — specifically, the role that was active when the object was created. Note that: the role, not the person. The owner has certain rights that are inherent rather than granted, and can hand out access to others. The second is role-based access control, RBAC, which is the one most people mean when they talk about permissions. Privileges are granted to roles. Roles are granted to users. A user activates a role, and acts with that role's privileges. Snowflake runs both of these at the same time, and the interaction explains something that puzzles people. You can grant a role every privilege that exists on a table — SELECT, INSERT, UPDATE, DELETE, REFERENCES, the lot — and that role still cannot drop the table. Dropping is an owner's right. It isn't in the list of grantable privileges, so no amount of granting produces it. If you need someone to be able to drop it, you transfer ownership, or they use a role that owns it. Now, the third model. Snowflake does technically let you grant privileges directly to a user rather than to a role — user-based access control. Don't. Two reasons. It's invisible: your role hierarchy no longer describes who can do what, so an audit of roles tells you nothing useful. And it disappears when the person does. Somebody leaves, their user is dropped, and a pipeline stops working with no obvious explanation, because the grant that made it work was attached to them personally. Grant to roles. Always.",
}
