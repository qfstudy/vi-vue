import Vue from 'vue'
import Toast from '../src/packages/toast/src/toast'
const expect = chai.expect

Vue.config.productionTip=false
Vue.config.devtools=false

describe('Toast',()=>{
  const Constructor=Vue.extend(Toast)
  it('Toast存在',()=>{
    expect(Toast).to.be.ok
  })
  describe('prop',()=>{
    it('接收autoClose',(done)=>{
      const Constructor=Vue.extend(Toast)
      let div=document.createElement('div')
      document.body.appendChild(div)
      const vm =new Constructor({
        propsData:{
          autoClose: true,
        }
      }).$mount(div)
      vm.$on('close',()=>{
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
      // setTimeout(()=>{
      //   expect(document.body.contains(vm.$el)).to.eq(false)
      //   done()
      // },1000)
    }) 
    it('接收closeButton',()=>{
      const callback=sinon.fake()
      let div=document.createElement('div')
      document.body.appendChild(div)
      const vm =new Constructor({
        propsData:{
          closeButton:{
            text: '关闭',
            callback,
          }
        }
      }).$mount(div)
      let clothButton=vm.$el.querySelector('.vi-toast-close-button')
      expect(clothButton.textContent.trim()).to.eq('关闭')
    }) 
  })
})