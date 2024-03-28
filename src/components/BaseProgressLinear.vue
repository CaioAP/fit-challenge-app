<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  maxValue: {
    type: Number,
    required: true
  },
  height: {
    type: String,
    default: '10px'
  },
  color: {
    type: String,
    default: 'primary'
  }
});

const completedPercentage = computed(() => {
  return Math.ceil((props.value / props.maxValue) * 100).toFixed(0);
});
</script>

<template>
  <div class="progress-wrapper">
    <slot name="value">{{ value }}</slot>
    <div
      class="progress-linear"
      :style="`height: ${height}; background-color: var(--${color}-color-lighten-4)`"
    >
      <div
        class="progress-linear--active"
        :style="`width: ${completedPercentage}%; background-color: var(--${color}-color)`"
      ></div>
    </div>
    <slot name="maxValue">{{ maxValue }}</slot>
  </div>
</template>

<style scoped>
.progress-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
}
.progress-linear {
  position: relative;
  width: 100%;
  border-radius: 50px;
  overflow: hidden;
}
.progress-linear--active {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 50px;
}
</style>
