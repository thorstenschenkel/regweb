<template>
  <div>
    <h2>Year</h2>
    <select v-model="selected">
      <option disabled value>Select the year of the event</option>
      <option v-for="year in years">{{ year }}</option>
    </select>
    {{ selected }}
  </div>
</template>

<script>
import { EventBus } from "./../shared/eventBus";

export default {
  data() {
    return {
      years: ["2018", "2019"],
      selected: ""
    };
  },
  created() {
    EventBus.$emit("loading", true);
    // const url =
    //   "https://bl78p0futl.execute-api.eu-west-1.amazonaws.com/public/regapi";
    const url = "http://jsonplaceholder.typicode.com/posts";
    this.$http
      .get(url)
      .then(data => {
        console.log("data: ", data);
      })
      .catch(error => {
        console.error("Cannot load the years!", error);
      })
      .finally(() => {
        EventBus.$emit("loading", false);
      });
  }
};
</script>

<style>
</style>
