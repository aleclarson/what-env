
# what-env v0.0.1

Detect browser engine, device type, and touch capability.

```js
const env = require('what-env')

env.SAFARI // true if in Safari browser
env.WEBKIT // true if using the WebKit engine
env.TOUCH // true if the device is touch-friendly
env.MOBILE // true if using a mobile device
env.APPLE // true if on a Mac, iPad, or iPhone
```

### Available properties

Pull requests accepted for new properties.

**Browser:**
- SAFARI

**Engine:**
- WEBKIT

**Device:**
- MOBILE
- PHONE
- TOUCH

**Brand:**
- APPLE
