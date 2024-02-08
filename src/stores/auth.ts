import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios, { AxiosError } from 'axios';
import { useAlertStore } from './alert';

const alertStore = useAlertStore();

export const useAuthStore = defineStore('auth', () => {
  const id = ref(0);
  const name = ref('');

  const getUser = computed(() => {
    return {
      id: id.value,
      name: name.value
    };
  });

  const login = async (form: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const { data } = await axios.post('/login', form);
      id.value = data.id;
      name.value = data.name;
      alertStore.showAlert('success', formatMessage(data.message));
      return true;
    } catch (error) {
      const message = getErrorMessage(error);
      console.log(message);
      alertStore.showAlert('error', formatMessage(message));
      return false;
    }
  };

  const getErrorMessage = (error: unknown | Error | AxiosError) => {
    let message = 'something went wrong';
    console.dir(error);
    if (error instanceof AxiosError && 'response' in error)
      message = error.response?.data;
    console.log(message);
    return message.trim();
  };

  const formatMessage = (message: string) => {
    const messages: { [key: string]: string } = {
      'something went wrong': 'Algo deu errado, tente novamente mais tarde',
      'email not found': 'E-mail ou senha inválidos',
      'password does not match': 'E-mail ou senha inválidos',
      'email already exists': 'E-mail já existente',
      'phone already exists': 'Telefone já existente',
      'logged in': 'Logado com sucesso',
      'logged out': 'Deslogado com sucesso',
      registered: 'Cadastrado com sucesso'
    };
    if (!(message in messages))
      return 'Algo deu errado, tente novamente mais tarde';
    return messages[message];
  };

  return { id, name, getUser, login };
});
