// Utilities
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const usePoll = defineStore("poll", {
  state: () => ({
    stepTab: "step-0",
    step1: {
      r1: null,
      r2: null,
      r3: null,
      r4: null,
      r5: null,
      r6: null,
      r7: null,
      r8: null,
      r9: null,
      r10: null,
    },
    sum1: useLocalStorage("sum1", 0),
    step2: {
      r1: null,
      r2: null,
      r3: null,
      r4: null,
      r5: null,
      r6: null,
      r7: null,
      r8: null,
      r9: null,
      r10: null,
    },
    sum2: useLocalStorage("sum2", 0),
    step3: {
      r1: null,
      r2: null,
      r3: null,
      r4: null,
      r5: null,
      r6: null,
      r7: null,
      r8: null,
      r9: null,
      r10: null,
    },
    sum3: useLocalStorage("sum3", 0),
    step4: {
      r1: null,
      r2: null,
      r3: null,
      r4: null,
      r5: null,
      r6: null,
      r7: null,
      r8: null,
      r9: null,
      r10: null,
    },
    sum4: useLocalStorage("sum4", 0),
  }),
  actions: {
    calculatePoll() {
      let objectsArray = [this.step1, this.step2, this.step3, this.step4];

      for (var i = 0; i < objectsArray.length; i++) {
        for (var key in objectsArray[i]) {
          switch (i) {
            case 0:
              this.sum1 += objectsArray[i][key];
              break;
            case 1:
              this.sum2 += objectsArray[i][key];
              break;
            case 2:
              this.sum3 += objectsArray[i][key];
              break;
            case 3:
              this.sum4 += objectsArray[i][key];
              break;
          }
        }
      }
    },
    clear() {
      console.log("sdfdsf");
      let objectsArray = [this.step1, this.step2, this.step3, this.step4];

      for (var i = 0; i < objectsArray.length; i++) {
        for (var key in objectsArray[i]) {
          switch (i) {
            case 0:
              objectsArray[i][key] = null;
              break;
            case 1:
              objectsArray[i][key] = null;
              break;
            case 2:
              objectsArray[i][key] = null;
              break;
            case 3:
              objectsArray[i][key] = null;
              break;
          }
        }
      }
    },
  },
});
