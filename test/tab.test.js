const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/packages/tabs/src/tabs'
import tabsItem from '../src/packages/tabs/src/tabs-item'
import tabsContent from '../src/packages/tabs/src/tabs-content'
import tabsBody from '../src/packages/tabs/src/tabs-body'
import tabsBar from '../src/packages/tabs/src/tabs-bar'
Vue.component('vi-tabs',Tabs)
Vue.component('vi-tabs-bar',tabsBar)
Vue.component('vi-tabs-body',tabsBody)
Vue.component('vi-tabs-content',tabsContent)
Vue.component('vi-tabs-item',tabsItem)

Vue.config.productionTip=false
Vue.config.devtools=false

describe('Tabs',()=>{
  const Constructor=Vue.extend(Tabs)
  it('Tabs存在',()=>{
    expect(Tabs).to.be.exist
  })
  it('子组件只能是vi-tabs-bar和vi-tabs-body',()=>{
    const div=document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML=`
      <vi-tabs selected="finance">
        <vi-tabs-bar></vi-tabs-bar>
      </vi-tabs-bar>
    `
    const vm=new Vue({
      el: div
    })
    vm.$destroy()
  })
  it('selected',(done)=>{
    const div=document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML=`
    <vi-tabs selected="finance">
      <vi-tabs-bar>
        <vi-tabs-item name="woman">标签1</vi-tabs-item>
        <vi-tabs-item name="finance">标签2</vi-tabs-item>
        <vi-tabs-item name="sport">标签3</vi-tabs-item>
      </vi-tabs-bar>
      <vi-tabs-body>
        <vi-tabs-content name="woman">标签1的内容</vi-tabs-content>
        <vi-tabs-content name="finance">标签2的内容</vi-tabs-content>
        <vi-tabs-content name="sport">标签3的内容</vi-tabs-content>
      </vi-tabs-body>
    </vi-tabs>
    `
    const vm=new Vue({
      el: div
    })
    Vue.nextTick(()=>{
      let x=vm.$el.querySelector('.vi-tabs-item:nth-child(2)')
      // console.log(x.classList)
      expect(x.classList.contains('vi-tabs-item-active')).to.be.true
      done()
      vm.$destroy()
    })
   
  })
})