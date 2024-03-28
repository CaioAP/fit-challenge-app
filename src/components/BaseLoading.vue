<script setup lang="ts">
defineProps({
  size: Number,
  indeterminate: Boolean,
  color: {
    type: String,
    default: 'amber-darken-2'
  }
});
</script>

<template>
  <v-progress-circular
    :size="size"
    :color="color"
    :indeterminate="indeterminate"
  />
</template>

<style scoped></style>
