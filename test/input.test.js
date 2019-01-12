import Vue from 'vue'
import Input from '../src/packages/input/src/input'
// import { equal } from 'assert';
const expect = chai.expect

Vue.config.productionTip=false
Vue.config.devtools=false

describe('Input',()=>{
  const Constructor=Vue.extend(Input)
  it('存在',()=>{
    expect(Input).to.be.ok
    // console.log(Input)
  })
  describe('prop',()=>{
    it('接收value',()=>{
      const vm =new Constructor({
        propsData:{
          value: 'test input value123'
        }
      }).$mount()
      const inputElement=vm.$el.querySelector('input')
      // console.log(inputElement)
      expect(inputElement.value).to.equal('test input value123')
      vm.$destroy()
    })
    it('接收disabled',()=>{
      const vm =new Constructor({
        propsData:{
          disabled: true
        }
      }).$mount()
      const inputElement=vm.$el.querySelector('input')
      // console.log(inputElement)
      expect(inputElement.disabled).to.equal(true)
      vm.$destroy()
    })
    it('接收readonly',()=>{
      const vm =new Constructor({
        propsData:{
          readonly: true
        }
      }).$mount()
      const inputElement=vm.$el.querySelector('input')
      // console.log(inputElement)
      expect(inputElement.readOnly).to.equal(true)
      vm.$destroy()
    })
    // it('接收readonly',()=>{
    //   const vm =new Constructor({
    //     propsData:{
    //       readonly: true
    //     }
    //   }).$mount()
    //   const inputElement=vm.$el.querySelector('input')
    //   // console.log(inputElement)
    //   expect(inputElement.readOnly).to.equal(true)
    //   vm.$destroy()
    // })
  })
  describe('事件',()=>{
    it('支持change事件',(()=>{
      const vm=new Constructor({}).$mount()
      const callback=sinon.fake()
      vm.$on('change',callback)
      //触发change事件
      let event=new Event('change')
      let inputElement=vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      // console.log(event)
      expect(callback).to.have.been.calledWith(event)
    }))
    it('支持input事件',(()=>{
      const vm=new Constructor({}).$mount()
      const callback=sinon.fake()
      vm.$on('input',callback)
      //触发change事件
      let event=new Event('input')
      let inputElement=vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      // console.log(event)
      expect(callback).to.have.been.calledWith(event)
    }))
  })
  
})