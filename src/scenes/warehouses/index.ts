import type { Scene } from '@graphlearning/flow'
import { warehouseAnatomy } from './warehouse-anatomy'
import { sizeLadder } from './size-ladder'
import { warehouseTypes } from './warehouse-types'
import { scaleUp } from './scale-up'
import { multiCluster } from './multi-cluster'
import { scalingPolicy } from './scaling-policy'
import { aDayOfBilling } from './a-day-of-billing'
import { resultCache } from './result-cache'
import { twoMoreCaches } from './two-more-caches'
import { lookupOrder } from './lookup-order'

// Scenes for the `warehouses` course — one solid scene per section, authored FRESH.
// The course is two halves that meet at the end: §01-§07 are about running compute, §08-§09 about
// not running it, and `lookup-order` (§10) is the ladder that puts all three caches in one picture.
export const warehousesScenes: Scene[] = [
  warehouseAnatomy,
  sizeLadder,
  warehouseTypes,
  scaleUp,
  multiCluster,
  scalingPolicy,
  aDayOfBilling,
  resultCache,
  twoMoreCaches,
  lookupOrder,
]
