import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');
