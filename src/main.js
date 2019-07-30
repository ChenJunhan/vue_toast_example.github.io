import Vue from 'vue'
import App from './App.vue'
import { ToastPlugin } from './plugins/Toast'

Vue.use(ToastPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
