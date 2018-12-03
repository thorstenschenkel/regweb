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
  },
  created() {
    this.$http.get('https://bl78p0futl.execute-api.eu-west-1.amazonaws.com/public/regapi').then( (data) => {
      console.log( 'data: ', data); 
    }) 
  }
}
</script>

<style>
</style>
