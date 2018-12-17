<template>
    <div class="vi-toast-wrapper">
        <div class="vi-toast-slot">
            <slot></slot>
        </div>
        <div class="vi-toast" :class="positionClass" ref="toast">
            <div v-if="message" class="vi-toast-message-wrapper">
                <span class="vi-toast-message">{{message}}</span>
                <div class="vi-toast-line" ref="line" v-if="!autoClose"></div>
                <span v-if="icon&&!autoClose" class="vi-toast-icon-wrapper" >
                    <vi-icon class="vi-toast-icon" :viIconName="icon.name" :viIconSize="icon.size" @click="closeToast"></vi-icon>
                </span>
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
                    this.autoClose=false                  
                }
                return value>=0
            }
        },
        position:{
            type: String,
            default: 'top',
            validator(value){
                return ['top','middle','bottom'].indexOf(value)>-1
            }
        }
    },
    methods:{
        closeToast(){
            // console.log(this.$el.lastChild)
            this.$el.lastChild.remove()
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
                if(!this.autoClose){
                    this.$refs.line.style.height=`${this.$refs.toast.getBoundingClientRect().height}px`
                }
            })
        },
    },
    computed:{
        // setIconClass(){
        //     return{'vi-toast-message-wrapper-icon':this.icon}
        // },
        positionClass(){
            return {[`vi-toast-${this.position}`]:this.position}
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
        // background: red;
        display: inline-block;
        .vi-toast{
            font-family: Arial,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,sans-serif;
            display: inline-block;
            color: #fff;
            font-size: 14px;
            .vi-toast-message-wrapper{
                display: inline-flex;
                align-items: center;
                vertical-align: middle;
                background: #000;
                opacity: 0.6;
                border-radius: 3px;
                // &.vi-toast-message-wrapper-icon{
                //     flex-direction: column;
                // }
                .vi-toast-icon-wrapper{                   
                    padding: 0.2em 0.4em;
                    .vi-toast-icon{
                        vertical-align: middle;
                        fill: #fff;                       
                    }
                }
                .vi-toast-message{
                    padding: 0 0.6em;
                }
                .vi-toast-line{
                    display: inline-block;
                    // margin: 0 0.3em;
                    width: 1.7px;
                    background: #fff;
                }
                .vi-toast-close-button{
                    padding: 0.42em 0.3em;
                }
            }
        }
        .vi-toast.vi-toast-top{
            position: fixed;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
        .vi-toast.vi-toast-middle{
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translateX(-50%);
        }
        .vi-toast.vi-toast-bottom{
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
</style>
