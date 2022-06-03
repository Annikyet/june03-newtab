import { ClockController } from "./Controllers/ClockController.js"
import { TodosController } from "./Controllers/TodosController.js"
import { WeatherController } from "./Controllers/WeatherController.js"

class App {
  // valuesController = new ValuesController();
  weatherController = new WeatherController()
  clockController = new ClockController()
  todosController = new TodosController()
}

window["app"] = new App()