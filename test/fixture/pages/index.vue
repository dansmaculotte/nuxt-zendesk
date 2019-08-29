<template>
  <div>
    <h1>Works!</h1>
    <button @click="load">
      Load
    </button>
    <button @click="toggle">
      Toggle
    </button>
    <button @click="show">
      Show
    </button>
    <button @click="hide">
      Hide
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    load () {
      this.$zendesk.load(process.env.ZENDESK_KEY)
    },
    toggle () {
      this.$zendesk.toggle()
    },
    show () {
      this.$zendesk.zE('webWidget', 'show')
    },
    hide () {
      this.$zendesk.hide()
    }
  }
}
</script>
