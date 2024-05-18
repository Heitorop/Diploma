<script setup>
import { storeToRefs } from "pinia";
import { usePoll } from "@/store/poll";
import ModalCommon from "@/ui/Modal/ModalCommon.vue";
import Step0 from "@/components/poll/Step0/index.vue";
import Step1 from "@/components/poll/Step1/index.vue";
import Step2 from "@/components/poll/Step2/index.vue";
import Step3 from "@/components/poll/Step3/index.vue";
import Step4 from "@/components/poll/Step4/index.vue";
import Step5 from "@/components/poll/Step5/index.vue";
import "./Styles.scss";

// STORES
const storePoll = usePoll();

// STATES
const { stepTab } = storeToRefs(storePoll);
</script>

<template>
  <ModalCommon id="test" persistent>
    <v-window v-model="stepTab">
      <v-window-item value="step-0">
        <Step0 />
      </v-window-item>
      <v-window-item value="step-1">
        <div class="wrap-step q-px-md">
          <Step1 />
        </div>
      </v-window-item>
      <v-window-item value="step-2">
        <div class="wrap-step q-px-md">
          <Step2 />
        </div>
      </v-window-item>
      <v-window-item value="step-3">
        <div class="wrap-step q-px-md">
          <Step3 />
        </div>
      </v-window-item>
      <v-window-item value="step-4">
        <div class="wrap-step q-px-md">
          <Step4 />
        </div>
      </v-window-item>
      <v-window-item value="step-5">
        <div class="wrap-step q-px-md">
          <Step5 />
        </div>
      </v-window-item>
    </v-window>
  </ModalCommon>
</template>

<style lang="scss" scoped></style>
