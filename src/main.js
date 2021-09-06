import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuelidate from 'vuelidate';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { BootstrapVue } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueToast);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
