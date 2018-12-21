<template>
    <div class="vi-tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name:'ViTabs',
    data(){
        return{
            eventBus: new Vue()
        }
    },
    props:{
        selected:{
            type: String,
            required: true
        }
    },
    provide:function(){
        return {eventBus:this.eventBus}
    },
    methods:{
        checkChildren(){
            if(this.$children.length===0){
                console && console.warn && console.warn('tabs的子组件应该是tabs-bar和tabs-body，但是你没有写子组件')
            }
        },
        selectTab(){
            this.$children.forEach((vm)=>{
                if(vm.$options.name==='ViTabsBar'){
                    vm.$children.forEach((vmChild)=>{
                        if(vmChild.$options.name==='ViTabsItem'&&vmChild.name===this.selected){
                            this.eventBus.$emit('update:selected',this.selected,vmChild)
                        }
                    })
                }

            })
        }
    },
    mounted(){
        this.checkChildren()
        this.selectTab()
    },
}
</script>

<style lang="scss" scoped>

</style>
