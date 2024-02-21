<script setup lang="ts">
import { ref } from 'vue';
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
  variant: {
    type: String as () => VariantType,
    default: 'outlined'
  }
});
const model = defineModel();
const visible = ref(false);
</script>

<template>
  <v-text-field
    v-model.trim="model"
    :type="visible ? 'text' : 'password'"
    :label="props.label"
    :variant="props.variant"
    :placeholder="props.placeholder"
    :required="props.required"
    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
    prepend-inner-icon="mdi-lock-outline"
    hide-details="auto"
    @click:append-inner="visible = !visible"
  />
</template>

<style scoped></style>
