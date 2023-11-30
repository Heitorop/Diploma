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
  <div class="flex justify-center align-center">
    <v-card title="Card title" class="text-center">
      <v-card-text class="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, nihil
        maiores eveniet quas, tempore iure id corrupti placeat magni ipsum
        porro, odio similique incidunt alias. Minima quos voluptatum nam
        quisquam?
      </v-card-text>
      <v-btn :loading="loading" color="light-blue" min-width="228" size="default" @click="next">
        <v-icon icon="mdi-speedometer" size="default" start />
        {{ $t('continue') }}
      </v-btn>
    </v-card>
  </div>
</template>
