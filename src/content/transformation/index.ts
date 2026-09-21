import type { Course } from '../types'
import { cdcAndTheThreeTools } from './01-cdc-and-the-three-tools'
import { streamsSection } from './02-streams'
import { streamTypesAndStaleness } from './03-stream-types-and-staleness'
import { tasksSection } from './04-tasks'
import { taskGraphs } from './05-task-graphs'
import { streamTaskMerge } from './06-stream-task-merge'
import { dynamicTablesSection } from './07-dynamic-tables'
import { choosingAPipeline } from './08-choosing-a-pipeline'
import { storedProcedures } from './09-stored-procedures'
import { cursorsAndResultsets } from './10-cursors-and-resultsets'
import { exceptionsSection } from './11-exceptions'
import { udfsAndUdtfs } from './12-udfs-and-udtfs'

// transformation — course 05 of the ten-course Snowflake spine. Changing data once it is in, by
// either route. Twelve sections, twelve scenes.
// §01-§08 are the declarative half (streams, tasks, dynamic tables) and §09-§12 the procedural one;
// §08 `choosing-a-pipeline` is the hinge between them and the section the course exists to earn.
export const transformation: Course = {
  id: 'transformation',
  title: 'Streams, Tasks, Dynamic Tables & Procedures',
  sections: [
    cdcAndTheThreeTools,
    streamsSection,
    streamTypesAndStaleness,
    tasksSection,
    taskGraphs,
    streamTaskMerge,
    dynamicTablesSection,
    choosingAPipeline,
    storedProcedures,
    cursorsAndResultsets,
    exceptionsSection,
    udfsAndUdtfs,
  ],
}
