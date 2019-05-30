import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Moving from './views/Moving.vue';
import Freight from './views/Freight.vue';
import Flown from './views/Flown.vue';
import Packing from './views/Packing.vue';
import Shared from './views/Shared.vue';
import Car from './views/Car.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  linkActiveClass: 'selected',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cotizar-servicio-de-mudanzas',
      name: 'moving',
      component: Moving,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/cotizar-flete',
      name: 'freight',
      component: Freight,
    },
    {
      path: '/cotizar-volado',
      name: 'flown',
      component: Flown,
    },
    {
      path: '/cotizar-empacado',
      name: 'packing',
      component: Packing,
    },
    {
      path: '/cotizar-mudanza-compartida',
      name: 'shared',
      component: Shared,
    },
    {
      path: '/cotizar-traslado-de-auto',
      name: 'car',
      component: Car,
    },
  ],
});
