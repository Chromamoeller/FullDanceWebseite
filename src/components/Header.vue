<template>
  <header class="h-15 border-gray-200 px-6 py-2 shadow-sm text-lg">
    <div class="flex justify-between h-full items-center text-xl font-bold">
      <div class="w-full">
        <RouterLink class="p-2 rounded-xl hover:bg-gray-200" to="/"
          >Home</RouterLink
        >
      </div>
      <div class="flex justify-between w-full">
        <div class="flex w-full justify-around">
          <RouterLink
            class="p-2 rounded-xl hover:bg-gray-200"
            to="/AnwesenheitsView"
            >AnwesenheitsView</RouterLink
          >
          <RouterLink
            class="p-2 rounded-xl hover:bg-gray-200"
            to="/Choreography"
            >Choreography</RouterLink
          >
          <RouterLink class="p-2 rounded-xl hover:bg-gray-200" to="/Videos"
            >Videos</RouterLink
          >
        </div>
        <div class="w-full flex justify-end">
          <button
            @click="login"
            v-if="!isLoggedIn"
            class="p-2 rounded-xl hover:bg-gray-200"
          >
            Login
          </button>
          <button
            @click="logout"
            v-else="!isLoggedIn"
            class="p-2 rounded-xl hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isLoggedIn = ref(true);

function login() {
  isLoggedIn.value = true;
}

function logout() {
  isLoggedIn.value = false;
}
</script>
