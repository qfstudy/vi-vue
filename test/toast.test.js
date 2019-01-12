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
    // this.timeout(15000)
    it('接收autoClose',(done)=>{
      let div=document.createElement('div')
      document.body.appendChild(div)
      const vm =new Constructor({
        propsData:{
          autoClose: true,
        }
      }).$mount(div)
      setTimeout(()=>{
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      },1000)
    }) 
  })
})