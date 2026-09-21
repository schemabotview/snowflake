import type { Scene } from '@graphlearning/flow'
import { accessModels } from './access-models'
import { fourEntities } from './four-entities'
import { systemRoles } from './system-roles'
import { customRoles } from './custom-roles'
import { grants } from './grants'
import { masking } from './masking'
import { rowAccess } from './row-access'
import { tagging } from './tagging'
import { networkPolicies } from './network-policies'
import { informationSchema } from './information-schema'
import { accountUsage } from './account-usage'

// Scenes for the `governance` course — one solid scene per section, authored FRESH.
// §01-§05 build the access model, §06-§09 restrict what a permitted user still cannot see, and
// §10-§11 are how you prove any of it happened. `masking` and `row-access` deliberately share a
// shape — columns and rows are the same idea on two axes.
export const governanceScenes: Scene[] = [
  accessModels,
  fourEntities,
  systemRoles,
  customRoles,
  grants,
  masking,
  rowAccess,
  tagging,
  networkPolicies,
  informationSchema,
  accountUsage,
]
