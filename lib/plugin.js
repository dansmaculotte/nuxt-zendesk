import Vue from 'vue'
import Zendesk from '@dansmaculotte/vue-zendesk'

export default function (context) {

  const options = <%= JSON.stringify(options) %>

  Vue.use(Zendesk, options)
}
