import type { Course } from '../types'
import { theTwoBills } from './01-the-two-bills'
import { whereTheCreditsGo } from './02-where-the-credits-go'
import { resourceMonitorsSection } from './03-resource-monitors'
import { taggingAndChargeback } from './04-tagging-and-chargeback'
import { alertsSection } from './05-alerts'
import { emailNotifications } from './06-email-notifications'
import { alertRecipesSection } from './07-alert-recipes'
import { dataMetricFunctions } from './08-data-metric-functions'
import { customDmfs } from './09-custom-dmfs'
import { theFinopsPlaybook } from './10-the-finops-playbook'

// finops — course 09 of the ten-course Snowflake spine. The FinOps loop, plus the alerting machinery
// and the data-quality metrics that ride the same rails. Ten sections, ten scenes.
// §01-§04 are visibility and control of the bill, §05-§07 the alerting machinery, §08-§09 point that
// same machinery at data quality, and §10 is the loop that orders all of it.
export const finops: Course = {
  id: 'finops',
  title: 'Cost, Monitoring & Data Quality',
  sections: [
    theTwoBills,
    whereTheCreditsGo,
    resourceMonitorsSection,
    taggingAndChargeback,
    alertsSection,
    emailNotifications,
    alertRecipesSection,
    dataMetricFunctions,
    customDmfs,
    theFinopsPlaybook,
  ],
}
