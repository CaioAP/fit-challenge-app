<script setup lang="ts">
type VariantType =
  | 'underlined'
  | 'outlined'
  | 'filled'
  | 'solo'
  | 'solo-inverted'
  | 'solo-filled'
  | 'plain';
const props = defineProps({
  label: String,
  placeholder: String,
  grow: Boolean,
  rows: Number,
  rowHeight: Number,
  variant: {
    type: String as () => VariantType,
    default: 'outlined'
  }
});
const model = defineModel();
</script>

<template>
  <v-textarea
    v-model.trim="model"
    :label="props.label"
    :auto-grow="props.grow"
    :placeholder="props.placeholder"
    :variant="props.variant"
    :rows="props.rows"
    :row-height="props.rowHeight"
    hide-details="auto"
  />
</template>

<style scoped></style>
