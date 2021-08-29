import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueToast);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
