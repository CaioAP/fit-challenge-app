<script setup lang="ts">
type VariantType =
  | 'text'
  | 'flat'
  | 'elevated'
  | 'tonal'
  | 'outlined'
  | 'plain';
const props = defineProps({
  title: String,
  subtitle: String,
  prependIcon: String,
  appendIcon: String,
  color: String,
  to: Object,
  variant: {
    type: String as () => VariantType,
    default: 'outlined'
  }
});
</script>

<template>
  <v-card
    :title="props.title"
    :subtitle="props.subtitle"
    :prepend-icon="props.prependIcon"
    :append-icon="props.appendIcon"
    :variant="props.variant"
    :color="props.color"
    :to="props.to"
  >
    <template #prepend>
      <slot name="prepend"></slot>
    </template>
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #subtitle>
      <slot name="subtitle"></slot>
    </template>
    <template #append>
      <slot name="append"></slot>
    </template>
    <template #default>
      <slot></slot>
    </template>
  </v-card>
</template>

<style scoped></style>
