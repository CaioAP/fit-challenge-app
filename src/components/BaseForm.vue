<script setup lang="ts">
type ValidateOnType =
  | 'input'
  | 'blur'
  | 'submit'
  | 'blur lazy'
  | 'input lazy'
  | 'submit lazy'
  | 'lazy blur'
  | 'lazy input'
  | 'lazy submit'
  | 'lazy';

const props = defineProps({
  fastFail: Boolean,
  modelValue: Boolean,
  validateOn: {
    type: String as () => ValidateOnType,
    default: 'lazy'
  }
});
const model = defineModel<boolean>();
defineEmits(['submit']);
</script>

<template>
  <v-form
    v-model="model"
    :fast-fail="props.fastFail"
    :validate-on="props.validateOn"
    @submit.prevent="$emit('submit')"
  >
    <slot></slot>
  </v-form>
</template>

<style scoped></style>
