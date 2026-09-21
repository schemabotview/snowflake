import type { Course } from '../types'
import { readingTheQueryProfile } from './01-reading-the-query-profile'
import { pruningFirstSection } from './02-pruning-first'
import { clusteringKeysSection } from './03-clustering-keys'
import { automaticClusteringSection } from './04-automatic-clustering'
import { clusteringDepthSection } from './05-clustering-depth'
import { searchOptimizationSection } from './06-search-optimization'
import { queryAccelerationSection } from './07-query-acceleration'
import { rightSizingAndSpill } from './08-right-sizing-and-spill'
import { materializeOrCache } from './09-materialize-or-cache'
import { aTuningMethod } from './10-a-tuning-method'

// performance — course 08 of the ten-course Snowflake spine. Make it read less: pruning, clustering,
// the two acceleration services, and a method to prove a change worked. Ten sections, ten scenes.
// §01 is diagnosis and §10 is method; everything between is a fix aimed at one of the four numbers
// in that first profile. §02 returns to the pruning picture from storage §04.
export const performance: Course = {
  id: 'performance',
  title: 'Performance & Optimization',
  sections: [
    readingTheQueryProfile,
    pruningFirstSection,
    clusteringKeysSection,
    automaticClusteringSection,
    clusteringDepthSection,
    searchOptimizationSection,
    queryAccelerationSection,
    rightSizingAndSpill,
    materializeOrCache,
    aTuningMethod,
  ],
}
