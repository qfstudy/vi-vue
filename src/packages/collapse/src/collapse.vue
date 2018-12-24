<template>
    <div class="vi-collapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'ViCollapse',
    data () {
        return {
            eventBus: new Vue()
        }
    },
    props:{
        single: {
            type: Boolean,
            default: false
        },
        selected: {
            type: String,
        }
    },
    provide(){
        return{
            eventBus:this.eventBus
        }
    },
    mounted(){
        this.eventBus.$emit('update:selected',this.selected)
        this.eventBus.$on('update:selected',(name)=>{
            this.$emit('update:selected',name)
        })
        
    }
}
</script>

<style lang="scss" scoped>
    .vi-collapse{
        border: 1px solid #ddd;
        border-radius: 4px;
        border-bottom: 0;
    }
</style>
