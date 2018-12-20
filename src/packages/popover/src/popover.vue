<template>
    <div class="vi-popover" @click.stop="xxx">
        <div v-if="visible" class="vi-popover-content" @click.stop>
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
            this.visible=!this.visible
            // console.log('切换visible')
            if(this.visible===true){
                this.$nextTick(()=>{
                    // console.log('新增document click监听')
                    let eventHandle=()=>{
                        // console.log('点击Body就关闭popover')
                        this.visible=false
                        console.log('document隐藏')
                        document.removeEventListener('click',eventHandle)                        
                    }
                    document.addEventListener('click',eventHandle)
                })                 
            }else{
                console.log('vm隐藏')
            }
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
