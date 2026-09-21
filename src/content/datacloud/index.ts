import type { Course } from '../types'
import { sharingWithoutCopyingSection } from './01-sharing-without-copying'
import { theShareObject } from './02-the-share-object'
import { secureViewsInSharingSection } from './03-secure-views-in-sharing'
import { readerAccountsSection } from './04-reader-accounts'
import { marketplaceAndListings } from './05-marketplace-and-listings'
import { crossCloudSharing } from './06-cross-cloud-sharing'
import { howClientsConnect } from './07-how-clients-connect'
import { sqlApiSection } from './08-sql-api'
import { biAndDbtSection } from './09-bi-and-dbt'
import { snowparkAndStreamlit } from './10-snowpark-and-streamlit'
import { cortexAisqlSection } from './11-cortex-aisql'
import { semanticViewsAndCortexAnalyst } from './12-semantic-views-and-cortex-analyst'

// datacloud — course 10 of the ten-course Snowflake spine, and the last. Everything that crosses the
// account boundary. Twelve sections, twelve scenes.
// §01-§06 are data going OUT, §07-§10 tools and code coming IN, §11-§12 Cortex over both. §12 closes
// the concept: the newest feature in the product resting on the oldest idea in the arc.
export const datacloud: Course = {
  id: 'datacloud',
  title: 'Sharing, Apps & Cortex AI',
  sections: [
    sharingWithoutCopyingSection,
    theShareObject,
    secureViewsInSharingSection,
    readerAccountsSection,
    marketplaceAndListings,
    crossCloudSharing,
    howClientsConnect,
    sqlApiSection,
    biAndDbtSection,
    snowparkAndStreamlit,
    cortexAisqlSection,
    semanticViewsAndCortexAnalyst,
  ],
}
