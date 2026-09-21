import type { Scene } from '@graphlearning/flow'
import { intoMicroPartitions } from './into-micro-partitions'
import { rowVsColumnar } from './row-vs-columnar'
import { microPartitionAnatomy } from './micro-partition-anatomy'
import { pruning } from './pruning'
import { dataTypes } from './data-types'
import { constraints } from './constraints'
import { tableTypes } from './table-types'
import { variantTypes } from './variant-types'
import { queryingVariant } from './querying-variant'
import { views } from './views'
import { secureViews } from './secure-views'

// Scenes for the `storage` course — one solid scene per section, authored FRESH.
// `micro-partition-anatomy` (§03) and `pruning` (§04) are a pair: the first draws the chunks and
// their ranges, the second does nothing but read those ranges. The performance course later reuses
// that pruning picture as its starting point.
export const storageScenes: Scene[] = [
  intoMicroPartitions,
  rowVsColumnar,
  microPartitionAnatomy,
  pruning,
  dataTypes,
  constraints,
  tableTypes,
  variantTypes,
  queryingVariant,
  views,
  secureViews,
]
