<template>
  <div>
    <h1>Works!</h1>
    <button @click="toggle">Toggle</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$zendesk('webWidget', 'toggle')
    }
  }
}
</script>
