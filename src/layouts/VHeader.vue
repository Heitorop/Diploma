<template>
    <v-app-bar :elevation="5" class="header">
        <router-link to="/">
            <v-app-bar-title>{{
                $route.name === "Conclusion"
                    ? "На головну"
                    : "SecureAudit"
                }}</v-app-bar-title>
        </router-link>
    </v-app-bar>
</template>

<script setup>
import { useRoute } from "vue-router";

const $route = useRoute();
</script>