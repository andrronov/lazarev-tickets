<script>
export default {
  name: 'App',
  data(){
    return {
      text: ''
    }
  }
}
</script>

<template>
  <h2>Text: {{text}}</h2>
  <input type="text" v-model="text">
</template>

<style scoped>

</style>
