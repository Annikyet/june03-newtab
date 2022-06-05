import { generateId } from "../Utils/generateId.js"

export class Todo {
  constructor(data) {
    this.description = data.description
    this.id = data.id || generateId()
    this.completed = data.completed
  }

  get Template() {
    if (this.completed) {
      return `
      <li class="list-group-item">
        <div>
          <input type="checkbox" checked onclick="app.todosController.update('${this.id}', ${!this.completed})">
          ${this.description}
          <i class="mdi mdi-delete" onclick="app.todosController.remove('${this.id}')"></i>
        </div>
      </li>`
    }
    else {
      return `
      <li class="list-group-item">
        <div>
          <input type="checkbox" onclick="app.todosController.update('${this.id}', ${!this.completed})">
          ${this.description}
          <i class="mdi mdi-delete" onclick="app.todosController.remove('${this.id}')"></i>
        </div>
      </li>`
    }
  }
}