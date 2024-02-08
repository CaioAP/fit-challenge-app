<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';
import { useMask } from '@/composables/mask';
import BaseForm from '@/components/BaseForm.vue';
import BaseContainer from '@/components/BaseContainer.vue';
import BaseRow from '@/components/BaseRow.vue';
import BaseCol from '@/components/BaseCol.vue';
import BaseInputText from '@/components/BaseInputText.vue';
import BaseButton from '@/components/BaseButton.vue';

interface Form {
  name: string;
  phone: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface Rules {
  name: ((v: string) => boolean | string)[];
  phone: ((v: string) => boolean | string)[];
  email: ((v: string) => boolean | string)[];
  password: ((v: string) => boolean | string)[];
  passwordConfirmation: ((v: string) => boolean | string)[];
}

const valid = ref(true);
const form = reactive<Form>({
  email: '',
  name: '',
  phone: '',
  password: '',
  passwordConfirmation: ''
});
const rules = computed<Rules>(() => {
  return {
    name: [(v: string) => !!v || 'Nome é obrigatório'],
    phone: [
      (v: string) => !!v || 'Telefone é obrigatório',
      (v: string) => (v && v.length === 15) || 'Telefone deve ser válido'
    ],
    email: [
      (v: string) => !!v || 'E-mail é obrigatório',
      (v: string) => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
    ],
    password: [
      (v: string) => !!v || 'Senha é obrigatório',
      (v: string) =>
        (v && v.length >= 8) || 'Senha deve conter pelo menos 8 caracteres'
    ],
    passwordConfirmation: [
      (v: string) => !!v || 'Confirmação de senha é obrigatório',
      (v: string) => v === form.password || 'As senhas devem ser iguais'
    ]
  };
});

const authStore = useAuthStore();

const submit = async () => {
  if (!valid.value) return;
  form.phone = form.phone.replace(/\D/g, '');
  const result = await authStore.register(form);
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
            v-model="form.name"
            :rules="rules.name"
            label="Nome"
            left-icon="mdi-account"
            required
          />
        </BaseCol>
        <BaseCol cols="12">
          <BaseInputText
            v-model="form.phone"
            :rules="rules.phone"
            label="Telefone"
            left-icon="mdi-cellphone-basic"
            placeholder="(##) #####-####"
            required
            @input="form.phone = useMask('(##) #####-####', form.phone)"
          />
        </BaseCol>
        <BaseCol cols="12">
          <BaseInputText
            v-model="form.email"
            :rules="rules.email"
            type="email"
            label="E-mail"
            left-icon="mdi-at"
            placeholder="exemplo@email.com"
            required
          />
        </BaseCol>
        <BaseCol cols="12">
          <BaseInputText
            v-model="form.password"
            :rules="rules.password"
            type="password"
            label="Senha"
            left-icon="mdi-lock"
            required
          />
        </BaseCol>
        <BaseCol cols="12">
          <BaseInputText
            v-model="form.passwordConfirmation"
            :rules="rules.passwordConfirmation"
            type="password"
            label="Confirmar Senha"
            left-icon="mdi-lock"
            required
          />
        </BaseCol>
        <BaseCol cols="12">
          <BaseButton type="submit" color="amber" block flat>
            Criar conta
          </BaseButton>
        </BaseCol>
        <BaseCol cols="12">
          <BaseButton
            to="/login"
            variant="outlined"
            color="amber-darken-1"
            block
            flat
          >
            Voltar
          </BaseButton>
        </BaseCol>
      </BaseRow>
    </BaseContainer>
  </BaseForm>
</template>

<style scoped></style>
@/directives/mask
