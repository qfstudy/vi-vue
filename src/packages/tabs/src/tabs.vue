<template>
    <div class="vi-tabs">
        {{selected}}
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
        // console.log(this.eventBus)
        // console.log(this.selected)
        this.$children.forEach((vm)=>{
            // console.log(vm.$options.name)
            if(vm.$options.name==='ViTabsBar'){
                vm.$children.forEach((vmChild)=>{
                    // console.log(vmChild.name)
                    if(vmChild.$options.name==='ViTabsItem'&&vmChild.name===this.selected){
                        // console.log(this.selected)
                        this.eventBus.$emit('update:selected',this.selected)
                    }
                })
            }

        })
    },
}
</script>

<style lang="scss" scoped>

</style>
