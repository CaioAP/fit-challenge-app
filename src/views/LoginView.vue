<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import BaseForm from '@/components/BaseForm.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import BaseRow from '@/components/BaseRow.vue';
import BaseCol from '@/components/BaseCol.vue';
import BaseInputText from '@/components/BaseInputText.vue';
import BaseInputPassword from '@/components/BaseInputPassword.vue';
import BaseButton from '@/components/BaseButton.vue';

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
  if (!valid.value) return;
  const result = await authStore.login(form);
  if (result) {
    router.push('/challenges');
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
            left-icon="mdi-at"
            required
          />
        </BaseCol>
        <BaseCol cols="12">
          <BaseInputPassword
            v-model="form.password"
            :rules="rules.password"
            label="Senha"
            left-icon="mdi-lock-outline"
            required
          />
        </BaseCol>
        <BaseCol cols="12">
          <BaseButton type="submit" color="amber" block flat>Entrar</BaseButton>
        </BaseCol>
        <BaseCol cols="12">
          <BaseButton
            :to="{ name: 'register' }"
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
