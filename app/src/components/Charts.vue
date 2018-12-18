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
          <div>
            <GChart type="ColumnChart" v-bind:data="chart30Data" v-bind:options="chart30Options"/>
          </div>
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
      chart30Data: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350]
      ],
      chart30Options: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
  },
  props: ["contest"],
  methods: {}
};
</script>

<style>
</style>
