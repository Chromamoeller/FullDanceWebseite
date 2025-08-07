// stores/danceStore.ts
import { defineStore } from "pinia";
import { ref } from "vue";

export const useDanceStore = defineStore("danceStore", () => {
  const chosenStyle = ref<string>(""); // z. B. "Latein" oder "Standard"
  const chosenDance = ref<string>(""); // z. B. "Cha Cha", "Waltz"
  const chosenLevel = ref<string>(""); // z. B. "Beginner", "Advanced"
  const chosenCount = ref<number>(0); // z. B. Anzahl Figuren
  const figureList = ref<string[]>([]); // z. B. ['Grundschritt', 'Linksdrehung']

  return {
    chosenStyle,
    chosenDance,
    chosenLevel,
    chosenCount,
    figureList,
  };
});
