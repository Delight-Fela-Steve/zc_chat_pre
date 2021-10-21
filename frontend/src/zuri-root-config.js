import { registerApplication, start } from "single-spa"

registerApplication({
  name: "@zuri/chat",
  app: () => System.import("@zuri/chat"),
  activeWhen: ["/"]
})

start({
  urlRerouteOnly: true
})
