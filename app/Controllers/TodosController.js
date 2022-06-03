import { ProxyState } from "../AppState.js"



function _draw() {
  let html = ''
  for (let t = 0; t < 6; t++) {
    html += ProxyState.todos[0].Template
  }
  document.getElementById('todos').innerHTML = html
}


export class TodosController {
  constructor() {
    _draw()
    ProxyState.on('todos', _draw)
  }
}