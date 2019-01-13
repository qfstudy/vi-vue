import Vue from 'vue'
import Popover from '../src/packages/popover/src/popover'
const expect = chai.expect

Vue.config.productionTip=false
Vue.config.devtools=false

describe('Popover',()=>{
  const Constructor=Vue.extend(Popover)
  it('Popover存在',()=>{
    expect(Popover).to.be.ok
  })
  it('可以设置position',(done)=>{
    Vue.component('vi-popover',Popover)
    const div=document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML=`
      <vi-popover position="bottom" ref="a"> 
        <template slot="content">
          <div>popover内容</div>
        </template>
        <button>点击</button>
      </vi-popover>
    `
    const vm=new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()     
    vm.$nextTick(()=>{
      const {contentWrapper}=vm.$refs.a.$refs
      expect(contentWrapper.classList.contains('vi-position-bottom')).to.be.true
      done()
    })
  })
  xit('可以设置trigger',(done)=>{
    Vue.component('vi-popover',Popover)
    const div=document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML=`
      <vi-popover position="bottom" ref="a"> 
        <template slot="content">
          <div>popover内容</div>
        </template>
        <button>点击</button>
      </vi-popover>
    `
    const vm=new Vue({
      el: div
    })
    let event=new Event('mouseenter')
    vm.$el.dispatchEvent(event)
    vm.$nextTick(()=>{
      const {contentWrapper}=vm.$refs.a.$refs
      console.log(contentWrapper)
      expect(contentWrapper).to.be.exist
      done()
    })
  })
})