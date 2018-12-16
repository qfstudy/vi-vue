<template>
    <div class="vi-toast-wrapper">
        <div  class="vi-toast" ref="toast">
            <div v-if="message" class="vi-toast-message-wrapper" :class="setIconClass">
                <span v-if="icon" class="vi-toast-icon-wrapper">
                    <!-- //&&autoClose -->
                    <vi-icon class="vi-toast-icon" :viIconName="icon.name" :viIconSize="icon.size"></vi-icon>
                </span>
                <span class="vi-toast-message">{{message}}</span>
                <div class="vi-toast-line" ref="line" v-if="!icon&&!autoClose"></div>
                <span class="vi-toast-close-button" v-if="!icon&&!autoClose" @click="closeToast">{{closeButton.text}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from '../../icon/src/icon'
export default {
    name:'ViToast',
    props:{
        message:{
            type: String,
        },
        icon:{
            type: Object
        },
        closeButton:{
            type:Object,
            default(){
                return{
                    text:'关闭'
                }
            }
        },
        autoClose:{
            type: Boolean,
            default: true
        },
        duration:{
            type: Number,
            default: 3,
            validator(value){
                if(value<0){
                    console.log('duration的值必须是Number类型并且不能小于0')
                    this.autoClose=false                  
                }
                return value>=0
            }
        },
        
    },
    methods:{
        closeToast(){
            this.$el.remove()
            this.$emit('close')
            this.$destroy()
        },
        execAutoClose(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.closeToast()
                }, this.duration*1000)
            }
        },
        lineStyle(){
            this.$nextTick(()=>{
                // console.log(this.$refs.toast.getBoundingClientRect())
                if(!this.icon&&!this.autoClose){
                    this.$refs.line.style.height=`${this.$refs.toast.getBoundingClientRect().height}px`
                }
            })
        }
    },
    computed:{
        setIconClass(){
            return{'vi-toast-message-wrapper-icon':this.icon}
        }
    },
    mounted () {
        this.lineStyle()
        this.execAutoClose()
    }
}
</script>

<style lang="scss" scoped>
    .vi-toast-wrapper{
        font-family:  Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
        display: inline-block;
        // border: 1px solid black;
        color: #fff;
        font-size: 14px;
        position: fixed;
        top: 0;
        // bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        // top: 50%;
        .vi-toast{
            // position: fixed;
            // border: 1px solid yellow;
            background: #000;
            opacity: 0.6;
            // background:rgba(1, 2, 5, 0.6);
            border-radius: 3px;
            min-height: 10px;
            .vi-toast-message-wrapper{
                // position: absolute;
                display: inline-flex;
                align-items: center;
                vertical-align: middle;
                &.vi-toast-message-wrapper-icon{
                    flex-direction: column;
                }
                .vi-toast-icon-wrapper{
                    // border: 1px solid red;
                    padding: 0.2em 0.6em;
                    .vi-toast-icon{
                        vertical-align: middle;
                        fill: #fff;
                        // border: 1px solid green;
                    }
                }
                .vi-toast-message{
                    // border: 1px solid darkcyan;
                    padding: 0.2em 0.2em;
                }
                .vi-toast-line{
                    width: 1px;
                    background: red;
                }
                .vi-toast-close-button{
                    // border: 1px solid blue;
                    padding: 0.2em 0.2em;
                }
            }
        }
    }
</style>
