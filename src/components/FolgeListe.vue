<template>
  <div class="p-4 w-full flex flex-col gap-4 z-10">
    <h2 class="text-xl font-bold">FolgenListe aus einer Komponente</h2>
    <input type="text" placeholder="Name" class="border p-2 rounded" />
    <textarea placeholder="Beschreibung" class="border p-2 rounded" />
    <button
      class="self-start px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Speichern
    </button>
  </div>
</template>

<script setup lang="ts"></script>
