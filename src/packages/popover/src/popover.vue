<template>
    <div class="vi-popover" @click.stop="xxx">
        <div ref="contentWrapper" class="vi-popover-content"
        v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" class="vi-popover-button">
            <slot></slot>
        </span>
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
            if(this.visible===true){
                this.$nextTick(()=>{
                    document.body.appendChild(this.$refs.contentWrapper)
                    let{width,height,left,top}=this.$refs.triggerWrapper.getBoundingClientRect()
                    // console.log(width,height,left,top)
                    this.$refs.contentWrapper.style.left=left+'px'
                    this.$refs.contentWrapper.style.top=top+'px'
                    let eventHandle=()=>{
                        this.visible=false
                        // console.log('document隐藏')
                        document.removeEventListener('click',eventHandle)                        
                    }
                    document.addEventListener('click',eventHandle)
                })                 
            }else{
                console.log('vm隐藏')
            }
        }
    },
    mounted(){
        // console.log('hi')
        // console.log(this.$refs.triggerWrapper)
    }
}
</script>

<style lang="scss" scoped>
    .vi-popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .vi-popover-content{
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
        transform: translateY(-100%)
    }
    
</style>
