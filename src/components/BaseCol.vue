<script setup lang="ts">
const props = defineProps({
  cols: String || Number || Boolean,
  sm: String || Number || Boolean,
  md: String || Number || Boolean,
  lg: String || Number || Boolean,
  xl: String || Number || Boolean,
  xxl: String || Number || Boolean
});
</script>

<template>
  <v-col
    :cols="props.cols"
    :sm="props.sm"
    :md="props.md"
    :lg="props.lg"
    :xl="props.xl"
    :xxl="props.xxl"
  >
    <slot></slot>
  </v-col>
</template>

<style scoped></style>
