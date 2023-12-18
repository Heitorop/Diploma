<script setup>
import { storeToRefs } from "pinia";
import { usePoll } from "@/store/poll";
import BtnContBack from "@/layout/BtnContBack/index.vue";

// STORES
const storePoll = usePoll();

// STATES
const { step2,beforeSum2 } = storeToRefs(storePoll);

const prev = () => {
  storePoll.$patch({ stepTab: "step-1" });
};

const next = () => {
  storePoll.$patch({ stepTab: "step-3" });
};
</script>

<template>
  <div class="flex justify-center align-center">
    <v-card :title="$t('counterparties.counterparties')">
      <v-card-text v-if="beforeSum2 < 6">
        <p>
          {{ $t("buying.counterparties.q1") }}
        </p>
        <v-switch v-model="step2.r1" color="#00796B" :value="0.35" />
        <p>
          {{ $t("buying.counterparties.q2") }}
        </p>
        <v-switch v-model="step2.r2" color="#00796B" :value="0.5" />
        <p>
          {{ $t("buying.counterparties.q3") }}
        </p>
        <v-switch v-model="step2.r3" color="#00796B" :value="0.5" />
        <p>
          {{ $t("buying.counterparties.q4") }}
        </p>
        <v-switch v-model="step2.r4" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.counterparties.q5") }}
        </p>
        <v-switch v-model="step2.r5" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.counterparties.q6") }}
        </p>
        <v-switch v-model="step2.r6" color="#00796B" :value="0.4" />
        <p>
          {{ $t("buying.counterparties.q7") }}
        </p>
        <v-switch v-model="step2.r7" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.counterparties.q8") }}
        </p>
        <v-switch v-model="step2.r8" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.counterparties.q9") }}
        </p>
        <v-switch v-model="step2.r9" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.counterparties.q10") }}
        </p>
        <v-switch v-model="step2.r10" color="#00796B" :value="0.35" />
      </v-card-text>
      <v-card-text v-else
        ><p class="high-defence-text">
          <b>{{ $t("highLevelDefence") }}</b>
        </p></v-card-text
      >
      <BtnContBack :prev="prev" :next="next" />
    </v-card>
  </div>
</template>
