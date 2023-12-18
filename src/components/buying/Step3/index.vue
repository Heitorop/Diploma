<script setup>
import { storeToRefs } from "pinia";
import { usePoll } from "@/store/poll";
import BtnContBack from "@/layout/BtnContBack/index.vue";

// STORES
const storePoll = usePoll();

// STATES
const { step3, beforeSum3 } = storeToRefs(storePoll);

const prev = () => {
  storePoll.$patch({ stepTab: "step-2" });
};

const next = () => {
  storePoll.$patch({ stepTab: "step-4" });
};
</script>

<template>
  <div class="flex justify-center align-center">
    <v-card :title="$t('physProtection.physProtection')">
      <v-card-text v-if="beforeSum3 < 6">
        <p>
          {{ $t("buying.physProtection.q1") }}
        </p>
        <v-switch v-model="step3.r1" color="#00796B" :value="0.35" />
        <p>
          {{ $t("buying.physProtection.q2") }}
        </p>
        <v-switch v-model="step3.r2" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.physProtection.q3") }}
        </p>
        <v-switch v-model="step3.r3" color="#00796B" :value="0.4" />
        <p>
          {{ $t("buying.physProtection.q4") }}
        </p>
        <v-switch v-model="step3.r4" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.physProtection.q5") }}
        </p>
        <v-switch v-model="step3.r5" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.physProtection.q6") }}
        </p>
        <v-switch v-model="step3.r6" color="#00796B" :value="0.35" />
        <p>
          {{ $t("buying.physProtection.q7") }}
        </p>
        <v-switch v-model="step3.r7" color="#00796B" :value="0.35" />
        <p>
          {{ $t("buying.physProtection.q8") }}
        </p>
        <v-switch v-model="step3.r8" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.physProtection.q9") }}
        </p>
        <v-switch v-model="step3.r9" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.physProtection.q10") }}
        </p>
        <v-switch v-model="step3.r10" color="#00796B" :value="0.5" />
        <p>
          {{ $t("buying.physProtection.q11") }}
        </p>
        <v-switch v-model="step3.r11" color="#00796B" :value="0.3" />
        <p>
          {{ $t("buying.physProtection.q12") }}
        </p>
        <v-switch v-model="step3.r12" color="#00796B" :value="0.35" />
        <p>
          {{ $t("buying.physProtection.q13") }}
        </p>
        <v-switch v-model="step3.r13" color="#00796B" :value="0.4" />
        <p>
          {{ $t("buying.physProtection.q14") }}
        </p>
        <v-switch v-model="step3.r14" color="#00796B" :value="0.25" />
        <p>
          {{ $t("buying.physProtection.q15") }}
        </p>
        <v-switch v-model="step3.r15" color="#00796B" :value="0.25" />
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
