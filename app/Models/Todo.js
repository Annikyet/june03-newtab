export class Todo {
  constructor() {
    this.name = 'Do this thing'
    this.id = 0
    this.completed = true
  }

  get Template() {
    return `
    <li class="list-group-item">
      <div>
        <input type="checkbox" ${this.completed ? "checked" : ""} onclick="app.todosController.${this.completed ? "un" : ""}complete('${this.id}')">
        ${this.name}
        <i class="mdi mdi-delete" onclick="app.todosController.remove('${this.id}')></i>
      </div>
    </li>`
  }
}