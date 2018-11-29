<template>
  <div>
    <h1>{{ title }}</h1>
    <event-pciker></event-pciker>
  </div>
</template>

<script>
import EventPicker from './components/EventPicker.vue';

export default {
  components: {
    'event-pciker': EventPicker
  },
  data() {
    return {
      title: 'VORANMELDUGEN'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
