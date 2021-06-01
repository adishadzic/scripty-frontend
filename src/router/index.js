import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Saved from '../views/Saved.vue';
import Chat from '../views/Chat.vue';
import Fakulteti from '../views/Fakulteti.vue';
import myProfile from '../views/myProfile.vue';

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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
