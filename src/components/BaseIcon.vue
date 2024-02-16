<script setup lang="ts">
const props = defineProps({
  icon: String,
  color: String,
  size: String || Number
});
</script>

<template>
  <v-icon :icon="props.icon" :color="props.color" :size="props.size" />
</template>

<style scoped></style>
