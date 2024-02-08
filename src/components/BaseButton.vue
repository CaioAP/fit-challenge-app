<script setup lang="ts">
type VariantType =
  | 'flat'
  | 'text'
  | 'elevated'
  | 'tonal'
  | 'outlined'
  | 'plain';
const props = defineProps({
  color: String,
  block: Boolean,
  flat: Boolean,
  icon: String,
  elevation: String || Number,
  to: String,
  disabled: Boolean,
  loading: Boolean,
  variant: {
    type: String as () => VariantType,
    default: 'elevated'
  },
  type: {
    type: String,
    default: 'button'
  }
});
</script>

<template>
  <v-btn
    :type="props.type"
    :variant="props.variant"
    :color="props.color"
    :block="props.block"
    :flat="props.flat"
    :icon="props.icon"
    :elevation="props.elevation"
    :to="props.to"
    :disabled="props.disabled"
    :loading="props.loading"
  >
    <slot></slot>
  </v-btn>
</template>

<style scoped></style>
