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
      color="#000000"
      icon="mdi-arrow-left"
      size="default"
      @click="props.prev"
    />
    <v-btn
      v-if="!props.pass"
      color="#000000"
      size="default"
      icon
      :type="submit && 'submit'"
      @click="props.next"
      ><v-icon icon="mdi-arrow-right" /><v-tooltip
        activator="parent"
        location="top"
        >Далі</v-tooltip
      ></v-btn
    >
    <v-btn v-if="props.pass" color="#000000" size="default" @click="props.next"
      >Завершити тест</v-btn
    >
  </div>
</template>

<style lang="scss" scoped></style>
