<template>
  <div
    class="flex w-full h-[400px] border border-gray-300 divide-x divide-gray-300"
  >
    <div
      v-for="(column, index) in columns"
      :key="index"
      :class="[
        'transition-all duration-500 ease-in-out overflow-hidden',
        getColumnWidth(index),
        backgroundColor(index),
        backgroundColorExpaned(index),
        'relative flex flex-col items-center justify-center',
      ]"
    >
      <!-- Toggle Button -->
      <ExpandButton
        @click="toggle(index)"
        class="absolute top-2 right-2 text-sm px-2 py-1 rounded-full z-20"
        :expanded="expandedIndex === index"
      />

      <template v-if="expandedIndex === index">
        <component :is="column.component" />
      </template>

      <template v-else>
        <span
          class="rotate-270 origin-center text-xl font-semibold whitespace-nowrap"
        >
          {{ column.title }}
        </span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import TanzrichtungForm from "../components/TanzrichtungForm.vue";
import TanzForm from "../components/TanzForm.vue";
import LevelForm from "../components/LevelForm.vue";
import FolgeForm from "../components/FolgeListe.vue";
import ExpandButton from "../atoms/ExpandButton.vue";
import { ref } from "vue";

// const columns = [
//   { title: "Tanzrichtung" },
//   { title: "Tanz" },
//   { title: "Level/Anzahl" },
//   { title: "Folge" },
// ];
//Zukunftig
const columns = [
  { title: "Tanzrichtung", component: TanzrichtungForm },
  { title: "Tanz", component: TanzForm },
  { title: "Level/Anzahl", component: LevelForm },
  { title: "Folge", component: FolgeForm },
];
// <template v-if="expandedIndex === index">
//   <component :is="column.component" />
// </template>

// Welches Panel ist aktuell expandiert (nur eins gleichzeitig)
const expandedIndex = ref<number | null>(null);

const toggle = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
};

const getColumnWidth = (index: number) => {
  if (expandedIndex.value === null) return "w-1/4"; // 25% für alle
  if (expandedIndex.value === index) return "w-1/2"; // 50% für geöffnet
  return "w-1/6"; // 16.6% für alle anderen
};
const backgroundColor = (index: number) => {
  if (expandedIndex.value === null && index === 0)
    return "bg-gradient-to-r from-blue-100 to-green-100";
  if (expandedIndex.value === null && index === 1)
    return "bg-gradient-to-r from-green-100 to-red-100";
  if (expandedIndex.value === null && index === 2)
    return "bg-gradient-to-r from-red-100 to-yellow-100";
  if (expandedIndex.value === null && index === 3)
    return "bg-gradient-to-r from-yellow-100 to-blue-100";
  return "bg-gray-100";
};
const backgroundColorExpaned = (index: number) => {
  if (index === 0) return "bg-gradient-to-r from-blue-100 to-green-100";
  if (index === 1) return "bg-gradient-to-r from-green-100 to-red-100";
  if (index === 2) return "bg-gradient-to-r from-red-100 to-yellow-100";
  if (index === 3) return "bg-gradient-to-r from-yellow-100 to-blue-100";
  return "bg-gray-100";
};
</script>
