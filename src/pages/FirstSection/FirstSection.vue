<script setup>
import { useDisplay } from "vuetify";
import "./index.scss";

const { mobile } = useDisplay();
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
              href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
              min-width="228"
              rel="noopener noreferrer"
              size="x-large"
              target="_blank"
              variant="flat"
            >
              <v-icon icon="mdi-speedometer" size="large" start />

              Про нас
            </v-btn>
          </v-col>
          <v-col cols="auto">
            <v-btn
              color="light-blue"
              href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
              min-width="228"
              rel="noopener noreferrer"
              size="x-large"
              target="_blank"
              variant="flat"
            >
              <v-icon icon="mdi-speedometer" size="large" start />

              Почнемо!
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" v-show="!mobile"
        ><v-img height="500" src="@/assets/slide1.png"
      /></v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
.first-section {
  h1 {
    z-index: 1;
  }
}
</style>
