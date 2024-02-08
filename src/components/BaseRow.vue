<script setup lang="ts">
type AlignType = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type JustifyType =
  | 'start'
  | 'end'
  | 'center'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
const props = defineProps({
  align: String as () => AlignType,
  justify: String as () => JustifyType,
  dense: Boolean,
  gutters: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <v-row
    :align="props.align"
    :justify="props.justify"
    :dense="props.dense"
    :no-gutters="!props.gutters"
  >
    <slot></slot>
  </v-row>
</template>

<style scoped></style>
