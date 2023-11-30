<script setup>
import { usePoll } from "@/store/poll";
import { storeToRefs } from "pinia";

// STORES
const storePoll = usePoll();

// STATES
const { sum1, sum2, sum3, sum4 } = storeToRefs(storePoll);

const series = [
  {
    name: "BusinessDefensePoll",
    data: [sum1.value, sum2.value, sum3.value, sum4.value, 10],
  },
];
const chartOptions = {
  plotOptions: {
    radar: {
      polygons: {
        strokeColor: "#e8e8e8",
        fill: {
          colors: [
            "#78fb5c",
            "#78fb5c",
            "#78fb5c",
            "#78fb5c",
            "#f1de80",
            "#f1de80",
            "#f1de80",
            "#ff0e0e",
            "#ff0e0e",
            "#ff0e0e",
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
};
</script>

<template>
  <div id="chart">
    <apexchart
      height="600"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<style lang="scss" scoped></style>
