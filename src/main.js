import '@babel/polyfill'
import 'mutationobserver-shim'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/bootstrap-vue'
import App from './App'
import Welcome from './components/Welcome'
import AppMain from './components/AppMain'
import Loading from './components/Loading'
import Amendities from './components/Amendities'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/welcome', component: Welcome},
  { path: '/loading', component: Loading},
  { path: '/amendities', component: Amendities},
  { path: '/', component: AppMain}
];

const router = new VueRouter({
  routes: routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
