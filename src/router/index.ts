import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '@/views/IndexView.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useAuth } from '@/composables/auth';
const { isAuth } = useAuth();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
      meta: { title: 'Home', layout: DefaultLayout }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: { title: 'Login', layout: AuthLayout, guest: true }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue'),
      meta: { title: 'Register', layout: AuthLayout, guest: true }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: 'Home', layout: DefaultLayout, requiresAuth: true }
    }
  ]
});

router.beforeEach(async (to, _, next) => {
  const authenticated = await isAuth();
  if (to.meta.requiresAuth && !authenticated) {
    return next({ name: 'login' });
  }
  if (to.meta.guest && authenticated) {
    return next({ name: 'home' });
  }
  next();
});

export default router;
