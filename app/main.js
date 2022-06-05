import { ClockController } from "./Controllers/ClockController.js"
import { ImageController } from "./Controllers/ImageController.js"
import { QuoteController } from "./Controllers/QuoteController.js"
import { TodosController } from "./Controllers/TodosController.js"
import { WeatherController } from "./Controllers/WeatherController.js"

class App {
  // valuesController = new ValuesController();
  weatherController = new WeatherController()
  clockController = new ClockController()
  todosController = new TodosController()
  imageController = new ImageController()
  quoteController = new QuoteController()
}

window["app"] = new App()