<script setup>
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify";
import { useCommon } from "@/store/common";
import { usePoll } from "@/store/poll";

defineProps({
  width: { type: String, default: "650px" },
  id: String,
  persistent: Boolean,
  scrollable: Boolean,
});

// HOOKS
const { xs } = useDisplay();

// STORES
const storeCommon = useCommon();
const storePoll = usePoll();

// STATES
const { showModal, fullscreen } = storeToRefs(storeCommon);

// ACTIONS
const { clear } = storePoll;

const hide = () => {
  if (showModal.value === "test") {
    clear(false, false, true);
    storeCommon.$patch({ showModal: "" });
  } else {
    storeCommon.$patch({ showModal: "" });
  }
};
</script>

<template>
  <v-dialog
    :persistent="persistent"
    :fullscreen="xs || fullscreen"
    :scrollable="scrollable"
    :model-value="showModal === id"
    :style="{ maxWidth: `${width}` }"
  >
    <v-card class="modal-common">
      <v-card-actions class="justify-end">
        <v-btn color="#990000" @click="hide">
          <v-icon icon="mdi-close"></v-icon>
        </v-btn>
      </v-card-actions>
      <v-container><slot /></v-container>
    </v-card>
  </v-dialog>
</template>

<style lang="scss">
.wrap-modal {
  margin: auto;
  border-radius: 20px;
  width: 100%;
  @include mq("mobile") {
    border-radius: 0;
    max-width: 100% !important;
  }
}

.v-dialog {
  .v-card {
  }
}
</style>
