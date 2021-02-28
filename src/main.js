import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)
Vue.use(Vuex)

const state = { lang: ( typeof(localStorage.lang) !== "undefined" ) ? localStorage.lang : 'en' };

const getters = { lang: state => state.lang };
const store = new Vuex.Store({ state, getters });


new Vue({
  render: h => h(App),
  store
}).$mount('#app')
