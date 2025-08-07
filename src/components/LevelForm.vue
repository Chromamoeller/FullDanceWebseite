<template>
  <div class="p-4 w-full h-full flex justify-around flex-col gap-4 z-10">
    <div class="flex flex-col">
      <label
        for="Level"
        class="text-[40px] font-bold mb-2 ml-4 text-center mb-10"
        >Schwierigkeitsgrad</label
      >
      <div class="flex w-full justify-around">
        <button
          class="w-25 h-25 bg-yellow-100 rounded-[50%] hover:bg-yellow-200 active:bg-yellow-300 text-xl font-bold"
        >
          Leicht
        </button>
        <button
          class="w-25 h-25 bg-yellow-400 rounded-[50%] hover:bg-yellow-500 active:bg-yellow-600 text-xl font-bold"
        >
          Mittel
        </button>
        <button
          class="w-25 h-25 bg-red-400 rounded-[50%] hover:bg-red-500 active:bg-red-600 text-xl text-white font-bold"
        >
          Schwer
        </button>
        <button
          class="w-25 h-25 bg-red-500 rounded-[50%] hover:bg-red-600 active:bg-red-700 text-xl text-white font-bold"
        >
          Sehr Schwer
        </button>
      </div>
    </div>
    <div class="flex flex-col">
      <label
        for="count"
        class="text-[40px] font-bold mb-2 ml-4 text-center mb-10"
        >Anzahl der Figuren</label
      >
      <input
        type="number"
        id="count"
        placeholder="123"
        class="bg-white ml-4 rounded-xl px-4 py-2 text-2xl font-bold text-center"
      />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
