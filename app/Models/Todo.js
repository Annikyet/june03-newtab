import { generateId } from "../Utils/generateId.js"

export class Todo {
  constructor(data) {
    this.description = data.description
    this.id = data.id || generateId()
    this.completed = data.completed
  }

  get Template() {
      return `
      <li class="list-group-item">
        <div>
          <input type="checkbox" ${this.completed ? "checked": ""} onclick="app.todosController.update('${this.id}', ${!this.completed})">
          ${this.description}
          <i class="mdi mdi-delete" onclick="app.todosController.remove('${this.id}')"></i>
        </div>
      </li>`
  }
}