import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import '@/font-awesome';
import EventBus from '@/plugins/event-bus';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.component('fa', FontAwesomeIcon);
Vue.component('fal', FontAwesomeLayers);
Vue.component('falt', FontAwesomeLayersText);
Vue.use(EventBus);

new Vue({
  router,
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered')),
}).$mount('#app');
