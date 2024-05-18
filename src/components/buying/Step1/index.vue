<script setup>
import { storeToRefs } from "pinia";
import { usePoll } from "@/store/poll";
import BtnContBack from "@/ui/BtnContBack/index.vue";

// STORES
const storePoll = usePoll();

// STATES
const { step1, beforeSum1 } = storeToRefs(storePoll);

const prev = () => {
  storePoll.$patch({ stepTab: "step-1" });
};

const next = () => {
  storePoll.$patch({ stepTab: "step-2" });
};
</script>

<template>
  <div class="flex justify-center align-center">
    <v-card :title="$t('staff.staff')">
      <v-card-text v-if="beforeSum1 < 6">
        <p>
          {{ $t("buying.staff.q1") }}
        </p>
        <v-switch v-model="step1.r1" color="#00796B" :value="0.5" />
        <p>
          {{ $t("buying.staff.q2") }}
        </p>
        <v-switch v-model="step1.r2" color="#00796B" :value="0.35" />
        <p>
          {{ $t("buying.staff.q3") }}
        </p>
        <v-switch v-model="step1.r3" color="#00796B" :value="0.5" />
        <p>
          {{ $t("buying.staff.q4") }}
        </p>
        <v-switch v-model="step1.r4" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.staff.q5") }}
        </p>
        <v-switch v-model="step1.r5" color="#00796B" :value="0.5" />
        <p>
          {{ $t("buying.staff.q6") }}
        </p>
        <v-switch v-model="step1.r6" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.staff.q7") }}
        </p>
        <v-switch v-model="step1.r7" color="#00796B" :value="0.5" />
        <p>
          {{ $t("buying.staff.q8") }}
        </p>
        <v-switch v-model="step1.r8" color="#00796B" :value="0.35" />
        <p>
          {{ $t("buying.staff.q9") }}
        </p>
        <v-switch v-model="step1.r9" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.staff.q10") }}
        </p>
        <v-switch v-model="step1.r10" color="#00796B" :value="0.25" />
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
