import { ProxyState } from "../AppState.js"



const weatherApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather',
  timeout: 12000
})


class WeatherService {
  constructor() {

  }

  async meow() {
    const res = await weatherApi.get()
    console.log(res.data)
    console.log('temp: ' + res.data.main.temp)
    console.log('city: ' + res.data.name)
    ProxyState.weather.temperature = res.data.main.temp
    ProxyState.weather.city = res.data.name
    ProxyState.weather = ProxyState.weather

  }
}

export const weatherService = new WeatherService()