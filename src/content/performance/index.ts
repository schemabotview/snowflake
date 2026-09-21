import type { Course } from '../types'

// performance — course 08 of the ten-course Snowflake spine. Make it read less: pruning, clustering, the two acceleration services, and a method to prove it worked.
// PLANNED: 10 sections. Authored one reviewed slice at a time — as each section lands, add
// its import above and list it in `sections` below, in order:
//   01 reading-the-query-profile · 02 pruning-first · 03 clustering-keys
//   04 automatic-clustering · 05 clustering-depth · 06 search-optimization
//   07 query-acceleration · 08 right-sizing-and-spill · 09 materialize-or-cache
//   10 a-tuning-method
export const performance: Course = {
  id: 'performance',
  title: 'Performance & Optimization',
  sections: [],
}
