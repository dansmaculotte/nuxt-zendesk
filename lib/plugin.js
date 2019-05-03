import Vue from 'vue'
import Zendesk from '@dansmaculotte/vue-zendesk'

const KEY = '<%= options.key %>'
const DISABLED = <%= options.disabled %>
const SETTINGS = <%= JSON.stringify(options.settings) %>

export default function (context) {

  Vue.use(Zendesk, {
    key: KEY,
    disabled: DISABLED,
    settings: SETTINGS
  })
}
