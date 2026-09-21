import type { Section } from '../types'

export const taskGraphs: Section = {
  id: 'task-graphs',
  title: 'Task graphs',
  scene: 'task-graph',
  slide: `## One root, and everything after it

Chain tasks with \`AFTER\` and you have a **task graph** — a DAG. Only the **root** carries a schedule; every other task declares which tasks it follows.

### What a graph buys you
- **Branching.** Two independent loads run at the same time, then a third waits for both.
- **Ordering without a scheduler.** The dependency *is* the declaration.
- **A finalizer.** One optional task per root that runs when the graph finishes — **including when a branch failed**. Clean-up, alerting, marking a run complete.

### The rules
- One schedule, on the root
- **One owner**, one database, one schema for the whole graph
- Up to **1000 tasks**; 100 parents or children each
- It must be **acyclic** — start to finish, never a loop

> \`ALTER TASK … RESUME\` the root **last**. Children must be resumed before the root that drives them.`,
  narration:
    "One task runs one statement. Real pipelines have several steps with an order between them, and that's a task graph. You create additional tasks with an AFTER clause naming the task or tasks they follow. Only the root has a schedule; everything else runs when its predecessors finish. The result is a directed acyclic graph — start to finish, never a loop. What does that buy you over just scheduling four tasks a few minutes apart? Three things. Branching: two independent loads can run at the same time, and a third task can declare that it waits for both, which you cannot express with clock times without guessing. Ordering without a scheduler: the dependency is the declaration, so nothing drifts when one step gets slower. And the finalizer — an optional task, one per root, that runs when the graph completes. Crucially, it runs even when a branch failed, which is what makes it the right place for clean-up, for alerting, or for marking a run complete in an audit table. The rules are worth knowing before you design something large. One schedule, on the root. The whole graph must have a single owner role, and live in one database and one schema — which matters when you're thinking about permissions. A graph can hold up to a thousand tasks, and any single task up to a hundred parents and a hundred children. And one operational gotcha that catches everybody: when you resume tasks, resume the children first and the root last. A child that's still suspended when the root fires simply doesn't run, and the graph quietly produces half its output.",
}
