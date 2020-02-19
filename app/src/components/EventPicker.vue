// select
// - v-for 
// - v-bind:value
// - v-model
// - v-on:change
// vue
// - created()
// - http.get
// EventBus
// - $emit
// Fire Event
// - $emit

<template>
  <div>
    <div class="row">
      <div class="col-lg-2 col-md-3 col-sm-4 col-12 form-group">
        <div class="row">
          <label class="col-12" for="yearSelect">Jahr</label>
        </div>
        <div class="row">
          <div class="col-12">
            <select
              class="form-control"
              id="yearSelect"
              v-model="selectedYear"
              v-on:change="onYearChanged"
            >
              <option disabled v-bind:value="null">Jahr auswählen</option>
              <option v-for="year in years" v-bind:key="year">{{ year }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-7 col-sm-8 col-12 form-group" v-if="selectedYear">
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
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { EventBus } from "./../shared/eventBus";
import { Event } from "./../shared/eventEnum";
import { Constants } from "./../shared/constants";
import {
  LOAD_YEARS_ERROR,
  LOAD_EVENTS_ERROR,
  LOAD_EVENT_ERROR,
  NO_YEARS_ERROR,
  NO_EVENTS_ERROR,
  NO_EVENT_ERROR
} from "./../shared/errorMap";

function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

export default {
  data() {
    return {
      years: [],
      events: [],
      selectedYear: null,
      selectedEvent: null,
      event: null
    };
  },
  created() {
    EventBus.$emit(Event.NO_ERROR);
    const url = Constants.REGAPI_BASE_URL;
    Vue.http
      .get(url)
      .then(data => {
        // console.log("data: ", data);
        if (data && data.body && data.body.years) {
          this.years = data.body.years;
        } else {
          EventBus.$emit(Event.ERROR, {
            errorKey: NO_YEARS_ERROR
          });
        }
      })
      .catch(error => {
        console.error("Cannot load the years!", error);
        EventBus.$emit(Event.ERROR, {
          errorKey: LOAD_YEARS_ERROR,
          httpError: error
        });
      })
      .finally(() => {
        EventBus.$emit(Event.LOADING, false);
      });
  },
  methods: {
    resetEvent() {
      this.selectedEvent = null;
      this.event = null;
      this.fireEvent();
    },
    fireEvent() {
      this.$emit("changeEvent", this.event);
    },
    onYearChanged() {
      EventBus.$emit(Event.NO_ERROR);
      EventBus.$emit(Event.LOADING, true);
      this.resetEvent();
      const url = Constants.REGAPI_BASE_URL + "?year=" + this.selectedYear;
      Vue.http
        .get(url)
        .then(data => {
          console.log("data: ", data);
          if (data && data.body && data.body.events) {
            this.events = data.body.events;
          } else {
            EventBus.$emit(Event.ERROR, {
              errorKey: NO_EVENTS_ERROR
            });
          }
        })
        .catch(error => {
          console.error("Cannot load the events!", error);
          EventBus.$emit(Event.ERROR, {
            errorKey: LOAD_EVENTS_ERROR,
            httpError: error
          });
        })
        .finally(() => {
          EventBus.$emit(Event.LOADING, false);
        });
    },
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