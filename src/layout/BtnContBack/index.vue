<script setup>
import {
  PROPS_FUNCTION_DEFAULT,
  PROPS_BOOLEAN_DEFAULT,
} from "@/constants/index.js";

const props = defineProps({
  prev: PROPS_FUNCTION_DEFAULT,
  next: PROPS_FUNCTION_DEFAULT,
  pass: PROPS_BOOLEAN_DEFAULT,
  submit: PROPS_BOOLEAN_DEFAULT,
});
</script>

<template>
  <div class="btn-wrapper justify-space-between align-center">
    <v-btn
      color="#6C757D"
      icon="mdi-arrow-left"
      size="default"
      @click="props.prev"
    />
    <v-btn
      v-if="!props.pass"
      color="#6C757D"
      size="default"
      icon="mdi-arrow-right"
      :type="submit && 'submit'"
      @click="props.next"
    />
    <v-btn v-if="props.pass" color="#6C757D" size="default" @click="props.next"
      >Завершити тест</v-btn
    >
  </div>
</template>

<style lang="scss" scoped></style>
