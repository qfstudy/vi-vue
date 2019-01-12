import Vue from 'vue'
// import Row from '../src/packages/grid/src/row'
import Col from '../src/packages/grid/src/col'
const expect = chai.expect

Vue.config.productionTip=false
Vue.config.devtools=false

describe('grid-col',()=>{
  it('col存在',()=>{
    expect(Col).to.be.ok
  })
  
  it('接收span属性',()=>{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(Col)
    const vm=new Constructor({
      propsData:{
        span: 1
      }
    }).$mount(div)
    const element=vm.$el
    expect(vm.$el.classList.contains('vi-col-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  }) 
  it('接收offset属性',()=>{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(Col)
    const vm=new Constructor({
      propsData:{
        offset: 1
      }
    }).$mount(div)
    const element=vm.$el
    expect(vm.$el.classList.contains('vi-col-offset-1')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  }) 
})