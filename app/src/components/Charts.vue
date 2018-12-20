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
          <div>Tab Contents 3</div>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
function datesEqual(d1, d2) {
  return (
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getYear() === d2.getYear()
  );
}

function parseDate(input) {
  var parts = input.match(/(\d+)/g);
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

function shortDateStrg(date) {
  const day = date.getDate();
  let strg = "";
  if (day < 10) {
    strg += "0";
  }
  strg += day;
  strg += ".";
  const month = date.getMonth() + 1;
  if (month < 10) {
    strg += "0";
  }
  strg += month;
  strg += ".";
  return strg;
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

function createChartArray(event, contest, barCount) {
  const counts = contest.counts;
  let date = parseDate(event.dateStrg);
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
        chart: {}
      }
    };
  },
  props: ["event", "contest"],
  created() {
    const data = createChartArray(this.event, this.contest, 30);
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
  },
  methods: {}
};
</script>

<style>
</style>
