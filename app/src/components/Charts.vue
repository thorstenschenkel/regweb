// vue
// - props: event, contest
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
          <div>
            <GChart type="ColumnChart" v-bind:data="chart60Data" v-bind:options="chart60Options"/>
          </div>
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
function datesEqual(d1, d2) {
   retunr ( d1.getDay() === d2.getDay() && d1.getMonth() === d2.getMonth() && d1.getYear() === d2.getYear() );
}

function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

function shortDateStrg(date) {
  const day = date.getDay();
  let strg = day > 10 ? day : "0" + day;
  strg += ".";
  const month = date.getMonth() + 1;
  strg += month > 9 ? month : "0" + month;
  strg += ".";
  return strg;
}

function getCount(date, counts) {
  const index = _.findIndex(counts, (o) => { return datesEqual(o.date, date); });
  if ( index === -1 ) {
    return 0;
  } 
  return counts[index].count;
}

function createChartArray(event, contest, barCount) {
  const counts = contest.counts;
  let date = parseDate(event.dateStrg);
  let chartArray = [];
  for (let i = 0; i < barCount; i++) {
    const shortDate = shortDateStrg(date);
    const count = getCount(date, counts);
    chartArray.unshift([shortDate, count]);
    date.setDate(date.getDate() - 1);
  }
  chartArray.unshift(["Datum", "Anzahl"]);
  return chartArray;
}

export default {
  data() {
    return {
      chart30Data: [],
      chart30Options: {
        chart: {}
      },
      chart60Data: [],
      chart60Options: {
        chart: {}
      }
    };
  },
  props: ["event", "contest"],
  created() {
    this.chart30Data = createChartArray(this.event, this.contest, 30);
    this.chart60Data = createChartArray(this.event, this.contest, 60);
  },
  methods: {}
};
</script>

<style>
</style>
