import { ProxyState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"



function _draw() {
  let html = ''
  for (let t = 0; t < ProxyState.todos.length; t++) {
    html += ProxyState.todos[t].Template
  }
  document.getElementById('todos').innerHTML = html
}


export class TodosController {
  constructor() {
    todosService.fetch()
    _draw()
    ProxyState.on('todos', _draw)
  }

  remove(id) {
    todosService.remove(id)
  }

  update(id, completion) {
    console.log('update' + id + completion)
    todosService.update(id, completion)
  }

  create() {
    window.event.preventDefault()
    let description = window.event.target.newtodo.value
    todosService.create(description)
  }
}