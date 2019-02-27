// vue
// - props: event, contest
<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab active>
          <template slot="title">
            <span>Chart</span>
          </template>
          <div>
            <GChart type="ColumnChart" v-bind:data="chart30Data" v-bind:options="chart30Options"/>
          </div>
        </b-tab>
        <b-tab>
          <template slot="title">
            <span>Tabelle</span>
          </template>
          <div class="t7-table-body">
            <GChart type="Table" v-bind:data="chartTableData" v-bind:options="chartTableOptions"/>
          </div>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Vue from "vue";
import { shortDateStrg, fullDateStrg } from "./../shared/date-tools";

function datesEqual(d1, d2) {
  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getYear() === d2.getYear()
  );
}

function getCount(date, counts) {
  const index = _.findIndex(counts, o => {
    const countDate = new Date(o.date);
    return datesEqual(countDate, date);
  });
  if (index === -1) {
    return 0;
  }
  return counts[index].count;
}

function getCounts(event, contest) {
  if (contest) {
    return contest.counts;
  } else {
    if (event && Vue._.isArray(event.contests)) {
      let counts;
      for (let contest of event.contests) {
        if (counts) {
          for (let count of contest.counts) {
            const ci = Vue._.findIndex(counts, c => {
              return Vue._.isArray(c.date)
                ? c.date.toDateString() === count.date.toDateString()
                : false;
            });
            if (ci >= 0) {
              counts[i].count += count.count;
            } else {
              counts.push(count);
            }
          }
        } else {
          counts = contest.counts;
        }
      }
      if (!counts) {
        counts = [];
      }
      return counts;
    }
  }
  return [];
}

function createChartArray(event, contest, barCount) {
  const counts = getCounts(event, contest);
  let date = new Date(event.date);
  const today = new Date();
  if (date > today) {
    date = today;
  }
  let chartArray = [];
  let noCounts = true;
  for (let i = 0; i < barCount; i++) {
    const shortDate = shortDateStrg(date);
    const count = getCount(date, counts);
    chartArray.unshift([shortDate, count]);
    date.setDate(date.getDate() - 1);
    if (count > 0) {
      noCounts = false;
    }
  }
  chartArray.unshift(["Datum", "Anzahl"]);
  if (noCounts) {
    return;
  }
  return chartArray;
}

function createTableArray(event, contest) {
  const counts = getCounts(event, contest);
  let date = new Date(event.date);
  const today = new Date();
  if (date > today) {
    date = today;
  }
  let chartArray = [];
  for (let i = 0; i < counts.length; i++) {
    const fullDate = fullDateStrg(date);
    const count = getCount(date, counts);
    chartArray.push([fullDate, count]);
    date.setDate(date.getDate() - 1);
  }
  chartArray.unshift(["Datum", "Anzahl"]);
  return chartArray;
}

export default {
  data() {
    return {
      chart30Data: [],
      // https://developers.google.com/chart/interactive/docs/gallery/columnchart
      chart30Options: {
        legend: "none",
        height: 250,
        vAxes: {
          0: { title: "Anmeldungen" }
        },
        vAxis: { minValue: 0 },
        annotations: {
          textStyle: {
            fontSize: 18,
            bold: true,
            // The color of the text.
            color: "#871b47"
          }
        },
        chart: {
          legend: "none",
          height: 250,
          // TODO
          title:
            "Die letzten 30 Tage vor der Veranstaltung / Anmeldungen der letzten 30 Tage",
          subtitle: "Anzahl der Meldungen: TODO"
        }
      },
      chartTableData: [],
      // https://developers.google.com/chart/interactive/docs/gallery/table
      chartTableOptions: {
        height: 250,
        width: 250,
        sort: "disable"
      }
    };
  },
  props: ["event", "contest"],
  created() {
    let data = createChartArray(this.event, this.contest, 30);
    if (data) {
      this.chart30Data = data;
    } else {
      this.chart30Data = [
        ["", { role: "annotation" }],
        ["", "Noch keine Anmeldungen"]
      ];
    }
    if (!data) {
      this.chart30Options.height = 75;
    }
    data = createTableArray(this.event, this.contest);
    this.chartTableData = data;
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.card-body {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0;
  padding-right: 0;
}
.t7-table-body {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
