<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue';
import BaseCardText from '@/components/BaseCardText.vue';
import BaseIcon from '@/components/BaseIcon.vue';
</script>

<template>
  <BaseCard
    class="new-card-challenge mx-auto"
    variant="outlined"
    color="amber-darken-2"
    :to="{ name: 'challenge-create' }"
  >
    <template #title>
      <p class="text-center">Criar novo desafio</p>
    </template>
    <BaseCardText class="d-flex justify-center align-center">
      <BaseIcon icon="mdi-plus-circle-outline" size="48" />
    </BaseCardText>
  </BaseCard>
</template>

<style scoped>
.new-card-challenge {
  text-align: left;
  background-color: var(--white-color);
  border-color: var(--primary-color-darken-2);
}
</style>
