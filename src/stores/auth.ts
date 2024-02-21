import { defineStore } from 'pinia';
import { useAlertStore } from './alert';
import { useAxios } from '@/composables/axios';
import { useMessage } from '@/composables/message';

const axios = useAxios();
const alertStore = useAlertStore();
const { getErrorMessage, formatMessage } = useMessage();

export const useAuthStore = defineStore('auth', () => {
  const login = async (form: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const { data } = await axios.post('/login', form, {
        withCredentials: true
      });
      alertStore.showAlert('success', formatMessage(data.message));
      return true;
    } catch (error) {
      const message = getErrorMessage(error);
      alertStore.showAlert('error', formatMessage(message));
      return false;
    }
  };

  const register = async (form: {
    name: string;
    email: string;
    phone: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const { data } = await axios.post('/register', form, {
        withCredentials: true
      });
      alertStore.showAlert('success', formatMessage(data.message));
      return true;
    } catch (error) {
      const message = getErrorMessage(error);
      alertStore.showAlert('error', formatMessage(message));
      return false;
    }
  };

  return { login, register };
});
