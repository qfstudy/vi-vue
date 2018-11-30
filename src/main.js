import Vue from 'vue'
Vue.config.productionTip = false

import Button from './packages/button/src/button'
import Icon from './packages/icon/src/icon'

Vue.component('vi-button',Button)
Vue.component('vi-icon',Icon)

new Vue({
  el: '#app'
})
