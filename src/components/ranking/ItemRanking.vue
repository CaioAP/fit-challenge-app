<script setup lang="ts">
import { computed } from 'vue';
import BaseRow from '../BaseRow.vue';
import BaseCol from '../BaseCol.vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  position: {
    type: Number,
    required: true
  },
  completed: {
    type: Number,
    default: 0
  },
  remaining: {
    type: Number,
    default: 0
  }
});

const nameInitials = computed(() => {
  return props.name
    .split(' ')
    .map((n: string) => n[0])
    .filter((n: string, i: number) => i < 2)
    .join('');
});
const completedPercentage = computed(() => {
  const total = props.completed + props.remaining;
  const percentage = (props.completed * 100) / total;
  if (percentage % 1 === 0) return percentage;
  return percentage.toFixed(2);
});
</script>

<template>
  <BaseRow align="center">
    <BaseCol sm="4" cols="12" class="d-flex align-center ga-2">
      <v-avatar class="ranking-item__avatar" color="amber">
        <span class="text-h6">{{ nameInitials }}</span>
      </v-avatar>
      <p class="ranking-item__name">{{ name }}</p>
    </BaseCol>
    <BaseCol sm="2" cols="12" class="d-flex justify-space-between">
      <b v-show="$vuetify.display.xs">Posição:</b>
      <p class="text-center" :class="{ 'w-100': $vuetify.display.smAndUp }">
        {{ position }}°
      </p>
    </BaseCol>
    <BaseCol sm="2" cols="12" class="d-flex justify-space-between">
      <b v-show="$vuetify.display.xs">Concluído:</b>
      <p class="text-center" :class="{ 'w-100': $vuetify.display.smAndUp }">
        {{ completed }}
      </p>
    </BaseCol>
    <BaseCol sm="2" cols="12" class="d-flex justify-space-between">
      <b v-show="$vuetify.display.xs">Restante:</b>
      <p class="text-center" :class="{ 'w-100': $vuetify.display.smAndUp }">
        {{ remaining }}
      </p>
    </BaseCol>
    <BaseCol sm="2" cols="12" class="d-flex justify-space-between">
      <b v-show="$vuetify.display.xs">Porcentagem:</b>
      <p class="text-center" :class="{ 'w-100': $vuetify.display.smAndUp }">
        {{ completedPercentage }}
      </p>
    </BaseCol>
  </BaseRow>
</template>

<style scoped>
.ranking-item__name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: minmax(160px, 200px);
}
</style>
