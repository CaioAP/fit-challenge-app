<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import BaseForm from '@/components/BaseForm.vue';
import BaseRow from '@/components/BaseRow.vue';
import BaseCol from '@/components/BaseCol.vue';
import BaseInputText from '@/components/BaseInputText.vue';
import BaseInputNumber from '@/components/BaseInputNumber.vue';
import BaseTextarea from '@/components/BaseTextarea.vue';
import BaseButton from '@/components/BaseButton.vue';
import { useMask } from '@/composables/mask';

interface Form {
  name: string;
  description: string;
  goal: number;
  maxPerDay: number;
  startDate: string;
  finishDate: string;
}

interface Rules {
  name: ((v: string) => boolean | string)[];
  description: ((v: string) => boolean | string)[];
  startDate: ((v: string) => boolean | string)[];
  finishDate: ((v: string) => boolean | string)[];
}

const valid = ref(true);
const form = reactive<Form>({
  name: '',
  description: '',
  goal: 10,
  maxPerDay: 1,
  startDate: '',
  finishDate: ''
});
const rules = computed<Rules>(() => {
  return {
    name: [(v: string) => !!v || 'Nome é obrigatório'],
    description: [(v: string) => !!v || 'Descrição é obrigatório'],
    startDate: [(v: string) => !!v || 'Data inicial é obrigatório'],
    finishDate: [(v: string) => !!v || 'Data final é obrigatório']
  };
});

const submit = async () => {
  if (!valid.value) return;
  console.log('submit');
};
</script>

<template>
  <h2 class="text-center">Novo desafio</h2>
  <BaseForm v-model="valid" class="mt-8" @submit="submit">
    <BaseRow>
      <BaseCol cols="12">
        <BaseInputText
          v-model="form.name"
          :rules="rules.name"
          label="Nome"
          left-icon="mdi-account-outline"
          required
        />
      </BaseCol>
      <BaseCol cols="12">
        <BaseTextarea
          v-model="form.description"
          :rules="rules.description"
          label="Descrição"
          required
        />
      </BaseCol>
      <BaseCol cols="12" sm="6">
        <BaseInputNumber
          v-model="form.goal"
          label="Objetivo (dias)"
          left-icon="mdi-trophy-outline"
          :min="1"
          required
        />
      </BaseCol>
      <BaseCol cols="12" sm="6">
        <BaseInputNumber
          v-model="form.maxPerDay"
          label="Max. atvd. por dia"
          left-icon="mdi-weight-lifter"
          :min="1"
          :max="10"
          required
        />
      </BaseCol>
      <BaseCol cols="12">
        <BaseInputText
          v-model="form.startDate"
          :rules="rules.startDate"
          placeholder="dd/mm/aaaa"
          label="Data inicial"
          left-icon="mdi-calendar-outline"
          required
          @input="form.startDate = useMask('##/##/####', form.startDate)"
        />
      </BaseCol>
      <BaseCol cols="12">
        <BaseInputText
          v-model="form.finishDate"
          :rules="rules.finishDate"
          placeholder="dd/mm/aaaa"
          label="Data inicial"
          left-icon="mdi-calendar-outline"
          required
          @input="form.finishDate = useMask('##/##/####', form.finishDate)"
        />
      </BaseCol>
      <BaseCol cols="12">
        <BaseButton type="submit" color="amber" block flat> Salvar </BaseButton>
      </BaseCol>
      <BaseCol cols="12">
        <BaseButton
          variant="outlined"
          color="amber-darken-1"
          :to="{ name: 'challenges' }"
          block
          flat
        >
          Voltar
        </BaseButton>
      </BaseCol>
    </BaseRow>
  </BaseForm>
</template>

<style scoped></style>
