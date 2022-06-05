import { ProxyState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"



const todosApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/annika/todos',
  timeout: 12000
})


class TodosService {
  constructor() {

  }

  async remove(id) {
    console.log('removing todo')
    const res = await todosApi.delete(id)
    console.log(res.data)
    this.fetch()
  }

  async update(id, completed) {
    console.log('marking completed')
    const res = await todosApi.put(
      id,
      {completed: completed}
    )
    console.log(res.data)
    this.fetch()
  }

  async fetch() {
    console.log('fetching todos')
    const res = await todosApi.get()
    console.log(res.data)
    ProxyState.todos = res.data.map(t => new Todo(t))
  }

  async create(description) {
    console.log('creating todo')
    const res = await todosApi.post('', {
      description: description
    })
    console.log(res.data)
    this.fetch()
  }
}

export const todosService = new TodosService()