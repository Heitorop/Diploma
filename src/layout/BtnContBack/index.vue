<script setup>
import {
  PROPS_FUNCTION_DEFAULT,
  PROPS_BOOLEAN_DEFAULT,
} from "@/constants/index.js";

const props = defineProps({
  prev: PROPS_FUNCTION_DEFAULT,
  next: PROPS_FUNCTION_DEFAULT,
  pass: PROPS_BOOLEAN_DEFAULT,
});
</script>

<template>
  <div class="btn-wrapper justify-space-between align-center">
    <v-btn
      color="light-blue"
      icon="mdi-arrow-left"
      size="default"
      @click="props.prev"
    />
    <v-btn
      v-if="!props.pass"
      color="light-blue"
      size="default"
      icon="mdi-arrow-right"
      @click="props.next"
    />
    <v-btn color="light-blue" size="default" @click="props.next"
      >Завершити тест</v-btn
    >
  </div>
</template>

<style lang="scss" scoped></style>
