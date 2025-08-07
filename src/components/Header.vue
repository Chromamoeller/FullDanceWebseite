<template>
  <header class="border-b border-gray-200 px-6 py-2 shadow-sm text-lg">
    <div class="flex justify-between">
      <div class="w-full"><RouterLink to="/">Home</RouterLink></div>
      <div class="flex justify-between w-full">
        <div class="flex w-full justify-around">
          <RouterLink to="/AnwesenheitsView">AnwesenheitsView</RouterLink>
          <RouterLink to="/Choreography">Choreography</RouterLink>
        </div>
        <div class="w-full flex justify-end">
          <button>Login</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
