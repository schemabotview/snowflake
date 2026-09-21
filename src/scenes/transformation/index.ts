import type { Scene } from '@graphlearning/flow'
import { threeTools } from './three-tools'
import { streams } from './streams'
import { streamTypes } from './stream-types'
import { tasks } from './tasks'
import { taskGraph } from './task-graph'
import { streamTaskLoop } from './stream-task-loop'
import { dynamicTables } from './dynamic-tables'
import { choosing } from './choosing'
import { procedureAnatomy } from './procedure-anatomy'
import { cursorsResultsets } from './cursors-resultsets'
import { exceptions } from './exceptions'
import { udfs } from './udfs'

// Scenes for the `transformation` course — one solid scene per section, authored FRESH.
// §01-§08 are the declarative half and §09-§12 the procedural one; `choosing` (§08) is the hinge,
// and `task-graph` (§05) is the only genuine DAG in the repo — everywhere else a spine is right.
export const transformationScenes: Scene[] = [
  threeTools,
  streams,
  streamTypes,
  tasks,
  taskGraph,
  streamTaskLoop,
  dynamicTables,
  choosing,
  procedureAnatomy,
  cursorsResultsets,
  exceptions,
  udfs,
]
