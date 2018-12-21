<template>
    <div class="vi-popover" @click="onClick" ref="popover">
        <div ref="contentWrapper" class="vi-popover-content" v-if="visible">
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
        positionContent(){
            document.body.appendChild(this.$refs.contentWrapper)
            let{width,height,left,top}=this.$refs.triggerWrapper.getBoundingClientRect()
            // console.log(width,height,left,top)
            this.$refs.contentWrapper.style.left=left+window.scrollX+'px'
            this.$refs.contentWrapper.style.top=top+window.scrollY+'px'
        },
        onClickDocument(e){
            if (this.$refs.popover &&
                (this.$refs.popover===e.target || this.$refs.popover.contains(e.target))
            ){return}
            this.close()  
        },
        listenToDocument(){
            document.addEventListener('click',this.onClickDocument)
        },
        open(){
            this.visible=true
            this.$nextTick(()=>{
                this.positionContent()
                this.listenToDocument()
            })     
        },
        close(){
            this.visible=false
            document.removeEventListener('click',this.onClickDocument)                            
        },
        onClick(event){
            if(this.$refs.triggerWrapper.contains(event.target)){
                if(this.visible===true){
                    this.close()
                }else{
                    this.open()  
                }
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
        border: 1px solid teal;
    }
    .vi-popover-content{
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
        transform: translateY(-100%)
    }
    
</style>
