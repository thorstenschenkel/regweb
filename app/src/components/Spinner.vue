// Event
// - listen to event: v-on:changeEvent
// Styles
// - scoped
// v-show
// created

<template>
  <div v-show="isLoading" class="spinner-container">
    <div class="center">
      <font-awesome-icon class="spinner" icon="spinner" spin/>
    </div>
  </div>
</template>

<script>
import { EventBus } from "./../shared/eventBus";
import { Event } from "./../shared/eventEnum";

export default {
  data() {
    return {
      isLoading: false
    };
  },
  created() {
    EventBus.$on(Event.LOADING, data => {
      console.log("loading: ", data);
      this.isLoading = data;
      // this.isLoading = true;
    });
  }
};
</script>

<style lang="scss" scoped>
.spinner-container {
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 255, 0.5);
  .center {
    z-index: 1000;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    width: 100px;
    height: 100px;
    .spinner {
      font-size: 7em;
      text-align: center;
    }
  }
}
</style>
