import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";



function _draw() {
document.getElementById('weather').innerText = ProxyState.weather.WeatherString
document.getElementById('city').innerText = ProxyState.weather.city
}


export class WeatherController {
  constructor() {
    ProxyState.on('weather', _draw)
    _draw()
    weatherService.meow()

  }


}