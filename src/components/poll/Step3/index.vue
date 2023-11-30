<script setup>
import { storeToRefs } from "pinia";
import { usePoll } from "@/store/poll";
import BtnContBack from "@/layout/BtnContBack/index.vue";

// STORES
const storePoll = usePoll();

// STATES
const { step3 } = storeToRefs(storePoll);

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
      <v-card-text>
        <p>
          {{ $t("physProtection.q1") }}
        </p>
        <v-radio-group
          v-model="step3.r1"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('allSystems')" :value="1"></v-radio>
          <v-radio :label="$t('systems')" :value="0.5"></v-radio>
          <v-radio :label="$t('onlyOneOfTheSystems')" :value="0.25"></v-radio>
          <v-radio :label="$t('noneOfTheSystems')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("physProtection.q2") }}
        </p>
        <v-radio-group
          v-model="step3.r2"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("physProtection.q3") }}
        </p>
        <v-radio-group
          v-model="step3.r3"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("physProtection.q4") }}
        </p>
        <v-radio-group
          v-model="step3.r4"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('conductedOfficially')" :value="1"></v-radio>
          <v-radio
            :label="$t('conductedSporadicallyContractor')"
            :value="0.5"
          ></v-radio>
          <v-radio
            :label="$t('conductedSporadicallyCustomer')"
            :value="0.25"
          ></v-radio>
          <v-radio :label="$t('notConducted')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("physProtection.q5") }}
        </p>
        <v-radio-group
          v-model="step3.r5"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("physProtection.q6") }}
        </p>
        <v-radio-group
          v-model="step3.r6"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("physProtection.q7") }}
        </p>
        <v-radio-group
          v-model="step3.r7"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("physProtection.q8") }}
        </p>
        <v-radio-group
          v-model="step3.r8"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('pre-installedLock')" :value="0"></v-radio>
          <v-radio :label="$t('armouredEntranceDoor')" :value="0.5"></v-radio>
          <v-radio :label="$t('barsOnWindows')" :value="0.75"></v-radio>
          <v-radio :label="$t('twoLocksDifferentTypes')" :value="1"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("physProtection.q9") }}
        </p>
        <v-radio-group
          v-model="step3.r9"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("physProtection.q10") }}
        </p>
        <v-radio-group
          v-model="step3.r10"
          inline
          style="justify-content: space-evenly"
        >
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
      </v-card-text>
      <BtnContBack :prev="prev" :next="next" />
    </v-card>
  </div>
</template>
