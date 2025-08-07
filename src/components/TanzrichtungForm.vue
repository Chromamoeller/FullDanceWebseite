<template>
  <div class="p-4 w-full flex items-center flex-col gap-4 z-10">
    <h2 class="text-xl font-bold">Tanzrichtung aus einer Komponente</h2>
    <button
      class="w-90 h-15 bg-blue-200 rounded cursor-pointer hover:bg-blue-300 active:bg-blue-400 transition"
    >
      <p class="text-xl">Standard</p>
    </button>

    <button
      class="w-90 h-15 bg-red-200 rounded cursor-pointer hover:bg-red-300 active:bg-red-400 transition"
    >
      <p class="text-xl">Latein</p>
    </button>
    <button
      class="self-start px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Speichern
    </button>
  </div>
</template>

<script setup lang="ts"></script>
