import { useAxios } from '@/composables/axios';
import { defineStore } from 'pinia';
import { useAlertStore } from './alert';
import { ref } from 'vue';
import { useAuth } from '@/composables/auth';
import type Challenge from '@/interfaces/challenge';
import { useMessage } from '@/composables/message';
import { useUtils } from '@/composables/utils';
import { DATE_FORMAT } from '@/enums/dateFormat';

const axios = useAxios();
const alertStore = useAlertStore();
const { user } = useAuth();
const { getErrorMessage, formatMessage } = useMessage();
const { parseDate } = useUtils();

export const useChallengeStore = defineStore('challenge', () => {
  const challenges = ref<Challenge[]>([]);
  const challenge = ref<Challenge | null>(null);

  const create = async (form: Challenge) => {
    if (user.value !== null && !user.value.id) {
      alertStore.showAlert('error', formatMessage('must be logged in'));
    }
    console.log(form.startDate, form.finishDate);
    const startDate = parseDate(
      form.startDate as string,
      DATE_FORMAT.DD_MM_YYYY
    );
    const finishDate = parseDate(
      form.finishDate as string,
      DATE_FORMAT.DD_MM_YYYY
    );
    try {
      const { data } = await axios.post('/challenges', {
        ...form,
        startDate,
        finishDate,
        personId: user.value?.id
      });
      challenges.value.push(data);
      alertStore.showAlert('success', formatMessage('registered'));
      return true;
    } catch (error) {
      const message = getErrorMessage(error);
      alertStore.showAlert('error', formatMessage(message));
      return false;
    }
  };

  return {
    challenges,
    challenge,
    create
  };
});
