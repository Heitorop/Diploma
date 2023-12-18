<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCommon } from "@/store/common";
import { usePoll } from "@/store/poll";
import Chart from "@/components/Chart/Chart.vue";
import Buying from "@/components/buying/Buying.vue";
import Info from "@/components/Info/index.vue";

// STORES
const storeCommon = useCommon();
const storePoll = usePoll();

// STATES
const { showAfter } = storeToRefs(storePoll);
const loading = ref(false);

// ACTIONS
const { clear } = storePoll;

watch(
  () => loading.value,
  (l) => {
    if (!l) return;
    setTimeout(() => {
      loading.value = false;
      storeCommon.$patch({ showModal: "buying", fullscreen: true });
      storePoll.$patch({ stepTab: "step-1" });
    }, 1000);
  }
);

const showTest = () => {
  clear(false, true);
  loading.value = true;
};
</script>

<template>
  <v-container fill-height>
    <Chart />
    <div style="display: flex; justify-content: center">
      <Info />
    </div>
    <v-row>
      <v-col align="center">
        <v-btn
          :loading="loading"
          color="#6C757D"
          min-width="228"
          size="default"
          @click="showTest"
          start
        >
          <v-icon icon="mdi-shield-check" size="default" start />
          Поліпшити захист
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="showAfter">
      <v-col>
        <Chart :showAfter="showAfter" />
        <div style="display: flex; justify-content: center">
      <Info />
    </div>
      </v-col>
    </v-row>
  </v-container>
  <Buying />
</template>

<style lang="scss" scoped>
.title {
  margin-top: 40px;
  font-size: clamp(2.5rem, 3vw, 3.75rem);
}

.v-btn {
  margin-top: 20px;
}
</style>
