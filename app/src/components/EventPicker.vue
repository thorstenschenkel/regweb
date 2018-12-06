// select
// - v-for 
// - v-bind:value
// - v-model
// - v-on:change
// vue
// - created()
// - http
// EventBus
// - $emit

<template>
  <div>
    <div class="row">
      <div class="col-lg-2 col-md-3 col-sm-4 col-12 form-group">
        <div class="row">
          <label class="col-12" for="yearSelect">Year</label>
        </div>
        <div class="row">
          <div class="col-12">
          <select class="form-control" id="yearSelect" v-model="selectedYear" v-on:change="onYearChanged">
            <option disabled v-bind:value="null">Select a year</option>
            <option v-for="year in years" v-bind:key="year">{{ year }}</option>
          </select>
        </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-7 col-sm-8 col-12 form-group" v-if="selectedYear">
        <div class="row">
          <label class="col-12" for="eventSelect">Event</label>
        </div>
        <div class="row">
          <div class="col-12">
          <select class="form-control" id="eventSelect" v-model="selectedEvent">
            <option disabled v-bind:value="null">Select an event</option>
            <option v-for="event in events" v-bind:value="event.id" v-bind:key="event.id">{{ event.name }}</option>
          </select>
          </div>
        </div>
      </div>
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
    //    "https://4gzrl5wmb0.execute-api.eu-west-1.amazonaws.com/public/events";
    const url = "https://jsonplaceholder.typicode.com/todos/1";
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
      const url =
        "https://bl78p0futl.execute-api.eu-west-1.amazonaws.com/public/regapi";
      // const url = "http://jsonplaceholder.typicode.com/posts";
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
