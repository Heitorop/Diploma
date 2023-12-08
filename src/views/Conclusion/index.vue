<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCommon } from "@/store/common";
import { usePoll } from "@/store/poll";
import Chart from "@/components/Chart/Chart.vue";
import Buying from "@/components/buying/Buying.vue";

// STORES
const storeCommon = useCommon();
const storePoll = usePoll();

// STATES
const { showAfter } = storeToRefs(storePoll);
const loading = ref(false);

watch(
  () => loading.value,
  (l) => {
    if (!l) return;
    setTimeout(() => {
      loading.value = false;
      storeCommon.$patch({ showModal: "buying" });
      storePoll.$patch({ stepTab: "step-1" });
    }, 1000);
  }
);

const showTest = () => {
  loading.value = true;
};
</script>

<template>
  <v-container fill-height>
    <Chart />
    <v-divider></v-divider>
    <v-row
      ><v-col
        ><h1 :class="['title text-h2 font-weight-bold text-center']">
          Пояснення ,шо надо зробити ,щоб підняти захист
        </h1></v-col
      ></v-row
    >
    <v-row>
      <v-col>
        <div class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          doloremque, ipsam consequatur optio molestias dolores excepturi quia
          itaque nesciunt cupiditate vero tempore reiciendis voluptate, eaque
          dignissimos atque sint autem rem!
        </div>
        <v-btn
          :loading="loading"
          color="#6C757D"
          min-width="228"
          size="default"
          @click="showTest"
          start
        >
          <v-icon icon="mdi-shield-check" size="default" start />
          Поліпшити захист
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="showAfter">
      <v-col>
        <Chart />
      </v-col>
    </v-row>
  </v-container>
  <Buying />
</template>

<style lang="scss" scoped>
.title {
  margin-top: 40px;
  font-size: clamp(2.5rem, 3vw, 3.75rem);
}

.v-btn {
  margin-top: 20px;
}
</style>
