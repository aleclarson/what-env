
var agent = navigator.userAgent
var hasTouch = 'ontouchstart' in document.documentElement
var isMobile = hasTouch && /mobile|android|ip(hone|od|ad)/i.test(agent)
var isApple = /macintosh|ip(hone|od|ad)/i.test(agent)
var isBlink = /(apple)?webkit\/537\.36/i.test(agent)
var isWebkit = !isBlink && /(apple)?webkit/i.test(agent)

module.exports = {
  TOUCH: hasTouch,
  MOBILE: isMobile,
  PHONE: isMobile && screen.width < 750,
  APPLE: isApple,
  WEBKIT: isWebkit,
  SAFARI: isApple && isWebkit,
}
