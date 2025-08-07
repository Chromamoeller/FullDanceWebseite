import { defineStore } from "pinia";
import { ref } from "vue";

export const useDanceStore = defineStore("danceStore", () => {
  const dance1 = ref<string>("");

  return {
    dance1,
  };
});
