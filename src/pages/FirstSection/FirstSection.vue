<script setup>
import { ref, watch } from "vue";
import { useDisplay } from "vuetify";
import { usePoll } from "@/store/poll";
import { useCommon } from "@/store/common";
import UserPoll from "@/components/poll/UserPoll.vue";
import "./index.scss";

// HOOKS
const { mobile } = useDisplay();

// STORES
const storeCommon = useCommon();
const storePoll = usePoll();

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
  loading.value = true;
};
</script>

<template>
  <div class="first-section">
    <v-row align="center">
      <v-col :cols="mobile ? 12 : 6">
        <h1
          :class="['title text-h2 font-weight-bold', mobile && 'text-center']"
        >
          {{ $t("slide1.title") }}
        </h1>

        <div :class="[mobile ? 'py-5' : 'py-14']" />
        <v-row>
          <v-col v-show="mobile"
            ><v-img height="300" src="@/assets/slide1.png"
          /></v-col>
        </v-row>
        <v-row :class="['d-flex align-center', mobile && 'justify-center']">
          <v-col cols="auto" class="btn-wrapper">
            <v-btn
              color="white"
              href="#aboutUs"
              min-width="228"
              size="x-large"
              variant="flat"
            >
              <v-icon icon="mdi-speedometer" size="large" start />

              Про нас
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn
              color="light-blue"
              min-width="228"
              size="x-large"
              variant="flat"
              :disabled="loading"
              :loading="loading"
              @click="showTest"
            >
              <v-icon icon="mdi-speedometer" size="large" start />

              Почнемо!
            </v-btn>
            <v-dialog v-model="loading" :scrim="false" persistent width="auto">
              <v-card color="primary">
                <v-card-text>
                  Please stand by
                  <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
                  ></v-progress-linear>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" v-show="!mobile"
        ><v-img height="500" src="@/assets/slide1.png"
      /></v-col>
    </v-row>
  </div>
  <UserPoll />
</template>

<style scoped lang="scss">
.first-section {
  h1 {
    font-size: clamp(2.5rem, 3vw, 3.75rem);
  }
}
</style>
