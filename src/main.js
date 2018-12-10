import Vue from 'vue'
Vue.config.productionTip = false
import './packages/common/svg'

import Button from './packages/button/src/button'
import Icon from './packages/icon/src/icon'
import ButtonGroup from './packages/button/src/button-group'
import Input from './packages/input/src/input'
import Row from './packages/grid/src/row'
import Col from './packages/grid/src/col'

Vue.component('vi-button',Button)
Vue.component('vi-icon',Icon)
Vue.component('vi-button-group',ButtonGroup) 
Vue.component('vi-input',Input)
Vue.component('vi-row',Row)
Vue.component('vi-col',Col)

new Vue({
  el: '#app',
  data:{
    input1:''
  },
  methods: {
    aa(value){
      console.log(52)
      console.log(value)
    }
  },
  updated () {
    // console.log(this.input1)
  }
})
