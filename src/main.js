import Vue from 'vue'
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'


import App from './App.vue'
import router from './router'
import store from './store'
import Split from './components/split/Split.vue'
import loading from './common/img/26073947_j9gz.gif'

import './mock'
import './filter'

Vue.component(Button.name, Button)
Vue.component('Split', Split)
Vue.use(VueLazyload,{
  loading
})

new Vue({
  el:'#app',
  render:h => h(App),
  router,
  store
})
