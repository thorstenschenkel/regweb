// vue
// - props: event

<template>
  <div v-if="event">
    <div class="row">
      <div class="col-12">
        <h5>{{ event.name }}</h5>
      </div>
    </div>
    <div v-if="showContests()">
      <div class="row">
        <label class="col-12">Wettberwerb</label>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: ["event"],
  methods: {
    showContests() {
      if (this.event && Vue._.isArray(this.event.contests)) {
        return this.event.contests.length > 1;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
</style>
