<template>
    <div class="vi-toast-wrapper">
        <div  class="vi-toast">
            <div v-if="message" class="vi-toast-message-wrapper" :class="setIconClass">
                <span v-if="icon" class="vi-toast-icon-wrapper">
                    <!-- //&&autoClose -->
                    <vi-icon class="vi-toast-icon" :viIconName="icon.name" :viIconSize="icon.size"></vi-icon>
                </span>
                <span class="vi-toast-message">{{message}}</span>
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
            setTimeout(()=>{
                this.closeToast()
            },this.duration*1000)
        }
    },
    computed:{
        setIconClass(){
            return{'vi-toast-message-wrapper-icon':this.icon}
        }
    },
    mounted () {
        if(this.autoClose){
            this.execAutoClose()
        }
    }
}
</script>

<style lang="scss" scoped>
    .vi-toast-wrapper{
        display: inline-block;
        border: 1px solid black;
        .vi-toast{
            border: 1px solid yellow;
            .vi-toast-message-wrapper{
                display: inline-flex;
                align-items: center;
                vertical-align: middle;
                &.vi-toast-message-wrapper-icon{
                    flex-direction: column;
                }
                .vi-toast-icon-wrapper{
                    // vertical-align: middle;
                    // display: inline-block;
                    border: 1px solid red;
                    .vi-toast-icon{
                        vertical-align: middle;
                        border: 1px solid green;
                    }
                }
                .vi-toast-message{
                    border: 1px solid darkcyan;
                    // vertical-align: middle;
                }
                .vi-toast-close-button{
                    border: 1px solid blue;
                    // vertical-align: middle;
                }
            }
        }
    }
    // .vi-toast-message-wrapper{
    //     display: inline-block;
    //     position: absolute;
    //     align-items: center;
    //     vertical-align: middle;
    //     border: 1px solid red;
    //     margin-top: 0;

    //     .vi-toast-message{
    //         vertical-align: middle;
    //     }
    //     .vi-toast-icon-wrapper{
    //         .vi-toast-icon{
    //             vertical-align: middle;
    //         }
    //     }
    // }
</style>
