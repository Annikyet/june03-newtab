import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";



function _draw() {
  document.getElementById('quote-text').innerText = ProxyState.quote.quote
  document.getElementById('quote-author').innerText = ProxyState.quote.author
}


export class QuoteController {
  constructor() {
    quoteService.fetch()
    ProxyState.on('quote', _draw)
  }
}