// Utilities
import { defineStore } from "pinia";

export const usePoll = defineStore("poll", {
  state: () => ({
    stepTab: "step-0",
    step1: {
      r1: 1,
      r2: 1,
      r3: 1,
      r4: 1,
      r5: 1,
      r6: 1,
      r7: 1,
      r8: 1,
      r9: 1,
      r10: 1,
    },
    sum1: null,
    step2: {
      r1: 1,
      r2: 1,
      r3: 1,
      r4: 1,
      r5: 1,
      r6: 1,
      r7: 1,
      r8: 1,
      r9: 1,
      r10: 1,
    },
    sum2: null,
    step3: {
      r1: 1,
      r2: 1,
      r3: 1,
      r4: 1,
      r5: 1,
      r6: 1,
      r7: 1,
      r8: 1,
      r9: 1,
      r10: 1,
    },
    sum3: null,
    step4: {
      r1: 1,
      r2: 1,
      r3: 1,
      r4: 1,
      r5: 1,
      r6: 1,
      r7: 1,
      r8: 1,
      r9: 1,
      r10: 1,
    },
    sum4: null,
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
      console.log('sdfdsf')
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
    }
  },
});
