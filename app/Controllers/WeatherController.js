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

  changeUnit() {
    switch(ProxyState.weather.unit) {
      case 'f':
        ProxyState.weather.unit = 'c'
        break
      case 'c':
        ProxyState.weather.unit = 'k'
        break
      default:
        ProxyState.weather.unit = 'f'
    }
    ProxyState.weather = ProxyState.weather
  }
}