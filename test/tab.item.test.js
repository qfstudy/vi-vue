const expect = chai.expect
import Vue from 'vue'
// import Tabs from '../src/packages/tabs/src/tabs'
import tabsItem from '../src/packages/tabs/src/tabs-item'
// import tabsContent from '../src/packages/tabs/src/tabs-content'
// import tabsBody from '../src/packages/tabs/src/tabs-body'
// import tabsBar from '../src/packages/tabs/src/tabs-bar'
// Vue.component('vi-tabs',Tabs)
// Vue.component('vi-tabs-bar',tabsBar)
// Vue.component('vi-tabs-body',tabsBody)
// Vue.component('vi-tabs-content',tabsContent)
Vue.component('vi-tabs-item',tabsItem)

Vue.config.productionTip=false
Vue.config.devtools=false

describe('tabsItem',()=>{
  const Constructor=Vue.extend(tabsItem)
  it('tabsItem',()=>{
    expect(tabsItem).to.be.exist
  })
  it('接收name属性',()=>{
    const vm=new Constructor({
      propsData:{
        name: 'xxx',
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })
  it('接收position属性',()=>{
    const vm=new Constructor({
      propsData:{
        position: 'top',
      }
    }).$mount()
    // expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })
})