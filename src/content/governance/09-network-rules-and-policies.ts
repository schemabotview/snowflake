import type { Section } from '../types'

export const networkRulesAndPolicies: Section = {
  id: 'network-rules-and-policies',
  title: 'Network rules and policies',
  scene: 'network-policies',
  slide: `## A firewall in front of the account

Everything so far controls what an authenticated user may do. This controls **where they may connect from**.

### A rule is a list, a policy combines rules
\`TYPE = IPV4\`, \`MODE = INGRESS\`, and a \`VALUE_LIST\` of **CIDR ranges**. The number after the slash is how many bits are fixed, so **smaller means wider**: \`/24\` is 256 addresses, \`/16\` is 65,536. A policy holds an allowed list, a blocked list, or both — **blocked wins**.

### It attaches at two levels
**The account** — everyone, including you. **A single user** — the tighter and usually better choice: pin a service account to the host it runs on.

### You can lock yourself out
An account-level policy takes effect **immediately**, and recovery is a **support case**. Check your own address is covered, test on one user first, and keep a second admin on a different network.`,
  narration:
    "Everything we've covered so far controls what an authenticated user may do once they're in. Network policies control where they may connect from at all. There are two objects. A network rule is a list of network identifiers: you set a type, usually IPV4, a mode, usually INGRESS for incoming traffic, and a value list of CIDR ranges. CIDR notation is an address followed by a slash and a number, and the number says how many bits are fixed. So a slash twenty-four fixes the first three octets and leaves 256 addresses; a slash sixteen leaves over sixty-five thousand. Smaller number after the slash, wider range — which is worth saying out loud because it reads backwards the first few times. A network policy combines rules: an allowed list, a blocked list, or both. Where they overlap, blocked wins. And you attach a policy at one of two levels. Account level applies to everybody who connects, including you. User level applies to one user, and that's usually the better tool — pinning a service account to the single host it actually runs on is a very effective control, and it can't lock out your humans. Now the warning, and it is a real one. An account-level network policy takes effect immediately. If your own IP address isn't in the allowed list, you are locked out. Not inconvenienced — locked out, along with everyone else, and the recovery is opening a support case with Snowflake. So: check your own address is covered before you apply anything. Test the rule on a single non-critical user first. Remember that home broadband addresses change and VPN exits move. And keep a second administrator account that connects from a different network, as a way back in.",
}
