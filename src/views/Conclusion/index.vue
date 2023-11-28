<script setup>
import { usePoll } from "@/store/poll";
import { storeToRefs } from "pinia";

// STORES
const storePoll = usePoll();

// STATES
const { sum1, sum2, sum3, sum4 } = storeToRefs(storePoll);

const series = [
  {
    name: "Series 1",
    data: [sum1.value, sum2.value, sum3.value, sum4.value, 6],
  },
];
const chartOptions = {
  plotOptions: {
    radar: {
      polygons: {
        strokeColor: "#e8e8e8",
        fill: {
          colors: ["green", "green", "yellow", "red"],
        },
      },
    },
  },
  chart: {
    height: 500,
    type: "radar",
  },
  title: {
    text: "Basic Radar Chart",
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
};
</script>

<template>
  <v-container fluid fill-height>
    <div id="chart">
      <apexchart
        type="radar"
        height="350"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </v-container>
</template>

<style lang="scss" scoped></style>
