import { useAxios } from '@/composables/axios';
import { defineStore } from 'pinia';
import { useAlertStore } from './alert';
import { ref } from 'vue';
import { useAuth } from '@/composables/auth';
import { useMessage } from '@/composables/message';
import { useUtils } from '@/composables/utils';
import { DATE_FORMAT } from '@/enums/dateFormat';
import type Challenge from '@/interfaces/challenge';
import type ChallengeCard from '@/interfaces/challengeCard';
import type ChallengeView from '@/interfaces/challengeView';

const axios = useAxios();
const alertStore = useAlertStore();
const { user } = useAuth();
const { getErrorMessage, formatMessage } = useMessage();
const { parseDate } = useUtils();

export const useChallengeStore = defineStore('challenge', () => {
  const challenges = ref<ChallengeCard[]>([]);

  const create = async (form: Challenge) => {
    if (user.value !== null && !user.value.id) {
      alertStore.showAlert('error', formatMessage('must be logged in'));
    }
    const startDate = parseDate(
      form.startDate as string,
      DATE_FORMAT.DD_MM_YYYY
    );
    const finishDate = parseDate(
      form.finishDate as string,
      DATE_FORMAT.DD_MM_YYYY
    );
    try {
      await axios.post('/challenges', {
        ...form,
        startDate,
        finishDate,
        personId: user.value?.id
      });
      alertStore.showAlert('success', formatMessage('registered'));
      return true;
    } catch (error) {
      const message = getErrorMessage(error);
      alertStore.showAlert('error', formatMessage(message));
      return false;
    }
  };

  const getChallenges = async () => {
    try {
      const { data } = await axios.get('/challenges');
      challenges.value = data;
      return true;
    } catch (error) {
      const message = getErrorMessage(error);
      alertStore.showAlert('error', formatMessage(message));
      return false;
    }
  };

  const get = async (id: number): Promise<ChallengeView | null> => {
    try {
      const { data } = await axios.get(`/challenges/${id}`);
      return data;
    } catch (error) {
      const message = getErrorMessage(error);
      alertStore.showAlert('error', formatMessage(message));
      return null;
    }
  };

  return {
    challenges,
    create,
    getChallenges,
    get
  };
});
