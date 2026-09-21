import type { Scene } from '@graphlearning/flow'
import { sharingWithoutCopying } from './sharing-without-copying'
import { theShare } from './the-share'
import { secureViewsInSharing } from './secure-views-in-sharing'
import { readerAccounts } from './reader-accounts'
import { marketplace } from './marketplace'
import { crossCloud } from './cross-cloud'
import { clients } from './clients'
import { sqlApi } from './sql-api'
import { biAndDbt } from './bi-and-dbt'
import { snowparkStreamlit } from './snowpark-streamlit'
import { cortexAisql } from './cortex-aisql'
import { cortexAnalyst } from './cortex-analyst'

// Scenes for the `datacloud` course — one solid scene per section, authored FRESH.
// §01-§06 are data going OUT of the account, §07-§10 tools and code coming IN, §11-§12 Cortex over
// both. `cortex-analyst` (§12) is the last scene in the concept, so its final band recaps the whole
// arc and lands back on RBAC — the newest feature resting on the oldest idea.
export const datacloudScenes: Scene[] = [
  sharingWithoutCopying,
  theShare,
  secureViewsInSharing,
  readerAccounts,
  marketplace,
  crossCloud,
  clients,
  sqlApi,
  biAndDbt,
  snowparkStreamlit,
  cortexAisql,
  cortexAnalyst,
]
