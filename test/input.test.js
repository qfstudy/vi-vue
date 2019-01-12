import Vue from 'vue'
import Input from '../src/packages/input/src/input'
import { equal } from 'assert';
const expect = chai.expect

Vue.config.productionTip=false
Vue.config.devtools=false

describe('Button',()=>{
  const Constructor=Vue.extend(Input)
  it('存在',()=>{
    expect(Input).to.be.ok
    console.log(Input)
  })
  
})