export class Clock {
  constructor() {
    this.time = new Date(Date.now())
    this.unit = 24
  }

  get Template() {
    let hour = this.time.getHours()
    let suffix = ''
    let dateString = ''
    switch (this.unit) {
      case 24:
        dateString = hour + ':'
        break
      case 12:
        // OMG 12-hour time is sooooo stupid. Who uses 1-indexed arrays????
        if (hour == 0) {
          dateString = '12:'
          suffix = ' AM'
        } else if (hour == 12) {
          dateString = '12:'
          suffix = ' PM'
        } else if (hour > 12) {
          dateString = (hour - 12) + ':'
          suffix = ' PM'
        } else {
          dateString = hour + ':'
          suffix = ' AM'
        }
      default:
        return `time is an illusion`
    }
    // need to handle minutes that start with '0'
    dateString += this.time.getMinutes()
    dateString += suffix
    return dateString
  }
}