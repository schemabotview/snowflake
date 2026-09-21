import type { Scene } from '@graphlearning/flow'
import { queryProfile } from './query-profile'
import { pruningFirst } from './pruning-first'
import { clusteringKeys } from './clustering-keys'
import { automaticClustering } from './automatic-clustering'
import { clusteringDepth } from './clustering-depth'
import { searchOptimization } from './search-optimization'
import { queryAcceleration } from './query-acceleration'
import { spill } from './spill'
import { materializeOrCache } from './materialize-or-cache'
import { tuningMethod } from './tuning-method'

// Scenes for the `performance` course — one solid scene per section, authored FRESH.
// The course opens on diagnosis (§01) and closes on method (§10); everything between is a fix aimed
// at one of the four numbers in that first profile. §02 returns to the pruning board from storage §04.
export const performanceScenes: Scene[] = [
  queryProfile,
  pruningFirst,
  clusteringKeys,
  automaticClustering,
  clusteringDepth,
  searchOptimization,
  queryAcceleration,
  spill,
  materializeOrCache,
  tuningMethod,
]
