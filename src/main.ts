import '@/assets/css/main.css';
import '@mdi/font/css/materialdesignicons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { pt } from 'vuetify/locale';

const vuetify = createVuetify({
  components,
  directives,
  locale: {
    locale: 'pt',
    fallback: 'en',
    messages: { pt }
  }
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount('#app');
