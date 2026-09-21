import type { Scene } from '@graphlearning/flow'
import { historyIsFree } from './history-is-free'
import { timeTravel } from './time-travel'
import { retention } from './retention'
import { undrop } from './undrop'
import { failSafe } from './fail-safe'
import { zeroCopyClone } from './zero-copy-clone'
import { cloneWorkflows } from './clone-workflows'
import { recoveryDrill } from './recovery-drill'
import { sampling } from './sampling'

// Scenes for the `continuity` course — one solid scene per section, authored FRESH.
// `history-is-free` (§01) pays off the promise made in storage §03: immutability is why Time Travel,
// cloning and UNDROP all exist. `recovery-drill` (§08) is the course's payoff — every earlier
// section, used once, in order.
export const continuityScenes: Scene[] = [
  historyIsFree,
  timeTravel,
  retention,
  undrop,
  failSafe,
  zeroCopyClone,
  cloneWorkflows,
  recoveryDrill,
  sampling,
]
