<script setup lang="ts">
import { reactive } from 'vue';
import BaseRow from '@/components/BaseRow.vue';
import BaseCol from '@/components/BaseCol.vue';
import CardChallenge from '@/components/challenge/CardChallenge.vue';
import NewChallengeCard from '@/components/challenge/NewChallengeCard.vue';

const challenges = reactive([
  {
    id: 3,
    title: 'Desafio 3',
    description:
      'Este é um desafio de teste para buscar um corpo fitness e vida saudável. Quem ficar em primeiro ganha um premio de 10 mil reais!',
    position: 1,
    participants: 24,
    progress: 0,
    goal: 84,
    startDate: new Date('2024-03-01T00:00:00.000Z'),
    finishDate: new Date('2024-05-31T23:59:59.999Z')
  },
  {
    id: 2,
    title: 'Desafio 2',
    description:
      'Este é um desafio de teste para buscar um corpo fitness e vida saudável. Quem ficar em primeiro ganha um premio de 10 mil reais!',
    position: 4,
    participants: 11,
    progress: 17,
    goal: 72,
    startDate: new Date('2024-02-01T00:00:00.000Z'),
    finishDate: new Date('2024-04-30T23:59:59.999Z')
  },
  {
    id: 1,
    title: 'Desafio 1',
    description:
      'Este é um desafio de teste para buscar um corpo fitness e vida saudável. Quem ficar em primeiro ganha um premio de 10 mil reais!',
    position: 3,
    participants: 8,
    progress: 17,
    goal: 21,
    startDate: new Date('2024-01-01T00:00:00.000Z'),
    finishDate: new Date('2024-01-31T23:59:59.999Z')
  }
]);
</script>

<template>
  <h2 class="text-center">Meus desafios</h2>
  <BaseRow class="mt-8" align="center" justify="center">
    <BaseCol cols="12">
      <NewChallengeCard />
    </BaseCol>
    <BaseCol v-for="challenge in challenges" :key="challenge.id" cols="12">
      <CardChallenge
        :id="challenge.id"
        :title="challenge.title"
        :description="challenge.description"
        :position="challenge.position"
        :participants="challenge.participants"
        :progress="challenge.progress"
        :goal="challenge.goal"
        :startDate="challenge.startDate"
        :finishDate="challenge.finishDate"
      />
    </BaseCol>
  </BaseRow>
</template>

<style scoped></style>
