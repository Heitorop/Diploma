<script setup>
import { storeToRefs } from "pinia";
import { usePoll } from "@/store/poll";
import BtnContBack from "@/layout/BtnContBack/index.vue";

// STORES
const storePoll = usePoll();

// STATES
const { step4, beforeSum4 } = storeToRefs(storePoll);

const prev = () => {
  storePoll.$patch({ stepTab: "step-3" });
};

const next = () => {
  storePoll.$patch({ stepTab: "step-5" });
};
</script>

<template>
  <div class="flex justify-center align-center">
    <v-card :title="$t('it.it')">
      <v-card-text v-if="beforeSum4 < 6">
        <p>
          {{ $t("buying.it.q1") }}
        </p>
        <v-switch v-model="step4.r1" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q2") }}
        </p>
        <v-switch v-model="step4.r2" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q3") }}
        </p>
        <v-switch v-model="step4.r3" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q4") }}
        </p>
        <v-switch v-model="step4.r4" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q5") }}
        </p>
        <v-switch v-model="step4.r5" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q6") }}
        </p>
        <v-switch v-model="step4.r6" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q7") }}
        </p>
        <v-switch v-model="step4.r7" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q8") }}
        </p>
        <v-switch v-model="step4.r8" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q9") }}
        </p>
        <v-switch v-model="step4.r9" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q10") }}
        </p>
        <v-switch v-model="step4.r10" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q11") }}
        </p>
        <v-switch v-model="step4.r11" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q12") }}
        </p>
        <v-switch v-model="step4.r12" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q13") }}
        </p>
        <v-switch v-model="step4.r13" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q14") }}
        </p>
        <v-switch v-model="step4.r14" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q15") }}
        </p>
        <v-switch v-model="step4.r15" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q16") }}
        </p>
        <v-switch v-model="step4.r16" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q17") }}
        </p>
        <v-switch v-model="step4.r17" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q18") }}
        </p>
        <v-switch v-model="step4.r18" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q19") }}
        </p>
        <v-switch v-model="step4.r19" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.it.q20") }}
        </p>
        <v-switch v-model="step4.r20" color="#00796B" :value="0.25" />
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
