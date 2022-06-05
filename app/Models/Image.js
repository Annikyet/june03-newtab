export class Image {
  constructor(data) {
    this.imgUrl = data.largeImgUrl
    console.log(this.imgUrl)
    this.author = data.author
  }
}