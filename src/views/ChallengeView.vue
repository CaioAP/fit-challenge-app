<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
// import { useChallengeStore } from '../stores/challenge';
import type ChallengeView from '@/interfaces/challengeView';
import BaseRow from '@/components/BaseRow.vue';
import BaseCol from '@/components/BaseCol.vue';
import BaseIcon from '@/components/BaseIcon.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseLoading from '@/components/BaseLoading.vue';
import CardChallenge from '@/components/challenge/CardChallenge.vue';
import CardRanking from '@/components/ranking/CardRanking.vue';

const route = useRoute();
// const challengeStore = useChallengeStore();

const challenge = ref<ChallengeView | null>(null);
const loading = ref<boolean>(true);

onMounted(() => {
  // challenge.value = await challengeStore.get(Number(route.params.id));
  const ranking1 = {
    id: 1,
    position: 1,
    completed: 5,
    remaining: 5,
    updatedAt: new Date(),
    user: {
      id: 1,
      name: 'Usuario Teste'
    }
  };
  const ranking2 = {
    id: 2,
    position: 2,
    completed: 4,
    remaining: 6,
    updatedAt: new Date(),
    user: {
      id: 2,
      name: 'Usuario Teste 2'
    }
  };
  const ranking3 = {
    id: 3,
    position: 3,
    completed: 2,
    remaining: 8,
    updatedAt: new Date(),
    user: {
      id: 3,
      name: 'Usuario Teste 3'
    }
  };
  challenge.value = {
    id: 1,
    name: 'Challenge 1',
    description: 'Challenge 1 description',
    goal: 10,
    maxPerDay: 1,
    startDate: new Date('2024-01-01'),
    finishDate: new Date('2024-01-31'),
    rankingItem: ranking1,
    ranking: {
      items: [ranking1, ranking2, ranking3]
    },
    activities: [1, 2, 3, 4],
    participants: []
  };
  setTimeout(() => {
    loading.value = false;
  }, 1000);

  console.log(challenge.value);
});
</script>

<template>
  <BaseLoading v-if="loading" :size="50" color="amber-darken-2" indeterminate />
  <div v-else-if="challenge" class="challenge">
    <CardChallenge
      :id="challenge.id"
      :title="challenge.name"
      :description="challenge.description"
      :ranking="challenge.rankingItem.position"
      :participants="challenge.participants.length"
      :progress="challenge.activities.length"
      :goal="challenge.goal"
      :startDate="new Date(challenge.startDate)"
      :finishDate="new Date(challenge.finishDate)"
      no-link
    />
    <CardRanking class="mt-4" :ranking="challenge.ranking.items" />
  </div>
</template>

<style scoped></style>
