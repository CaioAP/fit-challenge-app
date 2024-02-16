import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useAuth } from '@/composables/auth';
const { isAuth } = useAuth();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Home' }
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
      path: '/challenges',
      name: 'challenges',
      component: () => import('@/views/ChallengesView.vue'),
      meta: { title: 'Challenges', layout: DefaultLayout, requiresAuth: true }
    },
    {
      path: '/challenge/create',
      name: 'challenge-create',
      component: () => import('@/views/ChallengeCreateView.vue'),
      meta: {
        title: 'New Challenge',
        layout: DefaultLayout,
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach(async (to, _, next) => {
  const authenticated = await isAuth();
  if (to.meta.requiresAuth && !authenticated) {
    return next({ name: 'login' });
  }
  if (to.meta.guest && authenticated) {
    return next({ name: 'challenges' });
  }
  next();
});

export default router;
