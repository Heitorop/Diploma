<script setup>
import "./Styles.scss";
// VARIABLES
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>

<template>
  <v-container fill-height>
    <v-app-bar :elevation="2" class="header" color="blue-darken-4">
      <router-link to="/">
        <v-app-bar-title>BusinessAudit</v-app-bar-title>
      </router-link>
    </v-app-bar>
  </v-container>
  <router-view />
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
.v-container {
  max-width: 1600px;
  height: 100%;
}
.v-footer {
  padding: 0;
  justify-content: center;
}
</style>
