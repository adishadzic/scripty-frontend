import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Saved from '../views/Saved.vue';
import Chat from '../views/Chat.vue';
import Fakulteti from '../views/Fakulteti.vue';
import myProfile from '../views/myProfile.vue';
import Login from '../views/Auth/Login.vue';
import Register from '../views/Auth/Register.vue';
import { Auth } from '@/services';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/saved',
    name: 'Saved',
    component: Saved,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/fakulteti',
    name: 'fakulteti',
    component: Fakulteti,
  },
  {
    path: '/myProfile',
    name: 'myProfile',
    component: myProfile,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const authNotNeeded = ['/login', '/register'];
  const loginNeeded = !authNotNeeded.includes(to.path);
  const user = Auth.getUser();

  if (loginNeeded && !user) {
    next('/login');
    return;
  }

  next();
});

export default router;
