<script setup>
import { useDisplay } from "vuetify";
import FirstSlide from "@/pages/FirstSection/FirstSection.vue";
import AboutUs from "@/pages/AboutUs/AboutUs.vue";
import "@/styles/main.scss";

// HOOKS
const { mobile } = useDisplay();

// VARIABLES
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>

<template>
    <v-container fluid fill-height>
      <v-app-bar
        :elevation="0"
        title="LOGO"
        class="header"
        :color="mobile ? 'blue-darken-4' : 'rgb(2, 22, 48)'"
      >
      </v-app-bar>
    </v-container>

    <v-container fluid fill-height>
      <v-responsive class="align-center fill-height">
        <FirstSlide />
        <v-divider></v-divider>
        <AboutUs />
      </v-responsive>
    </v-container>
    <v-footer class="d-flex flex-column">
      <div class="bg-black d-flex w-100 align-center justify-center px-4">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          :icon="icon"
          variant="plain"
          size="small"
        ></v-btn>
      </div>

      <div class="px-4 py-2 bg-black text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer>
</template>

<style scoped lang="scss">
.v-divider {
  margin-top: 40px;
}
.v-footer {
  padding: 0;
  justify-content: center;
}
</style>
