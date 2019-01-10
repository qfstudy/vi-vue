import Vue from 'vue'
import Button from '../src/packages/button/src/button'
import { equal } from 'assert';
const expect = chai.expect

Vue.config.productionTip=false
Vue.config.devtools=false

describe('Button',()=>{
  const Constructor=Vue.extend(Button)
  it('存在',()=>{
    expect(Button).to.be.ok
    // console.log(Button)
  })
  it('可以设置icon',()=>{
    const vm =new Constructor({
      propsData:{
        iconName: 'setting'
      }
    }).$mount()
    const useElement=vm.$el.querySelector('use')
    // console.log(useElement)
    expect(useElement.getAttribute('xlink:href')).to.equal('#vi-setting')
    vm.$destroy()
  })
  it('可以设置iconSize',()=>{
    const vm =new Constructor({
      propsData:{
        iconName: 'setting',
        iconSize: 'large'
      }
    }).$mount()
    // console.log(vm)
    const svgElement=vm.$el.querySelector('svg')
    // console.log(svgElement.getAttribute('class'))
    expect(svgElement.getAttribute('class')).to.include('vi-icon-large')
    vm.$destroy()
  })
  it('可以设置icon为圆形',()=>{
    const Constructor=Vue.extend(Button)
    const div=document.createElement('div')
    document.body.appendChild(div)
    const vm =new Constructor({
      propsData:{
        type:'primary',
        iconName: 'setting',
        iconSize: 'large'
      }
    }).$mount(div)
    console.log(vm)
    afterEach(()=>{
      const circle=vm.$el.querySelector('.vi-button')
      console.log(circle)
      console.log(3)
      // done()
    })
    // expect(getComputedStyle(circle).borderRadius).to.eq('50%')
    vm.$destroy()
  })
  it('icon默认的order是1',()=>{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const vm =new Constructor({
      propsData:{
        iconName: 'setting'
      }
    }).$mount(div)
    const icon =vm.$el.querySelector('.vi-button-icon')
    // console.log(getComputedStyle(icon).order)
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  })
  it('设置iconPosition可以改变order',()=>{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const vm =new Constructor({
      propsData:{
        iconName: 'setting',
        iconPosition: 'right'
      }
    }).$mount(div)
    const icon =vm.$el.querySelector('.vi-button-icon')
    // console.log(getComputedStyle(icon).order)
    expect(getComputedStyle(icon).order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })
  it('点击button触发click事件',()=>{
    const vm=new Constructor({
      propsData:{
        iconName: 'setting'
      }
    }).$mount()
    const callback=sinon.fake()
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).to.have.been.called
  })
  it('可以设置button为禁止点击',()=>{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const vm=new Constructor({
      propsData:{
        disabled: "disabled"
      }
    }).$mount()
    const button =vm.$el.querySelector('.vi-button')
    // console.log(button)
  })
})