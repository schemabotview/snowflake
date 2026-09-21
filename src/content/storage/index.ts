import type { Course } from '../types'
import { howDataIsStored } from './01-how-data-is-stored'
import { rowVsColumnarSection } from './02-row-vs-columnar'
import { microPartitions } from './03-micro-partitions'
import { pruningSection } from './04-pruning'
import { dataTypesSection } from './05-data-types'
import { constraintsSection } from './06-constraints'
import { tableTypesSection } from './07-table-types'
import { variantObjectArray } from './08-variant-object-array'
import { queryingVariantSection } from './09-querying-variant'
import { viewsAndMaterializedViews } from './10-views-and-materialized-views'
import { secureViewsSection } from './11-secure-views'

// storage — course 03 of the ten-course Snowflake spine. Micro-partitions and the pruning they
// enable, the table types, semi-structured data, and views. Eleven sections, eleven scenes.
// §03 and §04 are the load-bearing pair: immutable self-describing chunks, and the pruning that
// reads their recorded ranges. The performance course opens by returning to §04.
export const storage: Course = {
  id: 'storage',
  title: 'Storage, Tables & Views',
  sections: [
    howDataIsStored,
    rowVsColumnarSection,
    microPartitions,
    pruningSection,
    dataTypesSection,
    constraintsSection,
    tableTypesSection,
    variantObjectArray,
    queryingVariantSection,
    viewsAndMaterializedViews,
    secureViewsSection,
  ],
}
