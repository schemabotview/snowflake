import type { Course } from '../types'
import { whatAWarehouseIs } from './01-what-a-warehouse-is'
import { sizes } from './02-sizes'
import { warehouseTypesSection } from './03-warehouse-types'
import { scaleUpSection } from './04-scale-up'
import { scaleOut } from './05-scale-out'
import { scalingPolicySection } from './06-scaling-policy'
import { autoSuspendResume } from './07-auto-suspend-resume'
import { resultCacheSection } from './08-result-cache'
import { localAndMetadataCache } from './09-local-and-metadata-cache'
import { cacheOrderAndSizing } from './10-cache-order-and-sizing'

// warehouses — course 02 of the ten-course Snowflake spine. Compute: sizing it, scaling it,
// suspending it — and the three caches that mean not running it. Ten sections, ten scenes.
// The course is two halves. §01-§07 are about running compute; §08-§09 are about NOT running it;
// §10 joins them with the lookup ladder, which is also the frame the performance course later uses.
export const warehouses: Course = {
  id: 'warehouses',
  title: 'Virtual Warehouses & Caching',
  sections: [
    whatAWarehouseIs,
    sizes,
    warehouseTypesSection,
    scaleUpSection,
    scaleOut,
    scalingPolicySection,
    autoSuspendResume,
    resultCacheSection,
    localAndMetadataCache,
    cacheOrderAndSizing,
  ],
}
