import type { Scene } from '@graphlearning/flow'
import { ingestPicture } from './ingest-picture'
import { internalStages } from './internal-stages'
import { externalStages } from './external-stages'
import { storageIntegration } from './storage-integration'
import { fileFormats } from './file-formats'
import { snowsqlAndPut } from './snowsql-and-put'
import { copyInto } from './copy-into'
import { copyOptions } from './copy-options'
import { loadMetadata } from './load-metadata'
import { snowpipe } from './snowpipe'
import { unloading } from './unloading'

// Scenes for the `loading` course — one solid scene per section, authored FRESH.
// `ingest-picture` (§01) is the course's map — file, stage, COPY, table — and §02-§11 each zoom into
// one of those four boxes. Azure is the worked cloud throughout, per this repo's CLAUDE.md.
export const loadingScenes: Scene[] = [
  ingestPicture,
  internalStages,
  externalStages,
  storageIntegration,
  fileFormats,
  snowsqlAndPut,
  copyInto,
  copyOptions,
  loadMetadata,
  snowpipe,
  unloading,
]
