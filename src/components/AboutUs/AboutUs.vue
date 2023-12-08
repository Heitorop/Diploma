<script setup>
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
</script>

<template>
  <v-row>
    <v-col>
      <h1 id="aboutUs" :class="['title text-h2 font-weight-bold text-center']">
        {{ $t("aboutUs.title") }}
      </h1>
      <div :class="[mobile ? 'py-5' : 'py-14']" />
      <v-row :class="['d-flex align-center']">
        <v-col :cols="mobile ? 12 : 6"
          ><v-img :height="mobile ? 300 : 500" src="@/assets/slide2.jpg"
        /></v-col>
        <v-col
          :cols="mobile ? 12 : 6"
          :class="['description align-self-start', mobile && 'text-center']"
        >
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iste
            pariatur autem officiis, laudantium voluptas? Odit ea voluptas
            repellendus, deserunt modi distinctio enim, minus reiciendis dolor
            sed fugit temporibus! Fugit.Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Illo iste pariatur autem officiis, laudantium
            voluptas? Odit ea voluptas repellendus, deserunt modi distinctio
            enim, minus reiciendis dolor sed fugit temporibus! Fugit.Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Illo iste
            pariatur autem officiis, laudantium voluptas? Odit ea voluptas
            repellendus, deserunt modi distinctio enim, minus reiciendis dolor
            sed fugit temporibus! Fugit.Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Illo iste pariatur autem officiis, laudantium
            voluptas? Odit ea voluptas repellendus, deserunt modi distinctio
            enim, minus reiciendis dolor sed fugit temporibus! Fugit.
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.title {
  margin-top: 40px;
  font-size: clamp(2.5rem, 3vw, 3.75rem);
}

.description {
  font-size: 20px;

  @media (width <= 780px) {
    font-size: 14px;
  }
}
</style>
