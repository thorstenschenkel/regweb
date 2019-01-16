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

function getHttpErrorText(httpError) {
  let text = "";
  if (httpError && httpError.ok === false) {
    if (httpError.status || httpError.statusText) {
      text += "<small>[";
      if (httpError.status) {
        text += "Status " + httpError.status;
      }
      if (httpError.status && httpError.statusText) {
        text += ": ";
      }
      if (httpError.statusText) {
        text += httpError.statusText;
      }
      text += "]</small>";
    }
  }
  return text;
}

export default {
  data() {
    return {
      errorText: null
    };
  },
  created() {
    EventBus.$on(Event.ERROR, data => {
      this.errorText = null;
      if (data && data.errorKey) {
        this.errorText = ErrorMap.get(data.errorKey);
      }
      if (!this.errorText) {
        this.errorText = ErrorMap.get(UNEXPECTED_ERROR);
      }
      if (data && data.httpError) {
        this.errorText += getHttpErrorText(data.httpError);
      }
    });
    EventBus.$on(Event.NO_ERROR, data => {
      this.errorText = null;
    });
  }
};
</script>

<style lang="scss" scoped>
</style>
