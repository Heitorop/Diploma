<script setup>
import { useRoute } from "vue-router";
import "./Styles.scss";

const $route = useRoute();
</script>

<template>
  <v-container fill-height>
    <v-app-bar :elevation="5" color="#1565C0" class="header">
      <router-link to="/">
        <v-app-bar-title>{{
          $route.name === "Conclusion"
            ? "На головну"
            : "Аудит стану інформаційної безпеки"
        }}</v-app-bar-title>
      </router-link>
    </v-app-bar>
    <router-view />
    <v-footer class="d-flex flex-column" color="#001F3F">
      <div class="px-4 py-4 text-center w-100">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer>
  </v-container>
</template>

<style scoped lang="scss">
.v-container {
  max-width: 1600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.v-footer {
  padding: 0;
  justify-content: center;
}
</style>
