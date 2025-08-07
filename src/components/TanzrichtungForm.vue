<template>
  <div class="p-4 w-full flex items-center flex-col gap-4 z-10">
    <h2 class="text-xl font-bold">Tanzrichtung aus einer Komponente</h2>
    <button
      @click="setStile('standard')"
      class="w-90 h-15 bg-blue-200 rounded cursor-pointer hover:bg-blue-300 active:bg-blue-400 transition"
    >
      <p class="text-xl">Standard</p>
    </button>

    <button
      @click="setStile('latein')"
      class="w-90 h-15 bg-red-200 rounded cursor-pointer hover:bg-red-300 active:bg-red-400 transition"
    >
      <p class="text-xl">Latein</p>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useDanceStore } from "../store/danceStore";

const danceStore = useDanceStore();

function setStile(style: string) {
  danceStore.chosenStyle = style;
}
</script>
