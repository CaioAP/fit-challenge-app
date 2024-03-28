<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <v-tooltip :text="text">
    <template #activator="{ props }">
      <slot v-bind="props"></slot>
    </template>
  </v-tooltip>
</template>

<style scoped></style>
