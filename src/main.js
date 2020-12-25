import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

import InputMask from 'vue-input-mask';
Vue.component('input-mask', InputMask);

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import moment from 'moment';
Vue.prototype.moment = moment;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
