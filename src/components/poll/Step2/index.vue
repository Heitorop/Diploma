<script setup>
import { storeToRefs } from "pinia";
import { usePoll } from "@/store/poll";

// STORES
const storePoll = usePoll();

// STATES
const { step2 } = storeToRefs(storePoll);

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
      <v-card-text>
        <p>
          {{ $t("counterparties.q1") }}
        </p>
        <v-radio-group v-model="step2.r1" inline style="justify-content: space-evenly">
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("counterparties.q2") }}
        </p>
        <v-radio-group v-model="step2.r2" inline style="justify-content: space-evenly">
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("counterparties.q3") }}
        </p>
        <v-radio-group v-model="step2.r3" inline style="justify-content: space-evenly">
          <v-radio
            :label="$t('repeatedly')"
            :value="1"
          ></v-radio>
          <v-radio :label="$t('once')" :value="0.5"></v-radio>
          <v-radio :label="$t('never')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("counterparties.q4") }}
        </p>
        <v-radio-group v-model="step2.r4" inline style="justify-content: space-evenly">
          <v-radio :label="$t('yes')" :value="0"></v-radio>
          <v-radio :label="$t('no')" :value="1"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("counterparties.q5") }}
        </p>
        <v-radio-group v-model="step2.r5" inline style="justify-content: space-evenly">
          <v-radio :label="$t('yes')" :value="0"></v-radio>
          <v-radio :label="$t('no')" :value="1"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("counterparties.q6") }}
        </p>
        <v-radio-group v-model="step2.r6" inline style="justify-content: space-evenly">
          <v-radio
            :label="$t('repeatedly')"
            :value="1"
          ></v-radio>
          <v-radio :label="$t('once')" :value="0.5"></v-radio>
          <v-radio :label="$t('never')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("counterparties.q7") }}
        </p>
        <v-radio-group v-model="step2.r7" inline style="justify-content: space-evenly">
          <v-radio
            :label="$t('repeatedly')"
            :value="1"
          ></v-radio>
          <v-radio :label="$t('once')" :value="0.5"></v-radio>
          <v-radio :label="$t('never')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("counterparties.q8") }}
        </p>
        <v-radio-group v-model="step2.r8" inline style="justify-content: space-evenly">
          <v-radio :label="$t('yes')" :value="1"></v-radio>
          <v-radio :label="$t('no')" :value="0"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("counterparties.q9") }}
        </p>
        <v-radio-group v-model="step2.r9" inline style="justify-content: space-evenly">
          <v-radio :label="$t('yes')" :value="0"></v-radio>
          <v-radio :label="$t('no')" :value="1"></v-radio>
        </v-radio-group>
        <p>
          {{ $t("counterparties.q10") }}
        </p>
        <v-radio-group v-model="step2.r10" inline style="justify-content: space-evenly">
          <v-radio :label="$t('yes')" :value="0"></v-radio>
          <v-radio :label="$t('no')" :value="1"></v-radio>
        </v-radio-group>
      </v-card-text>
      <div class="btn-wrapper">
        <v-btn color="light-blue" min-width="228" size="default" @click="prev">
          <v-icon icon="mdi-speedometer" size="default" start />
          Назад
        </v-btn>
        <v-btn color="light-blue" min-width="228" size="default" @click="next">
          <v-icon icon="mdi-speedometer" size="default" start />
          Далі
        </v-btn>
      </div>
    </v-card>
  </div>
</template>
