<template>
  <div>
    <div v-show="isLoading">
      <spinner></spinner>
    </div>
    <h1>{{ title }}</h1>
    <event-picker></event-picker>
  </div>
</template>

<script>
import EventPicker from "./components/EventPicker.vue";
import Spinner from "./components/Spinner.vue";
import { EventBus } from "./shared/eventBus";
import { Event } from "./shared/eventEnum";

export default {
  components: {
    "event-picker": EventPicker,
    "spinner": Spinner
  },
  data() {
    return {
      title: "VORANMELDUNGEN",
      isLoading: false
    };
  },
  created() {
    EventBus.$on(Event.LOADING, data => {
      console.log("loading: ", data);
      this.isLoading = data;
      // this.isLoading = true;
    });
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
