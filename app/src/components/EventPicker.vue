<template>
  <div>
    <div>
      <h2>Year</h2>
      <select v-model="selectedYear" v-on:change="onYearChanged">
        <option disabled value>Select a year</option>
        <option v-for="year in years">{{ year }}</option>
      </select>
      <span v-if="selectedYear">{{ selectedYear }}</span>
    </div>
    <div v-if="selectedYear">
      <h2>Event</h2>
      <select v-model="selectedEvent">
        <option disabled value>Select an event</option>
        <option v-for="event in events" v-bind:value="event.id">{{ event.name }}</option>
      </select>
      <span v-if="selectedEvent">{{ selectedEvent }}</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { EventBus } from "./../shared/eventBus";
import { Event } from "./../shared/eventEnum";

export default {
  data() {
    return {
      years: ["2018", "2019"],
      events: [{ id: 1, name: "abc" }, { id: 2, name: "xyz" }],
      selectedYear: null,
      selectedEvent: null
    };
  },
  created() {
    this.that = this;
    EventBus.$emit(Event.LOADING, true);
    // const url =
    //   "https://bl78p0futl.execute-api.eu-west-1.amazonaws.com/public/regapi";
    const url = "http://jsonplaceholder.typicode.com/posts";
    Vue.http
      .get(url)
      .then(data => {
        console.log("data: ", data);
      })
      .catch(error => {
        console.error("Cannot load the years!", error);
      })
      .finally(() => {
        EventBus.$emit(Event.LOADING, false);
      });
  },
  methods: {
    onYearChanged: () => {
      EventBus.$emit(Event.LOADING, true);
      // const url =
      //   "https://bl78p0futl.execute-api.eu-west-1.amazonaws.com/public/regapi";
      const url = "http://jsonplaceholder.typicode.com/posts";
      Vue.http
        .get(url)
        .then(data => {
          console.log("data: ", data);
        })
        .catch(error => {
          console.error("Cannot load the events!", error);
        })
        .finally(() => {
          EventBus.$emit(Event.LOADING, false);
        });
    }
  }
};
</script>

<style>
</style>
