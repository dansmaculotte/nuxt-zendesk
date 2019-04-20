module.exports = function (moduleOptions) {
  const options = Object.assign(
    {
      key: process.env.ZENDESK_KEY || '',
      script: process.env.ZENDESK_SCRIPT || '//static.zdassets.com/ekr/snippet.js'
    },
    this.options.zendesk,
    moduleOptions
  )

  this.options.head.script.push({
    src: options.script + '?key=' + options.key,
    id: 'ze-snippet',
    async: true
  })
}

module.exports.meta = require('../package.json')
