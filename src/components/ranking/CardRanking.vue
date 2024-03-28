<script setup lang="ts">
import BaseCard from '../BaseCard.vue';
import BaseCardText from '../BaseCardText.vue';
import BaseRow from '../BaseRow.vue';
import BaseCol from '../BaseCol.vue';
import BaseIcon from '../BaseIcon.vue';
import ItemRanking from './ItemRanking.vue';
import type RankingItem from '@/interfaces/rankingItem';

defineProps({
  ranking: {
    type: Array<RankingItem>,
    required: true
  }
});
</script>

<template>
  <BaseCard class="card-ranking mx-auto" variant="outlined">
    <template #prepend>
      <BaseIcon icon="mdi-trophy-outline" color="amber-darken-2" />
    </template>
    <template #title>Ranking</template>

    <BaseCardText class="card-ranking-body mt-2">
      <BaseRow v-if="$vuetify.display.smAndUp">
        <BaseCol cols="4"> Usuário </BaseCol>
        <BaseCol cols="2" class="text-center text-no-wrap overflow-hidden">
          Posição
        </BaseCol>
        <BaseCol cols="2" class="text-center text-no-wrap overflow-hidden">
          Concluído
        </BaseCol>
        <BaseCol cols="2" class="text-center text-no-wrap overflow-hidden">
          Restante
        </BaseCol>
        <BaseCol cols="2" class="text-center text-no-wrap overflow-hidden">
          %
        </BaseCol>
      </BaseRow>
      <ItemRanking
        v-for="item in ranking"
        :key="item.id"
        :name="item.user.name"
        :position="item.position"
        :completed="item.completed"
        :remaining="item.remaining"
      />
    </BaseCardText>
  </BaseCard>
</template>

<style scoped>
.card-ranking {
  text-align: left;
  background-color: var(--white-color);
  border-color: var(--primary-color-darken-2);
}
.card-ranking-body {
  max-height: 300px;
  overflow: auto;
}
</style>
