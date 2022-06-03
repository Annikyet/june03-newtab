import { ProxyState } from "../AppState.js"
import { clockService } from "../Services/ClockService.js"



function _draw() {
  document.getElementById('clock').innerText = ProxyState.clock.Template
}


export class ClockController {
  constructor() {
    clockService.update()
    // This should update every minute, on the minute
    setInterval(() => clockService.update(), 10000)
    _draw()
    ProxyState.on('clock', _draw)
  }

  changeUnit() {
    // No, use 24-hour time
  }
}