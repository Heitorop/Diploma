<script setup>
import { storeToRefs } from "pinia";
import { usePoll } from "@/store/poll";
import BtnContBack from "@/ui/BtnContBack/index.vue";
import { ref } from "vue";

// STORES
const storePoll = usePoll();

// STATES
const { step1, rule } = storeToRefs(storePoll);
const form = ref(null);

const prev = () => {
  storePoll.$patch({ stepTab: "step-0" });
};

const next = async () => {
  const { valid } = await form.value.validate();
  if (valid) storePoll.$patch({ stepTab: "step-2" });
};
</script>

<template>
  <div class="flex justify-center align-center">
    <v-form @submit.prevent ref="form">
      <v-card :title="$t('staff.staff')">
        <v-card-text>
          <p>
            {{ $t("staff.q1") }}
          </p>
          <v-radio-group
            v-model="step1.r1"
            :rules="rule"
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
            :rules="rule"
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
            :rules="rule"
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
            :rules="rule"
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
            :rules="rule"
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
            :rules="rule"
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
            :rules="rule"
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
            :rules="rule"
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
            :rules="rule"
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
            :rules="rule"
            inline
            style="justify-content: space-evenly"
          >
            <v-radio :label="$t('systematically')" :value="1"></v-radio>
            <v-radio :label="$t('periodically')" :value="0.5"></v-radio>
            <v-radio :label="$t('never')" :value="0"></v-radio>
          </v-radio-group>
        </v-card-text>
        <BtnContBack :prev="prev" :next="next" submit />
      </v-card>
    </v-form>
  </div>
</template>
