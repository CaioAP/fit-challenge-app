<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <TheHeader />

  <main class="container">
    <slot></slot>
  </main>

  <TheFooter />
</template>

<style scoped></style>
