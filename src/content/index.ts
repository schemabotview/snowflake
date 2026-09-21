import { platform } from './platform'
import { warehouses } from './warehouses'
import { storage } from './storage'
import { loading } from './loading'
import { transformation } from './transformation'
import { governance } from './governance'
import { continuity } from './continuity'
import { performance } from './performance'
import { finops } from './finops'
import { datacloud } from './datacloud'
import type { Course, Section } from './types'

// The course catalog, in syllabus order. → past a course's last section rolls into the next course's
// first. All ten courses are declared up front so the whole arc is visible in the app from day one;
// each fills with sections as its slice is authored.
//
// The ten-course spine (106 sections planned):
//   1 platform · 2 warehouses · 3 storage · 4 loading · 5 transformation
//   6 governance · 7 continuity · 8 performance · 9 finops · 10 datacloud
//
// This narration is authored FRESH (see CLAUDE.md — the ITC notes are a source, not a script), and
// the house rule here is that NOTHING cross-references a neighbour by course number. That is what
// lets the repo ship as a PREFIX: courses 1-5 can go live while 6-10 are still being authored, and
// a later reorder costs nothing until the wavs exist. After a course's audio is generated, its
// section ORDER is frozen — the wav filenames are pinned to the section ids.
export const COURSES: Record<string, Course> = {
  [platform.id]: platform,
  [warehouses.id]: warehouses,
  [storage.id]: storage,
  [loading.id]: loading,
  [transformation.id]: transformation,
  [governance.id]: governance,
  [continuity.id]: continuity,
  [performance.id]: performance,
  [finops.id]: finops,
  [datacloud.id]: datacloud,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract the recorder drives, so it cannot be a per-repo decision. Re-exported here because
// this module is what the app and the scripts already import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}
