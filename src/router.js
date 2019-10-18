import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/*',
      component: Home
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/terms-of-use',
      name: 'terms-of-use',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/TermsOfUse.vue'),
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Privacy.vue'),
    },
  ],
});
