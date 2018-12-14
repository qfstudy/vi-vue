<template>
    <div class="vi-toast-wrapper">
        <div  class="vi-toast">
            <slot></slot>
            <div v-if="message" class="vi-toast-message-wrapper">
                <span v-if="icon" class="vi-toast-icon-wrapper">
                    <!-- {{iconName}} -->
                    <vi-icon class="vi-toast-icon" :viIconName="icon.name" :viIconSize="icon.size"></vi-icon>
                </span>
               
                <span class="vi-toast-message">{{message}}</span>
                <span v-if="!icon" @click="close">{{closeButton.text}}</span>
            </div>
        </div>
        <!-- <button >test</button> -->
        
    </div>
</template>

<script>
import Icon from '../../icon/src/icon'
export default {
    name:'ViToast',
    props:{
        message:{
            type:String,
        },
        icon:{
            type:Object
        },
        closeButton:{
            type:Object,
        }
        // closeButton:{
        //     type: Object,
        // }
    },
    methods:{
        close(){
            console.log(this.$el)
            // this.$el.remove()
            this.$emit('close')
        }
    },
    computed:{
       
    }
    // updated(){
    //     console.log(this.message)
    // }
}
</script>

<style lang="scss" scoped>
    
    .vi-toast-message-wrapper{
        display: inline-block;
        position: absolute;
        // display: inline-flex;
        // flex-direction: column;
        align-items: center;
        vertical-align: middle;
        border: 1px solid red;
        margin-top: 0;

        .vi-toast-message{
            vertical-align: middle;
        }
        .vi-toast-icon-wrapper{
            .vi-toast-icon{
                vertical-align: middle;
            }
        }
    }
</style>
