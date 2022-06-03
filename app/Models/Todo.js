export class Todo {
  constructor() {
    this.name = 'Do this thing'
  }

  get Template() {
    return `<li class="list-group-item">${this.name}</li>`
  }
}