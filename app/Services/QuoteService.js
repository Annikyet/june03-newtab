import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/Quote.js"



const quoteApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/quotes',
  timeout: 12000
})


class QuoteService {
  async fetch() {
    console.log('fetch quote')
    const res = await quoteApi.get()
    console.log(res.data)
    ProxyState.quote = new Quote(res.data)
  }
}

export const quoteService = new QuoteService()