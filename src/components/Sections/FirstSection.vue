<script setup>
import { ref, watch } from "vue";
// import { useDisplay } from "vuetify";
import { usePoll } from "@/store/poll";
import { useCommon } from "@/store/common";
import UserPoll from "@/components/poll/UserPoll.vue";
import BImage from "@/assets/small-business.webp";

// HOOKS
// const { mobile } = useDisplay();

// STORES
const storeCommon = useCommon();
const storePoll = usePoll();

// ACTIONS
const { clear } = storePoll;

// STATES
const loading = ref(false);

watch(
  () => loading.value,
  (l) => {
    if (!l) return;
    setTimeout(() => {
      loading.value = false;
      storeCommon.$patch({ showModal: "test" });
      storePoll.$patch({ stepTab: "step-0" });
    }, 1000);
  }
);

const showTest = () => {
  clear(true, true, true);
  loading.value = true;
};
</script>

<template>
  <v-row class="d-flex align-center justify-center my-md-10 my-sm-5 my-xs-12">
    <v-col cols="auto" class="w-75">
      <h1>Protect Your Business</h1>
      <p class="mt-md-2 mb-md-5 mt-sm-2 mb-sm-2 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
        harum
        ea, obcaecati
        debitis optio
        voluptate, nostrum consectetur fugit non at voluptatum nobis quis magni culpa itaque quasi molestias
        incidunt? Architecto!</p>
      <v-btn @click="showTest" :disabled="loading" :loading="loading" class="mt-2" size="large">Get started</v-btn>
      <v-img class="mt-md-16 mt-sm-8 mt-4" :src="BImage" />
    </v-col>
  </v-row>

  <UserPoll />
</template>

<style scoped lang="scss">
@import '@/styles/mixins.scss';

h1 {
  font-size: 64px;
  font-weight: 700;
}

p {
  font-size: 20px;
  line-height: 24px;
}

.v-img {
  border: 8px solid #000000;
  border-radius: 16px;
}

@include mq('tablet') {
  h1 {
    font-size: 48px;
  }

  p {
    font-size: 16px;
    line-height: 20px;
  }

}

@include mq('mobile') {
  h1 {
    font-size: 36px;
  }

  p {
    font-size: 16px;
    line-height: 20px;
  }

}
</style>
