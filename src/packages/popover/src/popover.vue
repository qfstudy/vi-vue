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
            // if (this.$refs.popover &&
            //     (this.$refs.popover===e.target || this.$refs.popover.contains(e.target))
            // ){return}
            if (this.$refs.contentWrapper &&
                (this.$refs.contentWrapper===e.target || this.$refs.contentWrapper.contains(e.target))
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
    $boder-color: #333;
    .vi-popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        .vi-popover-button{
            display: inline-block;
        }
    }
    
    .vi-popover-content{
        position: absolute;
        border: 1px solid $boder-color;
        border-radius: 4px;
        // box-shadow: 0 0 3px rgba(0,0,0,0.5);
        filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
        background: white;
        transform: translateY(-100%);
        margin-top: -10px;
        padding: .3em 0.6em;
        max-width: 16em; //有待解决自动检测高度
        word-break: break-all;
        &::before, &::after{
            content: '';
            display: block;
            border: 10px solid transparent;   
            width: 0;
            height: 0;        
            position: absolute;            
            left: 10px;
        }
        &::before{
            border-top-color: black;
            top: 100%;
        }
        &::after{
            border-top-color: white;
            top: calc(100% - 1px);
        }
    }
    
</style>
