import type { Course } from '../types'
import { traditionalLimits } from './01-traditional-limits'
import { whatSnowflakeIs } from './02-what-snowflake-is'
import { threeLayersSection } from './03-three-layers'
import { separationSection } from './04-separation'
import { queryExecutionFlow } from './05-query-execution-flow'
import { objectModelSection } from './06-object-model'
import { cloudsAndRegionsSection } from './07-clouds-and-regions'
import { editionsSection } from './08-editions'
import { pricingShape } from './09-pricing-shape'
import { youAreHere } from './10-you-are-here'

// platform — course 01 of the ten-course Snowflake spine. What Snowflake is, the three layers it is
// built from, and what an account costs. Ten sections, ten scenes.
// §01 states the problem (storage and compute welded together) and §04 is that picture inverted —
// they are the two halves of one argument, and everything later in the concept hangs off §04.
export const platform: Course = {
  id: 'platform',
  title: 'Platform & Architecture',
  sections: [
    traditionalLimits,
    whatSnowflakeIs,
    threeLayersSection,
    separationSection,
    queryExecutionFlow,
    objectModelSection,
    cloudsAndRegionsSection,
    editionsSection,
    pricingShape,
    youAreHere,
  ],
}
