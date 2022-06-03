import { ClockController } from "./Controllers/ClockController.js"
import { WeatherController } from "./Controllers/WeatherController.js"

class App {
  // valuesController = new ValuesController();
  weatherController = new WeatherController()
  clockController = new ClockController()
}

window["app"] = new App()