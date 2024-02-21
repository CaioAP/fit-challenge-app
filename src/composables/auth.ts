import { ref } from 'vue';
import { useAxios } from './axios';
import type User from '@/interfaces/user';

const axios = useAxios();
const user = ref<User | null>(null);

export function useAuth() {
  const isAuth = async () => {
    if (user.value) return true;

    try {
      const { data } = await axios.get('/me');
      user.value = data;
      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    user,
    isAuth
  };
}
