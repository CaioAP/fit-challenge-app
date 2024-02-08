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
  leftIcon: String,
  required: Boolean,
  rules: Array<any>,
  type: {
    type: String,
    default: 'text'
  },
  variant: {
    type: String as () => VariantType,
    default: 'outlined'
  }
});
const model = defineModel();
</script>

<template>
  <v-text-field
    v-model.trim="model"
    :type="props.type"
    :label="props.label"
    :placeholder="props.placeholder"
    :rules="props.rules"
    :variant="props.variant"
    :prepend-inner-icon="props.leftIcon"
    :required="props.required"
    hide-details="auto"
  />
</template>

<style>
.v-field__loader {
  display: none;
}
</style>
