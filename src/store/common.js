// Utilities
import { defineStore } from "pinia";

export const useCommon = defineStore("common", {
  state: () => ({
    showModal: "",
    fullscreen: false,
  }),
});
