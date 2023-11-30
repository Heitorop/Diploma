<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { usePoll } from "@/store/poll";
import { useCommon } from "@/store/common";
import BtnContBack from "@/layout/BtnContBack/index.vue";

// ROUTES
const $router = useRouter();

// STORES
const storePoll = usePoll();
const storeCommon = useCommon();

// STATES
const { step4 } = storeToRefs(storePoll);

// ACTIONS
const { calculatePoll, clear } = storePoll;

const prev = () => {
  storePoll.$patch({ stepTab: "step-3" });
};

const pass = () => {
  $router.push({ name: "Conclusion" });
  calculatePoll();
  clear();
  storeCommon.$patch({ showModal: "" });
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
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('corporate')" :value="1"></v-radio>
          <v-radio :label="$t('personal')" :value="0"></v-radio>
        </v-radio-group>
      </v-card-text>
      <BtnContBack :prev="prev" :next="pass" pass />
    </v-card>
  </div>
</template>
