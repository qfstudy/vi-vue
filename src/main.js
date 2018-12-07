import Vue from 'vue'
Vue.config.productionTip = false
import './packages/common/svg'

import Button from './packages/button/src/button'
import Icon from './packages/icon/src/icon'
import viButtonGroup from './packages/button/src/button-group'
Vue.component('vi-button',Button)
Vue.component('vi-icon',Icon)
Vue.component('vi-button-group',viButtonGroup) 
new Vue({
  el: '#app',
  methods: {
    aa(value){
      console.log(value)
    }
  }
})
