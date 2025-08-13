<template>
  <div class="flex justify-center relative w-full">
    <img
      :src="dancingCouple"
      class="absolute inset-0 w-full h-full object-cover object-center"
    />
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div
      class="flex flex-col relative z-10 flex items-center justify-center h-full"
    >
      <h1 class="text-white text-4xl md:text-6xl font-bold">
        Voll Dance Studio
      </h1>
      <p class="text-white text-lg md:text-2xl mt-4 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea natus ullam
        ducimus deserunt possimus error necessitatibus asperiores dicta, impedit
        sunt veritatis est dolore facere dolorum ex id et nam dolorem. Nulla
        deserunt eos sunt mollitia voluptatum voluptatem? Enim, doloremque
        dolore!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import dancingCouple from "../assets/coupleDancing.webp";
</script>

<style scoped></style>
