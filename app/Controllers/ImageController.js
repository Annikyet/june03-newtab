import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";



function _draw() {
  console.log('drawing image')
  console.log(ProxyState.image.imgUrl)
  document.body.style.backgroundImage = `url('${ProxyState.image.imgUrl}')`
  console.log('giving credit')
  document.getElementById('photo-author').innerText = ProxyState.image.author
}


export class ImageController {
  constructor() {
    ProxyState.on('image', _draw)
    imageService.fetch()
  }

}