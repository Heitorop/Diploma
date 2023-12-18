<script setup>
import { storeToRefs } from "pinia";
import { usePoll } from "@/store/poll";
import { useCommon } from "@/store/common";
import BtnContBack from "@/layout/BtnContBack/index.vue";

// STORES
const storePoll = usePoll();
const storeCommon = useCommon();

// STATES
const { step5, beforeSum5 } = storeToRefs(storePoll);

// ACTIONS
const { calculatePoll } = storePoll;

const prev = () => {
  storePoll.$patch({ stepTab: "step-4" });
};

const pass = () => {
  calculatePoll(true);
  storeCommon.$patch({ showModal: "" });
  storePoll.$patch({ showAfter: true });
};
</script>

<template>
  <div class="flex justify-center align-center">
    <v-card :title="$t('documents.documents')">
      <v-card-text v-if="beforeSum5 < 6">
        <p>
          {{ $t("buying.documents.q1") }}
        </p>
        <v-switch v-model="step5.r1" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.documents.q2") }}
        </p>
        <v-switch v-model="step5.r2" color="#00796B" :value="0.5" />
        <p>
          {{ $t("buying.documents.q3") }}
        </p>
        <v-switch v-model="step5.r3" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.documents.q4") }}
        </p>
        <v-switch v-model="step5.r4" color="#00796B" :value="0.5" />
        <p>
          {{ $t("buying.documents.q5") }}
        </p>
        <v-switch v-model="step5.r5" color="#00796B" :value="0.5" />
        <p>
          {{ $t("buying.documents.q6") }}
        </p>
        <v-switch v-model="step5.r6" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.documents.q7") }}
        </p>
        <v-switch v-model="step5.r7" color="#00796B" :value="0.5" />
        <p>
          {{ $t("buying.documents.q8") }}
        </p>
        <v-switch v-model="step5.r8" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.documents.q9") }}
        </p>
        <v-switch v-model="step5.r9" color="#00796B" :value="0.35" />
        <p>
          {{ $t("buying.documents.q10") }}
        </p>
        <v-switch v-model="step5.r10" color="#00796B" :value="0.25" />
      </v-card-text>
      <v-card-text v-else
        ><p class="high-defence-text">
          <b>{{ $t("highLevelDefence") }}</b>
        </p></v-card-text
      >
      <BtnContBack :prev="prev" :next="pass" />
    </v-card>
  </div>
</template>
