<script setup lang="ts">
type AlertType = 'success' | 'warning' | 'error' | 'info';
type BorderType = boolean | 'top' | 'end' | 'bottom' | 'start';
type PositionType = 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
type VariantType =
  | 'text'
  | 'flat'
  | 'elevated'
  | 'tonal'
  | 'outlined'
  | 'plain';
const props = defineProps({
  show: Boolean,
  message: String,
  closable: Boolean,
  prominent: Boolean,
  maxWidth: String || Number,
  type: String as () => AlertType,
  border: String as () => BorderType,
  variant: String as () => VariantType,
  position: String as () => PositionType
});
</script>

<template>
  <v-alert
    v-if="props.show"
    :type="props.type"
    :border="props.border"
    :variant="props.variant"
    :position="props.position"
    :prominent="props.prominent"
    :closable="props.closable"
    :max-width="props.maxWidth"
  >
    {{ props.message }}
  </v-alert>
</template>

<style scoped></style>
