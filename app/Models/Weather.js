export class Weather {
  constructor(data) {
    this.temperature // Degrees Kelvin
    this.city
    this.state  // State abbreviation
    this.unit // Temperature Units
  }

  get Celsius() {
    return this.temperature - 273
  }

  get Fahrenheit() {
    return (9 * this.Celsius / 5) + 32
  }

  get Template() {
    let degrees = this.temperature
    let unit = 'K'
    switch(this.unit) {
      case 'c':
        degrees = this.Celsius
        unit = 'C'
        break
      case 'f':
        degrees = this.Fahrenheit
        unit = 'F'
    }
    return `${degrees}°${unit} in ${this.city}, ${this.state}`
  }
}