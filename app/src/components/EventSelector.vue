<template>
  <div class="form-group">
    <div class="row">
      <label class="col-12" for="eventSelect">Veranstaltung</label>
    </div>
    <div class="row">
      <div class="col-12">
        <select
          class="form-control"
          id="eventSelect"
          v-model="selectedEvent"
          v-on:change="onEventChanged"
        >
          <option disabled v-bind:value="null">Veranstaltung auswählen</option>
          <option
            v-for="event in events"
            v-bind:value="event"
            v-bind:key="event.id"
          >{{ event.dateStrg }} - {{ event.name }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { EventBus } from "./../shared/eventBus";
import { Event } from "./../shared/eventEnum";
import { Constants } from "./../shared/constants";
import {
  LOAD_EVENT_ERROR,
  NO_EVENT_ERROR
} from "./../shared/errorMap";

export default {
  props: ["events", "event"],
  data() {
    return {
      selectedEvent: null,
    };
  },
  methods: {
    onEventChanged() {
      EventBus.$emit(Event.NO_ERROR);
      EventBus.$emit(Event.LOADING, true);
      this.event = null;
      this.fireEvent();
      const url =
        Constants.REGAPI_BASE_URL + "?eventId=" + this.selectedEvent._id;
      Vue.http
        .get(url)
        .then(data => {
          // console.log("data: ", data);
          if (data && data.body && data.body.event) {
            this.event = data.body.event;
            this.event.date = parseDate(this.event.dateStrg);
          } else {
            EventBus.$emit(Event.ERROR, {
              errorKey: NO_EVENT_ERROR
            });
          }
        })
        .catch(error => {
          console.error("Cannot load the events!", error);
          EventBus.$emit(Event.ERROR, {
            errorKey: LOAD_EVENT_ERROR,
            httpError: error
          });
        })
        .finally(() => {
          EventBus.$emit(Event.LOADING, false);
          this.fireEvent();
        });
    }
  }
};
</script>

<style>
</style>
