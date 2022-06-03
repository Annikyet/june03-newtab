


const todosApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/annika/todos',
  timeout: 12000
})


class TodosService {
  constructor() {

  }

  async remove() {
    console.log('removing todo')
    const res = await todosApi.delete('629a8e345be986001628b477')
    console.log(res.data)
  }

  async purr() {
    console.log('marking completed')
    const res = await todosApi.put(
      '629a8e345be986001628b477',
      {completed: true}
    )
    console.log(res.data)
  }

  async mrow() {
    console.log('fetching todos')
    const res = await todosApi.get()
    console.log(res.data)
  }

  async meow() {
    console.log('creating todo')
    const res = await todosApi.post('', {
      description: 'meowl at the moon'
    })
    console.log(res.data)
    this.mrow()
  }
}

export const todosService = new TodosService()