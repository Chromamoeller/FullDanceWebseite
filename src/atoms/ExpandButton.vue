<template>
  <button class="text-sm bg-blue-200 hover:bg-blue-400 px-2 py-1 rounded">
    {{ expanded ? "–" : "+" }}
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const expanded = ref(false);
</script>
