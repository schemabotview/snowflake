import type { Course } from '../types'

// continuity — course 07 of the ten-course Snowflake spine. Immutable partitions make the past queryable — and a copy of production nearly free.
// PLANNED: 9 sections. Authored one reviewed slice at a time — as each section lands, add
// its import above and list it in `sections` below, in order:
//   01 history-is-free · 02 time-travel-queries · 03 retention · 04 undrop · 05 fail-safe
//   06 zero-copy-clone · 07 clone-workflows · 08 recovery-drill · 09 sampling-for-dev
export const continuity: Course = {
  id: 'continuity',
  title: 'Time Travel, Cloning & Recovery',
  sections: [],
}
