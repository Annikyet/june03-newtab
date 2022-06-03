import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Weather } from "./Models/Weather.js"
import { Clock } from "./Models/Clock.js"
import { Todo } from "./Models/Todo.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  // values = []

  weather = new Weather()
  clock = new Clock()
  todos = [new Todo()]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
