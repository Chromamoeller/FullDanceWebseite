<template>
  <div class="flex flex-wrap gap-4" v-if="store.filteredDances.length">
    <div
      :class="danceColorClass"
      class="flex items-center justify-center cursor-pointer w-25 h-25 text-center rounded-xl"
      v-for="dance in store.filteredDances"
      :key="dance.name"
      @click="store.setDance(dance.name)"
    >
      <p class="text-xl">
        {{ dance.name }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDanceStore } from "../store/danceStore";
import { computed } from "vue";

const store = useDanceStore();
const danceColorClass = computed(() => {
  if (store.chosenStyle === "Standard") return "bg-blue-200 active:bg-blue-400";
  if (store.chosenStyle === "Latein") return "bg-red-200 active:bg-red-400";
  return "bg-gray-100 text-gray-800"; // fallback
});
</script>
