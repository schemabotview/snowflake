import type { Scene } from '@graphlearning/flow'
import { platformScenes } from './platform'
import { warehousesScenes } from './warehouses'
import { storageScenes } from './storage'
import { loadingScenes } from './loading'
import { transformationScenes } from './transformation'
import { governanceScenes } from './governance'
import { continuityScenes } from './continuity'
import { performanceScenes } from './performance'
import { finopsScenes } from './finops'
import { datacloudScenes } from './datacloud'

// Scene registry. Sections reference scenes by id; scenes are grouped by course (one folder each,
// mirroring src/content). Ids are globally unique across courses, so the flat lookup below is
// unambiguous. Courses fill in as they're authored, one slice at a time.
const ALL: Scene[] = [
  ...platformScenes,
  ...warehousesScenes,
  ...storageScenes,
  ...loadingScenes,
  ...transformationScenes,
  ...governanceScenes,
  ...continuityScenes,
  ...performanceScenes,
  ...finopsScenes,
  ...datacloudScenes,
]

export const SCENES: Record<string, Scene> = Object.fromEntries(ALL.map((s) => [s.id, s]))

export function getScene(id: string): Scene | undefined {
  return SCENES[id]
}
