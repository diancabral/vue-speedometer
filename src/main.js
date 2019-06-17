import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

require('material-colors/dist/colors.var.css');

new Vue({
  render: h => h(App),
}).$mount('#app')
