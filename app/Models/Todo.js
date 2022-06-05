export class Todo {
  constructor() {
    this.name = 'Do this thing'
    this.id = 0
    this.completed = true
  }

  get Template() {
    if (this.completed) {
      return `
      <li class="list-group-item">
        <div>
          <input type="checkbox" checked onclick="app.todosController.uncomplete('${this.id}')">
          ${this.name}
          <i class="mdi mdi-delete" onclick="app.todosController.remove('${this.id}')"></i>
        </div>
      </li>`
    }
    else {
      return `
      <li class="list-group-item">
        <div>
          <input type="checkbox" onclick="app.todosController.complete('${this.id}')">
          ${this.name}
          <i class="mdi mdi-delete" onclick="app.todosController.remove('${this.id}')"></i>
        </div>
      </li>`
    }
  }
}