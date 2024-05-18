<template>
  <v-app>
    <v-container fill-height>

      <v-header />
      <v-main>
        <router-view />
      </v-main>
      <v-footer class="d-flex flex-column">
        <div class="px-4 py-4 text-center w-100">
          {{ new Date().getFullYear() }}
        </div>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script setup>
import VHeader from './VHeader.vue';
</script>
