<template>
    <div class="vi-popover" @click="xxx">
        <div v-if="visible" class="vi-popover-content">
            <slot name="content"></slot>
        </div>
        <div>
            <slot></slot>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'ViPopover',
    data(){
        return {visible:false}
    },
    methods:{
        xxx(){
            console.log(1)
            this.visible=!this.visible
        }
    }
}
</script>

<style lang="scss" scoped>
    .vi-popover{
        display: inline-flex;
        vertical-align: top;
        position: relative;
        .vi-popover-content{
            position: absolute;
            bottom: 100%;
            border: 1px solid red;
            box-shadow: 0 0 3px rgba(0,0,0,0.5);
        }
    }
    
</style>
