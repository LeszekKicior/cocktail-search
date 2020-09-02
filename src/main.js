import Vue from 'vue'
import App from './App.vue'
import Vuebar from 'vuebar';

require('./assets/styles/style.scss')

Vue.config.productionTip = false
Vue.use(Vuebar);

new Vue({
  render: h => h(App),
}).$mount('#app')
