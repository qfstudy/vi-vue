import Vue from 'vue'
import Toast from '../src/packages/toast/src/toast'
const expect = chai.expect

Vue.config.productionTip=false
Vue.config.devtools=false

describe('Toast',()=>{
  const Constructor=Vue.extend(Toast)
  it('Toast存在',()=>{
    expect(Toast).to.be.exist
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
      const vm =new Constructor({
        propsData:{
          autoClose: false,
          closeButton:{
            text: '关闭',
            callback: callback
          }
        }
      }).$mount()
      let closeButton=vm.$el.querySelector('.vi-toast-close-button')
      expect(closeButton.textContent.trim()).to.eq('关闭')
      Vue.nextTick(()=>{
        closeButton.click()
        expect(callback).to.have.been.called
      })
    }) 
    it('接收position',()=>{
      const vm =new Constructor({
        propsData:{
          position: 'bottom'
        }
      }).$mount()
      let toast=vm.$el.querySelector('.vi-toast')
      expect(toast.classList.contains('vi-toast-bottom')).to.eq(true)
    }) 
  })
})