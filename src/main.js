import Vue from 'vue'
import App from './App.vue'
// import Vuetify from 'vuetify'
// import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import VueRouter from 'vue-router'
import routes from './routes'

// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

// Vue.use(Vuetify, {
//   iconfont: 'fa'
//  })

const router = new VueRouter({mode: 'history', routes});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')




