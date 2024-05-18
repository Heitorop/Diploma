<script setup>
import { storeToRefs } from "pinia";
import { usePoll } from "@/store/poll";
import BtnContBack from "@/ui/BtnContBack/index.vue";

// STORES
const storePoll = usePoll();

// STATES
const { step4, rule } = storeToRefs(storePoll);

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
      <v-card-text>
        <p>
          {{ $t("it.q1") }}
        </p>
        <v-radio-group
          v-model="step4.r1"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("it.q2") }}
        </p>
        <v-radio-group
          v-model="step4.r2"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="0"></v-radio>
          <v-radio :label="$t('no')" :value="1"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("it.q3") }}
        </p>
        <v-radio-group
          v-model="step4.r3"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="0"></v-radio>
          <v-radio :label="$t('no')" :value="1"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("it.q4") }}
        </p>
        <v-radio-group
          v-model="step4.r4"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('systematically')" :value="1"></v-radio>
          <v-radio :label="$t('periodically')" :value="0.5"></v-radio>
          <v-radio :label="$t('notConducted')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("it.q5") }}
        </p>
        <v-radio-group
          v-model="step4.r5"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="0"></v-radio>
          <v-radio :label="$t('no')" :value="1"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("it.q6") }}
        </p>
        <v-radio-group
          v-model="step4.r6"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('extremelyEffective')" :value="1"></v-radio>
          <v-radio :label="$t('effective')" :value="0.5"></v-radio>
          <v-radio :label="$t('somethingWasDone')" :value="0.25"></v-radio>
          <v-radio :label="$t('worksOutOfTheBox')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("it.q7") }}
        </p>
        <v-radio-group
          v-model="step4.r7"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="0"></v-radio>
          <v-radio :label="$t('no')" :value="1"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("it.q8") }}
        </p>
        <v-radio-group
          v-model="step4.r8"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("it.q9") }}
        </p>
        <v-radio-group
          v-model="step4.r9"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio
            :label="$t('establishedSystematicallyUpdated')"
            :value="1"
          ></v-radio>
          <v-radio :label="$t('established')" :value="0.5"></v-radio>
          <v-radio :label="$t('notEstablished')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("it.q10") }}
        </p>
        <v-radio-group
          v-model="step4.r10"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('corporate')" :value="1"></v-radio>
          <v-radio :label="$t('personal')" :value="0"></v-radio>
        </v-radio-group>
      </v-card-text>
      <BtnContBack :prev="prev" :next="next" submit />
    </v-card>
  </div>
</template>
