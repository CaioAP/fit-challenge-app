import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

type AlertType = 'success' | 'warning' | 'error' | 'info';

export const useAlertStore = defineStore('alert', () => {
  const show = ref(false);
  const type = ref<AlertType>('success');
  const message = ref('');

  const getAlert = computed(() => ({
    show: show.value,
    type: type.value,
    message: message.value
  }));

  function showAlert(t: AlertType, m: string) {
    show.value = true;
    type.value = t;
    message.value = m;

    setTimeout(hideAlert, 3000);
  }
  function hideAlert() {
    show.value = false;
    type.value = 'success';
    message.value = '';
  }

  return { show, type, message, getAlert, showAlert, hideAlert };
});
