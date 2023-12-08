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
    beforeSum1: useLocalStorage("beforeSum1", 0),
    afterSum1: useLocalStorage("afterSum1", 0),
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
    beforeSum2: useLocalStorage("beforeSum2", 0),
    afterSum2: useLocalStorage("afterSum2", 0),
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
      r11: null,
      r12: null,
      r13: null,
      r14: null,
      r15: null,
    },
    beforeSum3: useLocalStorage("beforeSum3", 0),
    afterSum3: useLocalStorage("afterSum3", 0),
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
      r11: null,
      r12: null,
      r13: null,
      r14: null,
      r15: null,
      r16: null,
      r17: null,
      r18: null,
      r19: null,
      r20: null,
    },
    beforeSum4: useLocalStorage("beforeSum4", 0),
    afterSum4: useLocalStorage("afterSum4", 0),
    step5: {
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
    beforeSum5: useLocalStorage("beforeSum5", 0),
    afterSum5: useLocalStorage("afterSum5", 0),
    showAfter: false,
    rule: [
      (value) => {
        if (value !== null) return true;
        return "Оберіть один із варіантів";
      },
    ],
  }),
  actions: {
    calculatePoll(buy = false) {
      let objectsArray = [
        this.step1,
        this.step2,
        this.step3,
        this.step4,
        this.step5,
      ];

      if (buy) {
        for (let i = 0; i < objectsArray.length; i++) {
          for (let key in objectsArray[i]) {
            switch (i) {
              case 0:
                this.afterSum1 += objectsArray[i][key];
                console.log(objectsArray[i][key]);
                break;
              case 1:
                this.afterSum2 += objectsArray[i][key];
                break;
              case 2:
                this.afterSum3 += objectsArray[i][key];
                break;
              case 3:
                this.afterSum4 += objectsArray[i][key];
                break;
              case 4:
                this.afterSum5 += objectsArray[i][key];
                break;
            }
          }
        }
      } else {
        for (let i = 0; i < objectsArray.length; i++) {
          for (let key in objectsArray[i]) {
            switch (i) {
              case 0:
                this.beforeSum1 += objectsArray[i][key];
                break;
              case 1:
                this.beforeSum2 += objectsArray[i][key];
                break;
              case 2:
                this.beforeSum3 += objectsArray[i][key];
                break;
              case 3:
                this.beforeSum4 += objectsArray[i][key];
                break;
              case 4:
                this.beforeSum5 += objectsArray[i][key];
                console.log(objectsArray[i][key]);
                break;
            }
          }
        }
      }
    },
    clear(sum = false, buy = false, all = false) {
      console.log('sdfsdfs')
      let objectsArray = [
        this.step1,
        this.step2,
        this.step3,
        this.step4,
        this.step5,
      ];
      if (sum) {
        this.beforeSum1 = 0;
        this.beforeSum2 = 0;
        this.beforeSum3 = 0;
        this.beforeSum4 = 0;
        this.beforeSum5 = 0;
        if (buy) {
          this.afterSum1 = 0;
          this.afterSum2 = 0;
          this.afterSum3 = 0;
          this.afterSum4 = 0;
          this.afterSum5 = 0;
        }
      }

      if (all) {
        this.beforeSum1 = 0;
        this.beforeSum2 = 0;
        this.beforeSum3 = 0;
        this.beforeSum4 = 0;
        this.beforeSum5 = 0;
        this.afterSum1 = 0;
        this.afterSum2 = 0;
        this.afterSum3 = 0;
        this.afterSum4 = 0;
        this.afterSum5 = 0;

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
              case 4:
                objectsArray[i][key] = null;
                break;
            }
          }
        }
      }
    },
  },
});
