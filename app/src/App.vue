// data
// - title
// Bootstrap
// - import
// EventBus
// - $on
// Components
// - spinner / Spinner
// - event-picker / EventPicker
// - charts / Charts

<template>
  <div>
    <div>
      <spinner></spinner>
    </div>
    <div class="container">
      <h1>{{ title }}</h1>
      <event-picker v-on:changeEvent="updateSelectedEvent($event)"></event-picker>
      <charts-overview v-bind:event="selectedEvent"></charts-overview>
    </div>
  </div>
</template>

<script>
import EventPicker from "./components/EventPicker.vue";
import ChartsOverview from "./components/ChartsOverview.vue";
import Spinner from "./components/Spinner.vue";

export default {
  data() {
    return {
      title: "VORANMELDUNGEN",
      selectedEvent: null
    };
  },
  components: {
    "event-picker": EventPicker,
    "charts-overview": ChartsOverview,
    spinner: Spinner
  },
  methods: {
    updateSelectedEvent(newEvent) {
      this.selectedEvent = newEvent;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
