<script setup>
import { ref, watch } from "vue";
import { usePoll } from "@/store/poll";

// STORES
const storePoll = usePoll();

// STATES
const loading = ref(false);

watch(
  () => loading.value,
  (l) => {
    if (!l) return;
    setTimeout(() => {
      loading.value = false;
      storePoll.$patch({ stepTab: "step-1" });
    }, 1000);
  }
);

const next = () => {
  loading.value = true;
};
</script>

<template>
  <div class="step-0 h-100">
    <v-card class="text-center h-100">
      <v-card-text class="text-center">
        {{ $t("startSlideText") }}
      </v-card-text>
      <v-btn :loading="loading" color="#000000" min-width="228" size="default" @click="next" start>
        {{ $t("continue") }}
      </v-btn>
    </v-card>
  </div>
</template>

<style lang="scss">
@import '@/styles/mixins';

.step-0 {
  @include mq('mobile') {
    .v-card {
      display: flex;
      flex-direction: column;

      &-text {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
