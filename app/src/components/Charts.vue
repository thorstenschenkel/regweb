// vue
// - props: event

<template>
  <div v-if="event">
    <span>TODO</span>
    <h3>{{ event.name }}</h3>
  </div>
</template>

<script>
export default {
  props: ["event"]
};
</script>

<style>
</style>
