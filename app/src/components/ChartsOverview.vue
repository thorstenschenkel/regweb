// vue
// - props: event
// for-loop
// - index
// components
// - one-chart
// filter
// - lokal
// (global: Vue.filter('formatDate', function (value) { /* TODO */ });)

<template>
  <div v-if="event">
    <div class="row">
      <div class="col-12">
        <hr>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h4>{{ event.name }} am {{ event.date | formatDate }}</h4>
      </div>
    </div>
    <div v-if="showContests()">
      <div class="row">
        <label class="col-12">Wettberwerbe</label>
      </div>
      <div class="row">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link nav-link--small" v-bind:href="'#gesamt'">Gesamt</a>
          </li>
          <li v-for="(contest, index) in this.event.contests" class="nav-item">
            <a class="nav-link nav-link--small" v-bind:href="'#' + index">{{ contest.name }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="row">
        <a id="gesamt"></a>
        <div class="col-12">
          <h5>Gesamt</h5>
        </div>
        <div class="col-12">
          <charts v-bind:event="event"></charts>
        </div>
      </div>
      <div v-if="showContests()" v-for="(contest, index) in this.event.contests" class="row">
        <a v-bind:id="index"></a>
        <div class="col-12">
          <h5>{{ contest.name }}</h5>
        </div>
        <div class="col-12">
          <charts v-bind:event="event" v-bind:contest="contest"></charts>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Charts from "./Charts.vue";
import { fullDateStrg } from "./../shared/date-tools";

export default {
  props: ["event"],
  components: {
    charts: Charts
  },
  methods: {
    showContests() {
      if (this.event && Vue._.isArray(this.event.contests)) {
        return this.event.contests.length > 1;
      } else {
        return false;
      }
    }
  },
  filters: {
    formatDate: function(value) {
      return fullDateStrg(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-link--small {
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
</style>
