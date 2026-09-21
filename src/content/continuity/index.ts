import type { Course } from '../types'
import { historyIsFreeSection } from './01-history-is-free'
import { timeTravelQueries } from './02-time-travel-queries'
import { retentionSection } from './03-retention'
import { undropSection } from './04-undrop'
import { failSafeSection } from './05-fail-safe'
import { zeroCopyCloneSection } from './06-zero-copy-clone'
import { cloneWorkflowsSection } from './07-clone-workflows'
import { recoveryDrill } from './08-recovery-drill'
import { samplingForDev } from './09-sampling-for-dev'

// continuity — course 07 of the ten-course Snowflake spine. Immutable partitions make the past
// queryable and a copy of production nearly free. Nine sections, nine scenes.
// §01 pays off the promise made in storage §03; §08 is the payoff of this course — every earlier
// section used once, in order, on a real incident.
export const continuity: Course = {
  id: 'continuity',
  title: 'Time Travel, Cloning & Recovery',
  sections: [
    historyIsFreeSection,
    timeTravelQueries,
    retentionSection,
    undropSection,
    failSafeSection,
    zeroCopyCloneSection,
    cloneWorkflowsSection,
    recoveryDrill,
    samplingForDev,
  ],
}
