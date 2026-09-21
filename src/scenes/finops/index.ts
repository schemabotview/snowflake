import type { Scene } from '@graphlearning/flow'
import { twoBills } from './two-bills'
import { whereCreditsGo } from './where-credits-go'
import { resourceMonitors } from './resource-monitors'
import { chargeback } from './chargeback'
import { alerts } from './alerts'
import { notifications } from './notifications'
import { alertRecipes } from './alert-recipes'
import { systemDmfs } from './system-dmfs'
import { customDmfs } from './custom-dmfs'
import { playbook } from './playbook'

// Scenes for the `finops` course — one solid scene per section, authored FRESH.
// §01-§04 are visibility and control of the bill, §05-§07 the alerting machinery, and §08-§09 point
// that same machinery at data quality. §10 is the loop that orders all of it.
export const finopsScenes: Scene[] = [
  twoBills,
  whereCreditsGo,
  resourceMonitors,
  chargeback,
  alerts,
  notifications,
  alertRecipes,
  systemDmfs,
  customDmfs,
  playbook,
]
