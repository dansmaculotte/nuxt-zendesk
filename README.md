# nuxt-zendesk

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> Nuxt.js module for Zendesk

This module allows to automatically add Zendesk Web Widget.
Please refer [vue-zendesk](https://github.com/dansmaculotte/vue-zendesk) plugin for configurations.

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add the `@dansmaculotte/nuxt-zendesk` dependency with `yarn` or `npm` to your project
2. Add `@dansmaculotte/nuxt-zendesk` to the `modules` section of `nuxt.config.js`
3. Configure it:

```js
{
  modules: [
    // Simple usage
    '@dansmaculotte/nuxt-zendesk',

    // With options
    [
      '@dansmaculotte/nuxt-zendesk',
      { /* module options */ }
    ],
  ],

  // Or with global options
  zendesk: {
    key: '',
    disabled: false,
    settings: {
      webWidget: {
        color: {
          theme: '#78a300'
        }
      }
    }
  }
}
```

## Options

### key

- Type: `String`
  - Default: `process.env.ZENDESK_KEY || ''`

### disabled

- Type: `Boolean`
  - Default: `process.env.ZENDESK_DISABLED || false'`

### settings

This option comes directly from [Zendesk documentation](https://developer.zendesk.com/embeddables/docs/widget/settings).

- Type: `Object`
  - Default: `{}`

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE.md)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@dansmaculotte/nuxt-zendesk.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@dansmaculotte/nuxt-zendesk

[npm-downloads-src]: https://img.shields.io/npm/v/@dansmaculotte/nuxt-zendesk/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@dansmaculotte/nuxt-zendesk

[david-dm-src]: https://david-dm.org/dansmaculotte/nuxt-zendesk/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/dansmaculotte/nuxt-zendesk

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
