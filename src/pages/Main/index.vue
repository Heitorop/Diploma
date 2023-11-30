<script setup>
import FirstSlide from "@/components/FirstSection/FirstSection.vue";
import AboutUs from "@/components/AboutUs/AboutUs.vue";
</script>

<template>
  <v-container fill-height>
    <v-responsive class="align-center fill-height">
      <FirstSlide />
      <v-divider></v-divider>
      <AboutUs />
    </v-responsive>
  </v-container>
</template>

<style lang="scss" scoped>
.v-divider {
  margin-top: 40px;
}
</style>
