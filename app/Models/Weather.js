export class Weather {
  constructor() {
    this.temperature = 0
    this.city = 'The Void'
    this.unit = 'f'
  }

  get Celsius() {
    return this.temperature - 273
  }

  get Fahrenheit() {
    return (9 * this.Celsius / 5) + 32
  }

  get WeatherString() {
    let degrees = ''
    let unit = ''
    switch(this.unit) {
      case 'c':
        degrees = Math.round(this.Celsius)
        unit = '°C'
        break
      case 'f':
        degrees = Math.round(this.Fahrenheit)
        unit = '°F'
        break
      default:
        degrees = Math.round(this.temperature)
        unit = '°K'
    }
    return '<i class="mdi mdi-weather-lightning-rainy"></i>' + `${degrees}${unit}`
  }
}