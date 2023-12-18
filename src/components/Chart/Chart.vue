<script setup>
import { useDisplay } from "vuetify";
import { usePoll } from "@/store/poll";
import { storeToRefs } from "pinia";
import { PROPS_BOOLEAN_DEFAULT } from "@/constants/index.js";

const props = defineProps({
  showAfter: PROPS_BOOLEAN_DEFAULT,
});
// HOOKS
const { xs, sm } = useDisplay();

// STORES
const storePoll = usePoll();

// STATES
const {
  beforeSum1,
  beforeSum2,
  beforeSum3,
  beforeSum4,
  beforeSum5,
  afterSum1,
  afterSum2,
  afterSum3,
  afterSum4,
  afterSum5,
} = storeToRefs(storePoll);

const series1 = [
  {
    name: "",
    data: [
      beforeSum1.value,
      beforeSum2.value,
      beforeSum3.value,
      beforeSum4.value,
      beforeSum5.value,
    ],
  },
];

const series2 = [
  {
    name: "",
    data: [
      beforeSum1.value,
      beforeSum2.value,
      beforeSum3.value,
      beforeSum4.value,
      beforeSum5.value,
    ],
  },
  {
    name: "",
    data: [
      afterSum1.value.toFixed(2),
      afterSum2.value.toFixed(2),
      afterSum3.value.toFixed(2),
      afterSum4.value.toFixed(2),
      afterSum5.value.toFixed(2),
    ],
  },
];

const chartOptions = {
  dataLabels: {
    enabled: true,
  },
  plotOptions: {
    radar: {
      polygons: {
        strokeColor: "#e8e8e8",
        fill: {
          colors: [
            "#81C784",
            "#81C784",
            "#81C784",
            "#81C784",
            "#FFFF8D",
            "#FFFF8D",
            "#FFFF8D",
            "#FF6E40",
            "#FF6E40",
            "#FF6E40",
          ],
        },
      },
    },
  },
  chart: {
    type: "radar",
    background: "#001F3F",
  },
  xaxis: {
    categories: [
      "Кадри",
      "Робота з контрагентами",
      "Фіз захист та ТЗО",
      "IT",
      "Документи",
    ],
  },
  yaxis: {
    min: 0,
    max: 10,
  },
  markers: {
    size: 0,
  },
};
</script>

<template>
  <div id="chart">
    <apexchart
      :height="sm || xs ? '380' : '600'"
      :options="chartOptions"
      :series="props.showAfter ? series2 : series1"
    ></apexchart>
  </div>
</template>

<style lang="scss" scoped></style>
