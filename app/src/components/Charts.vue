// vue
// - props: contest
<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab active>
          <template slot="title">
            <span>30 Tage bis
              <br>zur Veranstaltung
            </span>
          </template>
          <div>Tab Contents 1</div>
        </b-tab>
        <b-tab>
          <template slot="title">
            <span>60 Tage bis
              <br>zur Veranstaltung
            </span>
          </template>
          <div>Tab Contents 2</div>
        </b-tab>
        <b-tab>
          <template slot="title">
            <span>&nbsp;
              <br>Tabelle
            </span>
          </template>
          <div>Tab Contents 3</div>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "chart30"
    };
  },
  props: ["contest"],
  methods: {}
};
</script>

<style>
</style>
