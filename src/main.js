import Vue from 'vue'
Vue.config.productionTip = false
import './packages/common/svg'

import Button from './packages/button/src/button'
import Icon from './packages/icon/src/icon'
import ButtonGroup from './packages/button/src/button-group'
import Input from './packages/input/src/input'
import Row from './packages/grid/src/row'
import Col from './packages/grid/src/col'
import Footer from './packages/layout/src/footer'
import Main from './packages/layout/src/main'
import Header from './packages/layout/src/header'
import Container from './packages/layout/src/container'
import Aside from './packages/layout/src/aside'
import Toast from './packages/toast/src/toast'
import ToastPlugin from './packages/toast/src/ToastPlugin.js'
Vue.use(ToastPlugin)


Vue.component('vi-button',Button)
Vue.component('vi-icon',Icon)
Vue.component('vi-button-group',ButtonGroup) 
Vue.component('vi-input',Input)
Vue.component('vi-row',Row)
Vue.component('vi-col',Col)
Vue.component('vi-footer',Footer)
Vue.component('vi-main',Main)
Vue.component('vi-header',Header)
Vue.component('vi-container',Container)
Vue.component('vi-aside',Aside)
Vue.component('vi-toast',Toast)

new Vue({
  el: '#app',
  data:{
    input1:''
  },
  methods: {
    // aa(value){
    //   console.log(52)
    //   console.log(value)
    // },
    showToast(){
      // console.log(this)
      this.$toast({
        message:'提示信息',
        icon:{'name':'error','size':"small"}
      })
    },
    showToast1(){
      // console.log(this)
      this.$toast({
        message:'提示信息',
        // icon:{'name':'error','size':"small"}
        closeButton:{
          text:'关闭'
        }
      })
    }
  },
  mounted () {
    // console.log(ToastPlugin)
  }
})
