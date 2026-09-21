import type { Scene } from '@graphlearning/flow'
import { coupledBox } from './coupled-box'
import { managedForYou } from './managed-for-you'
import { threeLayers } from './three-layers'
import { separation } from './separation'
import { queryPath } from './query-path'
import { objectModel } from './object-model'
import { cloudsAndRegions } from './clouds-and-regions'
import { editions } from './editions'
import { twoMeters } from './two-meters'
import { theMap } from './the-map'

// Scenes for the `platform` course — one solid scene per section, authored FRESH.
// `three-layers` (§03) is the course's system map: every later course in the concept is a zoom into
// one of its three rows, and `query-path` (§05) is that same stack walked in time. `coupled-box`
// (§01) and `separation` (§04) are deliberately the same picture inverted.
export const platformScenes: Scene[] = [
  coupledBox,
  managedForYou,
  threeLayers,
  separation,
  queryPath,
  objectModel,
  cloudsAndRegions,
  editions,
  twoMeters,
  theMap,
]
