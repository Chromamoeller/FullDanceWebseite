<script setup lang="ts"></script>

<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      |
      <RouterLink to="/anwesenheit">Anwesenheit</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped></style>
