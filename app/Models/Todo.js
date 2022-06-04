export class Todo {
  constructor() {
    this.name = 'Do this thing'
    this.id = 0
    this.completed = false
  }

  get Template() {
    return `
    <li class="list-group-item">
      <div>
        <input type="checkbox" checked onclick="app.todosController.complete('${this.id}')">
        ${this.name}
        <i class="mdi mdi-delete" onclick="app.todosController.remove('${this.id}')></i>
      </div>
    </li>`
  }
}