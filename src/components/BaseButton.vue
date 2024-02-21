<script setup lang="ts">
type VariantType =
  | 'flat'
  | 'text'
  | 'elevated'
  | 'tonal'
  | 'outlined'
  | 'plain';
type SizeType = 'x-small' | 'small' | 'default' | 'large' | 'x-large';
const props = defineProps({
  color: String,
  block: Boolean,
  flat: Boolean,
  icon: String,
  elevation: String || Number,
  to: Object,
  disabled: Boolean,
  loading: Boolean,
  size: {
    type: String as () => SizeType,
    default: 'default'
  },
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
    :size="props.size"
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
