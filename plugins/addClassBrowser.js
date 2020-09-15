import { UAParser } from 'ua-parser-js'

export default () => {
  window.addEventListener('load', () => {
    const uaParser = new UAParser()
    console.log(uaParser.getResult())
    const htmlTag = document.getElementsByTagName('html')
    const browserName = uaParser.getResult().browser.name
    const browserMajor = uaParser.getResult().browser.major
    if (browserName) htmlTag[0].classList.add(browserName.toLowerCase())
    if (browserName && browserMajor) htmlTag[0].classList.add(browserName.toLowerCase()+browserMajor.toLowerCase())
    const osName = uaParser.getResult().os.name
    if (osName)
      htmlTag[0].classList.add(osName.replace(/ /g, '-').toLowerCase())
  })
}
