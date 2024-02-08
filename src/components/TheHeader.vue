<script setup lang="ts">
import { computed } from 'vue';

const title = computed(() => {
  return 'Fit Challenge';
});
</script>

<template>
  <header class="container">
    <h1 class="text-center text-amber">{{ title }}</h1>
  </header>
</template>

<style scoped>
header h1 {
  line-height: 3.25rem;
}
</style>
