import Vue from 'vue'
import Row from '../src/packages/grid/src/row'
import Col from '../src/packages/grid/src/col'
const expect = chai.expect

Vue.config.productionTip=false
Vue.config.devtools=false

describe('grid',()=>{
  it('存在',()=>{
    expect(Row).to.be.ok
    expect(Col).to.be.ok
  })
  it('接收gutter属性',(done)=>{
    Vue.component('vi-row',Row)
    Vue.component('vi-col',Col)
    const div=document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML=`
      <vi-row :gutter="20">
        <vi-col :span="12"></vi-col>
        <vi-col :span="12"></vi-col>
      </vi-row>
    `
    const vm=new Vue({
      el: div
    })
    setTimeout(()=>{
      const row=vm.$el.querySelector('.vi-row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols=vm.$el.querySelectorAll('.vi-col')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      // console.log(vm.$el.outerHTML)
      done()
      vm.$el.remove()
      vm.$destroy()
    })
    
  })
  it('接收justify属性',()=>{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const Constructor=Vue.extend(Row)
    const vm=new Constructor({
      propsData:{
        justify: 'end'
      }
    }).$mount(div)
    const element=vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
    vm.$el.remove()
    vm.$destroy()
  }) 
})