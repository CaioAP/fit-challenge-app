<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <TheHeader />

  <main class="container">
    <slot></slot>
  </main>
</template>

<style scoped></style>
