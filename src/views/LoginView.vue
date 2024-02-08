<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import BaseForm from '@/components/BaseForm.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import BaseRow from '@/components/BaseRow.vue';
import BaseCol from '@/components/BaseCol.vue';
import BaseInputText from '@/components/BaseInputText.vue';
import BaseButton from '@/components/BaseButton.vue';
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

interface Form {
  email: string;
  password: string;
}

interface Rules {
  email: ((v: string) => boolean | string)[];
  password: ((v: string) => boolean | string)[];
}

const valid = ref(true);
const form = reactive<Form>({
  email: '',
  password: ''
});
const rules = computed<Rules>(() => {
  return {
    email: [
      (v: string) => !!v || 'E-mail é obrigatório',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
    ],
    password: [
      (v: string) => !!v || 'Senha é obrigatório',
      (v: string) =>
        (v && v.length >= 8) || 'Senha deve conter pelo menos 8 caracteres'
    ]
  };
});

const authStore = useAuthStore();

const submit = async () => {
  const result = await authStore.login(form);
  if (result) {
    router.push('/home');
  }
};
</script>

<template>
  <BaseForm v-model="valid" @submit="submit">
    <BaseContainer>
      <BaseRow>
        <BaseCol cols="12">
          <BaseInputText
            v-model="form.email"
            :rules="rules.email"
            type="email"
            label="E-mail"
            variant="outlined"
            hide-details="auto"
            prepend-inner-icon="mdi-at"
            required
          />
        </BaseCol>
        <BaseCol cols="12">
          <BaseInputText
            v-model="form.password"
            :rules="rules.password"
            type="password"
            label="Senha"
            variant="outlined"
            hide-details="auto"
            prepend-inner-icon="mdi-lock"
            required
          />
        </BaseCol>
        <BaseCol cols="12">
          <BaseButton type="submit" color="amber" block flat>Entrar</BaseButton>
        </BaseCol>
        <BaseCol cols="12">
          <BaseButton
            to="/register"
            variant="outlined"
            color="amber-darken-1"
            block
          >
            Cadastre-se
          </BaseButton>
        </BaseCol>
      </BaseRow>
    </BaseContainer>
  </BaseForm>
</template>

<style scoped></style>
