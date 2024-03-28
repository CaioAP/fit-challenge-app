<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BaseRow from '@/components/BaseRow.vue';
import BaseCol from '@/components/BaseCol.vue';
import BaseButton from '@/components/BaseButton.vue';
import CardChallenge from '@/components/challenge/CardChallenge.vue';
import { useChallengeStore } from '@/stores/challenge';
import type ChallengeCard from '@/interfaces/challengeCard';

const challengeStore = useChallengeStore();
const challenges = ref<ChallengeCard[]>([]);

const formatChallenges = (challengesList: ChallengeCard[]) => {
  return challengesList.map((challenge: ChallengeCard) => ({
    ...challenge,
    startDate: new Date(challenge.startDate),
    finishDate: new Date(challenge.finishDate)
  }));
};

onMounted(async () => {
  await challengeStore.getChallenges();
  challenges.value = formatChallenges(challengeStore.challenges);
});
</script>

<template>
  <h2 class="text-center">Meus desafios</h2>
  <BaseRow class="mt-8" align="center" justify="center">
    <BaseCol cols="12">
      <BaseButton
        color="amber"
        variant="flat"
        :to="{ name: 'challenge-create' }"
        block
      >
        Criar desafio
      </BaseButton>
    </BaseCol>
    <BaseCol v-for="challenge in challenges" :key="challenge.id" cols="12">
      <CardChallenge
        :id="challenge.id"
        :title="challenge.name"
        :description="challenge.description"
        :ranking="challenge.ranking"
        :participants="challenge.participants"
        :progress="challenge.activities"
        :goal="challenge.goal"
        :startDate="new Date(challenge.startDate)"
        :finishDate="new Date(challenge.finishDate)"
      />
    </BaseCol>
  </BaseRow>
</template>

<style scoped></style>
