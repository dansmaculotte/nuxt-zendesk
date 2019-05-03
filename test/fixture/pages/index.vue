<template>
  <div>
    <h1>Works!</h1>
    <button @click="load">Load</button>
    <button @click="toggle">Toggle</button>
  </div>
</template>

<script>
export default {
  methods: {
    load() {
      this.$zendesk.load(process.env.ZENDESK_KEY)
    },
    toggle() {
      this.$zendesk('webWidget', 'toggle')
    }
  }
}
</script>
