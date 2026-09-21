import type { Course } from '../types'
import { theIngestPicture } from './01-the-ingest-picture'
import { internalStagesSection } from './02-internal-stages'
import { externalStagesSection } from './03-external-stages'
import { storageIntegrationSection } from './04-storage-integration'
import { fileFormatsSection } from './05-file-formats'
import { snowsqlAndPutSection } from './06-snowsql-and-put'
import { copyIntoSection } from './07-copy-into'
import { copyOptionsSection } from './08-copy-options'
import { loadMetadataSection } from './09-load-metadata'
import { snowpipeSection } from './10-snowpipe'
import { unloadingSection } from './11-unloading'

// loading — course 04 of the ten-course Snowflake spine. File to table: stages, file formats, COPY
// and its options, Snowpipe, and the way back out. Eleven sections, eleven scenes.
// §01 is the map — file, stage, COPY, table — and every later section zooms into one of those boxes.
// Azure is the worked cloud (storage integration in §04, the Snowpipe wiring in §10), per CLAUDE.md.
export const loading: Course = {
  id: 'loading',
  title: 'Loading & Unloading Data',
  sections: [
    theIngestPicture,
    internalStagesSection,
    externalStagesSection,
    storageIntegrationSection,
    fileFormatsSection,
    snowsqlAndPutSection,
    copyIntoSection,
    copyOptionsSection,
    loadMetadataSection,
    snowpipeSection,
    unloadingSection,
  ],
}
