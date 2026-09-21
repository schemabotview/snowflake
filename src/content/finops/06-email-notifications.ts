import type { Section } from '../types'

export const emailNotifications: Section = {
  id: 'email-notifications',
  title: 'Email notifications',
  scene: 'notifications',
  slide: `## Getting the message out

Create a **notification integration** of type \`EMAIL\`, then call **\`SYSTEM$SEND_EMAIL\`** with the integration, the recipients, a subject and a body.

Callable from an alert, a task, a stored procedure, or by hand — which makes it the ending for every failure branch you write.

### Four rules
- **Verified recipients only.** The address must belong to a Snowflake user with a verified email. Sending to anything else **fails the procedure**.
- **Omit \`ALLOWED_RECIPIENTS\` and it mails everyone** in the account. Set it.
- **Ten email integrations** per account.
- **From \`no-reply@snowflake.net\`** — nobody can answer it, so put everything they need in the body.

> Test it the day you create it. An alerting path discovered to be broken *during* an incident is worse than having none, because you believed you were covered.`,
  narration:
    "An alert that fires into the void is not much use, so: notifications. The setup is two steps. First, create a notification integration of type EMAIL. That's an account-level object, and it carries a list of allowed recipients. Second, call the built-in stored procedure SYSTEM dollar SEND underscore EMAIL, passing the integration name, the recipients, a subject and a body. That's it. And because it's just a procedure call, you can use it from an alert, from a task, from inside a stored procedure's exception handler, or by hand from a worksheet. That last case makes it the natural ending for every failure branch you write — remember the exceptions section, where a handler that swallows an error quietly turns a failed task into a successful one? This is what you put in that handler instead. Four rules. Recipients must be verified: the address has to belong to a Snowflake user in your account whose email is verified. Send to anything else and the procedure fails — which, if it's inside your error handler, means your error handling is what breaks. Second, if you omit the allowed recipients list when creating the integration, emails go to every user in the account. That is occasionally what you want and usually a memorable mistake. Set the list. Third, there's a limit of ten email integrations per account, which is plenty if you organise them by purpose rather than per alert. And fourth, the mail arrives from no-reply at snowflake dot net, so nobody can reply to it — put everything the reader needs in the body, including which account and which object. And test it the day you create it. An alerting path you discover is broken during an incident is worse than having none at all, because until that moment you believed you were covered.",
}
