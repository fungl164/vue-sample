import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import en from "element-ui/lib/locale/lang/en";
import App from './components/App'

Vue.use(ElementUI, { locale: en })

new Vue({
  el: '#app',
  render: h => h(App)
})
