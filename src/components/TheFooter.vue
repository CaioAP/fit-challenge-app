<script setup lang="ts">
import { computed } from 'vue';

const githubLink = computed(() => 'https://github.com/CaioAP');
</script>

<template>
  <footer>
    <p class="text-center">
      Developed with ❤️ by
      <a :href="githubLink" target="_blank">Caio Alfonso</a>
    </p>
  </footer>
</template>

<style scoped>
footer {
  margin-top: auto;
  padding: 12px 0;
}
</style>
