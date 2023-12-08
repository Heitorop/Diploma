<script setup>
import { usePoll } from "@/store/poll";
import { storeToRefs } from "pinia";

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
  showAfter,
} = storeToRefs(storePoll);

const series1 = [
  {
    name: "Before",
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
    name: "Before",
    data: [
      beforeSum1.value,
      beforeSum2.value,
      beforeSum3.value,
      beforeSum4.value,
      beforeSum5.value,
    ],
  },
  {
    name: "After",
    data: [
      afterSum1.value,
      afterSum2.value,
      afterSum3.value,
      afterSum4.value,
      afterSum5.value,
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
    height: "350",
    type: "radar",
  },
  xaxis: {
    categories: [
      "Кадры",
      "Работа с контрагентами",
      "Физ защита и ТСО",
      "IT",
      "ПД",
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
      height="600"
      :options="chartOptions"
      :series="showAfter ? series2 : series1"
    ></apexchart>
  </div>
</template>

<style lang="scss" scoped></style>
