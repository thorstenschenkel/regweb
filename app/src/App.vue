// data
// - title
// Event
// - listen to event: v-on:changeEvent
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
    <div v-show="isLoading">
      <spinner></spinner>
    </div>
    <div class="container">
      <h1>{{ title }}</h1>
      <event-picker v-on:changeEvent="updateSelectedEvent($event)"></event-picker>
      <charts v-bind:event="selectedEvent"></charts>
    </div>
  </div>
</template>

<script>
import EventPicker from "./components/EventPicker.vue";
import Charts from "./components/Charts.vue";
import Spinner from "./components/Spinner.vue";
import { EventBus } from "./shared/eventBus";
import { Event } from "./shared/eventEnum";

export default {
  components: {
    "event-picker": EventPicker,
    charts: Charts,
    spinner: Spinner
  },
  data() {
    return {
      title: "VORANMELDUNGEN",
      isLoading: false,
      selectedEvent: null
    };
  },
  created() {
    EventBus.$on(Event.LOADING, data => {
      console.log("loading: ", data);
      this.isLoading = data;
      // this.isLoading = true;
    });
  },
  methods: {
    updateSelectedEvent(newEvent) {
      this.selectedEvent = newEvent;
    }
  }
};
</script>

<style>
@import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
