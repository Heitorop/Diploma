<script setup>
import FirstSlide from "@/pages/FirstSection/FirstSection.vue";
import AboutUs from "@/pages/AboutUs/AboutUs.vue";
import "@/styles/main.scss";
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
