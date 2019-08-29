import Vue from 'vue'
import Zendesk from '@dansmaculotte/vue-zendesk'

const KEY = '<%= options.key %>'
const DISABLED = <%= options.disabled %>
const HIDE_ON_LOAD = <%= options.hideOnLoad %>
const SETTINGS = <%= JSON.stringify(options.settings) %>

export default function (context) {
  Vue.use(Zendesk, {
    key: KEY,
    disabled: DISABLED,
    hideOnLoad: HIDE_ON_LOAD,
    settings: SETTINGS
  })
}
