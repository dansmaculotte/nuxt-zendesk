const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = Object.assign(
    {
      key: process.env.ZENDESK_KEY || '',
      disabled: process.env.ZENDESK_DISABLED || false,
      settings: {}
    },
    this.options.zendesk,
    moduleOptions
  )

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-zendesk.js',
    ssr: false,
    options
  })
}

module.exports.meta = require('../package.json')
