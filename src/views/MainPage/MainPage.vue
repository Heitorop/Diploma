<script setup>
import FirstSlide from "@/pages/FirstSection/FirstSection.vue";
import AboutUs from "@/pages/AboutUs/AboutUs.vue";
import "@/styles/main.scss";


// VARIABLES
const icons =  ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
</script>

<template>
  <v-app theme="light">
    <v-container fluid fill-height>
      <v-responsive class="align-center fill-height">
        <FirstSlide />
        <v-divider></v-divider>
        <AboutUs />
      </v-responsive>
    </v-container>
    <v-footer class="d-flex flex-column">
    <div class="bg-light-blue d-flex w-100 align-center px-4">
      <strong>Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

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
  </v-app>
</template>

<style scoped lang="scss">
.v-divider {
  margin-top: 40px;
}

.v-application {
  color: white;
  background-color: rgb(2, 22, 48);
}
</style>
