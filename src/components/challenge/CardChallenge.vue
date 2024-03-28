<script setup lang="ts">
import { ref, computed } from 'vue';
import BaseRow from '@/components/BaseRow.vue';
import BaseCol from '@/components/BaseCol.vue';
import BaseCard from '@/components/BaseCard.vue';
import BaseCardText from '@/components/BaseCardText.vue';
import BaseTooltip from '@/components/BaseTooltip.vue';
import BaseIcon from '@/components/BaseIcon.vue';
import BaseProgressLinear from '@/components/BaseProgressLinear.vue';

const props = defineProps({
  id: Number,
  title: String,
  description: String,
  ranking: Number,
  participants: Number,
  progress: {
    type: Number,
    default: 0
  },
  goal: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  finishDate: {
    type: Date,
    required: true
  },
  noLink: Boolean
});

const isInProgress = computed(() => {
  const now = new Date();
  return now >= props.startDate && now <= props.finishDate;
});

const hasNotStarted = computed(() => {
  const now = new Date();
  return now < props.startDate;
});

const clockIcons = [
  'mdi-clock-time-three-outline',
  'mdi-clock-time-six-outline',
  'mdi-clock-time-nine-outline',
  'mdi-clock-time-twelve-outline'
];
const currentClockIconIndex = ref(0);
const clockIcon = computed(() => {
  return clockIcons[currentClockIconIndex.value];
});

if (isInProgress.value) {
  setInterval(() => {
    const nextClockIconIndex = currentClockIconIndex.value + 1;
    if (nextClockIconIndex >= clockIcons.length) {
      currentClockIconIndex.value = 0;
    } else {
      currentClockIconIndex.value = nextClockIconIndex;
    }
  }, 1000);
}
</script>

<template>
  <BaseCard class="card-challenge mx-auto" variant="outlined">
    <template #prepend>
      <BaseIcon icon="mdi-weight-lifter" color="amber-darken-2" />
    </template>
    <template #title>{{ title }}</template>
    <template #append>
      <BaseTooltip v-if="hasNotStarted" text="Desafio não iniciado">
        <template #default="props">
          <BaseIcon
            v-bind="props"
            icon="mdi-calendar-outline"
            color="amber-darken-2"
          />
        </template>
      </BaseTooltip>
      <BaseTooltip v-else-if="isInProgress" text="Desafio em andamento">
        <template #default="props">
          <BaseIcon v-bind="props" :icon="clockIcon" color="amber-darken-2" />
        </template>
      </BaseTooltip>
      <BaseTooltip v-else text="Desafio concluído">
        <template #default="props">
          <BaseIcon
            v-bind="props"
            icon="mdi-check-decagram-outline"
            color="amber-darken-2"
          />
        </template>
      </BaseTooltip>
      <router-link v-if="!noLink" :to="{ name: 'challenge', params: { id } }">
        <BaseTooltip text="Abrir desafio">
          <template #default="props">
            <BaseIcon
              v-bind="props"
              icon="mdi-open-in-new"
              color="amber-darken-2"
            />
          </template>
        </BaseTooltip>
      </router-link>
    </template>

    <BaseCardText class="d-flex flex-wrap align-center ga-4 mt-2">
      <BaseRow>
        <BaseCol cols="12">
          <p>
            {{ description }}
          </p>
        </BaseCol>
        <BaseCol cols="12" sm="6">
          <BaseIcon icon="mdi-trophy-outline" class="mr-1" />
          Posição: {{ ranking }}°
        </BaseCol>
        <BaseCol cols="12" sm="6">
          <BaseIcon icon="mdi-account-group" class="mr-1" />
          Participantes: {{ participants }}
        </BaseCol>
        <BaseCol cols="12" sm="6">
          <BaseIcon icon="mdi-clock-outline" class="mr-1" />
          Data de início:
          {{ startDate.toLocaleDateString('pt-BR') }}
        </BaseCol>
        <BaseCol cols="12" sm="6">
          <BaseIcon icon="mdi-clock-outline" class="mr-1" />
          Data final:
          {{ finishDate.toLocaleDateString('pt-BR') }}
        </BaseCol>
        <BaseCol cols="12">
          Atividades:
          <BaseProgressLinear
            class="mt-2"
            :value="progress"
            :max-value="goal"
          />
        </BaseCol>
      </BaseRow>
    </BaseCardText>
  </BaseCard>
</template>

<style scoped>
.card-challenge {
  text-align: left;
  background-color: var(--white-color);
  border-color: var(--primary-color-darken-2);
}
</style>
