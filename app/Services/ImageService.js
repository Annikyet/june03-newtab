import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"


const imageApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/images?q=forest',
  timeout: 12000
})


class ImageService {
  constructor() {
  }
  
  async fetch() {
    console.log('fetching image')
    const res = await imageApi.get()
    console.log(res.data)
    console.log('image fetched')
    ProxyState.image = new Image(res.data)
  }
}

export const imageService = new ImageService()