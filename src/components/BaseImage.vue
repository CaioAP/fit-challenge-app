<script setup lang="ts">
type SrcType =
  | string
  | { src: string; srcset: string; lazySrc: string; aspect: number };
const props = defineProps({
  width: String || Number,
  height: String || Number,
  aspectRatio: String || Number,
  cover: Boolean,
  rounded: String || Number || Boolean,
  src: String || (Object as () => SrcType)
});
</script>

<template>
  <v-img
    :width="props.width"
    :height="props.height"
    :aspect-ratio="props.aspectRatio"
    :cover="props.cover"
    :rounded="props.rounded"
    :src="props.src"
  />
</template>

<style scoped></style>
