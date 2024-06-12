import Vue from 'vue'
import App from './App.vue'
import button from './components/button.vue'
import dialogue from './components/dialogue.vue'
import input from './components/input.vue'
import miaoSwitch from './components/switch.vue'
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false
Vue.component(button.name,button)
Vue.component(dialogue.name,dialogue)
Vue.component(input.name,input)
Vue.component(miaoSwitch.name,miaoSwitch)
new Vue({
  render: h => h(App),
}).$mount('#app')
