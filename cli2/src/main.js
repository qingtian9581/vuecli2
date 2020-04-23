// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import "./util/rem"
import store from "./store"

Vue.config.productionTip = false

/* eslint-disable no-new */
console.log(process.env)
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})

