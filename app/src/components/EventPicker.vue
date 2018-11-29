<template>
  <div>
    <h2>Year</h2>
    <select v-model="selected">
        <option disabled value="">Select the year of the event</option>
        <option v-for="year in years">{{ year }}</option>
    </select>
    {{ selected }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      years: ['2018', '2019'],
      selected: ''
    }
  }
}
</script>

<style>
</style>
