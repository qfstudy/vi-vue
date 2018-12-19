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
    mounted(){
        this.$children.forEach((vm)=>{
            if(vm.$options.name==='ViTabsBar'){
                vm.$children.forEach((vmChild)=>{
                    if(vmChild.$options.name==='ViTabsItem'&&vmChild.name===this.selected){
                        this.eventBus.$emit('update:selected',this.selected,vmChild)
                    }
                })
            }

        })
    },
}
</script>

<style lang="scss" scoped>

</style>
