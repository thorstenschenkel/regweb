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
// 
// TODO: Scroll To Top
// TODO?: https://bootstrap-vue.js.org/docs/directives/scrollspy/


<template>
  <div>
    <div>
      <spinner></spinner>
    </div>
    <div class="container">
      <h1>{{ title }}</h1>
      <error-panel></error-panel>
      <event-picker v-on:changeEvent="updateSelectedEvent($event)"></event-picker>
      <charts-overview v-bind:event="selectedEvent"></charts-overview>
    </div>
  </div>
</template>

<script>
import EventPicker from "./components/EventPicker.vue";
import ChartsOverview from "./components/ChartsOverview.vue";
import Spinner from "./components/Spinner.vue";
import ErrorPanel from "./components/ErrorPanel.vue";

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
    "error-panel": ErrorPanel,
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
