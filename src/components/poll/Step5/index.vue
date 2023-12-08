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
const { step5, rule } = storeToRefs(storePoll);

// ACTIONS
const { calculatePoll } = storePoll;

const prev = () => {
  storePoll.$patch({ stepTab: "step-4" });
};

const pass = () => {
  $router.push({ name: "Conclusion" });
  calculatePoll();
  storeCommon.$patch({ showModal: "" });
};
</script>

<template>
  <div class="flex justify-center align-center">
    <v-card :title="$t('documents.documents')">
      <v-card-text>
        <p>
          {{ $t("documents.q1") }}
        </p>
        <v-radio-group
          v-model="step5.r1"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("documents.q2") }}
        </p>
        <v-radio-group
          v-model="step5.r2"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('recordedActions')" :value="1"></v-radio>
          <v-radio :label="$t('verbalWishes')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("documents.q3") }}
        </p>
        <v-radio-group
          v-model="step5.r3"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("documents.q4") }}
        </p>
        <v-radio-group
          v-model="step5.r4"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("documents.q5") }}
        </p>
        <v-radio-group
          v-model="step5.r5"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('digital')" :value="1"></v-radio>
          <v-radio :label="$t('paper')" :value="0.25"></v-radio>
          <v-radio :label="$t('mixed')" :value="0.5"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("documents.q6") }}
        </p>
        <v-radio-group
          v-model="step5.r6"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("documents.q7") }}
        </p>
        <v-radio-group
          v-model="step5.r7"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('HighlevelSecrecy')" :value="1"></v-radio>
          <v-radio :label="$t('MediumlevelSecrecy')" :value="0.5"></v-radio>
          <v-radio :label="$t('LowLevelSecrecy')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("documents.q8") }}
        </p>
        <v-radio-group
          v-model="step5.r8"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("documents.q9") }}
        </p>
        <v-radio-group
          v-model="step5.r9"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="0"></v-radio>
          <v-radio :label="$t('no')" :value="1"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("documents.q10") }}
        </p>
        <v-radio-group
          v-model="step5.r10"
          :rules="rule"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
      </v-card-text>
      <BtnContBack :prev="prev" :next="pass" submit />
    </v-card>
  </div>
</template>
