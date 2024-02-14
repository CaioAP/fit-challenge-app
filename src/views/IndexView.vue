<script setup lang="ts">
import { computed } from 'vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseImage from '@/components/BaseImage.vue';
import HomePageImage from '@/assets/images/home-page-dumbbell-cut.png';

const whatYouCanDoList = computed(() => [
  'Criar desafios e convidar os amigos para participarem',
  'Definir um período de tempo de atividade',
  'Definir uma meta a ser batida',
  'Acompanhar sua determinação comparada aos outros participantes em um ranking'
  // 'Atribuir prêmios ou penalizações para quem completar ou não a meta'
]);
</script>

<template>
  <section class="d-flex flex-column justify-center ga-8">
    <h2 class="text-center">
      Quer ter uma vida fitness e saudável, mas precisa de
      <span class="text-amber enphasis">MOTIVAÇÃO</span>?
    </h2>
    <BaseImage
      class="bg-image"
      width="300"
      aspect-ratio="16/9"
      :src="HomePageImage"
    />
    <h3 class="text-center">
      <span class="text-amber enphasis">Fit Challenge</span> permite que você
      crie desafios e convide seus amigos para disputarem quem consegue ser mais
      ativo.
    </h3>
    <BaseButton
      class="btn-join my-4"
      to="/login"
      color="amber"
      size="large"
      flat
    >
      Entre agora
    </BaseButton>
    <h3 class="text-center">Veja o que você pode fazer:</h3>
    <ul class="list text-center">
      <li v-for="(item, i) in whatYouCanDoList" :key="i" class="mt-4">
        {{ item }}
      </li>
    </ul>
  </section>
</template>

<style scoped>
.bg-image {
  margin: auto;
  z-index: -1;
}

.btn-join {
  width: fit-content;
  margin: 0 auto;
}

.enphasis {
  font-family: var(--font-family-bold);
}

.list {
  border: 1px solid var(--primary-color);
  border-radius: 0.5rem;
  padding: 12px 20px;
  list-style-type: none;
}

.list li:not(:first-of-type) {
  padding-top: 16px;
  border-top: 1px solid var(--primary-color);
}
</style>
