<script setup>
import { usePoll } from "@/store/poll";
import { storeToRefs } from "pinia";
import BtnContBack from "@/layout/BtnContBack/index.vue";

// STORES
const storePoll = usePoll();

// STATES
const { step1 } = storeToRefs(storePoll);

const prev = () => {
  storePoll.$patch({ stepTab: "step-0" });
};

const next = () => {
  storePoll.$patch({ stepTab: "step-2" });
};
</script>

<template>
  <div class="flex justify-center align-center">
    <v-card :title="$t('staff.staff')">
      <v-card-text>
        <p>
          {{ $t("staff.q1") }}
        </p>
        <v-radio-group
          v-model="step1.r1"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("staff.q2") }}
        </p>
        <v-radio-group
          v-model="step1.r2"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("staff.q3") }}
        </p>
        <v-radio-group
          v-model="step1.r3"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("staff.q4") }}
        </p>
        <v-radio-group
          v-model="step1.r4"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("staff.q5") }}
        </p>
        <v-radio-group
          v-model="step1.r5"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("staff.q6") }}
        </p>
        <v-radio-group
          v-model="step1.r6"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("staff.q7") }}
        </p>
        <v-radio-group
          v-model="step1.r7"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="0"></v-radio>
          <v-radio :label="$t('no')" :value="1"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("staff.q8") }}
        </p>
        <v-radio-group
          v-model="step1.r8"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('offRegisteredEmp')" :value="1"></v-radio>
          <v-radio :label="$t('outsourcing')" :value="0.75"></v-radio>
          <v-radio :label="$t('labourContract')" :value="0.5"></v-radio>
          <v-radio :label="$t('workingUnofficially')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("staff.q9") }}
        </p>
        <v-radio-group
          v-model="step1.r9"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('offRegisteredEmp')" :value="1"></v-radio>
          <v-radio :label="$t('outsourcing')" :value="0.75"></v-radio>
          <v-radio :label="$t('labourContract')" :value="0.5"></v-radio>
          <v-radio :label="$t('workingUnofficially')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("staff.q10") }}
        </p>
        <v-radio-group
          v-model="step1.r10"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('systematically')" :value="1"></v-radio>
          <v-radio :label="$t('periodically')" :value="0.5"></v-radio>
          <v-radio :label="$t('never')" :value="0"></v-radio>
        </v-radio-group>
      </v-card-text>
      <BtnContBack :prev="prev" :next="next" />
    </v-card>
  </div>
</template>
