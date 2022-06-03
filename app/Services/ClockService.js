import { ProxyState } from "../AppState.js"






class ClockService {
  constructor() {

  }

  update() {
    ProxyState.clock.time = new Date(Date.now())
    ProxyState.clock = ProxyState.clock
  }
}

export const clockService = new ClockService()