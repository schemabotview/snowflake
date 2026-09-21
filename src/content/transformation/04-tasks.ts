import type { Section } from '../types'

export const tasksSection: Section = {
  id: 'tasks',
  title: 'Tasks',
  scene: 'tasks',
  slide: `## Scheduled SQL, with four catches

A task is a **schedule plus one statement**. \`CRON\` with a time zone, or a plain interval like \`5 MINUTE\`.

### The four things to know
- **One statement only.** Need several? Have the task \`CALL\` a procedure.
- **It is created suspended.** \`ALTER TASK … RESUME\` or it never runs. This is the most common first surprise.
- **Time, not events.** Tasks fire on a schedule. \`WHEN SYSTEM$STREAM_HAS_DATA(…)\` doesn't trigger a run — it lets a scheduled run **skip** cheaply.
- **Two compute models.** Name a \`WAREHOUSE\`, or omit it for **serverless**.

### Which compute
Serverless suits short, frequent work: Snowflake sizes it, and there is no idle warehouse. A warehouse task that runs ten seconds every minute still pays the **60-second floor** each time.`,
  narration:
    "A task is scheduled SQL. You give it a schedule and a statement, and Snowflake runs the statement on that schedule. The schedule is either a CRON expression with a time zone — and do specify the time zone, or you'll discover the hard way that it defaults to UTC — or a simple interval, like five minutes. There are four things to know, and three of them are surprises. First: a task runs exactly one statement. One. If your job is five statements, you don't get five tasks in a row for free — you either build a task graph, which is the next section, or you put the five statements in a stored procedure and have the task CALL it. Second, and this is the classic first experience of tasks: a newly created task is suspended. It will not run. You must ALTER TASK and RESUME it. Everyone hits this once, usually after twenty minutes of wondering why nothing happened. Third, tasks are time-driven, not event-driven. There's a WHEN clause, and it looks like a trigger, but it isn't one. WHEN SYSTEM dollar STREAM underscore HAS underscore DATA lets a scheduled run check whether there's anything to do and skip cheaply if not. The task still wakes on its schedule — it just doesn't start a warehouse when there's no work. That's a real cost saving, but it is not a trigger. Fourth, you choose who supplies the compute. Name a warehouse and it runs there. Omit the warehouse and the task is serverless: Snowflake provides the compute and sizes it based on observed history. Serverless is usually the better choice for short frequent work, because a warehouse task that runs for ten seconds every minute still pays the sixty-second billing floor on every single run.",
}
