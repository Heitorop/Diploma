<script setup>
import FirstSection from "@/components/Sections/FirstSection.vue";
import "./Styles.scss";
import SecondSection from "@/components/Sections/SecondSection.vue";
import ThirdSection from "@/components/Sections/ThirdSection.vue";

</script>

<template>
    <v-responsive class="align-center text-center fill-height">
      <FirstSection />
      <SecondSection/>
      <ThirdSection /> 
    </v-responsive>
</template>

<style scoped lang="scss">
.v-container {
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
