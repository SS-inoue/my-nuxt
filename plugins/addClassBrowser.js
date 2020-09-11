import { UAParser } from 'ua-parser-js'

export default () => {
  window.addEventListener('load', () => {
    const uaParser = new UAParser()
    const htmlTag = document.getElementsByTagName('html')
    const browserName = uaParser.getResult().browser.name
    if (browserName) htmlTag[0].classList.add(browserName.toLowerCase())
    const osName = uaParser.getResult().os.name
    if (osName)
      htmlTag[0].classList.add(osName.replace(/ /g, '_').toLowerCase())
  })
}
