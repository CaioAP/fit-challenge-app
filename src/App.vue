<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useAlertStore } from '@/stores/alert';
import BaseAlert from '@/components/BaseAlert.vue';

const alertStore = useAlertStore();
</script>

<template>
  <component :is="$route.meta.layout || 'div'">
    <RouterView />
  </component>

  <BaseAlert
    :show="alertStore.show"
    :type="alertStore.type"
    :message="alertStore.message"
    class="alert"
    position="fixed"
    max-width="400px"
    border="top"
    prominent
    closable
    @close="alertStore.hideAlert"
  />
</template>

<style scoped>
.alert {
  bottom: 20px;
  z-index: 100;
}

@media screen and (min-width: 768px) {
  .alert {
    bottom: auto;
    top: 20px;
    right: 20px;
  }
}
</style>
