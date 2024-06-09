import Vue from 'vue'
import App from './App.vue'
import button from './components/button.vue'
import dialogue from './components/dialogue.vue'
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false
Vue.component(button.name,button)
Vue.component(dialogue.name,dialogue)
new Vue({
  render: h => h(App),
}).$mount('#app')
