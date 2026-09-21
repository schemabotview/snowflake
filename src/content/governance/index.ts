import type { Course } from '../types'
import { accessModelsSection } from './01-access-models'
import { theFourEntities } from './02-the-four-entities'
import { systemRolesSection } from './03-system-roles'
import { customRolesSection } from './04-custom-roles'
import { grantsSection } from './05-grants'
import { maskingPolicies } from './06-masking-policies'
import { rowAccessPolicies } from './07-row-access-policies'
import { objectTagging } from './08-object-tagging'
import { networkRulesAndPolicies } from './09-network-rules-and-policies'
import { informationSchemaSection } from './10-information-schema'
import { accountUsageSection } from './11-account-usage'

// governance — course 06 of the ten-course Snowflake spine. Who can see what: the role model, column
// and row policies, tags, the network edge, and the metadata that proves it. Eleven sections.
// §01-§05 build the access model, §06-§09 restrict what a permitted user still cannot see, and
// §10-§11 are how you prove any of it happened — which is the section the course exists to reach.
export const governance: Course = {
  id: 'governance',
  title: 'Access Control & Governance',
  sections: [
    accessModelsSection,
    theFourEntities,
    systemRolesSection,
    customRolesSection,
    grantsSection,
    maskingPolicies,
    rowAccessPolicies,
    objectTagging,
    networkRulesAndPolicies,
    informationSchemaSection,
    accountUsageSection,
  ],
}
