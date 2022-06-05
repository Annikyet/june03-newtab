import { ProxyState } from "../AppState.js"
import { objectiveService } from "../Services/ObjectiveService.js"



function _draw() {
  document.getElementById('newobjective').value = ProxyState.objective
}


export class ObjectiveController {
  constructor() {
    ProxyState.on('objective', _draw)
  }

  update() {
    window.event.preventDefault()
    console.log('updating...')
    let objective = window.event.target.newobjective.value
    objectiveService.update(objective)
  }
}