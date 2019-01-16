// - v-html
<template>
  <b-alert v-show="errorText" show dismissible variant="danger">
    <span v-html="errorText"></span>
  </b-alert>
</template>

<script>
import { EventBus } from "./../shared/eventBus";
import { Event } from "./../shared/eventEnum";
import { ErrorMap, UNEXPECTED_ERROR } from "./../shared/errorMap";

export default {
  data() {
    return {
      errorText: null
    };
  },
  created() {
    EventBus.$on(Event.ERROR, data => {
      console.log("error: ", UNEXPECTED_ERROR);
      this.errorText = null;
      if (data && data.errorKey) {
        this.errorText = ErrorMap.get(data.errorKey);
        if (!this.errorText) {
          this.errorText = ErrorMap.get(UNEXPECTED_ERROR);
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
