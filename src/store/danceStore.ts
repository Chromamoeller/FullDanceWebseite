// stores/danceStore.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useDanceStore = defineStore("danceStore", () => {
  const chosenStyle = ref<string>(""); // z. B. "Latein" oder "Standard"
  const chosenDance = ref<string>(""); // z. B. "Cha Cha", "Waltz"
  const chosenLevel = ref<string>(""); // z. B. "Beginner", "Advanced"
  const chosenCount = ref<number>(0); // z. B. Anzahl Figuren
  const figureList = ref<string[]>([]); // z. B. ['Grundschritt', 'Linksdrehung']
  const allDances = [
    { name: "Langsamer Walzer", style: "Standard" },
    { name: "Tango", style: "Standard" },
    { name: "Foxtrott", style: "Standard" },
    { name: "Wiener Walzer", style: "Standard" },
    { name: "Discofox", style: "Standard" },
    { name: "Chachacha", style: "Latein" },
    { name: "Salsa", style: "Latein" },
    { name: "Samba", style: "Latein" },
    { name: "Rumba", style: "Latein" },
    { name: "Jive", style: "Latein" },
  ];
  const filteredDances = computed(() => {
    if (!chosenStyle.value) return [];
    return allDances.filter((d) => d.style === chosenStyle.value);
  });

  function setStyle(style: "Standard" | "Latein") {
    chosenStyle.value = style;
  }

  function setDance(dance: string) {
    console.log(dance);
    chosenDance.value = dance;
  }

  function setLevel(level: string) {
    chosenLevel.value = level;
  }

  function setCount(count: number) {
    chosenCount.value = count;
    console.log(count);
  }

  return {
    chosenStyle,
    chosenDance,
    chosenLevel,
    chosenCount,
    figureList,
    setStyle,
    setDance,
    setLevel,
    setCount,
    filteredDances,
  };
});
